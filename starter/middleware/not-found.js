const notFound = (req, res) => {
  res.status(404).send(`<h1>404</h1><h4>Route does not exist</h4>`);
};

module.exports = notFound;
