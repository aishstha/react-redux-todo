import { Client } from 'pg';

let connectionObject = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'tododb',
  password: 'password',
  port: 5432
};

let client;

export function connectDb() {
  client = new Client(connectionObject);

  return client.connect();
}

export function getClient() {
  if (client) {
    return client;
  }

  return connectDb();
}
