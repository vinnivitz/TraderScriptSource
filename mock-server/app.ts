import express from 'express';
import { Request, Response } from 'express';
import { readFileSync } from 'fs';

const app = express();
const PORT = process.env.MOCK_SERVER_PORT  ?? 3001;

let request_counter = 0;

app.get('/', (req: Request, res: Response) => {
  console.log(`request count ${request_counter}`);
  const data = JSON.parse(readFileSync('data.json').toString());
  request_counter++;
  res.send([data.prices[request_counter]]);
});

app.post('/test1', (req: Request, res: Response) => {
  console.log('test1');
  res.end();
});

app.post('/test2', (req: Request, res: Response) => {
  console.log('test2');
  res.end();
});

app.post('/test3', (req: Request, res: Response) => {
  console.log('test3');
  res.end();
});

app.post('/test4', (req: Request, res: Response) => {
  console.log('test4');
  res.end();
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
