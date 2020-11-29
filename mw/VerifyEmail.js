function mwVerifyEmail (req, res, next) {
  res.send({ok: true, success: 'Verify email successfully'})
}

module.exports = mwVerifyEmail