module.exports = (err, req, res, next) => {
  console.log("error");
  res.status(500).send(err);
};
