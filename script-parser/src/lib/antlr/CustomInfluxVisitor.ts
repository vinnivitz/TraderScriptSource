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
  RequestParamsContext
} from './InfluxParser';
import { ANTLRItem, ANTLRParserItem } from '../../models';
import * as base64 from 'base-64';

export class CustomInfluxVisitor
  extends AbstractParseTreeVisitor<any>
  implements InfluxVisitor<any>
{
  constructor() {
    super();
  }

  protected defaultResult() {
    return null;
  }

  visitAuth(ctx: AuthContext): ANTLRItem {
    return ['auth', this.visitChildren(ctx)];
  }

  visitConfig(ctx: ConfigContext): ANTLRItem {
    return ['config', this.visitChildren(ctx)];
  }

  visitDefinition(ctx: DefinitionContext): ANTLRItem {
    return ['def', this.visitChildren(ctx)];
  }

  visitCondition(ctx: ConditionContext): ANTLRItem {
    const map: Map<string, string> = new Map();
    map.set('indicator1', ctx.LITERALS()[0].text);
    map.set('operator', ctx.OPERATOR().text);
    map.set('indicator2', ctx.LITERALS()[1].text);
    map.set('endpoint', ctx.LITERALS()[2].text);
    return ['condition', map];
  }

  visitOrganization(ctx: OrganizationContext): Map<string, string> {
    return new Map().set('influxorganization', ctx.LITERALS().text);
  }

  visitUsername(ctx: UsernameContext): Map<string, string> {
    return new Map().set('username', ctx.LITERALS().text);
  }

  visitPassword(ctx: PasswordContext): Map<string, string> {
    return new Map().set('password', ctx.LITERALS().text);
  }

  visitName(ctx: NameContext): Map<string, string> {
    return new Map().set('name', ctx.LITERALS().text);
  }

  visitUrl(ctx: UrlContext): Map<string, string> {
    return new Map().set(
      'url',
      process.env.INFLUX_DOCKER === 'true'
        ? ctx
            .URL_STRING()
            .text.replace('localhost', 'host.docker.internal')
            .replace('127.0.0.1', 'host.docker.internal')
        : ctx.URL_STRING().text
    );
  }

  visitDescription(ctx: DescriptionContext): Map<string, string> {
    return new Map().set('description', ctx.LITERALS().join(' '));
  }

  visitPricekey(ctx: PricekeyContext): Map<string, string> {
    return new Map().set('pricekey', ctx.LITERALS().join('.'));
  }

  visitRequestType(ctx: RequestMethodContext): Map<string, string> {
    return new Map().set('requesttype', ctx.REQUESTMETHOD().text);
  }

  visitRequestHeaders(ctx: RequestHeadersContext): Map<string, string> {
    const literals = ctx.LITERALS();
    const headers = {};
    literals.forEach((literal, index) =>
      index % 2 === 0
        ? headers[literal.text]
        : (headers[literals[index - 1].text] = literal.text)
    );
    return new Map().set('requestheaders', JSON.stringify(headers));
  }

  visitRequestBasicAuth(ctx: RequestBasicAuthContext): Map<string, string> {
    const result = base64.encode(`${ctx.LITERALS()[0]}:${ctx.LITERALS()[1]}`);
    return new Map().set(
      'requestbasicauth',
      JSON.stringify({ Authentication: `Basic ${result}` })
    );
  }

  visitRequestParams(ctx: RequestParamsContext): Map<string, string> {
    const literals = ctx.LITERALS();
    const params = {};
    literals.forEach((literal, index) =>
      index % 2 === 0
        ? params[literal.text]
        : (params[literals[index - 1].text] = literal.text)
    );
    return new Map().set('requestparams', JSON.stringify(params));
  }

  visitPeriod(ctx: PeriodContext): Map<string, string> {
    return new Map().set('period', ctx.LITERALS().text);
  }

  visitDefType(ctx: DefTypeContext): Map<string, string> {
    return new Map().set('type', ctx.text);
  }

  visitEma1(ctx: Ema1Context): Map<string, string> {
    return new Map().set('ema1', ctx.LITERALS().text);
  }

  visitEma2(ctx: Ema2Context): Map<string, string> {
    return new Map().set('ema2', ctx.LITERALS().text);
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
