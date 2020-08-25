import express = require('express');
import { Company } from './company';
const app: express.Application = express();

const apisInc: Company = new Company();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Listening on port: 3000!');
});
