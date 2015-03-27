// Console log fix
if (!window.console) console = {log: function() {}};


var hash = "#";

while(hash.length <=7){
    console.log(hash);
    hash = hash + "#";
}

for(var one = 1; one <= 100; one++){

    if(one % 3 == 0){
         console.log("Fizz")
    }
    if(one % 5 == 0){
        console.log("Buzz")
    }
    if((one % 3 == 0) && (one % 5 == 0)){
        console.log("FizzBuzz")
    }
    if( ( one % 3 != 0 ) && ( one % 5 != 0 ) ) {
        console.log(one)
    }
}