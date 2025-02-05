let express = require("express");
let app = express();
const VoiceResponse = require('twilio').twiml.VoiceResponse;

app.route("/")
.post((req, res) => {
    const twiml = new VoiceResponse();

    twiml.say('Hello from your pals at Twilio! Have fun.');
    // console.log("hi");

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});

app.listen(10000, () => {
    console.log('TwiML server running at http://127.0.0.1:1337/');
});