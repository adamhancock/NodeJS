// Adam Hancock
// Run with node dinopassgenerator.js <number of passwords>
// 

var strong = false

var passwords = process.argv['2']
////////////////////////////////////////////////////////////////



var request = require("request");
switch (strong){
    case false:
        url = 'http://www.dinopass.com/password/simple';
    break;
        case true:
        url = 'http://www.dinopass.com/password/strong';
    break; 
}
// If no passwords set by command line argument, return 45 passwords. 
if (typeof passwords == 'undefined') {
   var passwords = '45';
  }

var options = { method: 'GET',
url: url};


            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }


for(var i = 0; i < passwords;i++){

                    request(options, function (error, response, body) {
                    if (error) throw new Error(error);

                    console.log(capitalizeFirstLetter(body));
})};
