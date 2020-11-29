function mwLogOut (req, res, next) {
  res.send({ok: true, success: 'Log out successfully'})
}

module.exports = mwLogOut