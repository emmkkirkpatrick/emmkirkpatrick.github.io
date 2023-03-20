const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');         

function randomValueFromArray(array){
    const random = Math.floor(Math.random()* array.length);
    return array[random];
}


let storyText = 'Last night :insertx: was walking home, but they made a few wrong turns and ended up :inserty:. This is not unsual, as they often get lost. Then the area suddenly began to glow and :insertx: appeared and :insertz:.';
let insertX = ['Justin', 'Maddie', 'Ben', 'Justin', 'Emma'];
let insertY = ["at the C4", "on a boat house", "on the Nile river", "in ohio", "at the jersey shore", "in a radioactive lake",];
let insertZ = ["grew hotdogs for fingers", "shrunk by 75%", "became sentient", "drooled", "ate a pickle"];
let newStory = storyText;

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

randomize.addEventListener('click', result);

newStory = newStory.replaceAll(':insertx:', xItem);
newStory = newStory.replaceAll(':inserty:', yItem);
newStory = newStory.replaceAll(':insertz:', zItem);

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