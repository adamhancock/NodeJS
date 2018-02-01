// Adam Hancock
// Set Number of passwords 
// Execute with node passwordgenerator.js
var passwords = 45;
var strong = false


////////////////////////////////////////////////////////////////
switch (strong){
    case false:
        url = 'http://www.dinopass.com/password/simple';
    break;
    case true:
    url = 'http://www.dinopass.com/password/strong';
    break; 
}

var options = { method: 'GET',
url: url};

var request = require("request");

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
 for(var i = 0; i < passwords;i++){

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(capitalizeFirstLetter(body));
})};
