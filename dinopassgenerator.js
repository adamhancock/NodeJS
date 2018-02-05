
// Adam Hancock
// Run with node dinopassgenerator.js <number of passwords>
// 
var type = "simple"; // simple or strong. 

////////////////////////////////////////////////////////////////
var request = require('request')
class dinopass {
   
    constructor(passwords, type){
        this.passwords = passwords


        switch (type){
            case "simple":
                this.url = 'http://www.dinopass.com/password/simple';
            break;
                case "strong":
                this.url = 'http://www.dinopass.com/password/strong';
            break; 
        }
        this.call();

    }

    call(passwords, url){
        var passwords = this.passwords;
        var url = this.url;
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
         })}
    }
}

let dinopassgenerator = new dinopass(process.argv['2'], type);
