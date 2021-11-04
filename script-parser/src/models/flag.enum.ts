export enum FLAG {
  URL = 'url',
  /**
   * interval that indicates how often new data is fetched, querys and checks are executed, etc.
   */
  INTERVAL = 'interval',
  INFLUX_TOKEN = 'influxtoken',
  INFLUX_ORGANIZATION = 'influxorganization',
  INFLUX_BUCKET = 'influxbucket',
  PRICE_KEY = 'pricekey',
  NAME = 'name',
  REQUEST_METHOD = 'requestmethod',
  REQUEST_HEADERS = 'requestheaders',
  REQUEST_BASIC_AUTH = 'requestbasicauth',
  TYPE = 'type',
  PERIOD = 'period',
  /**
   * EMA indicator for calculating MACD
   */
  EMA1 = 'ema1',
  /**
   * EMA indicator for calculating MACD
   */
  EMA2 = 'ema2',
  /**
   * indicator to compare with another
   */
  INDICATOR1 = 'indicator1',
  /**
   * indicator to compare with another
   */
  INDICATOR2 = 'indicator2',
  SCRIPT1 = 'script1',
  SCRIPT2 = 'script2',
  ENDPOINT = 'endpoint',
  LOGICAL_OPERATOR = 'operator',
  USERNAME = 'username',
  PASSWORD = 'password',
  REQUEST_PARAMS = 'requestparams',
  INFLUX_PORT = 'influxport',
  INFLUX_MEASUREMENT = 'influxmeasurement',
  INFLUX_TASK = 'influxtask',
  STOCK = 'stock'
}
