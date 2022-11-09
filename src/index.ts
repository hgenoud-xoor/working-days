import express, { json } from 'express';
import 'reflect-metadata';
import router from './router';

const port = 5000;
const app = express();
app.use(json());

app.use(router);
app.listen(port, () => {
  return console.log(`Server running on port ${port}`);
});
