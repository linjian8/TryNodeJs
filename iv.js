/* write a method which takes two inputs, one is list of numebrs and other is a number and print all pairs of the numbers which sums to given number
E.g. {1,3,4,2,5,6} 6
outout:
1,5
4,2
Vivek Mehta (Interviewer) Sr. SDE (Level 6)
Eric Bensley (Shadow: Vivek Mehta) Software Dev Engineer II (Level 5)
*/

// {
//   foo: 1,
//   bar:{
//     baz: 2,
//     bat: 3,
//     baq: {
//         a: 1
//     }
//   }
// }

//   <input name="foo" value="1"/>
//   <input name="bar.baz" value="2"/>
//   <input name="bar.bat" value="3"/>
//   <input name="bar.bat.baq.a" value="1"/>

const inputsNodeList = document.querySelectorAll("#inputFieldset input");
const inputsArray = Array.prototype.slice.call(inputsNodeList);

let inputObject = {};

for (let i = 0; i < inputsArray.length; i++) {
    const inputInnerArray = inputsArray[i].name.split(".");
    for (let j = 0; j < inputsInnerArray.length; j++) {
        if (j === inputInnerArray.length -1 ) {
            inputObject[inputsInnerArray[j]] = inputInnerArray[i].value;
        }
    }
}
//=========================
