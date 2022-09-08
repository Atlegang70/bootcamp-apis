export default function longestword(sentence){

var Words = sentence.split(" ");
    //console.log(Words);
  var longest = "";
for (var i=0; i< Words.length; i++) {
  var eachword = Words[i];
  if (eachword.length >= longest.length){
    longest = eachword;
  }}
console.log(longest)
return longest ;
}