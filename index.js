// // Question no 1;


document.write("<h2>Get current date and time. </h2>")

// // create a new date object
let currentDate = new Date();


// //get the current year days and so on;
function getcurrentdateandtime() {
    var date = currentDate.getDate()
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var time24 = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // // adding zero before time value

    // year=(year<10?'0':'')+year;
    // month=(month<10?'0':'')+month;
    // day=(day<10?'0':'')+day;
    // hours=(hours<10?'0':'')+hours;
    // minutes=(minutes<10?'0':'')+minutes;
    // seconds=(seconds<10?'0':'')+seconds;
    //  changing from 24 hours 12 hours format

    // time12 = time24 % 12 || 12;
    time12 = time24 % 12 || 12;

    let timeperiod;
    if (time24 < 12) {
        timeperiod = "AM"
    } else {
        timeperiod = "PM"
    }
    return document.write("<h4> Current date and time is: ", currentDate, " <br> current hour: ", time24, " ", timeperiod, "</h4>")
}
getcurrentdateandtime()


// Another method   

// function getCurrentDateTime() {
//     // create a new date object
//     var current_date = new Date();
//     //   Use toLocaleString() to get the current date and time in the user's locale
//     var formattedDateTime = current_date.toLocaleString();
//     return formattedDateTime;
// }
// document.write("Current date and time is: ", getCurrentDateTime() + "<br>");


//Easiest method to do this current date and time question

// let currentdate=new Date();
// document.write(currentdate);


//  Question no 2;

document.write("")
let first_name = prompt("please input a first name");
let last_name = prompt("please input a last name");
function greet() {
    var alerti = alert("welcome to this page " + first_name, " ", last_name)
    return alerti;
}

greet();               // always call a function to perform actipon keep it in mind


// Question no 3        

document.write("<h2>Addition of values</h2>")
let num1 = +prompt("please input a first number for addition");
let num2 = +prompt("please input a second number for addition");
function sum(num1, num2) {
    var result = num1 + num2;
    document.write("<h4>",num1," + ",num2," = ",result, "</h4>");
    return result;
}
sum(num1, num2);


// Question no 4      //msla hai

document.write("<h2> Calculate the given values </h2>");
// function converttonum(value) {
// return Number(value)
let value1 = +prompt("please input a first value  for calculation ");
let operator = prompt("enter any operator for calculation");
let value2 = +prompt("please input a second value");
// }
function add(value1, value2) {
    var addition = value1 + value2;
    //     document.write("<h4>", addition, "</h4>");
    return addition
} function sub(value1, value2) {
    var subtraction = value1 - value2;
    //     document.write("<h4>", subtraction, "</h4>");
    return subtraction;
} function mul(value1, value2) {
    var multiply = value1 * value2;
    //     document.write("<h4>", multiply, "</h4>");
    return multiply;
} function divide(value1, value2) {
    var division = value1 / value2;
    //     document.write("<h4>", division, "</h4>");
    return division;
}


function calculate(value1, operator, value2) {

    // val1 = converttonum(value1);
    // val2 = converttonum(value2);

    if (/[^\d]/.test(value1) || /[^\d]/.test(value2)) {
        return alert("only contain a number you entered character")
    } else if (operator === "+") {
        return add(value1, value2);
    }
    else if (operator === "-") {
        return sub(value1, value2)
    }
    else if (operator === "*") {
        return mul(value1, value2)
    }
    else if (operator === "/") {
        if (value2 === 0) {
            alert("can not divide by 0")
        }
        return divide(value1, value2)

    } else {
        alert("you input a invalid number")
    }
}
document.write("<h4> ","Calculation of: ", value1, " ", operator, " ", value2, "=", calculate(value1, operator, value2), "</h4>");


// Question no 5


document.write("<h2>square of number</h2>");
var number = 4;
function square(number) {
    result = number * number   //another method 4**2   is ka mtlb 4 ki power 2
    return result;
}
// squared(number)
document.write("<h4> The Square parameter  Number: ", number, "<sup> 2 </sup> ", " is ", square(number), "<h4>");

// Question no 6

document.write("<h2>factorization</h2>")        //factorization multiply given num ti less then or equal to givrn num until 1 is reached
function factorial(num) {
    // converttonum(num);
    if (num === 0) {
        return 1
    } else {
        return num * factorial(num - 1);
    }
}

let num = 6
var facto = factorial(num)
document.write("<h4>factorial of ", num, "=", facto, "</h4>");

//  Question no 7

document.write("<h2> counting function </h2>");

let inputCountingStart = prompt("please input a first number of counting where to start");
let inputCountingEnd = prompt("end number of counting");
function counting() {
    for (i = inputCountingStart; i <= inputCountingEnd; i++) {
        var write = document.write("<h4>", i, "<h4>")
    }
    return write

}
counting()


// Question no 8

document.write("<h2>compute hypotenuse</h2>");
// console.log("compute")

let Base = +prompt("Enter the value of Base");
let Perpendicular = +prompt("Enter the value of Perpendicular");
function computehypotenuse(Base, Perpendicular) {
    basesquare = square(Base);
    perpendicularsquare = square(Perpendicular);

    hypotenusesquare = basesquare + perpendicularsquare;
    hypotenuse = Math.sqrt(hypotenusesquare);
    return hypotenuse;

}
let hypotenuseresult = computehypotenuse(Base, Perpendicular);
document.write("<h4>the value of base is: ", Base, " the value of perpendicular is ", Perpendicular, " and the result is ", hypotenuseresult.toFixed(3), "</h4>")



// Question no 9

//calculate area using values
let width = 10;
let height = 7
function calculateAreawithvalues(width, height) {
    let result1 = width * height;
    return result1;
}
console.log("the area of rectangle using values is: ", calculateAreawithvalues(width, height));

//calculate area using variables
let width0fRec = prompt("please input a width for rectangle");
let heightOfRec = prompt("please input a height of rectangle");
function calculateAreawithvariables() {
    if (isNaN(width0fRec) || isNaN(heightOfRec)) {
        alert("invalid input");
        return;
    }
    let result2 = width0fRec * heightOfRec;
    return result2;
}
console.log("the area of rectangle using variables is: ", calculateAreawithvariables())


// Question no 10
document.write("<h2>pelindrome identificatiom</h2>");
let inputForCheck = prompt("please enter any word i will inform you it is palindrome or not");
function pelindromeOrNot(inputForCheck) {
    let reverse = inputForCheck.split("").reverse().join("");
    if (inputForCheck === reverse) {
        document.write("<h4>", inputForCheck, " is a pelindrome word</h4>");
    } else {
        document.write("<h4>", inputForCheck, " is not a pelindrome word</h4>")
    }
    return;
}
console.log(pelindromeOrNot(inputForCheck))


// Question no 11

let lowercase = "the quick brown fox"
function tocapitilize(lowercase) {
    var words = lowercase.split(" ")
    var uppercase = words.map(function (word) {            //words.map ka andar pura function likha
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    )
    uppercase = uppercase.join(" ")
    return uppercase;
}


console.log("the capitalize form of ", lowercase, " is ", tocapitilize(lowercase))


// Question no 12

let largeword = "Web Development Tutorial";
function findlongeststr(largeword) {
    let split_to_array = largeword.split(" ");

    let longestword = [];          //make variabl there to use after but it,s not important to make
    let longestlength = 0;           //this is imp for comparision 
    split_to_array.forEach(function (word) {      //humna isma uper split wala variable use kiya Q ka huma isma comparision karana hai 
        // yahan humna variable bnaya word ka function ma jo (word) use hua hai uska mtlb ya hai (jo function ka andar comparision hone ka bad output nuklaga usko name diya hua ha ) phir bhi khud sa confirm karan
        wordlength = word.length;
        if (wordlength > longestlength) {
            longestlength = wordlength;
            longestword = word;

        } else if (wordlength === longestlength) {
            longestword.push(largeword)
        }

    })
    return longestword

}
document.write("<h2> find largest word</h2>")
document.write("Largest word in (web Development tutorial) is: ", findlongeststr(largeword));

//Anoher method


// var largeword = "web development tutorial";
// function findlongestword(largeword) {
//     split_string = largeword.split(" ");
//     longestword = "";
//     longestlength = 0;
//     for (var word of split_string) {    // ye loop hi hai loop ki jagha use hota hai aapki mrzi aap jo use karain
//         if (word.length > longestword.length) {
//             word.length = longestlength;
//             longestword = word;
//         } else if (word.length === longestlength) {
//             longestword = largeword;
//         }
//     }
//     return longestword;
// }

// document.write(findlongestword(largeword))


/// same method but code is reduced


// var largeword = "web development tutorial";
// function findlongestword(largeword) {
//     split_string = largeword.split(" ");
//     longestword = "";
//     for (var word of split_string) {             // ye loop hi hai loop ki jagha use hota hai aapki mrzi aap jo use karain
//         if (word.length > longestword.length) longestword=word
// }
//     return longestword;
// }

// document.write(findlongestword(largeword))


// Another method      //using sort


// let longword = "web development tutorial"
// function findlargestword(longword) {
//     split_to_array = longword.split(" ");
//     let result = split_to_array.sort(function (a, b) { return b.length - a.length })
//     return result[0]
// }
// document.write(findlargestword(longword))







// Question no 13
document.write("<h2>occurance of same letter</h2>")
let wordwherefindletter = "JSResourceS.com";
let lettertofind = "o";
function findoccurences() {
    let counter = 0
    for (i = 0; i < wordwherefindletter.length; i++) {
        if (lettertofind === wordwherefindletter[i]) {

            counter++

        }
    }
    return counter;
}

// console.log(findoccurences())
document.write("<h4>the  occurence in JSResource5.com  Of: ", lettertofind, " is: ", findoccurences(), "<h4>")






// Question no 14

// circumference of circle

document.write("<h2>Circumference Of Circle</h2>")
let radius = 8;
function calculatecircumference(radius) {
    let circumferenceofcircle = 2 * Math.PI * radius;
    return circumferenceofcircle;
}
document.write("<h4> The value of circumference of circle is ", calculatecircumference(radius).toFixed(3), "</h4>");

// Area of circle

document.write("<h2>Area Of Circle</h2>");
function calculateArea(radius) {
    let areaofcircle = Math.PI * radius ** 2;
    return areaofcircle;
}
document.write("<h4>The value of Area of circle is ", calculateArea(radius).toFixed(3), "</h4>");