function send(res, response, metadata, statusCode) {
  return res.status(statusCode).json({
    response: response,
    metadata: metadata,
  });
}

export function ok(res, response = {}, metadata = {}) {
  return send(res, response, metadata, 200);
}
export function created(res, response = {}, metadata = {}) {
  return send(res, response, metadata, 201);
}
export function badRequest(res, response = {}, metadata = {}) {
  return send(res, response, metadata, 400);
}
export function unauthorized(res, response = {}, metadata = {}) {
  return send(res, response, metadata, 401);
}
export function forbidden(res, response = {}, metadata = {}) {
  return send(res, response, metadata, 403);
}
export function notFound(res, response = {}, metadata = {}) {
  return send(res, response, metadata, 404);
}
export function methodNotAllowed(res, response = {}, metadata = {}) {
  return send(res, response, metadata, 405);
}
export function conflict(res, response = {}, metadata = {}) {
  return send(res, response, metadata, 409);
}
export function tooManyRequests(res, response = {}, metadata = {}) {
  return send(res, response, metadata, 429);
}
export function internalServerError(res, response = {}, metadata = {}) {
  return send(res, response, metadata, 500);
}
export function notImplemented(res, response = {}, metadata = {}) {
  return send(res, response, metadata, 501);
}
export function serviceUnavailable(res, response = {}, metadata = {}) {
  return send(res, response, metadata, 503);
}
