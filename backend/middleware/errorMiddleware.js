const errorMiddleware = (err, req, res, next) => {
  const status = 500;
  res.status(status).json({
    message: err.message,
    error: (process.env.NODE_ENV = "development" ? err.stack : null),
  });
};

module.exports = { errorMiddleware };
