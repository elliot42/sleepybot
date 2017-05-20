var functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.interaction = functions.https.onRequest((request, response) => {
  console.log(request.body)
  console.log(request.body.status)
  console.log(request.body.result)
  response.send("Interaction logged!")
});

exports.config = functions.https.onRequest((request, response) => {
  console.log(request.body);
  response.send("Config not actually saved yet.");
});

exports.callXml = functions.https.onRequest((request, response) => {
	if //firebase username && 2 hours before usual_bedtime
		response.send("<Response><Say>Hey //username// I’d love to chat about tonight’s bedtime plans. Hit me up on Google Home by saying 'Hey Google, let me talk to TIMO.'</Say></Response>");
	else if //firebase time trigger && activity1 name
		response.send("<Response><Say>Hello. I hope you’re thinking about //activity1//. Let me know when you’re getting up to do so via Google Home.</Say></Response>");
	else if // firebase time trigger && activity2 name
		response.send("<Response><Say>Did you get lost after //activity2//. Let me know you’re ready for bed by telling me 'Goodnight' through your Google Home!”</Say></Response>");
});
