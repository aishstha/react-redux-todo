import cors from 'cors';
import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

import { connectDb } from './db';
import { genericErrorHandler } from './middlewares/todoMiddleWare';
import { Error404Handler } from './middlewares/todoMiddleWare';

const PORT = 3012;
let app = express();

connectDb();

app.set('port', PORT);
app.use(bodyParser.json());
app.use(cors());

app.get('/', (request, response) => response.send('hello Ppl'));
app.use('/api', routes);

app.use(genericErrorHandler);
app.use(Error404Handler);

app.listen(app.get('port'), () => {
  console.log(`Node App is running on port :${PORT}`);
});
