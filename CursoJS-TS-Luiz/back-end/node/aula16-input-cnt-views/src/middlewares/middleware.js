exports.middlewareGlobal = (req, res, next) => {
  res.locals.variavelLocal = "Este é o valor da variável local.";
  next();
};
