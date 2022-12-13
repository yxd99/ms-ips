const handler = (message, statusCode) => ({
  message,
  statusCode
});

exports.BAD_REQUEST = (message) => handler(message, 400);
exports.UNAUTHORIZED = (message) => handler(message, 403);
exports.NOT_FOUND = (message) => handler(message, 404);
