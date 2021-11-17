import { FLAG } from './flag.enum';
import { COMMAND } from './command.enum';

export type ANTLRFlags = Map<FLAG, string>;

export type ANTLRItem = [COMMAND, Map<string, string>];

export type ANTLRTree = ANTLRItem[];

export type ANTLRParserItem = string | ANTLRFlags | ANTLRParserItem[];
