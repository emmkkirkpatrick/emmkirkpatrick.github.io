


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');         

function randomValueFromArray(array){
    const random = Math.floor(Math.random()* array.length);
    return array[random];
}


let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Justin', 'Maddie', 'Ben', 'Justin', 'Emma'];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = [ "spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
let newStory = storyText;

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

randomize.addEventListener('click', result);

newStory = newStory.replaceAll(':insertx:', xItem);
newStory = newStory.replace(':inserty:', yItem);
newStory = newStory.replace(':insertz:', zItem);

console.log(customName)

function result() {

 if(customName.value !== 'Bob') {
    console.log("name is not bob")
   const name = customName.value;
   newStory = newStory.replace('Bob', name);
   console.log(name);

 }

 if(document.getElementById("uk").checked) {
   const weight = Math.round(300*0.071429);
   const temperature =  Math.round((94-32)*(5/9));
   newStory = newStory.replace('300', weight);
   newStory = newStory.replace('94', temperature);
   newStory = newStory.replace('fahrenheit', 'centigrade');
   newStory = newStory.replace('pounds', 'stone');

 }

 story.textContent = newStory;
 story.style.visibility = 'visible';
}