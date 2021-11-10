grammar Influx;

/*
 * Parser Rules
 */

influx: line+ EOF;

line: command NEWLINE;

command: (auth | config | definition | condition);

auth: ('auth:' | 'AUTH:') WHITESPACE organization WHITESPACE (
		'with'
		| 'WITH'
	) WHITESPACE (username | password) WHITESPACE ('and' | 'AND') WHITESPACE (
		username
		| password
	);

config:
	('config:' | 'CONFIG:') WHITESPACE name WHITESPACE (
		'with'
		| 'WITH'
	) WHITESPACE (
		url
		| interval
		| description
		| pricekey
		| requestMethod
		| requestHeaders
		| requestBasicAuth
		| requestParams
	) (
		WHITESPACE ('and' | 'AND') WHITESPACE (
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
	('def:' | 'DEF:') WHITESPACE name WHITESPACE ('of' | 'OF') WHITESPACE (
		'type'
		| 'TYPE'
	) WHITESPACE defType (
		WHITESPACE ('with' | 'WITH') (
			WHITESPACE (
				period
				| url
				| (ema1 WHITESPACE ('and' | 'AND') WHITESPACE ema2)
			)
		)+
	)?;

condition:
	('if' | 'IF') WHITESPACE LITERALS WHITESPACE OPERATOR WHITESPACE LITERALS WHITESPACE (
		'then'
		| 'THEN'
	) WHITESPACE LITERALS;

defType: (
		| ('ema' | 'EMA')
		| ('rsi' | 'RSI')
		| ('macd' | 'MACD')
		| ('endpoint' | 'ENDPOINT')
	);

organization: LITERALS;

username: ('username' | 'USERNAME') WHITESPACE LITERALS;

password: ('password' | 'PASSWORD') WHITESPACE LITERALS;

name: LITERALS;

period: ('period' | 'PERIOD') WHITESPACE LITERALS;

url: ('url' | 'URL') WHITESPACE URL_STRING;

ema1: LITERALS;

ema2: LITERALS;

interval: ('interval' | 'INTERVAL') WHITESPACE LITERALS;

description:
	('description' | 'DESCRIPTION') WHITESPACE QUOTE (
		LITERALS
		| WHITESPACE
		| '.'
	)* QUOTE;

pricekey: ('pricekey' | 'PRICEKEY') WHITESPACE LITERALS (
		'.' LITERALS
	)*;

requestMethod: ('requestmethod' | 'REQUESTMETHOD') WHITESPACE REQUESTMETHOD;

requestHeaders:
	('requestheaders' | 'REQUESTHEADERS') WHITESPACE (
		(LITERALS ':' LITERALS) (',' LITERALS ':' LITERALS)*
	);

requestBasicAuth: ('basicauth' | 'BASICAUTH') WHITESPACE LITERALS ':' LITERALS;

requestParams: ('requestparams' | 'REQUESTPARAMS') WHITESPACE LITERALS ':' LITERALS;

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

OPERATOR: ('>' | '<');

URL_STRING: ('http' ('s')? '://') ('www.')? (
		(LITERALS | (LITERALS ('.') LITERALS))+ ('.') (
			([a-z] [a-z])
			| ([a-z] [a-z] [a-z])
		)
		| 'localhost'
	) (':' LITERALS)? ('/' | ('/' ([-a-zA-Z0-9@:%._+~#])+))?;

REQUESTMETHOD: ( 'GET' | 'POST' | 'get' | 'post');

LITERALS: ([-a-zA-Z0-9@%_+~#?!])+;

WHITESPACE: (' ' | '\t')+;

NEWLINE: ('\r'? '\n' | '\r')+;

QUOTE: ('"' | '\'');

SYMBOL:
	'~'
	| '!'
	| '@'
	| '#'
	| '$'
	| '%'
	| '^'
	| '-'
	| '+'
	| '\\'
	| ':'
	| '"'
	| '\''
	| '<'
	| '>'
	| ','
	| '.'
	| '?'
	| '/';
