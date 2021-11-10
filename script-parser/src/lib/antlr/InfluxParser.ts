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
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly OPERATOR = 52;
	public static readonly URL_STRING = 53;
	public static readonly REQUESTMETHOD = 54;
	public static readonly LITERALS = 55;
	public static readonly WHITESPACE = 56;
	public static readonly NEWLINE = 57;
	public static readonly QUOTE = 58;
	public static readonly SYMBOL = 59;
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
		undefined, "'auth:'", "'AUTH:'", "'with'", "'WITH'", "'and'", "'AND'", 
		"'config:'", "'CONFIG:'", "'def:'", "'DEF:'", "'of'", "'OF'", "'type'", 
		"'TYPE'", "'if'", "'IF'", "'then'", "'THEN'", "'ema'", "'EMA'", "'rsi'", 
		"'RSI'", "'macd'", "'MACD'", "'endpoint'", "'ENDPOINT'", "'username'", 
		"'USERNAME'", "'password'", "'PASSWORD'", "'period'", "'PERIOD'", "'url'", 
		"'URL'", "'interval'", "'INTERVAL'", "'description'", "'DESCRIPTION'", 
		"'.'", "'pricekey'", "'PRICEKEY'", "'requestmethod'", "'REQUESTMETHOD'", 
		"'requestheaders'", "'REQUESTHEADERS'", "':'", "','", "'basicauth'", "'BASICAUTH'", 
		"'requestparams'", "'REQUESTPARAMS'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "OPERATOR", "URL_STRING", "REQUESTMETHOD", 
		"LITERALS", "WHITESPACE", "NEWLINE", "QUOTE", "SYMBOL",
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
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << InfluxParser.T__0) | (1 << InfluxParser.T__1) | (1 << InfluxParser.T__6) | (1 << InfluxParser.T__7) | (1 << InfluxParser.T__8) | (1 << InfluxParser.T__9) | (1 << InfluxParser.T__14) | (1 << InfluxParser.T__15))) !== 0));
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
			case InfluxParser.T__0:
			case InfluxParser.T__1:
				{
				this.state = 56;
				this.auth();
				}
				break;
			case InfluxParser.T__6:
			case InfluxParser.T__7:
				{
				this.state = 57;
				this.config();
				}
				break;
			case InfluxParser.T__8:
			case InfluxParser.T__9:
				{
				this.state = 58;
				this.definition();
				}
				break;
			case InfluxParser.T__14:
			case InfluxParser.T__15:
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__0 || _la === InfluxParser.T__1)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 63;
			this.match(InfluxParser.WHITESPACE);
			this.state = 64;
			this.organization();
			this.state = 65;
			this.match(InfluxParser.WHITESPACE);
			this.state = 66;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__2 || _la === InfluxParser.T__3)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 67;
			this.match(InfluxParser.WHITESPACE);
			this.state = 70;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case InfluxParser.T__26:
			case InfluxParser.T__27:
				{
				this.state = 68;
				this.username();
				}
				break;
			case InfluxParser.T__28:
			case InfluxParser.T__29:
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
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__4 || _la === InfluxParser.T__5)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 74;
			this.match(InfluxParser.WHITESPACE);
			this.state = 77;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case InfluxParser.T__26:
			case InfluxParser.T__27:
				{
				this.state = 75;
				this.username();
				}
				break;
			case InfluxParser.T__28:
			case InfluxParser.T__29:
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
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__6 || _la === InfluxParser.T__7)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 80;
			this.match(InfluxParser.WHITESPACE);
			this.state = 81;
			this.name();
			this.state = 82;
			this.match(InfluxParser.WHITESPACE);
			this.state = 83;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__2 || _la === InfluxParser.T__3)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 84;
			this.match(InfluxParser.WHITESPACE);
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case InfluxParser.T__32:
			case InfluxParser.T__33:
				{
				this.state = 85;
				this.url();
				}
				break;
			case InfluxParser.T__34:
			case InfluxParser.T__35:
				{
				this.state = 86;
				this.interval();
				}
				break;
			case InfluxParser.T__36:
			case InfluxParser.T__37:
				{
				this.state = 87;
				this.description();
				}
				break;
			case InfluxParser.T__39:
			case InfluxParser.T__40:
				{
				this.state = 88;
				this.pricekey();
				}
				break;
			case InfluxParser.T__41:
			case InfluxParser.T__42:
				{
				this.state = 89;
				this.requestMethod();
				}
				break;
			case InfluxParser.T__43:
			case InfluxParser.T__44:
				{
				this.state = 90;
				this.requestHeaders();
				}
				break;
			case InfluxParser.T__47:
			case InfluxParser.T__48:
				{
				this.state = 91;
				this.requestBasicAuth();
				}
				break;
			case InfluxParser.T__49:
			case InfluxParser.T__50:
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
				_la = this._input.LA(1);
				if (!(_la === InfluxParser.T__4 || _la === InfluxParser.T__5)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 97;
				this.match(InfluxParser.WHITESPACE);
				this.state = 106;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case InfluxParser.T__32:
				case InfluxParser.T__33:
					{
					this.state = 98;
					this.url();
					}
					break;
				case InfluxParser.T__34:
				case InfluxParser.T__35:
					{
					this.state = 99;
					this.interval();
					}
					break;
				case InfluxParser.T__36:
				case InfluxParser.T__37:
					{
					this.state = 100;
					this.description();
					}
					break;
				case InfluxParser.T__39:
				case InfluxParser.T__40:
					{
					this.state = 101;
					this.pricekey();
					}
					break;
				case InfluxParser.T__41:
				case InfluxParser.T__42:
					{
					this.state = 102;
					this.requestMethod();
					}
					break;
				case InfluxParser.T__43:
				case InfluxParser.T__44:
					{
					this.state = 103;
					this.requestHeaders();
					}
					break;
				case InfluxParser.T__47:
				case InfluxParser.T__48:
					{
					this.state = 104;
					this.requestBasicAuth();
					}
					break;
				case InfluxParser.T__49:
				case InfluxParser.T__50:
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
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__8 || _la === InfluxParser.T__9)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 114;
			this.match(InfluxParser.WHITESPACE);
			this.state = 115;
			this.name();
			this.state = 116;
			this.match(InfluxParser.WHITESPACE);
			this.state = 117;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__10 || _la === InfluxParser.T__11)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 118;
			this.match(InfluxParser.WHITESPACE);
			this.state = 119;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__12 || _la === InfluxParser.T__13)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
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
				_la = this._input.LA(1);
				if (!(_la === InfluxParser.T__2 || _la === InfluxParser.T__3)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
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
					case InfluxParser.T__30:
					case InfluxParser.T__31:
						{
						this.state = 125;
						this.period();
						}
						break;
					case InfluxParser.T__32:
					case InfluxParser.T__33:
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
						_la = this._input.LA(1);
						if (!(_la === InfluxParser.T__4 || _la === InfluxParser.T__5)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__14 || _la === InfluxParser.T__15)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
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
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__16 || _la === InfluxParser.T__17)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
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
		let _la: number;
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
			case InfluxParser.T__18:
			case InfluxParser.T__19:
				{
				this.state = 154;
				_la = this._input.LA(1);
				if (!(_la === InfluxParser.T__18 || _la === InfluxParser.T__19)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case InfluxParser.T__20:
			case InfluxParser.T__21:
				{
				this.state = 155;
				_la = this._input.LA(1);
				if (!(_la === InfluxParser.T__20 || _la === InfluxParser.T__21)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case InfluxParser.T__22:
			case InfluxParser.T__23:
				{
				this.state = 156;
				_la = this._input.LA(1);
				if (!(_la === InfluxParser.T__22 || _la === InfluxParser.T__23)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case InfluxParser.T__24:
			case InfluxParser.T__25:
				{
				this.state = 157;
				_la = this._input.LA(1);
				if (!(_la === InfluxParser.T__24 || _la === InfluxParser.T__25)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__26 || _la === InfluxParser.T__27)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__28 || _la === InfluxParser.T__29)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__30 || _la === InfluxParser.T__31)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__32 || _la === InfluxParser.T__33)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__34 || _la === InfluxParser.T__35)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__36 || _la === InfluxParser.T__37)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 189;
			this.match(InfluxParser.WHITESPACE);
			this.state = 190;
			this.match(InfluxParser.QUOTE);
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (InfluxParser.T__38 - 39)) | (1 << (InfluxParser.LITERALS - 39)) | (1 << (InfluxParser.WHITESPACE - 39)))) !== 0)) {
				{
				{
				this.state = 191;
				_la = this._input.LA(1);
				if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (InfluxParser.T__38 - 39)) | (1 << (InfluxParser.LITERALS - 39)) | (1 << (InfluxParser.WHITESPACE - 39)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 197;
			this.match(InfluxParser.QUOTE);
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
			this.state = 199;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__39 || _la === InfluxParser.T__40)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 200;
			this.match(InfluxParser.WHITESPACE);
			this.state = 201;
			this.match(InfluxParser.LITERALS);
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === InfluxParser.T__38) {
				{
				{
				this.state = 202;
				this.match(InfluxParser.T__38);
				this.state = 203;
				this.match(InfluxParser.LITERALS);
				}
				}
				this.state = 208;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__41 || _la === InfluxParser.T__42)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 210;
			this.match(InfluxParser.WHITESPACE);
			this.state = 211;
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
			this.state = 213;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__43 || _la === InfluxParser.T__44)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 214;
			this.match(InfluxParser.WHITESPACE);
			{
			{
			this.state = 215;
			this.match(InfluxParser.LITERALS);
			this.state = 216;
			this.match(InfluxParser.T__45);
			this.state = 217;
			this.match(InfluxParser.LITERALS);
			}
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === InfluxParser.T__46) {
				{
				{
				this.state = 219;
				this.match(InfluxParser.T__46);
				this.state = 220;
				this.match(InfluxParser.LITERALS);
				this.state = 221;
				this.match(InfluxParser.T__45);
				this.state = 222;
				this.match(InfluxParser.LITERALS);
				}
				}
				this.state = 227;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__47 || _la === InfluxParser.T__48)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 229;
			this.match(InfluxParser.WHITESPACE);
			this.state = 230;
			this.match(InfluxParser.LITERALS);
			this.state = 231;
			this.match(InfluxParser.T__45);
			this.state = 232;
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
			this.state = 234;
			_la = this._input.LA(1);
			if (!(_la === InfluxParser.T__49 || _la === InfluxParser.T__50)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 235;
			this.match(InfluxParser.WHITESPACE);
			this.state = 236;
			this.match(InfluxParser.LITERALS);
			this.state = 237;
			this.match(InfluxParser.T__45);
			this.state = 238;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03=\xF3\x04\x02" +
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
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\xC3\n\x13\f\x13" +
		"\x0E\x13\xC6\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x07\x14\xCF\n\x14\f\x14\x0E\x14\xD2\v\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x07\x16\xE2\n\x16\f\x16\x0E\x16\xE5\v\x16\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x02\x02\x02\x19\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02\x02\x1B\x03\x02\x03" +
		"\x04\x03\x02\x05\x06\x03\x02\x07\b\x03\x02\t\n\x03\x02\v\f\x03\x02\r\x0E" +
		"\x03\x02\x0F\x10\x03\x02\x11\x12\x03\x02\x13\x14\x03\x02\x15\x16\x03\x02" +
		"\x17\x18\x03\x02\x19\x1A\x03\x02\x1B\x1C\x03\x02\x1D\x1E\x03\x02\x1F " +
		"\x03\x02!\"\x03\x02#$\x03\x02%&\x03\x02\'(\x04\x02))9:\x03\x02*+\x03\x02" +
		",-\x03\x02./\x03\x0223\x03\x0245\x02\xFB\x021\x03\x02\x02\x02\x047\x03" +
		"\x02\x02\x02\x06>\x03\x02\x02\x02\b@\x03\x02\x02\x02\nQ\x03\x02\x02\x02" +
		"\fs\x03\x02\x02\x02\x0E\x8F\x03\x02\x02\x02\x10\xA0\x03\x02\x02\x02\x12" +
		"\xA2\x03\x02\x02\x02\x14\xA4\x03\x02\x02\x02\x16\xA8\x03\x02\x02\x02\x18" +
		"\xAC\x03\x02\x02\x02\x1A\xAE\x03\x02\x02\x02\x1C\xB2\x03\x02\x02\x02\x1E" +
		"\xB6\x03\x02\x02\x02 \xB8\x03\x02\x02\x02\"\xBA\x03\x02\x02\x02$\xBE\x03" +
		"\x02\x02\x02&\xC9\x03\x02\x02\x02(\xD3\x03\x02\x02\x02*\xD7\x03\x02\x02" +
		"\x02,\xE6\x03\x02\x02\x02.\xEC\x03\x02\x02\x0202\x05\x04\x03\x0210\x03" +
		"\x02\x02\x0223\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x0245\x03" +
		"\x02\x02\x0256\x07\x02\x02\x036\x03\x03\x02\x02\x0278\x05\x06\x04\x02" +
		"89\x07;\x02\x029\x05\x03\x02\x02\x02:?\x05\b\x05\x02;?\x05\n\x06\x02<" +
		"?\x05\f\x07\x02=?\x05\x0E\b\x02>:\x03\x02\x02\x02>;\x03\x02\x02\x02><" +
		"\x03\x02\x02\x02>=\x03\x02\x02\x02?\x07\x03\x02\x02\x02@A\t\x02\x02\x02" +
		"AB\x07:\x02\x02BC\x05\x12\n\x02CD\x07:\x02\x02DE\t\x03\x02\x02EH\x07:" +
		"\x02\x02FI\x05\x14\v\x02GI\x05\x16\f\x02HF\x03\x02\x02\x02HG\x03\x02\x02" +
		"\x02IJ\x03\x02\x02\x02JK\x07:\x02\x02KL\t\x04\x02\x02LO\x07:\x02\x02M" +
		"P\x05\x14\v\x02NP\x05\x16\f\x02OM\x03\x02\x02\x02ON\x03\x02\x02\x02P\t" +
		"\x03\x02\x02\x02QR\t\x05\x02\x02RS\x07:\x02\x02ST\x05\x18\r\x02TU\x07" +
		":\x02\x02UV\t\x03\x02\x02V_\x07:\x02\x02W`\x05\x1C\x0F\x02X`\x05\"\x12" +
		"\x02Y`\x05$\x13\x02Z`\x05&\x14\x02[`\x05(\x15\x02\\`\x05*\x16\x02]`\x05" +
		",\x17\x02^`\x05.\x18\x02_W\x03\x02\x02\x02_X\x03\x02\x02\x02_Y\x03\x02" +
		"\x02\x02_Z\x03\x02\x02\x02_[\x03\x02\x02\x02_\\\x03\x02\x02\x02_]\x03" +
		"\x02\x02\x02_^\x03\x02\x02\x02`p\x03\x02\x02\x02ab\x07:\x02\x02bc\t\x04" +
		"\x02\x02cl\x07:\x02\x02dm\x05\x1C\x0F\x02em\x05\"\x12\x02fm\x05$\x13\x02" +
		"gm\x05&\x14\x02hm\x05(\x15\x02im\x05*\x16\x02jm\x05,\x17\x02km\x05.\x18" +
		"\x02ld\x03\x02\x02\x02le\x03\x02\x02\x02lf\x03\x02\x02\x02lg\x03\x02\x02" +
		"\x02lh\x03\x02\x02\x02li\x03\x02\x02\x02lj\x03\x02\x02\x02lk\x03\x02\x02" +
		"\x02mo\x03\x02\x02\x02na\x03\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02" +
		"\x02pq\x03\x02\x02\x02q\v\x03\x02\x02\x02rp\x03\x02\x02\x02st\t\x06\x02" +
		"\x02tu\x07:\x02\x02uv\x05\x18\r\x02vw\x07:\x02\x02wx\t\x07\x02\x02xy\x07" +
		":\x02\x02yz\t\b\x02\x02z{\x07:\x02\x02{\x8D\x05\x10\t\x02|}\x07:\x02\x02" +
		"}\x89\t\x03\x02\x02~\x87\x07:\x02\x02\x7F\x88\x05\x1A\x0E\x02\x80\x88" +
		"\x05\x1C\x0F\x02\x81\x82\x05\x1E\x10\x02\x82\x83\x07:\x02\x02\x83\x84" +
		"\t\x04\x02\x02\x84\x85\x07:\x02\x02\x85\x86\x05 \x11\x02\x86\x88\x03\x02" +
		"\x02\x02\x87\x7F\x03\x02\x02\x02\x87\x80\x03\x02\x02\x02\x87\x81\x03\x02" +
		"\x02\x02\x88\x8A\x03\x02\x02\x02\x89~\x03\x02\x02\x02\x8A\x8B\x03\x02" +
		"\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8E\x03\x02" +
		"\x02\x02\x8D|\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\r\x03\x02\x02" +
		"\x02\x8F\x90\t\t\x02\x02\x90\x91\x07:\x02\x02\x91\x92\x079\x02\x02\x92" +
		"\x93\x07:\x02\x02\x93\x94\x076\x02\x02\x94\x95\x07:\x02\x02\x95\x96\x07" +
		"9\x02\x02\x96\x97\x07:\x02\x02\x97\x98\t\n\x02\x02\x98\x99\x07:\x02\x02" +
		"\x99\x9A\x079\x02\x02\x9A\x0F\x03\x02\x02\x02\x9B\xA1\x03\x02\x02\x02" +
		"\x9C\xA1\t\v\x02\x02\x9D\xA1\t\f\x02\x02\x9E\xA1\t\r\x02\x02\x9F\xA1\t" +
		"\x0E\x02\x02\xA0\x9B\x03\x02\x02\x02\xA0\x9C\x03\x02\x02\x02\xA0\x9D\x03" +
		"\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\x11\x03" +
		"\x02\x02\x02\xA2\xA3\x079\x02\x02\xA3\x13\x03\x02\x02\x02\xA4\xA5\t\x0F" +
		"\x02\x02\xA5\xA6\x07:\x02\x02\xA6\xA7\x079\x02\x02\xA7\x15\x03\x02\x02" +
		"\x02\xA8\xA9\t\x10\x02\x02\xA9\xAA\x07:\x02\x02\xAA\xAB\x079\x02\x02\xAB" +
		"\x17\x03\x02\x02\x02\xAC\xAD\x079\x02\x02\xAD\x19\x03\x02\x02\x02\xAE" +
		"\xAF\t\x11\x02\x02\xAF\xB0\x07:\x02\x02\xB0\xB1\x079\x02\x02\xB1\x1B\x03" +
		"\x02\x02\x02\xB2\xB3\t\x12\x02\x02\xB3\xB4\x07:\x02\x02\xB4\xB5\x077\x02" +
		"\x02\xB5\x1D\x03\x02\x02\x02\xB6\xB7\x079\x02\x02\xB7\x1F\x03\x02\x02" +
		"\x02\xB8\xB9\x079\x02\x02\xB9!\x03\x02\x02\x02\xBA\xBB\t\x13\x02\x02\xBB" +
		"\xBC\x07:\x02\x02\xBC\xBD\x079\x02\x02\xBD#\x03\x02\x02\x02\xBE\xBF\t" +
		"\x14\x02\x02\xBF\xC0\x07:\x02\x02\xC0\xC4\x07<\x02\x02\xC1\xC3\t\x15\x02" +
		"\x02\xC2\xC1\x03\x02\x02\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02" +
		"\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC7\x03\x02\x02\x02\xC6\xC4\x03\x02\x02" +
		"\x02\xC7\xC8\x07<\x02\x02\xC8%\x03\x02\x02\x02\xC9\xCA\t\x16\x02\x02\xCA" +
		"\xCB\x07:\x02\x02\xCB\xD0\x079\x02\x02\xCC\xCD\x07)\x02\x02\xCD\xCF\x07" +
		"9\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xD2\x03\x02\x02\x02\xD0\xCE\x03" +
		"\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\'\x03\x02\x02\x02\xD2\xD0\x03" +
		"\x02\x02\x02\xD3\xD4\t\x17\x02\x02\xD4\xD5\x07:\x02\x02\xD5\xD6\x078\x02" +
		"\x02\xD6)\x03\x02\x02\x02\xD7\xD8\t\x18\x02\x02\xD8\xD9\x07:\x02\x02\xD9" +
		"\xDA\x079\x02\x02\xDA\xDB\x070\x02\x02\xDB\xDC\x079\x02\x02\xDC\xE3\x03" +
		"\x02\x02\x02\xDD\xDE\x071\x02\x02\xDE\xDF\x079\x02\x02\xDF\xE0\x070\x02" +
		"\x02\xE0\xE2\x079\x02\x02\xE1\xDD\x03\x02\x02\x02\xE2\xE5\x03\x02\x02" +
		"\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4+\x03\x02\x02" +
		"\x02\xE5\xE3\x03\x02\x02\x02\xE6\xE7\t\x19\x02\x02\xE7\xE8\x07:\x02\x02" +
		"\xE8\xE9\x079\x02\x02\xE9\xEA\x070\x02\x02\xEA\xEB\x079\x02\x02\xEB-\x03" +
		"\x02\x02\x02\xEC\xED\t\x1A\x02\x02\xED\xEE\x07:\x02\x02\xEE\xEF\x079\x02" +
		"\x02\xEF\xF0\x070\x02\x02\xF0\xF1\x079\x02\x02\xF1/\x03\x02\x02\x02\x10" +
		"3>HO_lp\x87\x8B\x8D\xA0\xC4\xD0\xE3";
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
	public defType(): DefTypeContext {
		return this.getRuleContext(0, DefTypeContext);
	}
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
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.WHITESPACE);
		} else {
			return this.getToken(InfluxParser.WHITESPACE, i);
		}
	}
	public QUOTE(): TerminalNode[];
	public QUOTE(i: number): TerminalNode;
	public QUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(InfluxParser.QUOTE);
		} else {
			return this.getToken(InfluxParser.QUOTE, i);
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


