import mongoose from 'mongoose';

let connection = null;
export function getConnection() {
  return connection;
}

function buildDbConnectionUri() {
  const { DB_HOSTNAME, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } =
    process.env;

  let host = `${DB_HOSTNAME}:${DB_PORT}`;
  if (DB_USERNAME) {
    let auth = DB_USERNAME;
    if (DB_PASSWORD) {
      auth += `:${DB_PASSWORD}`;
    }

    host = `${auth}@${host}`;
  }

  return `mongodb://${host}/${DB_DATABASE}`;
}

export async function connect() {
  const connectionUri = buildDbConnectionUri();

  // eslint-disable-next-line no-console
  console.log(`>>> connecting via ${connectionUri}`);

  connection = await mongoose.connect(connectionUri, {
    // options ...
  });
}
