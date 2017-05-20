var functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.interaction = functions.https.onRequest((request, response) => {
  console.log(request.body)
  response.send("Interaction logged!")
});

exports.config = functions.https.onRequest((request, response) => {
  console.log(request.body);
  response.send("Config not actually saved yet.");
});
