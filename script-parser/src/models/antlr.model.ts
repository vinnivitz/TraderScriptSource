export type ANTLRItem = [string, Map<string, string>];

export type ANTLRTree = ANTLRItem[];

export type ANTLRParserItem = string | Map<string, string> | ANTLRParserItem[];
