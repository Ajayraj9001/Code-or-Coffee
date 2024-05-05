// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// Example 1:-
const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Fab");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}

// Note:- Here in switch case 'break;' is very important, it continues to match all the cases except default case.

// Example 2:- 
const month1 = "Feb"

switch (month) {
    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("Fab");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}

// Note:- If we have given the targeted element is in String format, then we need to also apply switch case on String format cases only.