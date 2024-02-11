import path from 'node:path';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const filePath = path.join(__dirname, '..', '..', '.env');
dotenvExpand.expand(dotenv.config({ path: filePath }));

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
