export enum SCRIPT_TYPE {
  EMA = 'ema',
  STOCK = 'stock',
  RSI = 'rsi',
  MACD = 'macd',
  ENDPOINT = 'endpoint',
  CHECK = 'check',
  DOWNSAMPLING = 'downsampling',
  TELEGRAF = 'telegraf'
}

export interface IndicatorData {
  type: SCRIPT_TYPE;
  period?: string;
  data: string;
}
