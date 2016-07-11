//just an example script - to be moved into other repo

// this script reacts to changes in the votes and changes the color of the LED accordingly

var basicLed = null;
var voter = null;

console.log("getting voter state");

WoT.consumeDescriptionUri("http://127.0.0.1:8088/things/testvoter").then(function(voter) {
        console.log("getting voter returned: " + voter);

        voter.getProperty("votes").then(function(votes) {
            console.log("votes state: " + votes);
        });
    })
._catch(function(err){
    console.error(err);
});

console.log("voter tget test script running");