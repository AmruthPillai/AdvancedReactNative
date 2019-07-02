/* eslint-disable promise/no-nesting */
/* eslint-disable promise/always-return */

const admin = require('firebase-admin')
const sendSMS = require('./send_sms')

module.exports = function (req, res) {
  if (!req.body.phone) {
    return res.status(422).send({
      error: 'You must provide a phone number'
    })
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '')

  admin.auth().getUser(phone)
    .then(() => {
      const code = Math.floor(Math.random() * 8999 + 1000)

      sendSMS(phone, code)
        .then(() => {
          admin.database().ref(`/users/${phone}`)
            .update({ code: code, codeValid: true }, () => {
              return res.send({ success: true })
            })
        })
        .catch(() => {
          return res.status(500).send({
            error: 'Could not send OTP'
          })
        })
    })
    .catch(() => {
      return res.status(404).send({
        error: 'Could not find user with phone number'
      })
    })

  return true
}