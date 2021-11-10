// Generated from ./src/lib/antlr/Influx.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class InfluxLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48", 
		"T__49", "T__50", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
		"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
		"Z", "LOWERCASE", "UPPERCASE", "OPERATOR", "URL_STRING", "REQUESTMETHOD", 
		"LITERALS", "WHITESPACE", "NEWLINE", "QUOTE", "SYMBOL",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(InfluxLexer._LITERAL_NAMES, InfluxLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return InfluxLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(InfluxLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Influx.g4"; }

	// @Override
	public get ruleNames(): string[] { return InfluxLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return InfluxLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return InfluxLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return InfluxLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02=\u02B7\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'" +
		"\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03)" +
		"\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x030\x030\x031\x031\x031\x031\x03" +
		"1\x031\x031\x031\x031\x031\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
		"3\x033\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x035\x035\x036\x036\x037\x037\x038\x038\x039\x039\x03:\x03:\x03" +
		";\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03A\x03A\x03" +
		"B\x03B\x03C\x03C\x03D\x03D\x03E\x03E\x03F\x03F\x03G\x03G\x03H\x03H\x03" +
		"I\x03I\x03J\x03J\x03K\x03K\x03L\x03L\x03M\x03M\x03N\x03N\x03O\x03O\x03" +
		"P\x03P\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u025C\nR\x03R\x03" +
		"R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u0266\nR\x03R\x03R\x03R\x03R\x03" +
		"R\x06R\u026D\nR\rR\x0ER\u026E\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u0277" +
		"\nR\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u0282\nR\x03R\x03" +
		"R\x05R\u0286\nR\x03R\x03R\x03R\x06R\u028B\nR\rR\x0ER\u028C\x05R\u028F" +
		"\nR\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03" +
		"S\x05S\u029F\nS\x03T\x06T\u02A2\nT\rT\x0ET\u02A3\x03U\x06U\u02A7\nU\r" +
		"U\x0EU\u02A8\x03V\x05V\u02AC\nV\x03V\x03V\x06V\u02B0\nV\rV\x0EV\u02B1" +
		"\x03W\x03W\x03X\x03X\x02\x02\x02Y\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
		"\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
		"\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13" +
		"%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02" +
		"\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02" +
		"$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]" +
		"\x020_\x021a\x022c\x023e\x024g\x025i\x02\x02k\x02\x02m\x02\x02o\x02\x02" +
		"q\x02\x02s\x02\x02u\x02\x02w\x02\x02y\x02\x02{\x02\x02}\x02\x02\x7F\x02" +
		"\x02\x81\x02\x02\x83\x02\x02\x85\x02\x02\x87\x02\x02\x89\x02\x02\x8B\x02" +
		"\x02\x8D\x02\x02\x8F\x02\x02\x91\x02\x02\x93\x02\x02\x95\x02\x02\x97\x02" +
		"\x02\x99\x02\x02\x9B\x02\x02\x9D\x02\x02\x9F\x02\x02\xA1\x026\xA3\x02" +
		"7\xA5\x028\xA7\x029\xA9\x02:\xAB\x02;\xAD\x02<\xAF\x02=\x03\x02$\x04\x02" +
		"CCcc\x04\x02DDdd\x04\x02EEee\x04\x02FFff\x04\x02GGgg\x04\x02HHhh\x04\x02" +
		"IIii\x04\x02JJjj\x04\x02KKkk\x04\x02LLll\x04\x02MMmm\x04\x02NNnn\x04\x02" +
		"OOoo\x04\x02PPpp\x04\x02QQqq\x04\x02RRrr\x04\x02SSss\x04\x02TTtt\x04\x02" +
		"UUuu\x04\x02VVvv\x04\x02WWww\x04\x02XXxx\x04\x02YYyy\x04\x02ZZzz\x04\x02" +
		"[[{{\x04\x02\\\\||\x03\x02c|\x03\x02C\\\x04\x02>>@@\v\x02%%\'\'--/02<" +
		"B\\aac|\x80\x80\f\x02##%%\'\'--//2;A\\aac|\x80\x80\x04\x02\v\v\"\"\x04" +
		"\x02$$))\v\x02#\'))-1<<>>@B^^``\x80\x80\x02\u02AC\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
		"\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
		"\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02" +
		"\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02" +
		"\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)" +
		"\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02" +
		"\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02" +
		"K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02" +
		"\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02" +
		"\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03" +
		"\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02" +
		"\x02\x02g\x03\x02\x02\x02\x02\xA1\x03\x02\x02\x02\x02\xA3\x03\x02\x02" +
		"\x02\x02\xA5\x03\x02\x02\x02\x02\xA7\x03\x02\x02\x02\x02\xA9\x03\x02\x02" +
		"\x02\x02\xAB\x03\x02\x02\x02\x02\xAD\x03\x02\x02\x02\x02\xAF\x03\x02\x02" +
		"\x02\x03\xB1\x03\x02\x02\x02\x05\xB7\x03\x02\x02\x02\x07\xBD\x03\x02\x02" +
		"\x02\t\xC2\x03\x02\x02\x02\v\xC7\x03\x02\x02\x02\r\xCB\x03\x02\x02\x02" +
		"\x0F\xCF\x03\x02\x02\x02\x11\xD7\x03\x02\x02\x02\x13\xDF\x03\x02\x02\x02" +
		"\x15\xE4\x03\x02\x02\x02\x17\xE9\x03\x02\x02\x02\x19\xEC\x03\x02\x02\x02" +
		"\x1B\xEF\x03\x02\x02\x02\x1D\xF4\x03\x02\x02\x02\x1F\xF9\x03\x02\x02\x02" +
		"!\xFC\x03\x02\x02\x02#\xFF\x03\x02\x02\x02%\u0104\x03\x02\x02\x02\'\u0109" +
		"\x03\x02\x02\x02)\u010D\x03\x02\x02\x02+\u0111\x03\x02\x02\x02-\u0115" +
		"\x03\x02\x02\x02/\u0119\x03\x02\x02\x021\u011E\x03\x02\x02\x023\u0123" +
		"\x03\x02\x02\x025\u012C\x03\x02\x02\x027\u0135\x03\x02\x02\x029\u013E" +
		"\x03\x02\x02\x02;\u0147\x03\x02\x02\x02=\u0150\x03\x02\x02\x02?\u0159" +
		"\x03\x02\x02\x02A\u0160\x03\x02\x02\x02C\u0167\x03\x02\x02\x02E\u016B" +
		"\x03\x02\x02\x02G\u016F\x03\x02\x02\x02I\u0178\x03\x02\x02\x02K\u0181" +
		"\x03\x02\x02\x02M\u018D\x03\x02\x02\x02O\u0199\x03\x02\x02\x02Q\u019B" +
		"\x03\x02\x02\x02S\u01A4\x03\x02\x02\x02U\u01AD\x03\x02\x02\x02W\u01BB" +
		"\x03\x02\x02\x02Y\u01C9\x03\x02\x02\x02[\u01D8\x03\x02\x02\x02]\u01E7" +
		"\x03\x02\x02\x02_\u01E9\x03\x02\x02\x02a\u01EB\x03\x02\x02\x02c\u01F5" +
		"\x03\x02\x02\x02e\u01FF\x03\x02\x02\x02g\u020D\x03\x02\x02\x02i\u021B" +
		"\x03\x02\x02\x02k\u021D\x03\x02\x02\x02m\u021F\x03\x02\x02\x02o\u0221" +
		"\x03\x02\x02\x02q\u0223\x03\x02\x02\x02s\u0225\x03\x02\x02\x02u\u0227" +
		"\x03\x02\x02\x02w\u0229\x03\x02\x02\x02y\u022B\x03\x02\x02\x02{\u022D" +
		"\x03\x02\x02\x02}\u022F\x03\x02\x02\x02\x7F\u0231\x03\x02\x02\x02\x81" +
		"\u0233\x03\x02\x02\x02\x83\u0235\x03\x02\x02\x02\x85\u0237\x03\x02\x02" +
		"\x02\x87\u0239\x03\x02\x02\x02\x89\u023B\x03\x02\x02\x02\x8B\u023D\x03" +
		"\x02\x02\x02\x8D\u023F\x03\x02\x02\x02\x8F\u0241\x03\x02\x02\x02\x91\u0243" +
		"\x03\x02\x02\x02\x93\u0245\x03\x02\x02\x02\x95\u0247\x03\x02\x02\x02\x97" +
		"\u0249\x03\x02\x02\x02\x99\u024B\x03\x02\x02\x02\x9B\u024D\x03\x02\x02" +
		"\x02\x9D\u024F\x03\x02\x02\x02\x9F\u0251\x03\x02\x02\x02\xA1\u0253\x03" +
		"\x02\x02\x02\xA3\u0255\x03\x02\x02\x02\xA5\u029E\x03\x02\x02\x02\xA7\u02A1" +
		"\x03\x02\x02\x02\xA9\u02A6\x03\x02\x02\x02\xAB\u02AF\x03\x02\x02\x02\xAD" +
		"\u02B3\x03\x02\x02\x02\xAF\u02B5\x03\x02\x02\x02\xB1\xB2\x07c\x02\x02" +
		"\xB2\xB3\x07w\x02\x02\xB3\xB4\x07v\x02\x02\xB4\xB5\x07j\x02\x02\xB5\xB6" +
		"\x07<\x02\x02\xB6\x04\x03\x02\x02\x02\xB7\xB8\x07C\x02\x02\xB8\xB9\x07" +
		"W\x02\x02\xB9\xBA\x07V\x02\x02\xBA\xBB\x07J\x02\x02\xBB\xBC\x07<\x02\x02" +
		"\xBC\x06\x03\x02\x02\x02\xBD\xBE\x07y\x02\x02\xBE\xBF\x07k\x02\x02\xBF" +
		"\xC0\x07v\x02\x02\xC0\xC1\x07j\x02\x02\xC1\b\x03\x02\x02\x02\xC2\xC3\x07" +
		"Y\x02\x02\xC3\xC4\x07K\x02\x02\xC4\xC5\x07V\x02\x02\xC5\xC6\x07J\x02\x02" +
		"\xC6\n\x03\x02\x02\x02\xC7\xC8\x07c\x02\x02\xC8\xC9\x07p\x02\x02\xC9\xCA" +
		"\x07f\x02\x02\xCA\f\x03\x02\x02\x02\xCB\xCC\x07C\x02\x02\xCC\xCD\x07P" +
		"\x02\x02\xCD\xCE\x07F\x02\x02\xCE\x0E\x03\x02\x02\x02\xCF\xD0\x07e\x02" +
		"\x02\xD0\xD1\x07q\x02\x02\xD1\xD2\x07p\x02\x02\xD2\xD3\x07h\x02\x02\xD3" +
		"\xD4\x07k\x02\x02\xD4\xD5\x07i\x02\x02\xD5\xD6\x07<\x02\x02\xD6\x10\x03" +
		"\x02\x02\x02\xD7\xD8\x07E\x02\x02\xD8\xD9\x07Q\x02\x02\xD9\xDA\x07P\x02" +
		"\x02\xDA\xDB\x07H\x02\x02\xDB\xDC\x07K\x02\x02\xDC\xDD\x07I\x02\x02\xDD" +
		"\xDE\x07<\x02\x02\xDE\x12\x03\x02\x02\x02\xDF\xE0\x07f\x02\x02\xE0\xE1" +
		"\x07g\x02\x02\xE1\xE2\x07h\x02\x02\xE2\xE3\x07<\x02\x02\xE3\x14\x03\x02" +
		"\x02\x02\xE4\xE5\x07F\x02\x02\xE5\xE6\x07G\x02\x02\xE6\xE7\x07H\x02\x02" +
		"\xE7\xE8\x07<\x02\x02\xE8\x16\x03\x02\x02\x02\xE9\xEA\x07q\x02\x02\xEA" +
		"\xEB\x07h\x02\x02\xEB\x18\x03\x02\x02\x02\xEC\xED\x07Q\x02\x02\xED\xEE" +
		"\x07H\x02\x02\xEE\x1A\x03\x02\x02\x02\xEF\xF0\x07v\x02\x02\xF0\xF1\x07" +
		"{\x02\x02\xF1\xF2\x07r\x02\x02\xF2\xF3\x07g\x02\x02\xF3\x1C\x03\x02\x02" +
		"\x02\xF4\xF5\x07V\x02\x02\xF5\xF6\x07[\x02\x02\xF6\xF7\x07R\x02\x02\xF7" +
		"\xF8\x07G\x02\x02\xF8\x1E\x03\x02\x02\x02\xF9\xFA\x07k\x02\x02\xFA\xFB" +
		"\x07h\x02\x02\xFB \x03\x02\x02\x02\xFC\xFD\x07K\x02\x02\xFD\xFE\x07H\x02" +
		"\x02\xFE\"\x03\x02\x02\x02\xFF\u0100\x07v\x02\x02\u0100\u0101\x07j\x02" +
		"\x02\u0101\u0102\x07g\x02\x02\u0102\u0103\x07p\x02\x02\u0103$\x03\x02" +
		"\x02\x02\u0104\u0105\x07V\x02\x02\u0105\u0106\x07J\x02\x02\u0106\u0107" +
		"\x07G\x02\x02\u0107\u0108\x07P\x02\x02\u0108&\x03\x02\x02\x02\u0109\u010A" +
		"\x07g\x02\x02\u010A\u010B\x07o\x02\x02\u010B\u010C\x07c\x02\x02\u010C" +
		"(\x03\x02\x02\x02\u010D\u010E\x07G\x02\x02\u010E\u010F\x07O\x02\x02\u010F" +
		"\u0110\x07C\x02\x02\u0110*\x03\x02\x02\x02\u0111\u0112\x07t\x02\x02\u0112" +
		"\u0113\x07u\x02\x02\u0113\u0114\x07k\x02\x02\u0114,\x03\x02\x02\x02\u0115" +
		"\u0116\x07T\x02\x02\u0116\u0117\x07U\x02\x02\u0117\u0118\x07K\x02\x02" +
		"\u0118.\x03\x02\x02\x02\u0119\u011A\x07o\x02\x02\u011A\u011B\x07c\x02" +
		"\x02\u011B\u011C\x07e\x02\x02\u011C\u011D\x07f\x02\x02\u011D0\x03\x02" +
		"\x02\x02\u011E\u011F\x07O\x02\x02\u011F\u0120\x07C\x02\x02\u0120\u0121" +
		"\x07E\x02\x02\u0121\u0122\x07F\x02\x02\u01222\x03\x02\x02\x02\u0123\u0124" +
		"\x07g\x02\x02\u0124\u0125\x07p\x02\x02\u0125\u0126\x07f\x02\x02\u0126" +
		"\u0127\x07r\x02\x02\u0127\u0128\x07q\x02\x02\u0128\u0129\x07k\x02\x02" +
		"\u0129\u012A\x07p\x02\x02\u012A\u012B\x07v\x02\x02\u012B4\x03\x02\x02" +
		"\x02\u012C\u012D\x07G\x02\x02\u012D\u012E\x07P\x02\x02\u012E\u012F\x07" +
		"F\x02\x02\u012F\u0130\x07R\x02\x02\u0130\u0131\x07Q\x02\x02\u0131\u0132" +
		"\x07K\x02\x02\u0132\u0133\x07P\x02\x02\u0133\u0134\x07V\x02\x02\u0134" +
		"6\x03\x02\x02\x02\u0135\u0136\x07w\x02\x02\u0136\u0137\x07u\x02\x02\u0137" +
		"\u0138\x07g\x02\x02\u0138\u0139\x07t\x02\x02\u0139\u013A\x07p\x02\x02" +
		"\u013A\u013B\x07c\x02\x02\u013B\u013C\x07o\x02\x02\u013C\u013D\x07g\x02" +
		"\x02\u013D8\x03\x02\x02\x02\u013E\u013F\x07W\x02\x02\u013F\u0140\x07U" +
		"\x02\x02\u0140\u0141\x07G\x02\x02\u0141\u0142\x07T\x02\x02\u0142\u0143" +
		"\x07P\x02\x02\u0143\u0144\x07C\x02\x02\u0144\u0145\x07O\x02\x02\u0145" +
		"\u0146\x07G\x02\x02\u0146:\x03\x02\x02\x02\u0147\u0148\x07r\x02\x02\u0148" +
		"\u0149\x07c\x02\x02\u0149\u014A\x07u\x02\x02\u014A\u014B\x07u\x02\x02" +
		"\u014B\u014C\x07y\x02\x02\u014C\u014D\x07q\x02\x02\u014D\u014E\x07t\x02" +
		"\x02\u014E\u014F\x07f\x02\x02\u014F<\x03\x02\x02\x02\u0150\u0151\x07R" +
		"\x02\x02\u0151\u0152\x07C\x02\x02\u0152\u0153\x07U\x02\x02\u0153\u0154" +
		"\x07U\x02\x02\u0154\u0155\x07Y\x02\x02\u0155\u0156\x07Q\x02\x02\u0156" +
		"\u0157\x07T\x02\x02\u0157\u0158\x07F\x02\x02\u0158>\x03\x02\x02\x02\u0159" +
		"\u015A\x07r\x02\x02\u015A\u015B\x07g\x02\x02\u015B\u015C\x07t\x02\x02" +
		"\u015C\u015D\x07k\x02\x02\u015D\u015E\x07q\x02\x02\u015E\u015F\x07f\x02" +
		"\x02\u015F@\x03\x02\x02\x02\u0160\u0161\x07R\x02\x02\u0161\u0162\x07G" +
		"\x02\x02\u0162\u0163\x07T\x02\x02\u0163\u0164\x07K\x02\x02\u0164\u0165" +
		"\x07Q\x02\x02\u0165\u0166\x07F\x02\x02\u0166B\x03\x02\x02\x02\u0167\u0168" +
		"\x07w\x02\x02\u0168\u0169\x07t\x02\x02\u0169\u016A\x07n\x02\x02\u016A" +
		"D\x03\x02\x02\x02\u016B\u016C\x07W\x02\x02\u016C\u016D\x07T\x02\x02\u016D" +
		"\u016E\x07N\x02\x02\u016EF\x03\x02\x02\x02\u016F\u0170\x07k\x02\x02\u0170" +
		"\u0171\x07p\x02\x02\u0171\u0172\x07v\x02\x02\u0172\u0173\x07g\x02\x02" +
		"\u0173\u0174\x07t\x02\x02\u0174\u0175\x07x\x02\x02\u0175\u0176\x07c\x02" +
		"\x02\u0176\u0177\x07n\x02\x02\u0177H\x03\x02\x02\x02\u0178\u0179\x07K" +
		"\x02\x02\u0179\u017A\x07P\x02\x02\u017A\u017B\x07V\x02\x02\u017B\u017C" +
		"\x07G\x02\x02\u017C\u017D\x07T\x02\x02\u017D\u017E\x07X\x02\x02\u017E" +
		"\u017F\x07C\x02\x02\u017F\u0180\x07N\x02\x02\u0180J\x03\x02\x02\x02\u0181" +
		"\u0182\x07f\x02\x02\u0182\u0183\x07g\x02\x02\u0183\u0184\x07u\x02\x02" +
		"\u0184\u0185\x07e\x02\x02\u0185\u0186\x07t\x02\x02\u0186\u0187\x07k\x02" +
		"\x02\u0187\u0188\x07r\x02\x02\u0188\u0189\x07v\x02\x02\u0189\u018A\x07" +
		"k\x02\x02\u018A\u018B\x07q\x02\x02\u018B\u018C\x07p\x02\x02\u018CL\x03" +
		"\x02\x02\x02\u018D\u018E\x07F\x02\x02\u018E\u018F\x07G\x02\x02\u018F\u0190" +
		"\x07U\x02\x02\u0190\u0191\x07E\x02\x02\u0191\u0192\x07T\x02\x02\u0192" +
		"\u0193\x07K\x02\x02\u0193\u0194\x07R\x02\x02\u0194\u0195\x07V\x02\x02" +
		"\u0195\u0196\x07K\x02\x02\u0196\u0197\x07Q\x02\x02\u0197\u0198\x07P\x02" +
		"\x02\u0198N\x03\x02\x02\x02\u0199\u019A\x070\x02\x02\u019AP\x03\x02\x02" +
		"\x02\u019B\u019C\x07r\x02\x02\u019C\u019D\x07t\x02\x02\u019D\u019E\x07" +
		"k\x02\x02\u019E\u019F\x07e\x02\x02\u019F\u01A0\x07g\x02\x02\u01A0\u01A1" +
		"\x07m\x02\x02\u01A1\u01A2\x07g\x02\x02\u01A2\u01A3\x07{\x02\x02\u01A3" +
		"R\x03\x02\x02\x02\u01A4\u01A5\x07R\x02\x02\u01A5\u01A6\x07T\x02\x02\u01A6" +
		"\u01A7\x07K\x02\x02\u01A7\u01A8\x07E\x02\x02\u01A8\u01A9\x07G\x02\x02" +
		"\u01A9\u01AA\x07M\x02\x02\u01AA\u01AB\x07G\x02\x02\u01AB\u01AC\x07[\x02" +
		"\x02\u01ACT\x03\x02\x02\x02\u01AD\u01AE\x07t\x02\x02\u01AE\u01AF\x07g" +
		"\x02\x02\u01AF\u01B0\x07s\x02\x02\u01B0\u01B1\x07w\x02\x02\u01B1\u01B2" +
		"\x07g\x02\x02\u01B2\u01B3\x07u\x02\x02\u01B3\u01B4\x07v\x02\x02\u01B4" +
		"\u01B5\x07o\x02\x02\u01B5\u01B6\x07g\x02\x02\u01B6\u01B7\x07v\x02\x02" +
		"\u01B7\u01B8\x07j\x02\x02\u01B8\u01B9\x07q\x02\x02\u01B9\u01BA\x07f\x02" +
		"\x02\u01BAV\x03\x02\x02\x02\u01BB\u01BC\x07T\x02\x02\u01BC\u01BD\x07G" +
		"\x02\x02\u01BD\u01BE\x07S\x02\x02\u01BE\u01BF\x07W\x02\x02\u01BF\u01C0" +
		"\x07G\x02\x02\u01C0\u01C1\x07U\x02\x02\u01C1\u01C2\x07V\x02\x02\u01C2" +
		"\u01C3\x07O\x02\x02\u01C3\u01C4\x07G\x02\x02\u01C4\u01C5\x07V\x02\x02" +
		"\u01C5\u01C6\x07J\x02\x02\u01C6\u01C7\x07Q\x02\x02\u01C7\u01C8\x07F\x02" +
		"\x02\u01C8X\x03\x02\x02\x02\u01C9\u01CA\x07t\x02\x02\u01CA\u01CB\x07g" +
		"\x02\x02\u01CB\u01CC\x07s\x02\x02\u01CC\u01CD\x07w\x02\x02\u01CD\u01CE" +
		"\x07g\x02\x02\u01CE\u01CF\x07u\x02\x02\u01CF\u01D0\x07v\x02\x02\u01D0" +
		"\u01D1\x07j\x02\x02\u01D1\u01D2\x07g\x02\x02\u01D2\u01D3\x07c\x02\x02" +
		"\u01D3\u01D4\x07f\x02\x02\u01D4\u01D5\x07g\x02\x02\u01D5\u01D6\x07t\x02" +
		"\x02\u01D6\u01D7\x07u\x02\x02\u01D7Z\x03\x02\x02\x02\u01D8\u01D9\x07T" +
		"\x02\x02\u01D9\u01DA\x07G\x02\x02\u01DA\u01DB\x07S\x02\x02\u01DB\u01DC" +
		"\x07W\x02\x02\u01DC\u01DD\x07G\x02\x02\u01DD\u01DE\x07U\x02\x02\u01DE" +
		"\u01DF\x07V\x02\x02\u01DF\u01E0\x07J\x02\x02\u01E0\u01E1\x07G\x02\x02" +
		"\u01E1\u01E2\x07C\x02\x02\u01E2\u01E3\x07F\x02\x02\u01E3\u01E4\x07G\x02" +
		"\x02\u01E4\u01E5\x07T\x02\x02\u01E5\u01E6\x07U\x02\x02\u01E6\\\x03\x02" +
		"\x02\x02\u01E7\u01E8\x07<\x02\x02\u01E8^\x03\x02\x02\x02\u01E9\u01EA\x07" +
		".\x02\x02\u01EA`\x03\x02\x02\x02\u01EB\u01EC\x07d\x02\x02\u01EC\u01ED" +
		"\x07c\x02\x02\u01ED\u01EE\x07u\x02\x02\u01EE\u01EF\x07k\x02\x02\u01EF" +
		"\u01F0\x07e\x02\x02\u01F0\u01F1\x07c\x02\x02\u01F1\u01F2\x07w\x02\x02" +
		"\u01F2\u01F3\x07v\x02\x02\u01F3\u01F4\x07j\x02\x02\u01F4b\x03\x02\x02" +
		"\x02\u01F5\u01F6\x07D\x02\x02\u01F6\u01F7\x07C\x02\x02\u01F7\u01F8\x07" +
		"U\x02\x02\u01F8\u01F9\x07K\x02\x02\u01F9\u01FA\x07E\x02\x02\u01FA\u01FB" +
		"\x07C\x02\x02\u01FB\u01FC\x07W\x02\x02\u01FC\u01FD\x07V\x02\x02\u01FD" +
		"\u01FE\x07J\x02\x02\u01FEd\x03\x02\x02\x02\u01FF\u0200\x07t\x02\x02\u0200" +
		"\u0201\x07g\x02\x02\u0201\u0202\x07s\x02\x02\u0202\u0203\x07w\x02\x02" +
		"\u0203\u0204\x07g\x02\x02\u0204\u0205\x07u\x02\x02\u0205\u0206\x07v\x02" +
		"\x02\u0206\u0207\x07r\x02\x02\u0207\u0208\x07c\x02\x02\u0208\u0209\x07" +
		"t\x02\x02\u0209\u020A\x07c\x02\x02\u020A\u020B\x07o\x02\x02\u020B\u020C" +
		"\x07u\x02\x02\u020Cf\x03\x02\x02\x02\u020D\u020E\x07T\x02\x02\u020E\u020F" +
		"\x07G\x02\x02\u020F\u0210\x07S\x02\x02\u0210\u0211\x07W\x02\x02\u0211" +
		"\u0212\x07G\x02\x02\u0212\u0213\x07U\x02\x02\u0213\u0214\x07V\x02\x02" +
		"\u0214\u0215\x07R\x02\x02\u0215\u0216\x07C\x02\x02\u0216\u0217\x07T\x02" +
		"\x02\u0217\u0218\x07C\x02\x02\u0218\u0219\x07O\x02\x02\u0219\u021A\x07" +
		"U\x02\x02\u021Ah\x03\x02\x02\x02\u021B\u021C\t\x02\x02\x02\u021Cj\x03" +
		"\x02\x02\x02\u021D\u021E\t\x03\x02\x02\u021El\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u021F\u0220\t\x04\x02\x02\u0220n\x03\x02\x02\x02\u0221\u0222" +
		"\t\x05\x02\x02\u0222p\x03\x02\x02\x02\u0223\u0224\t\x06\x02\x02\u0224" +
		"r\x03\x02\x02\x02\u0225\u0226\t\x07\x02\x02\u0226t\x03\x02\x02\x02\u0227" +
		"\u0228\t\b\x02\x02\u0228v\x03\x02\x02\x02\u0229\u022A\t\t\x02\x02\u022A" +
		"x\x03\x02\x02\x02\u022B\u022C\t\n\x02\x02\u022Cz\x03\x02\x02\x02\u022D" +
		"\u022E\t\v\x02\x02\u022E|\x03\x02\x02\x02\u022F\u0230\t\f\x02\x02\u0230" +
		"~\x03\x02\x02\x02\u0231\u0232\t\r\x02\x02\u0232\x80\x03\x02\x02\x02\u0233" +
		"\u0234\t\x0E\x02\x02\u0234\x82\x03\x02\x02\x02\u0235\u0236\t\x0F\x02\x02" +
		"\u0236\x84\x03\x02\x02\x02\u0237\u0238\t\x10\x02\x02\u0238\x86\x03\x02" +
		"\x02\x02\u0239\u023A\t\x11\x02\x02\u023A\x88\x03\x02\x02\x02\u023B\u023C" +
		"\t\x12\x02\x02\u023C\x8A\x03\x02\x02\x02\u023D\u023E\t\x13\x02\x02\u023E" +
		"\x8C\x03\x02\x02\x02\u023F\u0240\t\x14\x02\x02\u0240\x8E\x03\x02\x02\x02" +
		"\u0241\u0242\t\x15\x02\x02\u0242\x90\x03\x02\x02\x02\u0243\u0244\t\x16" +
		"\x02\x02\u0244\x92\x03\x02\x02\x02\u0245\u0246\t\x17\x02\x02\u0246\x94" +
		"\x03\x02\x02\x02\u0247\u0248\t\x18\x02\x02\u0248\x96\x03\x02\x02\x02\u0249" +
		"\u024A\t\x19\x02\x02\u024A\x98\x03\x02\x02\x02\u024B\u024C\t\x1A\x02\x02" +
		"\u024C\x9A\x03\x02\x02\x02\u024D\u024E\t\x1B\x02\x02\u024E\x9C\x03\x02" +
		"\x02\x02\u024F\u0250\t\x1C\x02\x02\u0250\x9E\x03\x02\x02\x02\u0251\u0252" +
		"\t\x1D\x02\x02\u0252\xA0\x03\x02\x02\x02\u0253\u0254\t\x1E\x02\x02\u0254" +
		"\xA2\x03\x02\x02\x02\u0255\u0256\x07j\x02\x02\u0256\u0257\x07v\x02\x02" +
		"\u0257\u0258\x07v\x02\x02\u0258\u0259\x07r\x02\x02\u0259\u025B\x03\x02" +
		"\x02\x02\u025A\u025C\x07u\x02\x02\u025B\u025A\x03\x02\x02\x02\u025B\u025C" +
		"\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025E\x07<\x02\x02" +
		"\u025E\u025F\x071\x02\x02\u025F\u0260\x071\x02\x02\u0260\u0265\x03\x02" +
		"\x02\x02\u0261\u0262\x07y\x02\x02\u0262\u0263\x07y\x02\x02\u0263\u0264" +
		"\x07y\x02\x02\u0264\u0266\x070\x02\x02\u0265\u0261\x03\x02\x02\x02\u0265" +
		"\u0266\x03\x02\x02\x02\u0266\u0281\x03\x02\x02\x02\u0267\u026D\x05\xA7" +
		"T\x02\u0268\u0269\x05\xA7T\x02\u0269\u026A\x070\x02\x02\u026A\u026B\x05" +
		"\xA7T\x02\u026B\u026D\x03\x02\x02\x02\u026C\u0267\x03\x02\x02\x02\u026C" +
		"\u0268\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026C\x03\x02" +
		"\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270" +
		"\u0276\x070\x02\x02\u0271\u0272\t\x1C\x02\x02\u0272\u0277\t\x1C\x02\x02" +
		"\u0273\u0274\t\x1C\x02\x02\u0274\u0275\t\x1C\x02\x02\u0275\u0277\t\x1C" +
		"\x02\x02\u0276\u0271\x03\x02\x02\x02\u0276\u0273\x03\x02\x02\x02\u0277" +
		"\u0282\x03\x02\x02\x02\u0278\u0279\x07n\x02\x02\u0279\u027A\x07q\x02\x02" +
		"\u027A\u027B\x07e\x02\x02\u027B\u027C\x07c\x02\x02\u027C\u027D\x07n\x02" +
		"\x02\u027D\u027E\x07j\x02\x02\u027E\u027F\x07q\x02\x02\u027F\u0280\x07" +
		"u\x02\x02\u0280\u0282\x07v\x02\x02\u0281\u026C\x03\x02\x02\x02\u0281\u0278" +
		"\x03\x02\x02\x02\u0282\u0285\x03\x02\x02\x02\u0283\u0284\x07<\x02\x02" +
		"\u0284\u0286\x05\xA7T\x02\u0285\u0283\x03\x02\x02\x02\u0285\u0286\x03" +
		"\x02\x02\x02\u0286\u028E\x03\x02\x02\x02\u0287\u028F\x071\x02\x02\u0288" +
		"\u028A\x071\x02\x02\u0289\u028B\t\x1F\x02\x02\u028A\u0289\x03\x02\x02" +
		"\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D" +
		"\x03\x02\x02\x02\u028D\u028F\x03\x02\x02\x02\u028E\u0287\x03\x02\x02\x02" +
		"\u028E\u0288\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\xA4\x03" +
		"\x02\x02\x02\u0290\u0291\x07I\x02\x02\u0291\u0292\x07G\x02\x02\u0292\u029F" +
		"\x07V\x02\x02\u0293\u0294\x07R\x02\x02\u0294\u0295\x07Q\x02\x02\u0295" +
		"\u0296\x07U\x02\x02\u0296\u029F\x07V\x02\x02\u0297\u0298\x07i\x02\x02" +
		"\u0298\u0299\x07g\x02\x02\u0299\u029F\x07v\x02\x02\u029A\u029B\x07r\x02" +
		"\x02\u029B\u029C\x07q\x02\x02\u029C\u029D\x07u\x02\x02\u029D\u029F\x07" +
		"v\x02\x02\u029E\u0290\x03\x02\x02\x02\u029E\u0293\x03\x02\x02\x02\u029E" +
		"\u0297\x03\x02\x02\x02\u029E\u029A\x03\x02\x02\x02\u029F\xA6\x03\x02\x02" +
		"\x02\u02A0\u02A2\t \x02\x02\u02A1\u02A0\x03\x02\x02\x02\u02A2\u02A3\x03" +
		"\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4" +
		"\xA8\x03\x02\x02\x02\u02A5\u02A7\t!\x02\x02\u02A6\u02A5\x03\x02\x02\x02" +
		"\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03" +
		"\x02\x02\x02\u02A9\xAA\x03\x02\x02\x02\u02AA\u02AC\x07\x0F\x02\x02\u02AB" +
		"\u02AA\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AD\x03\x02" +
		"\x02\x02\u02AD\u02B0\x07\f\x02\x02\u02AE\u02B0\x07\x0F\x02\x02\u02AF\u02AB" +
		"\x03\x02\x02\x02\u02AF\u02AE\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02" +
		"\u02B1\u02AF\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\xAC\x03" +
		"\x02\x02\x02\u02B3\u02B4\t\"\x02\x02\u02B4\xAE\x03\x02\x02\x02\u02B5\u02B6" +
		"\t#\x02\x02\u02B6\xB0\x03\x02\x02\x02\x12\x02\u025B\u0265\u026C\u026E" +
		"\u0276\u0281\u0285\u028C\u028E\u029E\u02A3\u02A8\u02AB\u02AF\u02B1\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			InfluxLexer._serializedATNSegment0,
			InfluxLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!InfluxLexer.__ATN) {
			InfluxLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(InfluxLexer._serializedATN));
		}

		return InfluxLexer.__ATN;
	}

}

