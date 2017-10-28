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
#include <stack>
class MyStack
{
private:
    int _max;
    stack<int> _stack;
    vector<int> _maxs;
public:
    MyStack() : _max(0) {}
    int getMax() const
    {
        _max = 0;
        for(auto s : stack)
        {
             if (s > _max)
             {
                 _max = s;
             };
        }
        return _max;
    }
    void push(int i)
    {
        if (i > _max)
        {
            _maxs.pushback(_max);
            _max = i;
        }
        _stack.push(i);
    }
    int pop() const
    {
        int i = _stack.pop();
        if (i > _max)
        {
            if (_maxs.size() > 0)
            {
                _max = _maxs.popback();
            }
        }
        return i;
    }
}

class Card
{
public:
    enum Value {ace=0, one=1, two, ...., king=13}
    enum Suite {diamond, heart, club, spade};
    enum Location {deck, hand, etc....};
private:
    Value value
    Suite suite;
    bool faceUp;
    Location location;
public:
    Card() : value(one), suite(diamond), faceUp(false), location(deck) {}
    Card(Value v, Suite s, bool faceup, Location l)  : value(v), suite(s), faceUp(false), location(deck) {}
}

class Deck
{
private:
    vector<Card> cards;
public:
    void shuffle();
    Card pop();

}
//===============================
//Vinoth Balaji Kannan (Interviewer) WDE (Level 5)
// Dynamic table
<button/>
<table id="data_table">
<tbody>
   <tr>
      <td/>
      <td/>
    </tr>

</tbody>
</table>

button.addEventListener("click", function(){
   var table = document.getElementById("data_table");
   var newRow = table.insertRow(0);
   var newCell = newRow.insertCell(0);
});


//Chess
tr:nth-child(odd) td:nth-child(odd) {
    background-color: #000;
}
tr:nth-child(odd)td:nth-child(even) {
    background-color: #fff;
}

tr:nth-child(even) td:nth-child(odd) {
    background-color: #fff;
}
tr:nth-child(even) td:nth-child(even) {
    background-color: #000;
}

<tr>
<td/>
<td/>
</tr>
<tr>
<td/>
<td/>
</tr>

// Inheritance in JS

function Vehicle(){
    this.color = "white";
    this.model = "BMW";
}

funtion Car(){

}

var obj1 = new Vehicle();
var obj2 = new Car();
console.log(obj1.color);
obj2.color;


// Vertical and horizontal center
https://jsfiddle.net/#&togetherjs=PD3NI9iBwy
.outer{
    width : 1000px;
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.inner {
    width:100px;
    height:100px;
}
<div class="outer">
    <div class="inner"> Some Content!
    </div>
</div>

.outer{
    width : 1000px;
    height: 1000px;
    background-color: #fff;
    position: relative;
}
.inner {
    width:100px;
    height:100px;
    margin: 0 auto;
    background-color: green;
    position: relative;
    top: 50%;

}
//=========================
//Vinoth Balaji Kannan (Interviewer) WDE (Level 5)
function test1() {
    console.log(var1);
    var1 = 1;
    t1();
    t2();
    function t1() {
        var1
        console.log('a');
    }
    var t2 = function() {
        console.log('2');
    };
}

test1();


//
// Responsive table
fucntion getDeviceSpec(){
    return sm || md ||  bg;
}


<table class="table-responsi sm">

.sm{
    max-width:200px;
}

// Inheritance Example

//======================
//Vinoth Balaji Kannan (Interviewer) WDE (Level 5)
let promise = new Promise((resolve, error) => {
    setTimeout(function() {
        console.log('success', 100);
    });
});

promise.then(
    callAPI(something)
).catch(
    (reason) => {
        console.log(reason);
    }
);
//====================
//Jason Ganzhorn (Interviewer) Front-End Engineer (Level 5)
<!-- You are creating a simple web page. When it is loaded, you see one button that reads "Clicked 0 times".
Every time the button is clicked, the count in the button caption increments by 1. (So if clicked once, the caption will be
"Clicked 1 times", if twice, "Clicked 2 times".) Write some HTML + JS to accomplish this.-->
<!--
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
-->
<html>
    <head></head>
    <body>
        <div id="buttons">
            <button onClick={increment}>
                Clicked <span id="0">0</span> times
            </button>
        </div>
        <script type="text/script">
            var count=0;
            var uid = 0;
            function increment(id) {
                var current = document.getElementById('count');
                var count = Number(current.html) + 1;
                current.html = count;
                var newBtn = document.createElement(            <button onClick={increment}>
                Clicked <span id=uid++>0</span> times
            </button>);
                document.getElementById('buttons').appendChild(newBtn)
            }
        </script>
    </body>
</html>
//=================================
//Steven Brice (Interviewer) Software Development Engineer (Level 5)
### 1) Write the code needed for a 3 column responsive layout:

#### Desktop
![image](https://s3-us-west-2.amazonaws.com/prime-cmx/interviews/3ColumnLayoutDesktop.png =500x)

#### Mobile
![image](https://s3-us-west-2.amazonaws.com/prime-cmx/interviews/3ColumnLayoutMobile.png =x320)

<style>
    .container{
        width: 100%;
    }
    .col-container:after{
        content: "";
        clear: both;
        width: 100%;
        height: 0;
        display: block;
    }
    .col-container{
        padding: 0 2%;
    }
    .col-container columns{
        float: left;
        width: 30%;
        padding: 0 1%;
        @media and (max-width: 767px){
            width: 96%;
            float: none;
        }
    }
    .header,.footer{
        width: 100%;
    }
</style>

<div class="container">
    <div class="header">

    </div>
    <div class="col-container">
        <div class="columns"></div>
        <div class="columns"></div>
        <div class="columns"></div>
    </div>
    <div class="footer">

    </div>
</div>




### 2) Write a JavaScript function that can perform the following actions:

1.)
    add(10, 5); // 15

2.)
    add(10)(8); // 18

var addTen = add(10);
addTen(8) // 18
add(10)(8) // 18


function add(a,b) {
    return a + b;
}

function add(addTen){
    if(addTen =  ){

    }
}
add(10,5); // 15
add(10,8); // 18






### 3) Given the following array of objects:

var actors = [
    { number: 1,  actor: "William Hartnell",      begin: 1963, end: 1966 },
    { number: 2,  actor: "Patrick Troughton",     begin: 1966, end: 1969 },
    { number: 3,  actor: "Jon Pertwee",           begin: 1970, end: 1974 },
    { number: 4,  actor: "Tom Baker",             begin: 1974, end: 1981 },
    { number: 5,  actor: "Peter Davison",         begin: 1982, end: 1984 },
    { number: 6,  actor: "Colin Baker",           begin: 1984, end: 1986 },
    { number: 7,  actor: "Sylvester McCoy",       begin: 1987, end: 1989 },
    { number: 8,  actor: "Paul McGann",           begin: 1996, end: 1996 },
    { number: 9,  actor: "Christopher Eccleston", begin: 2005, end: 2005 },
    { number: 10, actor: "David Tennant",         begin: 2005, end: 2010 },
    { number: 11, actor: "Matt Smith",            begin: 2010, end: 2013 },
    { number: 12, actor: "Peter Capaldi",         begin: 2013, end: 2013 }
];

Take all the actors from year 2000 until today and change their data up just a little bit
We want to massage the data a little bit and have keys of:
    actorNumber, playedBy, and yearsPlayed.

We don’t want to just directly map one field to another, but for actorNumber we want to
prepend a "#" and for the yearsPlayed we want to want how many years the actor played and not a range.

#### Desired output
[
    { actorNumber: "#9",  playedBy: "Christopher Eccleston", yearsPlayed: 1 },
    { actorNumber: "#10", playedBy: "David Tennant",         yearsPlayed: 6 },
    { actorNumber: "#11", playedBy: "Matt Smith",            yearsPlayed: 4 },
    { actorNumber: "#12", playedBy: "Peter Capaldi",         yearsPlayed: 1 }
]



function(actors){
    var actors = [
        { number: 1,  actor: "William Hartnell",      begin: 1963, end: 1966 },
        { number: 2,  actor: "Patrick Troughton",     begin: 1966, end: 1969 },
        { number: 3,  actor: "Jon Pertwee",           begin: 1970, end: 1974 },
        { number: 4,  actor: "Tom Baker",             begin: 1974, end: 1981 },
        { number: 5,  actor: "Peter Davison",         begin: 1982, end: 1984 },
        { number: 6,  actor: "Colin Baker",           begin: 1984, end: 1986 },
        { number: 7,  actor: "Sylvester McCoy",       begin: 1987, end: 1989 },
        { number: 8,  actor: "Paul McGann",           begin: 1996, end: 1996 },
        { number: 9,  actor: "Christopher Eccleston", begin: 2005, end: 2005 },
        { number: 10, actor: "David Tennant",         begin: 2005, end: 2010 },
        { number: 11, actor: "Matt Smith",            begin: 2010, end: 2013 },
        { number: 12, actor: "Peter Capaldi",         begin: 2013, end: 2013 }
    ];

    for(i = 0; i < actors.length, i++){
        if(actors.begin >=2000 && actors.end <= 2017){
            var actorNumber = '#' + actors.number;
            var playedBy = actors.actor;
            var yearsPlayed = actors.end - actors.begin
            if(yearsPlayed == 0){
                var
            }
            var actors2 = [];
            actors2.push({actorNumber,playedBy,actors2});

        }

    }


}
