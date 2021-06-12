function printerError(s) {
    // your code
 
    //1-init a variable to hold the results and set it to "0"
    let result = 0;
    //2-use regex to extract out of range characters (n-z) and append returned value to results.
    let patt = /[n-z]/gi;
    let regex = s.match(patt);
    //3-output the result / the length of the string.
   

    if(regex === null){
        return `${result}/${s.length}`;
    }else{
         result = regex;
         return `${result.length}/${s.length}`;
    }

}

var s = "aaaaaaa";

console.log(printerError(s));