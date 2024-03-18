# README - PAYMAYA SIGNER TOOL

Installation:
1. Clone the repo using git
2. CD into the project: <code>cd paymaya-signer</code>
3. Run the Node Package Manager to install the Crypto library dependency <code>npm install crypto</code>

4. Execute the NodeJS script: 
    * Params: node -no-depracation signer.js [authkey] [payload]
    * Before to Stringfy (or remove white spaces and linefeed (newline) from the request)   
   
    <code>node --no-deprecation signer.js sk-KTJpSf2VXUf7MGylibXBs5i6pbVaekNew9aMeUIp0H0 "{\"id\":\"b46f3f8a-de24-4b66-9d38-02e18484be67\",\"biller\":{\"accountNumber\":\"454556563\",\"slug\":\"LAGUNAWATERD\",\"fields\":{\"firstName\":\"John\",\"lastName\":\"Smith\",\"contactNumber\":\"+639384618830\"}},\"transaction\":{\"date\":\"2018-10-23T06:22:00.588Z\",\"amount\":{\"currency\":\"PHP\",\"value\":110}}}"</code>
    
6. Verify resulting output:

    <code>Running the Signer
    
    Auth Base 64: c2stS1RKcFNmMlZYVWY3TUd5bGliWEJzNWk2cGJWYWVrTmV3OWFNZVVJcDBIMA==
    SHA 256 Request Body [TEST]:  c0c5055eda75bfde4c5d56c92167ad5a7184989e47f6fbe1ccd46f2b2d7607f6
    
    Base64 Digest HMAC+SHA256 Request Body: wMUFXtp1v95MXVbJIWetWnGEmJ5H9vvhzNRvKy12B/Y=
    
    The file was saved! (encoded-hmac-raw.txt)</code>
    


