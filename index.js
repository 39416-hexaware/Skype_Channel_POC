//imports
// var express = require('express');
var restify = require("restify");
var request = require('request');
var builder = require('botbuilder');

/*
    App Id  - b7a57513-221d-42ad-913f-32cfb94d6182
    App Pwd - rschQTU6817)#sfxKFGR2:-
*/

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log("%s listening to %s", server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: 'b7a57513-221d-42ad-913f-32cfb94d6182',
    appPassword: 'rschQTU6817)#sfxKFGR2:-'/*,
    openIdMetadata: process.env.BotOpenIdMetadata*/
});

// Listen for messages from users
server.post("/Skype", connector.listen());

// Create your bot with a function to receive messages from the user
var bot = new builder.UniversalBot(connector);
console.log(bot);

bot.endConversationAction("goodbyeAction", "Ok... See you later.", {
    matches: "Goodbye"
});
bot.on("conversationUpdate", function (message) {
    session.send('Hi! Im from Skype!');
});

// app = express();
// //Create express object

// var port = process.env.PORT || 5000;
// //Assign port

// app.get("/Skype", function (req, res) {
//     res.send("Skype Channel works");
// });

// app.post("/Skype", function (req, res) {
//     console.log(JSON.stringify(req));
//     // res.send(JSON.stringify({
//     //     "id": "d23360ff-e0a9-424e-9381-bcc66c648ccf",
//     //     "timestamp": "2018-03-01T05:09:49.589Z",
//     //     "lang": "en",
//     //     "result": {
//     //         "source": "agent",
//     //         "resolvedQuery": "hi",
//     //         "action": "input.welcome",
//     //         "actionIncomplete": false,
//     //         "parameters": {},
//     //         "contexts": [],
//     //         "metadata": {
//     //             "intentId": "d557f4c8-0f4a-43f5-8461-e81e41385dcd",
//     //             "webhookUsed": "false",
//     //             "webhookForSlotFillingUsed": "false",
//     //             "intentName": "Default Welcome Intent"
//     //         },
//     //         "fulfillment": {
//     //             "speech": "Hello!",
//     //             "messages": [
//     //                 {
//     //                     "type": 0,
//     //                     "platform": "skype",
//     //                     "speech": "Hi! I'm Flight-Chat bot. I can help you with Train and Flight booking services"
//     //                 },
//     //                 {
//     //                     "type": 1,
//     //                     "platform": "skype",
//     //                     "title": "Service Assistance",
//     //                     "subtitle": "Helps you with train and flight related services.",
//     //                     "imageUrl": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/12/developing-chatbot-for-2017-benefits.jpg",
//     //                     "buttons": [
//     //                         {
//     //                             "text": "Train Services",
//     //                             "postback": "Train Services"
//     //                         },
//     //                         {
//     //                             "text": "Flight Services",
//     //                             "postback": "Flight Services"
//     //                         }
//     //                     ]
//     //                 },
//     //                 {
//     //                     "type": 0,
//     //                     "platform": "slack",
//     //                     "speech": "Hi! I'm Flight-Chat bot. I can help you with Train and Flight booking services."
//     //                 },
//     //                 {
//     //                     "type": 1,
//     //                     "platform": "slack",
//     //                     "title": "Service Assistance",
//     //                     "subtitle": "Helps you with train and flight related services.",
//     //                     "imageUrl": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/12/developing-chatbot-for-2017-benefits.jpg",
//     //                     "buttons": [
//     //                         {
//     //                             "text": "Train Service",
//     //                             "postback": "Train Service"
//     //                         },
//     //                         {
//     //                             "text": "Flight Service",
//     //                             "postback": "Flight Service"
//     //                         }
//     //                     ]
//     //                 },
//     //                 {
//     //                     "type": 0,
//     //                     "platform": "facebook",
//     //                     "speech": "Hi! I'm Flight-Chat bot. I can help you with Train and Flight booking services"
//     //                 },
//     //                 {
//     //                     "type": 1,
//     //                     "platform": "facebook",
//     //                     "title": "Service Assistance",
//     //                     "subtitle": "Helps you with train and flight related services.",
//     //                     "imageUrl": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/12/developing-chatbot-for-2017-benefits.jpg",
//     //                     "buttons": [
//     //                         {
//     //                             "text": "Train Services",
//     //                             "postback": "train service"
//     //                         },
//     //                         {
//     //                             "text": "Flight Services",
//     //                             "postback": "flight service"
//     //                         }
//     //                     ]
//     //                 },
//     //                 {
//     //                     "type": 0,
//     //                     "speech": "Hi!"
//     //                 }
//     //             ]
//     //         },
//     //         "score": 1
//     //     },
//     //     "status": {
//     //         "code": 200,
//     //         "errorType": "success",
//     //         "webhookTimedOut": false
//     //     },
//     //     "sessionId": "e18f9256-0889-432b-9f42-75afaaa7a713"
//     // }));
// });

// console.log("Server Running at Port : " + port);

// app.listen(port);