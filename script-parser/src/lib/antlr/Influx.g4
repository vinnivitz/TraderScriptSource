grammar Influx;

/*
 * Parser Rules
 */

influx: line+ EOF;

line: command NEWLINE;

command: (auth | config | definition | condition);

auth:
	AUTH WHITESPACE organization WHITESPACE WITH WHITESPACE (
		username
		| password
	) WHITESPACE AND WHITESPACE (username | password);

config:
	CONFIG WHITESPACE name WHITESPACE WITH WHITESPACE (
		url
		| interval
		| description
		| pricekey
		| requestMethod
		| requestHeaders
		| requestBasicAuth
		| requestParams
	) (
		WHITESPACE AND WHITESPACE (
			url
			| interval
			| description
			| pricekey
			| requestMethod
			| requestHeaders
			| requestBasicAuth
			| requestParams
		)
	)*;

definition:
	DEF WHITESPACE name WHITESPACE OF WHITESPACE TYPE WHITESPACE defType (
		WHITESPACE WITH (
			WHITESPACE (
				period
				| url
				| (ema1 WHITESPACE AND WHITESPACE ema2)
			)
		)+
	)?;

condition:
	IF WHITESPACE LITERALS WHITESPACE OPERATOR WHITESPACE LITERALS WHITESPACE THEN WHITESPACE
		LITERALS;

defType: ( | EMA | RSI | MACD | ENDPOINT);

organization: LITERALS;

username: USERNAME WHITESPACE LITERALS;

password: PASSWORD WHITESPACE LITERALS;

name: LITERALS;

period: PERIOD WHITESPACE LITERALS;

url: URL WHITESPACE URL_STRING;

ema1: LITERALS;

ema2: LITERALS;

interval: INTERVAL WHITESPACE LITERALS;

description: DESCRIPTION WHITESPACE TEXT;

pricekey: PRICEKEY WHITESPACE LITERALS ( '.' LITERALS)*;

requestMethod: METHOD WHITESPACE REQUESTMETHOD;

requestHeaders:
	HEADERS WHITESPACE (
		(LITERALS ':' TEXT) (',' LITERALS ':' TEXT)*
	);

requestBasicAuth: BASICAUTH WHITESPACE LITERALS ':' LITERALS;

requestParams:
	PARAMS WHITESPACE (
		(LITERALS ':' TEXT) (',' LITERALS ':' TEXT)*
	);

/*
 * Lexer Rules
 */

fragment A: ('A' | 'a');
fragment B: ('B' | 'b');
fragment C: ('C' | 'c');
fragment D: ('D' | 'd');
fragment E: ('E' | 'e');
fragment F: ('F' | 'f');
fragment G: ('G' | 'g');
fragment H: ('H' | 'h');
fragment I: ('I' | 'i');
fragment J: ('J' | 'j');
fragment K: ('K' | 'k');
fragment L: ('L' | 'l');
fragment M: ('M' | 'm');
fragment N: ('N' | 'n');
fragment O: ('O' | 'o');
fragment P: ('P' | 'p');
fragment Q: ('Q' | 'q');
fragment R: ('R' | 'r');
fragment S: ('S' | 's');
fragment T: ('T' | 't');
fragment U: ('U' | 'u');
fragment V: ('V' | 'v');
fragment W: ('W' | 'w');
fragment X: ('X' | 'x');
fragment Y: ('Y' | 'y');
fragment Z: ('Z' | 'z');

fragment LOWERCASE: [a-z];
fragment UPPERCASE: [A-Z];

AUTH: A U T H ':';
CONFIG: C O N F I G ':';
DEF: D E F ':';
IF: I F;
WITH: W I T H;
AND: A N D;
OF: O F;
THEN: T H E N;
TYPE: T Y P E;
EMA: E M A;
RSI: R S I;
MACD: M A C D;
ENDPOINT: E N D P O I N T;
USERNAME: U S E R N A M E;
PASSWORD: P A S S W O R D;
URL: U R L;
PERIOD: P E R I O D;
INTERVAL: I N T E R V A L;
DESCRIPTION: D E S C R I P T I O N;
PRICEKEY: P R I C E K E Y;
METHOD: M E T H O D;
HEADERS: H E A D E R S;
BASICAUTH: B A S I C A U T H;
PARAMS: P A R A M S;

OPERATOR: ('>' | '<');

URL_STRING: ('http' ('s')? '://') ('www.')? (
		(LITERALS | (LITERALS ('.') LITERALS))+ ('.') (
			([a-z] [a-z])
			| ([a-z] [a-z] [a-z])
		)
		| 'localhost'
		| '127.0.0.1'
	) (':' LITERALS)? ('/' | ('/' LITERALS+))?;

REQUESTMETHOD: ( 'GET' | 'POST' | 'get' | 'post');

TEXT: QUOTE ( LITERALS | WHITESPACE | '.')* QUOTE;

LITERALS: ([-a-zA-Z0-9@%_+~#?!])+;

WHITESPACE: (' ' | '\t')+;

NEWLINE: ('\r'? '\n' | '\r')+;

QUOTE: ('"' | '\'');

