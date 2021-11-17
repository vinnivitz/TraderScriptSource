// Generated from ./src/lib/antlr/Influx.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { InfluxVisitor } from "./InfluxVisitor";


export class InfluxParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly AUTH = 4;
	public static readonly CONFIG = 5;
	public static readonly DEF = 6;
	public static readonly IF = 7;
	public static readonly WITH = 8;
	public static readonly AND = 9;
	public static readonly OF = 10;
	public static readonly THEN = 11;
	public static readonly TYPE = 12;
	public static readonly EMA = 13;
	public static readonly RSI = 14;
	public static readonly MACD = 15;
	public static readonly ENDPOINT = 16;
	public static readonly USERNAME = 17;
	public static readonly PASSWORD = 18;
	public static readonly URL = 19;
	public static readonly PERIOD = 20;
	public static readonly INTERVAL = 21;
	public static readonly DESCRIPTION = 22;
	public static readonly PRICEKEY = 23;
	public static readonly METHOD = 24;
	public static readonly HEADERS = 25;
	public static readonly BASICAUTH = 26;
	public static readonly PARAMS = 27;
	public static readonly OPERATOR = 28;
	public static readonly URL_STRING = 29;
	public static readonly REQUESTMETHOD = 30;
	public static readonly TEXT = 31;
	public static readonly LITERALS = 32;
	public static readonly WHITESPACE = 33;
	public static readonly NEWLINE = 34;
	public static readonly QUOTE = 35;
	public static readonly RULE_influx = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_command = 2;
	public static readonly RULE_auth = 3;
	public static readonly RULE_config = 4;
	public static readonly RULE_definition = 5;
	public static readonly RULE_condition = 6;
	public static readonly RULE_defType = 7;
	public static readonly RULE_organization = 8;
	public static readonly RULE_username = 9;
	public static readonly RULE_password = 10;
	public static readonly RULE_name = 11;
	public static readonly RULE_period = 12;
	public static readonly RULE_url = 13;
	public static readonly RULE_ema1 = 14;
	public static readonly RULE_ema2 = 15;
	public static readonly RULE_interval = 16;
	public static readonly RULE_description = 17;
	public static readonly RULE_pricekey = 18;
	public static readonly RULE_requestMethod = 19;
	public static readonly RULE_requestHeaders = 20;
	public static readonly RULE_requestBasicAuth = 21;
	public static readonly RULE_requestParams = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"influx", "line", "command", "auth", "config", "definition", "condition", 
		"defType", "organization", "username", "password", "name", "period", "url", 
		"ema1", "ema2", "interval", "description", "pricekey", "requestMethod", 
		"requestHeaders", "requestBasicAuth", "requestParams",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "':'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "AUTH", "CONFIG", "DEF", "IF", 
		"WITH", "AND", "OF", "THEN", "TYPE", "EMA", "RSI", "MACD", "ENDPOINT", 
		"USERNAME", "PASSWORD", "URL", "PERIOD", "INTERVAL", "DESCRIPTION", "PRICEKEY", 
		"METHOD", "HEADERS", "BASICAUTH", "PARAMS", "OPERATOR", "URL_STRING", 
		"REQUESTMETHOD", "TEXT", "LITERALS", "WHITESPACE", "NEWLINE", "QUOTE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(InfluxParser._LITERAL_NAMES, InfluxParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return InfluxParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Influx.g4"; }

	// @Override
	public get ruleNames(): string[] { return InfluxParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return InfluxParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(InfluxParser._ATN, this);
	}
	// @RuleVersion(0)
	public influx(): InfluxContext {
		let _localctx: InfluxContext = new InfluxContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, InfluxParser.RULE_influx);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 46;
				this.line();
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << InfluxParser.AUTH) | (1 << InfluxParser.CONFIG) | (1 << InfluxParser.DEF) | (1 << InfluxParser.IF))) !== 0));
			this.state = 51;
			this.match(InfluxParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, InfluxParser.RULE_line);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.command();
			this.state = 54;
			this.match(InfluxParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command(): CommandContext {
		let _localctx: CommandContext = new CommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, InfluxParser.RULE_command);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case InfluxParser.AUTH:
				{
				this.state = 56;
				this.auth();
				}
				break;
			case InfluxParser.CONFIG:
				{
				this.state = 57;
				this.config();
				}
				break;
			case InfluxParser.DEF:
				{
				this.state = 58;
				this.definition();
				}
				break;
			case InfluxParser.IF:
				{
				this.state = 59;
				this.condition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public auth(): AuthContext {
		let _localctx: AuthContext = new AuthContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, InfluxParser.RULE_auth);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(InfluxParser.AUTH);
			this.state = 63;
			this.match(InfluxParser.WHITESPACE);
			this.state = 64;
			this.organization();
			this.state = 65;
			this.match(InfluxParser.WHITESPACE);
			this.state = 66;
			this.match(InfluxParser.WITH);
			this.state = 67;
			this.match(InfluxParser.WHITESPACE);
			this.state = 70;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case InfluxParser.USERNAME:
				{
				this.state = 68;
				this.username();
				}
				break;
			case InfluxParser.PASSWORD:
				{
				this.state = 69;
				this.password();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 72;
			this.match(InfluxParser.WHITESPACE);
			this.state = 73;
			this.match(InfluxParser.AND);
			this.state = 74;
			this.match(InfluxParser.WHITESPACE);
			this.state = 77;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case InfluxParser.USERNAME:
				{
				this.state = 75;
				this.username();
				}
				break;
			case InfluxParser.PASSWORD:
				{
				this.state = 76;
				this.password();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public config(): ConfigContext {
		let _localctx: ConfigContext = new ConfigContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, InfluxParser.RULE_config);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(InfluxParser.CONFIG);
			this.state = 80;
			this.match(InfluxParser.WHITESPACE);
			this.state = 81;
			this.name();
			this.state = 82;
			this.match(InfluxParser.WHITESPACE);
			this.state = 83;
			this.match(InfluxParser.WITH);
			this.state = 84;
			this.match(InfluxParser.WHITESPACE);
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case InfluxParser.URL:
				{
				this.state = 85;
				this.url();
				}
				break;
			case InfluxParser.INTERVAL:
				{
				this.state = 86;
				this.interval();
				}
				break;
			case InfluxParser.DESCRIPTION:
				{
				this.state = 87;
				this.description();
				}
				break;
			case InfluxParser.PRICEKEY:
				{
				this.state = 88;
				this.pricekey();
				}
				break;
			case InfluxParser.METHOD:
				{
				this.state = 89;
				this.requestMethod();
				}
				break;
			case InfluxParser.HEADERS:
				{
				this.state = 90;
				this.requestHeaders();
				}
				break;
			case InfluxParser.BASICAUTH:
				{
				this.state = 91;
				this.requestBasicAuth();
				}
				break;
			case InfluxParser.PARAMS:
				{
				this.state = 92;
				this.requestParams();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === InfluxParser.WHITESPACE) {
				{
				{
				this.state = 95;
				this.match(InfluxParser.WHITESPACE);
				this.state = 96;
				this.match(InfluxParser.AND);
				this.state = 97;
				this.match(InfluxParser.WHITESPACE);
				this.state = 106;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case InfluxParser.URL:
					{
					this.state = 98;
					this.url();
					}
					break;
				case InfluxParser.INTERVAL:
					{
					this.state = 99;
					this.interval();
					}
					break;
				case InfluxParser.DESCRIPTION:
					{
					this.state = 100;
					this.description();
					}
					break;
				case InfluxParser.PRICEKEY:
					{
					this.state = 101;
					this.pricekey();
					}
					break;
				case InfluxParser.METHOD:
					{
					this.state = 102;
					this.requestMethod();
					}
					break;
				case InfluxParser.HEADERS:
					{
					this.state = 103;
					this.requestHeaders();
					}
					break;
				case InfluxParser.BASICAUTH:
					{
					this.state = 104;
					this.requestBasicAuth();
					}
					break;
				case InfluxParser.PARAMS:
					{
					this.state = 105;
					this.requestParams();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, InfluxParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(InfluxParser.DEF);
			this.state = 114;
			this.match(InfluxParser.WHITESPACE);
			this.state = 115;
			this.name();
			this.state = 116;
			this.match(InfluxParser.WHITESPACE);
			this.state = 117;
			this.match(InfluxParser.OF);
			this.state = 118;
			this.match(InfluxParser.WHITESPACE);
			this.state = 119;
			this.match(InfluxParser.TYPE);
			this.state = 120;
			this.match(InfluxParser.WHITESPACE);
			this.state = 121;
			this.defType();
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === InfluxParser.WHITESPACE) {
				{
				this.state = 122;
				this.match(InfluxParser.WHITESPACE);
				this.state = 123;
				this.match(InfluxParser.WITH);
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 124;
					this.match(InfluxParser.WHITESPACE);
					this.state = 133;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case InfluxParser.PERIOD:
						{
						this.state = 125;
						this.period();
						}
						break;
					case InfluxParser.URL:
						{
						this.state = 126;
						this.url();
						}
						break;
					case InfluxParser.LITERALS:
						{
						{
						this.state = 127;
						this.ema1();
						this.state = 128;
						this.match(InfluxParser.WHITESPACE);
						this.state = 129;
						this.match(InfluxParser.AND);
						this.state = 130;
						this.match(InfluxParser.WHITESPACE);
						this.state = 131;
						this.ema2();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					this.state = 137;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === InfluxParser.WHITESPACE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, InfluxParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(InfluxParser.IF);
			this.state = 142;
			this.match(InfluxParser.WHITESPACE);
			this.state = 143;
			this.match(InfluxParser.LITERALS);
			this.state = 144;
			this.match(InfluxParser.WHITESPACE);
			this.state = 145;
			this.match(InfluxParser.OPERATOR);
			this.state = 146;
			this.match(InfluxParser.WHITESPACE);
			this.state = 147;
			this.match(InfluxParser.LITERALS);
			this.state = 148;
			this.match(InfluxParser.WHITESPACE);
			this.state = 149;
			this.match(InfluxParser.THEN);
			this.state = 150;
			this.match(InfluxParser.WHITESPACE);
			this.state = 151;
			this.match(InfluxParser.LITERALS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defType(): DefTypeContext {
		let _localctx: DefTypeContext = new DefTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, InfluxParser.RULE_defType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case InfluxParser.WHITESPACE:
			case InfluxParser.NEWLINE:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case InfluxParser.EMA:
				{
				this.state = 154;
				this.match(InfluxParser.EMA);
				}
				break;
			case InfluxParser.RSI:
				{
				this.state = 155;
				this.match(InfluxParser.RSI);
				}
				break;
			case InfluxParser.MACD:
				{
				this.state = 156;
				this.match(InfluxParser.MACD);
				}
				break;
			case InfluxParser.ENDPOINT:
				{
				this.state = 157;
				this.match(InfluxParser.ENDPOINT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public organization(): OrganizationContext {
		let _localctx: OrganizationContext = new OrganizationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, InfluxParser.RULE_organization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(InfluxParser.LITERALS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public username(): UsernameContext {
		let _localctx: UsernameContext = new UsernameContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, InfluxParser.RULE_username);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(InfluxParser.USERNAME);
			this.state = 163;
			this.match(InfluxParser.WHITESPACE);
			this.state = 164;
			this.match(InfluxParser.LITERALS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public password(): PasswordContext {
		let _localctx: PasswordContext = new PasswordContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, InfluxParser.RULE_password);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(InfluxParser.PASSWORD);
			this.state = 167;
			this.match(InfluxParser.WHITESPACE);
			this.state = 168;
			this.match(InfluxParser.LITERALS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, InfluxParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(InfluxParser.LITERALS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public period(): PeriodContext {
		let _localctx: PeriodContext = new PeriodContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, InfluxParser.RULE_period);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(InfluxParser.PERIOD);
			this.state = 173;
			this.match(InfluxParser.WHITESPACE);
			this.state = 174;
			this.match(InfluxParser.LITERALS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public url(): UrlContext {
		let _localctx: UrlContext = new UrlContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, InfluxParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(InfluxParser.URL);
			this.state = 177;
			this.match(InfluxParser.WHITESPACE);
			this.state = 178;
			this.match(InfluxParser.URL_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ema1(): Ema1Context {
		let _localctx: Ema1Context = new Ema1Context(this._ctx, this.state);
		this.enterRule(_localctx, 28, InfluxParser.RULE_ema1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(InfluxParser.LITERALS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ema2(): Ema2Context {
		let _localctx: Ema2Context = new Ema2Context(this._ctx, this.state);
		this.enterRule(_localctx, 30, InfluxParser.RULE_ema2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(InfluxParser.LITERALS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interval(): IntervalContext {
		let _localctx: IntervalContext = new IntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, InfluxParser.RULE_interval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(InfluxParser.INTERVAL);
			this.state = 185;
			this.match(InfluxParser.WHITESPACE);
			this.state = 186;
			this.match(InfluxParser.LITERALS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public description(): DescriptionContext {
		let _localctx: DescriptionContext = new DescriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, InfluxParser.RULE_description);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.match(InfluxParser.DESCRIPTION);
			this.state = 189;
			this.match(InfluxParser.WHITESPACE);
			this.state = 190;
			this.match(InfluxParser.TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pricekey(): PricekeyContext {
		let _localctx: PricekeyContext = new PricekeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, InfluxParser.RULE_pricekey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(InfluxParser.PRICEKEY);
			this.state = 193;
			this.match(InfluxParser.WHITESPACE);
			this.state = 194;
			this.match(InfluxParser.LITERALS);
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === InfluxParser.T__0) {
				{
				{
				this.state = 195;
				this.match(InfluxParser.T__0);
				this.state = 196;
				this.match(InfluxParser.LITERALS);
				}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requestMethod(): RequestMethodContext {
		let _localctx: RequestMethodContext = new RequestMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, InfluxParser.RULE_requestMethod);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(InfluxParser.METHOD);
			this.state = 203;
			this.match(InfluxParser.WHITESPACE);
			this.state = 204;
			this.match(InfluxParser.REQUESTMETHOD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requestHeaders(): RequestHeadersContext {
		let _localctx: RequestHeadersContext = new RequestHeadersContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, InfluxParser.RULE_requestHeaders);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(InfluxParser.HEADERS);
			this.state = 207;
			this.match(InfluxParser.WHITESPACE);
			{
			{
			this.state = 208;
			this.match(InfluxParser.LITERALS);
			this.state = 209;
			this.match(InfluxParser.T__1);
			this.state = 210;
			this.match(InfluxParser.TEXT);
			}
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === InfluxParser.T__2) {
				{
				{
				this.state = 212;
				this.match(InfluxParser.T__2);
				this.state = 213;
				this.match(InfluxParser.LITERALS);
				this.state = 214;
				this.match(InfluxParser.T__1);
				this.state = 215;
				this.match(InfluxParser.TEXT);
				}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requestBasicAuth(): RequestBasicAuthContext {
		let _localctx: RequestBasicAuthContext = new RequestBasicAuthContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, InfluxParser.RULE_requestBasicAuth);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(InfluxParser.BASICAUTH);
			this.state = 222;
			this.match(InfluxParser.WHITESPACE);
			this.state = 223;
			this.match(InfluxParser.LITERALS);
			this.state = 224;
			this.match(InfluxParser.T__1);
			this.state = 225;
			this.match(InfluxParser.LITERALS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requestParams(): RequestParamsContext {
		let _localctx: RequestParamsContext = new RequestParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, InfluxParser.RULE_requestParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(InfluxParser.PARAMS);
			this.state = 228;
			this.match(InfluxParser.WHITESPACE);
			{
			{
			this.state = 229;
			this.match(InfluxParser.LITERALS);
			this.state = 230;
			this.match(InfluxParser.T__1);
			this.state = 231;
			this.match(InfluxParser.TEXT);
			}
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === InfluxParser.T__2) {
				{
				{
				this.state = 233;
				this.match(InfluxParser.T__2);
				this.state = 234;
				this.match(InfluxParser.LITERALS);
				this.state = 235;
				this.match(InfluxParser.T__1);
				this.state = 236;
				this.match(InfluxParser.TEXT);
				}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%\xF5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x06\x022\n\x02\r\x02\x0E\x023\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04?\n\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05I\n\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05P\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06`\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06m\n\x06" +
		"\x07\x06o\n\x06\f\x06\x0E\x06r\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x88\n\x07" +
		"\x06\x07\x8A\n\x07\r\x07\x0E\x07\x8B\x05\x07\x8E\n\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\xA1\n\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f" +
		"\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x07\x14\xC8\n\x14\f\x14\x0E\x14\xCB\v\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x07\x16\xDB\n\x16\f\x16\x0E\x16\xDE\v\x16" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\xF0\n" +
		"\x18\f\x18\x0E\x18\xF3\v\x18\x03\x18\x02\x02\x02\x19\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02\x02" +
		"\x02\x02\xFD\x021\x03\x02\x02\x02\x047\x03\x02\x02\x02\x06>\x03\x02\x02" +
		"\x02\b@\x03\x02\x02\x02\nQ\x03\x02\x02\x02\fs\x03\x02\x02\x02\x0E\x8F" +
		"\x03\x02\x02\x02\x10\xA0\x03\x02\x02\x02\x12\xA2\x03\x02\x02\x02\x14\xA4" +
		"\x03\x02\x02\x02\x16\xA8\x03\x02\x02\x02\x18\xAC\x03\x02\x02\x02\x1A\xAE" +
		"\x03\x02\x02\x02\x1C\xB2\x03\x02\x02\x02\x1E\xB6\x03\x02\x02\x02 \xB8" +
		"\x03\x02\x02\x02\"\xBA\x03\x02\x02\x02$\xBE\x03\x02\x02\x02&\xC2\x03\x02" +
		"\x02\x02(\xCC\x03\x02\x02\x02*\xD0\x03\x02\x02\x02,\xDF\x03\x02\x02\x02" +
		".\xE5\x03\x02\x02\x0202\x05\x04\x03\x0210\x03\x02\x02\x0223\x03\x02\x02" +
		"\x0231\x03\x02\x02\x0234\x03\x02\x02\x0245\x03\x02\x02\x0256\x07\x02\x02" +
		"\x036\x03\x03\x02\x02\x0278\x05\x06\x04\x0289\x07$\x02\x029\x05\x03\x02" +
		"\x02\x02:?\x05\b\x05\x02;?\x05\n\x06\x02<?\x05\f\x07\x02=?\x05\x0E\b\x02" +
		">:\x03\x02\x02\x02>;\x03\x02\x02\x02><\x03\x02\x02\x02>=\x03\x02\x02\x02" +
		"?\x07\x03\x02\x02\x02@A\x07\x06\x02\x02AB\x07#\x02\x02BC\x05\x12\n\x02" +
		"CD\x07#\x02\x02DE\x07\n\x02\x02EH\x07#\x02\x02FI\x05\x14\v\x02GI\x05\x16" +
		"\f\x02HF\x03\x02\x02\x02HG\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\x07#\x02" +
		"\x02KL\x07\v\x02\x02LO\x07#\x02\x02MP\x05\x14\v\x02NP\x05\x16\f\x02OM" +
		"\x03\x02\x02\x02ON\x03\x02\x02\x02P\t\x03\x02\x02\x02QR\x07\x07\x02\x02" +
		"RS\x07#\x02\x02ST\x05\x18\r\x02TU\x07#\x02\x02UV\x07\n\x02\x02V_\x07#" +
		"\x02\x02W`\x05\x1C\x0F\x02X`\x05\"\x12\x02Y`\x05$\x13\x02Z`\x05&\x14\x02" +
		"[`\x05(\x15\x02\\`\x05*\x16\x02]`\x05,\x17\x02^`\x05.\x18\x02_W\x03\x02" +
		"\x02\x02_X\x03\x02\x02\x02_Y\x03\x02\x02\x02_Z\x03\x02\x02\x02_[\x03\x02" +
		"\x02\x02_\\\x03\x02\x02\x02_]\x03\x02\x02\x02_^\x03\x02\x02\x02`p\x03" +
		"\x02\x02\x02ab\x07#\x02\x02bc\x07\v\x02\x02cl\x07#\x02\x02dm\x05\x1C\x0F" +
		"\x02em\x05\"\x12\x02fm\x05$\x13\x02gm\x05&\x14\x02hm\x05(\x15\x02im\x05" +
		"*\x16\x02jm\x05,\x17\x02km\x05.\x18\x02ld\x03\x02\x02\x02le\x03\x02\x02" +
		"\x02lf\x03\x02\x02\x02lg\x03\x02\x02\x02lh\x03\x02\x02\x02li\x03\x02\x02" +
		"\x02lj\x03\x02\x02\x02lk\x03\x02\x02\x02mo\x03\x02\x02\x02na\x03\x02\x02" +
		"\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02q\v\x03\x02" +
		"\x02\x02rp\x03\x02\x02\x02st\x07\b\x02\x02tu\x07#\x02\x02uv\x05\x18\r" +
		"\x02vw\x07#\x02\x02wx\x07\f\x02\x02xy\x07#\x02\x02yz\x07\x0E\x02\x02z" +
		"{\x07#\x02\x02{\x8D\x05\x10\t\x02|}\x07#\x02\x02}\x89\x07\n\x02\x02~\x87" +
		"\x07#\x02\x02\x7F\x88\x05\x1A\x0E\x02\x80\x88\x05\x1C\x0F\x02\x81\x82" +
		"\x05\x1E\x10\x02\x82\x83\x07#\x02\x02\x83\x84\x07\v\x02\x02\x84\x85\x07" +
		"#\x02\x02\x85\x86\x05 \x11\x02\x86\x88\x03\x02\x02\x02\x87\x7F\x03\x02" +
		"\x02\x02\x87\x80\x03\x02\x02\x02\x87\x81\x03\x02\x02\x02\x88\x8A\x03\x02" +
		"\x02\x02\x89~\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x89\x03\x02" +
		"\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D|\x03\x02" +
		"\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\r\x03\x02\x02\x02\x8F\x90\x07\t\x02" +
		"\x02\x90\x91\x07#\x02\x02\x91\x92\x07\"\x02\x02\x92\x93\x07#\x02\x02\x93" +
		"\x94\x07\x1E\x02\x02\x94\x95\x07#\x02\x02\x95\x96\x07\"\x02\x02\x96\x97" +
		"\x07#\x02\x02\x97\x98\x07\r\x02\x02\x98\x99\x07#\x02\x02\x99\x9A\x07\"" +
		"\x02\x02\x9A\x0F\x03\x02\x02\x02\x9B\xA1\x03\x02\x02\x02\x9C\xA1\x07\x0F" +
		"\x02\x02\x9D\xA1\x07\x10\x02\x02\x9E\xA1\x07\x11\x02\x02\x9F\xA1\x07\x12" +
		"\x02\x02\xA0\x9B\x03\x02\x02\x02\xA0\x9C\x03\x02\x02\x02\xA0\x9D\x03\x02" +
		"\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\x11\x03\x02" +
		"\x02\x02\xA2\xA3\x07\"\x02\x02\xA3\x13\x03\x02\x02\x02\xA4\xA5\x07\x13" +
		"\x02\x02\xA5\xA6\x07#\x02\x02\xA6\xA7\x07\"\x02\x02\xA7\x15\x03\x02\x02" +
		"\x02\xA8\xA9\x07\x14\x02\x02\xA9\xAA\x07#\x02\x02\xAA\xAB\x07\"\x02\x02" +
		"\xAB\x17\x03\x02\x02\x02\xAC\xAD\x07\"\x02\x02\xAD\x19\x03\x02\x02\x02" +
		"\xAE\xAF\x07\x16\x02\x02\xAF\xB0\x07#\x02\x02\xB0\xB1\x07\"\x02\x02\xB1" +
		"\x1B\x03\x02\x02\x02\xB2\xB3\x07\x15\x02\x02\xB3\xB4\x07#\x02\x02\xB4" +
		"\xB5\x07\x1F\x02\x02\xB5\x1D\x03\x02\x02\x02\xB6\xB7\x07\"\x02\x02\xB7" +
		"\x1F\x03\x02\x02\x02\xB8\xB9\x07\"\x02\x02\xB9!\x03\x02\x02\x02\xBA\xBB" +
		"\x07\x17\x02\x02\xBB\xBC\x07#\x02\x02\xBC\xBD\x07\"\x02\x02\xBD#\x03\x02" +
		"\x02\x02\xBE\xBF\x07\x18\x02\x02\xBF\xC0\x07#\x02\x02\xC0\xC1\x07!\x02" +
		"\x02\xC1%\x03\x02\x02\x02\xC2\xC3\x07\x19\x02\x02\xC3\xC4\x07#\x02\x02" +
		"\xC4\xC9\x07\"\x02\x02\xC5\xC6\x07\x03\x02\x02\xC6\xC8\x07\"\x02\x02\xC7" +
		"\xC5\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9" +
		"\xCA\x03\x02\x02\x02\xCA\'\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCC" +
		"\xCD\x07\x1A\x02\x02\xCD\xCE\x07#\x02\x02\xCE\xCF\x07 \x02\x02\xCF)\x03" +
		"\x02\x02\x02\xD0\xD1\x07\x1B\x02\x02\xD1\xD2\x07#\x02\x02\xD2\xD3\x07" +
		"\"\x02\x02\xD3\xD4\x07\x04\x02\x02\xD4\xD5\x07!\x02\x02\xD5\xDC\x03\x02" +
		"\x02\x02\xD6\xD7\x07\x05\x02\x02\xD7\xD8\x07\"\x02\x02\xD8\xD9\x07\x04" +
		"\x02\x02\xD9\xDB\x07!\x02\x02\xDA\xD6\x03\x02\x02\x02\xDB\xDE\x03\x02" +
		"\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD+\x03\x02" +
		"\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE0\x07\x1C\x02\x02\xE0\xE1\x07#" +
		"\x02\x02\xE1\xE2\x07\"\x02\x02\xE2\xE3\x07\x04\x02\x02\xE3\xE4\x07\"\x02" +
		"\x02\xE4-\x03\x02\x02\x02\xE5\xE6\x07\x1D\x02\x02\xE6\xE7\x07#\x02\x02" +
		"\xE7\xE8\x07\"\x02\x02\xE8\xE9\x07\x04\x02\x02\xE9\xEA\x07!\x02\x02\xEA" +
		"\xF1\x03\x02\x02\x02\xEB\xEC\x07\x05\x02\x02\xEC\xED\x07\"\x02\x02\xED" +
		"\xEE\x07\x04\x02\x02\xEE\xF0\x07!\x02\x02\xEF\xEB\x03\x02\x02\x02\xF0" +
		"\xF3\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2" +
		"/\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\x103>HO_lp\x87\x8B\x8D\xA0\xC9" +
		"\xDC\xF1";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!InfluxParser.__ATN) {
			InfluxParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(InfluxParser._serializedATN));
		}

		return InfluxParser.__ATN;
	}

}

export class InfluxContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(InfluxParser.EOF, 0); }
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_influx; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitInflux) {
			return visitor.visitInflux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public command(): CommandContext {
		return this.getRuleContext(0, CommandContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(InfluxParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_line; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	public auth(): AuthContext | undefined {
		return this.tryGetRuleContext(0, AuthContext);
	}
	public config(): ConfigContext | undefined {
		return this.tryGetRuleContext(0, ConfigContext);
	}
	public definition(): DefinitionContext | undefined {
		return this.tryGetRuleContext(0, DefinitionContext);
	}
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_command; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitCommand) {
			return visitor.visitCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AuthContext extends ParserRuleContext {
	public AUTH(): TerminalNode { return this.getToken(InfluxParser.AUTH, 0); }
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.WHITESPACE);
		} else {
			return this.getToken(InfluxParser.WHITESPACE, i);
		}
	}
	public organization(): OrganizationContext {
		return this.getRuleContext(0, OrganizationContext);
	}
	public WITH(): TerminalNode { return this.getToken(InfluxParser.WITH, 0); }
	public AND(): TerminalNode { return this.getToken(InfluxParser.AND, 0); }
	public username(): UsernameContext[];
	public username(i: number): UsernameContext;
	public username(i?: number): UsernameContext | UsernameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UsernameContext);
		} else {
			return this.getRuleContext(i, UsernameContext);
		}
	}
	public password(): PasswordContext[];
	public password(i: number): PasswordContext;
	public password(i?: number): PasswordContext | PasswordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PasswordContext);
		} else {
			return this.getRuleContext(i, PasswordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_auth; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitAuth) {
			return visitor.visitAuth(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConfigContext extends ParserRuleContext {
	public CONFIG(): TerminalNode { return this.getToken(InfluxParser.CONFIG, 0); }
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.WHITESPACE);
		} else {
			return this.getToken(InfluxParser.WHITESPACE, i);
		}
	}
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public WITH(): TerminalNode { return this.getToken(InfluxParser.WITH, 0); }
	public url(): UrlContext[];
	public url(i: number): UrlContext;
	public url(i?: number): UrlContext | UrlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UrlContext);
		} else {
			return this.getRuleContext(i, UrlContext);
		}
	}
	public interval(): IntervalContext[];
	public interval(i: number): IntervalContext;
	public interval(i?: number): IntervalContext | IntervalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalContext);
		} else {
			return this.getRuleContext(i, IntervalContext);
		}
	}
	public description(): DescriptionContext[];
	public description(i: number): DescriptionContext;
	public description(i?: number): DescriptionContext | DescriptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionContext);
		} else {
			return this.getRuleContext(i, DescriptionContext);
		}
	}
	public pricekey(): PricekeyContext[];
	public pricekey(i: number): PricekeyContext;
	public pricekey(i?: number): PricekeyContext | PricekeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PricekeyContext);
		} else {
			return this.getRuleContext(i, PricekeyContext);
		}
	}
	public requestMethod(): RequestMethodContext[];
	public requestMethod(i: number): RequestMethodContext;
	public requestMethod(i?: number): RequestMethodContext | RequestMethodContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RequestMethodContext);
		} else {
			return this.getRuleContext(i, RequestMethodContext);
		}
	}
	public requestHeaders(): RequestHeadersContext[];
	public requestHeaders(i: number): RequestHeadersContext;
	public requestHeaders(i?: number): RequestHeadersContext | RequestHeadersContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RequestHeadersContext);
		} else {
			return this.getRuleContext(i, RequestHeadersContext);
		}
	}
	public requestBasicAuth(): RequestBasicAuthContext[];
	public requestBasicAuth(i: number): RequestBasicAuthContext;
	public requestBasicAuth(i?: number): RequestBasicAuthContext | RequestBasicAuthContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RequestBasicAuthContext);
		} else {
			return this.getRuleContext(i, RequestBasicAuthContext);
		}
	}
	public requestParams(): RequestParamsContext[];
	public requestParams(i: number): RequestParamsContext;
	public requestParams(i?: number): RequestParamsContext | RequestParamsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RequestParamsContext);
		} else {
			return this.getRuleContext(i, RequestParamsContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.AND);
		} else {
			return this.getToken(InfluxParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_config; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitConfig) {
			return visitor.visitConfig(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	public DEF(): TerminalNode { return this.getToken(InfluxParser.DEF, 0); }
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.WHITESPACE);
		} else {
			return this.getToken(InfluxParser.WHITESPACE, i);
		}
	}
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public OF(): TerminalNode { return this.getToken(InfluxParser.OF, 0); }
	public TYPE(): TerminalNode { return this.getToken(InfluxParser.TYPE, 0); }
	public defType(): DefTypeContext {
		return this.getRuleContext(0, DefTypeContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(InfluxParser.WITH, 0); }
	public period(): PeriodContext[];
	public period(i: number): PeriodContext;
	public period(i?: number): PeriodContext | PeriodContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PeriodContext);
		} else {
			return this.getRuleContext(i, PeriodContext);
		}
	}
	public url(): UrlContext[];
	public url(i: number): UrlContext;
	public url(i?: number): UrlContext | UrlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UrlContext);
		} else {
			return this.getRuleContext(i, UrlContext);
		}
	}
	public ema1(): Ema1Context[];
	public ema1(i: number): Ema1Context;
	public ema1(i?: number): Ema1Context | Ema1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Ema1Context);
		} else {
			return this.getRuleContext(i, Ema1Context);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.AND);
		} else {
			return this.getToken(InfluxParser.AND, i);
		}
	}
	public ema2(): Ema2Context[];
	public ema2(i: number): Ema2Context;
	public ema2(i?: number): Ema2Context | Ema2Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Ema2Context);
		} else {
			return this.getRuleContext(i, Ema2Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_definition; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitDefinition) {
			return visitor.visitDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(InfluxParser.IF, 0); }
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.WHITESPACE);
		} else {
			return this.getToken(InfluxParser.WHITESPACE, i);
		}
	}
	public LITERALS(): TerminalNode[];
	public LITERALS(i: number): TerminalNode;
	public LITERALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.LITERALS);
		} else {
			return this.getToken(InfluxParser.LITERALS, i);
		}
	}
	public OPERATOR(): TerminalNode { return this.getToken(InfluxParser.OPERATOR, 0); }
	public THEN(): TerminalNode { return this.getToken(InfluxParser.THEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_condition; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefTypeContext extends ParserRuleContext {
	public EMA(): TerminalNode | undefined { return this.tryGetToken(InfluxParser.EMA, 0); }
	public RSI(): TerminalNode | undefined { return this.tryGetToken(InfluxParser.RSI, 0); }
	public MACD(): TerminalNode | undefined { return this.tryGetToken(InfluxParser.MACD, 0); }
	public ENDPOINT(): TerminalNode | undefined { return this.tryGetToken(InfluxParser.ENDPOINT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_defType; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitDefType) {
			return visitor.visitDefType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrganizationContext extends ParserRuleContext {
	public LITERALS(): TerminalNode { return this.getToken(InfluxParser.LITERALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_organization; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitOrganization) {
			return visitor.visitOrganization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsernameContext extends ParserRuleContext {
	public USERNAME(): TerminalNode { return this.getToken(InfluxParser.USERNAME, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(InfluxParser.WHITESPACE, 0); }
	public LITERALS(): TerminalNode { return this.getToken(InfluxParser.LITERALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_username; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitUsername) {
			return visitor.visitUsername(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PasswordContext extends ParserRuleContext {
	public PASSWORD(): TerminalNode { return this.getToken(InfluxParser.PASSWORD, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(InfluxParser.WHITESPACE, 0); }
	public LITERALS(): TerminalNode { return this.getToken(InfluxParser.LITERALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_password; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitPassword) {
			return visitor.visitPassword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public LITERALS(): TerminalNode { return this.getToken(InfluxParser.LITERALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_name; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PeriodContext extends ParserRuleContext {
	public PERIOD(): TerminalNode { return this.getToken(InfluxParser.PERIOD, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(InfluxParser.WHITESPACE, 0); }
	public LITERALS(): TerminalNode { return this.getToken(InfluxParser.LITERALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_period; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitPeriod) {
			return visitor.visitPeriod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	public URL(): TerminalNode { return this.getToken(InfluxParser.URL, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(InfluxParser.WHITESPACE, 0); }
	public URL_STRING(): TerminalNode { return this.getToken(InfluxParser.URL_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_url; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitUrl) {
			return visitor.visitUrl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ema1Context extends ParserRuleContext {
	public LITERALS(): TerminalNode { return this.getToken(InfluxParser.LITERALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_ema1; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitEma1) {
			return visitor.visitEma1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ema2Context extends ParserRuleContext {
	public LITERALS(): TerminalNode { return this.getToken(InfluxParser.LITERALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_ema2; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitEma2) {
			return visitor.visitEma2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalContext extends ParserRuleContext {
	public INTERVAL(): TerminalNode { return this.getToken(InfluxParser.INTERVAL, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(InfluxParser.WHITESPACE, 0); }
	public LITERALS(): TerminalNode { return this.getToken(InfluxParser.LITERALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_interval; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitInterval) {
			return visitor.visitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescriptionContext extends ParserRuleContext {
	public DESCRIPTION(): TerminalNode { return this.getToken(InfluxParser.DESCRIPTION, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(InfluxParser.WHITESPACE, 0); }
	public TEXT(): TerminalNode { return this.getToken(InfluxParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_description; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitDescription) {
			return visitor.visitDescription(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PricekeyContext extends ParserRuleContext {
	public PRICEKEY(): TerminalNode { return this.getToken(InfluxParser.PRICEKEY, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(InfluxParser.WHITESPACE, 0); }
	public LITERALS(): TerminalNode[];
	public LITERALS(i: number): TerminalNode;
	public LITERALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.LITERALS);
		} else {
			return this.getToken(InfluxParser.LITERALS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_pricekey; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitPricekey) {
			return visitor.visitPricekey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequestMethodContext extends ParserRuleContext {
	public METHOD(): TerminalNode { return this.getToken(InfluxParser.METHOD, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(InfluxParser.WHITESPACE, 0); }
	public REQUESTMETHOD(): TerminalNode { return this.getToken(InfluxParser.REQUESTMETHOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_requestMethod; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitRequestMethod) {
			return visitor.visitRequestMethod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequestHeadersContext extends ParserRuleContext {
	public HEADERS(): TerminalNode { return this.getToken(InfluxParser.HEADERS, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(InfluxParser.WHITESPACE, 0); }
	public LITERALS(): TerminalNode[];
	public LITERALS(i: number): TerminalNode;
	public LITERALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.LITERALS);
		} else {
			return this.getToken(InfluxParser.LITERALS, i);
		}
	}
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.TEXT);
		} else {
			return this.getToken(InfluxParser.TEXT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_requestHeaders; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitRequestHeaders) {
			return visitor.visitRequestHeaders(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequestBasicAuthContext extends ParserRuleContext {
	public BASICAUTH(): TerminalNode { return this.getToken(InfluxParser.BASICAUTH, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(InfluxParser.WHITESPACE, 0); }
	public LITERALS(): TerminalNode[];
	public LITERALS(i: number): TerminalNode;
	public LITERALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.LITERALS);
		} else {
			return this.getToken(InfluxParser.LITERALS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_requestBasicAuth; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitRequestBasicAuth) {
			return visitor.visitRequestBasicAuth(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequestParamsContext extends ParserRuleContext {
	public PARAMS(): TerminalNode { return this.getToken(InfluxParser.PARAMS, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(InfluxParser.WHITESPACE, 0); }
	public LITERALS(): TerminalNode[];
	public LITERALS(i: number): TerminalNode;
	public LITERALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.LITERALS);
		} else {
			return this.getToken(InfluxParser.LITERALS, i);
		}
	}
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.TEXT);
		} else {
			return this.getToken(InfluxParser.TEXT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return InfluxParser.RULE_requestParams; }
	// @Override
	public accept<Result>(visitor: InfluxVisitor<Result>): Result {
		if (visitor.visitRequestParams) {
			return visitor.visitRequestParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


