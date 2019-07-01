const admin = require("firebase-admin");

module.exports = function (request, response) {
  // verify the user provided a phone number
  if (!request.body.phone) {
    return response.status(422).send({ error: '`phone` parameter missing from body' });
  }

  // format the phone number to remove dashes and parenthesis
  const phone = String(request.body.phone).replace(/[^\d]/g, '');

  // create new user using the phone number
  admin.auth().createUser({ uid: phone })
    .then(user => response.send(user))
    .catch(error => response.status(422).send({ error }))
}
