const admin = require("firebase-admin");

module.exports = function (request, response) {
  if (!request.body.phone) {
    return response.status(422).send({ error: '`phone` parameter missing from body' });
  }

  const phone = String(request.body.phone).replace(/[^\d]/g, '');

  admin.auth().createUser({ uid: phone })
    .then(user => response.send(user))
    .catch(error => response.status(422).send({ error }))

  return true
}
