import { COMMAND, FLAG } from './';

export type ANTLRFlags = Map<FLAG, string>;

export type ANTLRItem = [COMMAND, Map<string, string>];

export type ANTLRTree = ANTLRItem[];

export type ANTLRParserItem = string | ANTLRFlags | ANTLRParserItem[];
