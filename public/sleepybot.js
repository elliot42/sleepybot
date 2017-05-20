function speak(text) {
  var msg = new SpeechSynthesisUtterance(text);
  msg.voice = window.speechSynthesis.getVoices()[50];
  window.speechSynthesis.speak(msg);
}

var accessToken = "cf983a965a3f446fa3b2381a71583d04"

$(document).ready(function () {
  $("#get-tester").click(function (e) {
    e.preventDefault()
    var request = $.ajax({
      dataType: "json",
      type: "GET",
      url: "https://api.api.ai/v1/query?v=20150930&query=10&contexts=getting-bedtime&contexts=heyMOTI-followup&lang=en&sessionId=1234567890",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + accessToken)
      }
    })
    request.done(function (message) {
      console.log(message.result)
    })
  })
})
