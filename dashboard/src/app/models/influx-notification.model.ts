export interface InfluxNotification {
  'check_type\r': string;
  _time: string;
  _sent: boolean;
  _value: string;
}
