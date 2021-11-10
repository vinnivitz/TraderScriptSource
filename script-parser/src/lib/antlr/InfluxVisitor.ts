// Generated from ./src/lib/antlr/Influx.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { InfluxContext } from "./InfluxParser";
import { LineContext } from "./InfluxParser";
import { CommandContext } from "./InfluxParser";
import { AuthContext } from "./InfluxParser";
import { ConfigContext } from "./InfluxParser";
import { DefinitionContext } from "./InfluxParser";
import { ConditionContext } from "./InfluxParser";
import { DefTypeContext } from "./InfluxParser";
import { OrganizationContext } from "./InfluxParser";
import { UsernameContext } from "./InfluxParser";
import { PasswordContext } from "./InfluxParser";
import { NameContext } from "./InfluxParser";
import { PeriodContext } from "./InfluxParser";
import { UrlContext } from "./InfluxParser";
import { Ema1Context } from "./InfluxParser";
import { Ema2Context } from "./InfluxParser";
import { IntervalContext } from "./InfluxParser";
import { DescriptionContext } from "./InfluxParser";
import { PricekeyContext } from "./InfluxParser";
import { RequestMethodContext } from "./InfluxParser";
import { RequestHeadersContext } from "./InfluxParser";
import { RequestBasicAuthContext } from "./InfluxParser";
import { RequestParamsContext } from "./InfluxParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `InfluxParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface InfluxVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `InfluxParser.influx`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInflux?: (ctx: InfluxContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.auth`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuth?: (ctx: AuthContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.config`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfig?: (ctx: ConfigContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.defType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefType?: (ctx: DefTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.organization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrganization?: (ctx: OrganizationContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.username`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsername?: (ctx: UsernameContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.password`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassword?: (ctx: PasswordContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.period`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPeriod?: (ctx: PeriodContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.url`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUrl?: (ctx: UrlContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.ema1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEma1?: (ctx: Ema1Context) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.ema2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEma2?: (ctx: Ema2Context) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescription?: (ctx: DescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.pricekey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPricekey?: (ctx: PricekeyContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.requestMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequestMethod?: (ctx: RequestMethodContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.requestHeaders`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequestHeaders?: (ctx: RequestHeadersContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.requestBasicAuth`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequestBasicAuth?: (ctx: RequestBasicAuthContext) => Result;

	/**
	 * Visit a parse tree produced by `InfluxParser.requestParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequestParams?: (ctx: RequestParamsContext) => Result;
}

