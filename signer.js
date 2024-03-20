var crypto = require('crypto');

/**
 * Simple Signer Tool for generating Paymaya Signature
 *
 * Note:
 * - this tool allows for generation of 'paymaya-signature' which is included in the header of request to 3rd party APIS
 * - this tool is intended as REFERENCE, for production additional logic and exception handling must be developed
 *
 * @author Aeneas L. Solis
 */
var args = process.argv.slice(2);

// first argument is Auth Key
var authKey = args[0];

// second argument is the Payload / Request Body
var requestBody = args[1];

/**
 * This function generates the signature to be included in the request's header.
 * Hash Algorithm: HmacSHA256
 * Key: Base64 encoded key of the biller provided by Paymaya
 *
 */
var signRequest = function(requestBody, authKey) {
    // base 64 the auth key
    var authKeyBase64 = new Buffer(authKey).toString('base64');
    console.log('Auth Base 64: ' + authKeyBase64);

    // -- HMAC input start --
    // dump the output
    var hmac = crypto.createHmac('SHA256', authKeyBase64);
    hmac.write(requestBody); // write in to the stream
    hmac.end();       // can't read from the stream until you call end()

    var shaRequestBodyTest = hmac.read().toString('hex');    // read out hmac digest in HEX!
    console.log("SHA 256 Request Body [TEST]: ", shaRequestBodyTest);


    // generate the file to preserve encoding
    hmac = crypto.createHmac('SHA256', authKeyBase64);
    hmac.write(requestBody); // write in to the stream
    hmac.end();

    var fs = require('fs');
    fs.writeFile("encoded-hmac-raw.txt", hmac.read(), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved! (encoded-hmac-raw.txt)");
    });
    // --- HMAC input end --

    // -- Signature generation start --
    var shaRequestBody = crypto.createHmac('SHA256', authKeyBase64)
        .update(requestBody);

    var digestRequestBody = shaRequestBody.digest('base64');
    console.log('Base64 Digest HMAC+SHA256 Request Body: '+digestRequestBody);
    // -- Signature generation end ---

    return digestRequestBody;
};

console.log('Running the Signer');

// run signer
signRequest(
    requestBody,
    authKey
);