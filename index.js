//imports
// var express = require('express');
var restify = require("restify");
var request = require('request');
var builder = require('botbuilder');

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

server.post("/Skype", connector.listen());

// Create your bot with a function to receive messages from the user
var bot = new builder.UniversalBot(connector);

// send simple notification
function sendProactiveMessage(resp) {
    var msg = new builder.Message().address(resp);
    msg.text('Hello, this is a notification');
    bot.send(msg);
}

var savedAddress;
server.post('/api/messages', connector.listen());

// Do GET this endpoint to delivey a notification
server.get('/api/CustomWebApi', (req, res, next) => {
    sendProactiveMessage(savedAddress);
    res.send('triggered');
    next();
  }
);

// root dialog
bot.dialog('/', function (session, args) {
    // console.log(session);
    // console.log(args);
    console.log(session.message.address);
    savedAddress = session.message.source;
    var message = 'Hello !!';
    session.send(message);

    message = 'You can also make me send a message by accessing: ';
    message += 'http://localhost:' + server.address().port + '/api/CustomWebApi';
    session.send(message);

    setTimeout(() => {
        sendProactiveMessage(savedAddress);
    }, 5000);
});

// bot.endConversationAction("goodbyeAction", "Ok... See you later.", {
//     matches: "Goodbye"
// });
// bot.on("conversationUpdate", function (message) {
//     session.send('Hi! Im from Skype!');
// });