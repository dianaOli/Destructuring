//1.
const coordinates = {
  x: 1,
  y:2
};

const {x,y} = coordinates
console.log(x)
console.log(y)

//2.
let locations = {
  first: 'texas',
  second: 'oklahoma',
  third: 'Lousina',
  foruth: 'Mississipi' ,
  Fifth: 'Tenessee'
};

let {first, second, ...remaining} = locations;

console.log(first);
console.log(second);
console.log(remaining);

//3.
let{third : middle = 'some default incase third does not exist'} = locations;

console.log(middle);//lousiana 

//4.
const riddle = {
  ancientWord : "stones"
};

const{ancientWord : translation} = riddle;
console.log(translation);

//5.

const clues = ["stone1", "stone2", "stone3", "stone4", "stone5","stone6","stone7"]

const [one, two,...hints] = clues;

console.log(one);
console.log(two);

//.6 
//Way if were dealing with a small Array indeces
const [st1,,,,,sixth,...restOfclues] = clues;
console.log(one);
console.log(sixth);

//way for larger arrays. example we want stone32 and stone74 ,,,,,, would be very ineficient 
function getStonesAt(array, ...indices) {
  return indices.map(i => array[i]);
}

const stones = Array.from({ length: 100 }, (_, i) => `Stone${i + 1}`);
const [stone32, stone74] = getStonesAt(stones, 31, 73);

console.log(stone32); // Stone32
console.log(stone74); // Stone74

//.7
const shadows = ['Shadowfang', 'Nightwhisper', 'Darkclaw', 'Silentstep'];

const [visibleShadow, ...hiddenShadows] = shadows;

console.log('Visible Shadow:', visibleShadow);
console.log('Hidden Shadows:', hiddenShadows);      


//.8
function revealPath({ direction, distance }) {
  console.log(`Travel ${distance} steps towards the ${direction}.`);
}

revealPath({ direction: 'North', distance: 12 });


//9.
function mixPotion({ ingredient1 = "Water", ingredient2 = "Fireflower" } = {}) {
  console.log(`Mixing ${ingredient1} with ${ingredient2}...`);
}

mixPotion(); 
mixPotion({ ingredient1: "Moonroot" });



//10.
function castSpell([ingredient1, ingredient2]) {
  console.log(`Casting spell with ${ingredient1} and ${ingredient2}!`);
}

castSpell(['Phoenix Feather', 'Dragon Scale', 'Unicorn Hair']);


//11.
const artifact = {
  chamber: {
    pedestal: {
      inscription: {
        clue: 'The Final Key'
      }
    }
  }
};

const { chamber: { pedestal: { inscription: { clue } } } } = artifact;

console.log('Unveiled Secret:', clue); 


//12.
let stoneA = 'Ruby Stone';
let stoneB = 'Sapphire Stone';

[stoneA, stoneB] = [stoneB, stoneA];

console.log('Stone A:', stoneA); // Sapphire Stone
console.log('Stone B:', stoneB); // Ruby Stone
