import { IndicatorData, Metadata } from './';

export interface Globals {
  metaData: Metadata;
  indicators: Map<string, IndicatorData>;
}
