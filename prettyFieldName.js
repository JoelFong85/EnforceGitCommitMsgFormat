function PrettyFieldName(input) {

    //init string to be returned
    var result = "";

    //if input length <= 0, return empty string
    if (input.length <= 0) return result;

    //else first index will be taken as start of the string     
    result = input[0].toUpperCase();

    for (let i = 1; i < input.length; i++) {
        //  check if is space. if space, add to string
        if (input[i] == " ") {
            result = formResult(result, input[i]);
            continue;
        }
        //  check if index char is upper case
        if (isUpperCase(input[i])) {
            //  if upper case, check if previous char is upper case
            if (isUpperCase(input[i - 1])) {
                //  if upper case, check if next char is upper case
                if (isUpperCase(input[i + 1])) {
                    //  if upper case, add to string
                    result = formResult(result, input[i]);
                }
                else {
                    //  if not upper case, add space + char.toLowerCase() to string
                    result = formResult(result, " " + input[i].toLowerCase())
                }
            }
            else {
                //  if not upper case, check if next char is upper case
                if (isUpperCase(input[i + 1])) {
                    //      if upper case, add char to string
                    result = formResult(result, " " + input[i]);
                }
                else {
                    //      if not upper case, add space + add char.toLowerCase() to string    
                    result = formResult(result, " " + input[i].toLowerCase());
                }
            }
        }
        else {
            //  if not upper case, add to string
            result = formResult(result, input[i]);
        }
    }

    return result;
}

function isUpperCase(str) {
    return str === str.toUpperCase();
}

function formResult(result, addition) {
    return result + addition;
}

//var result = PrettyFieldName("itemPrice");
//var result = PrettyFieldName("itemPrice incorrectType");
//var result = PrettyFieldName("Business EIN number");
//var result = PrettyFieldName("BusinessEIN number");
var result = PrettyFieldName("hasEINPresent");
console.log(result);