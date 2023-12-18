const cryto = require('crypto')

function md5password(password) {
  const md5 = cryto.createHash('md5')

  const md5pwd = md5.update(password).digest('hex')
  return md5pwd
}

module.exports = md5password 