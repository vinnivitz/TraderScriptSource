import { InfluxVisitor } from './InfluxVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {
  AuthContext,
  ConditionContext,
  ConfigContext,
  DefinitionContext,
  DefTypeContext,
  DescriptionContext,
  Ema1Context,
  Ema2Context,
  NameContext,
  PasswordContext,
  PeriodContext,
  PricekeyContext,
  RequestBasicAuthContext,
  RequestHeadersContext,
  UrlContext,
  UsernameContext,
  OrganizationContext,
  RequestMethodContext,
  RequestParamsContext,
  IntervalContext
} from './InfluxParser';
import {
  ANTLRFlags,
  ANTLRItem,
  ANTLRParserItem,
  COMMAND,
  FLAG
} from '../../models';
import * as base64 from 'base-64';

export class CustomInfluxVisitor
  extends AbstractParseTreeVisitor<any>
  implements InfluxVisitor<ANTLRItem | ANTLRFlags>
{
  constructor() {
    super();
  }

  protected defaultResult() {
    return null;
  }

  visitAuth(ctx: AuthContext): ANTLRItem {
    return [COMMAND.AUTH, this.visitChildren(ctx)];
  }

  visitConfig(ctx: ConfigContext): ANTLRItem {
    return [COMMAND.CONFIG, this.visitChildren(ctx)];
  }

  visitDefinition(ctx: DefinitionContext): ANTLRItem {
    return [COMMAND.DEFINITION, this.visitChildren(ctx)];
  }

  visitCondition(ctx: ConditionContext): ANTLRItem {
    const map: ANTLRFlags = new Map()
      .set(FLAG.INDICATOR1, ctx.LITERALS()[0].text)
      .set(FLAG.LOGICAL_OPERATOR, ctx.OPERATOR().text)
      .set(FLAG.INDICATOR2, ctx.LITERALS()[1].text)
      .set(FLAG.ENDPOINT, ctx.LITERALS()[2].text);
    return [COMMAND.CONDITION, map];
  }

  visitOrganization(ctx: OrganizationContext): ANTLRFlags {
    return new Map().set(FLAG.INFLUX_ORGANIZATION, ctx.LITERALS().text);
  }

  visitUsername(ctx: UsernameContext): ANTLRFlags {
    return new Map().set(FLAG.USERNAME, ctx.LITERALS().text);
  }

  visitPassword(ctx: PasswordContext): ANTLRFlags {
    return new Map().set(FLAG.PASSWORD, ctx.LITERALS().text);
  }

  visitName(ctx: NameContext): ANTLRFlags {
    return new Map().set(FLAG.NAME, ctx.LITERALS().text);
  }

  visitUrl(ctx: UrlContext): ANTLRFlags {
    return new Map().set(
      FLAG.URL,
      process.env.INFLUX_DOCKER === 'true'
        ? ctx
            .URL_STRING()
            .text.replace('localhost', 'host.docker.internal')
            .replace('127.0.0.1', 'host.docker.internal')
        : ctx.URL_STRING().text
    );
  }

  visitDescription(ctx: DescriptionContext): ANTLRFlags {
    return new Map().set(FLAG.DESCRIPTION, ctx.TEXT().text);
  }

  visitPricekey(ctx: PricekeyContext): ANTLRFlags {
    return new Map().set(FLAG.PRICE_KEY, ctx.LITERALS().join('.'));
  }

  visitRequestType(ctx: RequestMethodContext): ANTLRFlags {
    return new Map().set(FLAG.REQUEST_METHOD, ctx.REQUESTMETHOD().text);
  }

  visitRequestHeaders(ctx: RequestHeadersContext): ANTLRFlags {
    const keys = ctx.LITERALS();
    const values = ctx.TEXT();
    const headers = {};
    keys.forEach(
      (key, index) => (headers[key.text] = values[index].text.replace(/"/g, ''))
    );
    return new Map().set(FLAG.REQUEST_HEADERS, JSON.stringify(headers));
  }

  visitRequestBasicAuth(ctx: RequestBasicAuthContext): ANTLRFlags {
    const result = base64.encode(`${ctx.LITERALS()[0]}:${ctx.LITERALS()[1]}`);
    return new Map().set(
      FLAG.REQUEST_BASIC_AUTH,
      JSON.stringify({ Authentication: `Basic ${result}` })
    );
  }

  visitRequestParams(ctx: RequestParamsContext): ANTLRFlags {
    const keys = ctx.LITERALS();
    const values = ctx.TEXT();
    const params = {};
    keys.forEach(
      (key, index) => (params[key.text] = values[index].text.replace(/"/g, ''))
    );
    return new Map().set(FLAG.REQUEST_PARAMS, JSON.stringify(params));
  }

  visitPeriod(ctx: PeriodContext): ANTLRFlags {
    return new Map().set(FLAG.PERIOD, ctx.LITERALS().text);
  }

  visitDefType(ctx: DefTypeContext): ANTLRFlags {
    return new Map().set(FLAG.TYPE, ctx.text);
  }

  visitEma1(ctx: Ema1Context): ANTLRFlags {
    return new Map().set(FLAG.EMA1, ctx.LITERALS().text);
  }

  visitEma2(ctx: Ema2Context): ANTLRFlags {
    return new Map().set(FLAG.EMA2, ctx.LITERALS().text);
  }

  visitInterval(ctx: IntervalContext): ANTLRFlags {
    return new Map().set(FLAG.INTERVAL, `${ctx.LITERALS().text}s`);
  }

  aggregateResult(
    aggregate: ANTLRParserItem,
    nextResult: any
  ): ANTLRParserItem {
    if (!aggregate) {
      return nextResult;
    } else if (!nextResult) {
      return aggregate;
    } else {
      if (aggregate instanceof Map && nextResult instanceof Map) {
        return new Map([...aggregate, ...nextResult]);
      } else if (this.isANTLRItem(aggregate) && nextResult instanceof Map) {
        return [aggregate[0], new Map([...aggregate[1], ...nextResult])];
      } else if (this.isANTLRItem(aggregate) && this.isANTLRItem(nextResult)) {
        return [aggregate, nextResult];
      } else if (this.isANTLRTree(aggregate) && this.isANTLRItem(nextResult)) {
        (aggregate as ANTLRParserItem[]).push(nextResult);
        return aggregate;
      }
    }
  }

  /**
   * Determines wether the current aggregate value is of type `ANTLRItem`.
   *
   * @param {ANTLRParserItem} item current aggregate item
   * @return {*}  {boolean}
   * @memberof CustomInfluxVisitor
   */
  isANTLRItem(item: ANTLRParserItem): boolean {
    return (
      Array.isArray(item) &&
      item.length === 2 &&
      typeof item[0] === 'string' &&
      item[1] instanceof Map
    );
  }

  /**
   * Determines wehter the current aggreagate is of type `ANTLRTree`.
   *
   * @param {ANTLRParserItem} item
   * @return {*}  {boolean}
   * @memberof CustomInfluxVisitor
   */
  isANTLRTree(item: ANTLRParserItem): boolean {
    return Array.isArray(item) && item.every((x) => this.isANTLRItem(x));
  }
}
