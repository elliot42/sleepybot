var functions = require('firebase-functions');
var admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.interaction = functions.https.onRequest((request, response) => {
  console.log(request.body)
  // if there's a bedtime in the database, skip straight to bedtime-checkin
  if (request.body.result.action === "welcome.get-bedtime") {
    var bedtime = admin.database().ref('/bedtime/weekdays');
    bedtime.on('value', function (snapshot) {
      if (snapshot.val() !== undefined) {
        // bedtime has already been set
        // has cue been sent?
        //    if not, send cue
        //    else,
        var res = {
          "speech": "Hey friend! It's almost time for bed. Want to start getting ready?",
          "displayText": "Hey friend! It's almost bedtime. Want to start getting ready?",
          "data": { },
          "contextOut": [{ "name": "bedtime-checkin", "lifespan": "3" }],
          "followupEvent": {
            "name": "ALMOST-BEDTIME",
            "data": { }
          }
        };
        response.send(res);
      }
    })
  } else {
    response.send("Logged!");
  }
});

exports.config = functions.https.onRequest((request, response) => {
  console.log(request.body)
  if (request.body.moduleNickname == 'What is your name?') {
  }
  else if (request.body.moduleNickname == 'Collect usual sleep time') {
    var bedtime = admin.database().ref('/bedtime/weekends');
    return bedtime.set(request.body.replyData);
  }
  else if (request.body.moduleNickname == 'Get Phone Number') {
  }
  else if (request.body.moduleNickname == '1st activity before falling asleep') {
  }
  else if (request.body.moduleNickname == 'Duration of 1st activity before falling asleep') {
  }

  response.send("Done");
});

exports.callXml = functions.https.onRequest((request, response) => {
  // if //firebase username && 2 hours before usual_bedtime
  //response.send("<Response><Say>Hey //username// I’d love to chat about tonight’s bedtime plans. Hit me up on Google Home by saying 'Hey Google, let me talk to TIMO.'</Say></Response>");
  response.send("<Response><Say>Hey I’d love to chat about tonight’s bedtime plans. Hit me up on Google Home by saying 'Hey Google, let me talk to TIMO.'</Say></Response>");

  // else if //firebase time trigger && activity1 name
  // 	response.send("<Response><Say>Hello. I hope you’re thinking about //activity1//. Let me know when you’re getting up to do so via Google Home.</Say></Response>");
  // else if // firebase time trigger && activity2 name
  // 	response.send("<Response><Say>Did you get lost after //activity2//. Let me know you’re ready for bed by telling me 'Goodnight' through your Google Home!”</Say></Response>");
});
