// Write a function that fades an element's opacity from 100%
// to 0% over given duration. The frame rate should be 60fps.

// Assume we have the following HTML on the page
//
//    <div id="box" style="width:200px;height:200px;background:red"></div>


const el = document.getElementById('box')
fade(el, 2000); // Fade opacity from 100% to 0% over a duration of 2000ms

function fade(element, time){
    var op = 1;

        var timer = setInterval(function(t){

            if(op<= 0.1){
            element.style.opacity = 'none';
            }
            element.style.opacity = op;
            op -= 0.1;
        },t/10);
}
//========================================
/*
Write a program that prints out the occurrences of letters in a string
For example, given the input 'Peter Piper picked a peck of pickled peppers.', the program should output:

a : 1
c : 3
d : 2
e : 8
f : 1
i : 3
k : 3
l : 1
o : 1
p : 9
r : 3
s : 1
t : 1
*/
//========================================
/* Provided a list of songs for each user session on Amazon Music. Find the most played sequence of n songs.

Per session songs are stored as linked list in the order of play.
Song {
    SongId songId;
    Song *next;  //next song
}

public List<Song> getMostPlayedSequence(List<Song> allSessions, int sequenceSize ) {
}
*/
//==============================
/*
* Please come up with Class and Data Structure Design for a "metric" system to determine the top song of a band. Two Web Service calls:
* void play(String bandname, String songname);
* String topSong(String bandname);
*/

// Example:
// play("Coldplay", "Yellow");
// play("Coldplay", "Yellow");
// play("Coldplay", "Fix you");
// play("Coldplay", "Yellow");
// topSong("Coldplay") -> "Yellow"
// play("Coldplay", "Fix you");
// play("Coldplay", "Fix you");
// play("Coldplay", "Fix you");
// topSong("Coldplay") -> "Fix You"

//===============================
/*Coding
Q: Are you familiar with anagrams?  Anagrams are words with the same letters.

Examples are:
"from" "form"
"alert", "later", "alter"


Not anagrams:
"mom", "moo"
"cat", "cats"

Come up with a method which takes in two valid strings as arguments  & returns true if the two strings are anagrams of each another and false if not.
*/

//==================================
1 2 3 4 5 6 7 8 9 10

3 4 5 6 7 8 9 10 1 2

6 7 8 9 10 1 2 3 4 5


Given a rotated sorted list find an element.
//===================================
