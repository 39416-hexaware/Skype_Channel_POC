//imports
var AWS = require('aws-sdk');

module.exports.callLex = [
    function (callback) {
        var lexruntime = new AWS.LexRuntime();

        var params = {
            botAlias: 'STRING_VALUE', /* required */
            botName: 'STRING_VALUE', /* required */
            inputText: 'STRING_VALUE', /* required */
            userId: 'STRING_VALUE', /* required */
            requestAttributes: {
              '<String>': 'STRING_VALUE',
              /* '<String>': ... */
            },
            sessionAttributes: {
              '<String>': 'STRING_VALUE',
              /* '<String>': ... */
            }
          };

        // var params = {
        //     botAlias: 'STRING_VALUE', /* required */
        //     botName: 'STRING_VALUE', /* required */
        //     contentType: 'STRING_VALUE', /* required */
        //     inputStream: new Buffer('...') || 'STRING_VALUE' || streamObject, /* required */
        //     userId: 'STRING_VALUE', /* required */
        //     accept: 'STRING_VALUE',
        //     requestAttributes: any /* This value will be JSON encoded on your behalf with JSON.stringify() */,
        //     sessionAttributes: any /* This value will be JSON encoded on your behalf with JSON.stringify() */
        // };

        lexruntime.postContent(params, function (err, data) {
            if (err) {
                console.log(err, err.stack); // an error occurred
            }
            else {
                console.log(data); // successful response
                callback(data);
            }
        });
    }
];