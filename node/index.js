const fs = require('fs');

//const myName = "andria"
//const mySurname = "sarsevanidze"
//const myInfo = myName + " " + mySurname

//fs.writeFileSync( "data.txt", myInfo );



const array = [

     {
        FullName: "moswavle1"
     },
     {
        fullName: "moswavle2"
     },
     {
        FullName: "moswvale3"
     }

]

fs.writeFileSync( "data/students.jsnode index.json", JSON.stringify(array))
