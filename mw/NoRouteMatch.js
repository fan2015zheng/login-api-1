function mwNoRouteMatch (req, res, next) {
  res.send({ok: false, error: 'No route matches'})
}

module.exports = mwNoRouteMatch