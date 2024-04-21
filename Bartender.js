// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"

function getDrinkByProfession(param) {
  let paramStr = param.toLowerCase();
  if (paramStr === "jabroni") {
    return "Patron Tequila";
  } else if (paramStr === "school counselor") {
    return "Anything with Alcohol";
  } else if (paramStr === "programmer") {
    return "Hipster Craft Beer";
  } else if (paramStr === "bike gang member") {
    return "Moonshine";
  } else if (paramStr === "politician") {
    return "Your tax dollars";
  } else if (paramStr === "rapper") {
    return "Cristal";
  } else {
    return "Beer";
  }
}
