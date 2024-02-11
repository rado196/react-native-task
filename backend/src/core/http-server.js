import express from 'express';
import cors from 'cors';

const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10mb' }));
app.use(
  cors({
    credentials: true,
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    exposedHeaders: [],
  })
);
app.set('trust proxy', 1);

// error handling
function respondHttpError(req, res, code, error) {
  if (req.accepts('html')) {
    return res.status(code).type('html').send(`<h1>${error}</h1>`);
  }
  if (req.accepts('json')) {
    return res.status(code).json({
      error: `core.${error}`,
    });
  }
  res.status(code).type('txt').send(error);
}

function postRegisterRouter() {
  app.use((req, res, next) => {
    respondHttpError(req, res, 404, 'NotFound');
  });
  app.use((error, req, res, next) => {
    respondHttpError(req, res, 500, 'InternalServerError');
  });
}

// start server
const port = process.env.NODE_PORT || process.env.PORT || 3000;

export default function connect() {
  return new Promise((resolve, reject) => {
    try {
      app.listen(port, () => {
        resolve({
          port: port,
          app: app,
          postRegisterRouter: postRegisterRouter,
        });
      });
    } catch (e) {
      reject(e);
    }
  });
}
