const admin = require("firebase-admin");

module.exports = function (req, res) {
  if (!req.body.phone || !req.body.code) {
    return res.status(422).send({
      error: 'You must provide a phone number and an OTP'
    })
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '')
  const code = parseInt(req.body.code)

  admin.auth().getUser(phone)
    .then(() => {
      const ref = admin.database().ref(`users/${phone}`)
      ref.once('value', async (snapshot) => {
        const user = snapshot.val()

        if (user.code !== code || !user.codeValid) {
          return res.status(422).send({ error: 'Invalid OTP' })
        }

        await ref.update({ codeValid: false })
        const token = await admin.auth().createCustomToken(phone)

        return res.send({ token })
      })
    })
    .catch((err) => res.status(422).send({ error: err }))

  return true
}