const errorMiddleware = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    error: (process.env.NODE_ENV = "development" ? err.stack : null),
  });
};

module.exports = { errorMiddleware };
