// Strings
const farmAnimals = 'cow horse sheep pig chicken';

// 1. Destructuring for each animal sound
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Destructuring after removing 'horse'
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Assigning colors to animals
const [blackAndWhite, black, pink] = 'cow sheep pig'.split(' ');

// Arrays
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Destructuring colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructuring colors excluding 'indigo'
const [r, o, y, g, b, , v] = colors;

// 6. Assigning only 'indigo'
const [, , , , , indg] = colors;

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 7. Destructuring muppet object
const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 8. Destructuring nested muppet object
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedJob, nestedPartner } = nestedMuppet;

// Output for demonstration
console.log(`Animal Sounds: ${moo}, ${neigh}, ${baa}, ${oink}, ${cluck}`);
console.log(`Farm Animals: ${bessie}, ${dolly}, ${babe}`);
console.log(`Animal Colors: ${blackAndWhite}, ${black}, ${pink}`);
console.log(`Colors: ${red}, ${orange}, ${yellow}, ${green}, ${blue}, ${indigo}, ${violet}`);
console.log(`Colors (Excluding Indigo): ${r}, ${o}, ${y}, ${g}, ${b}, ${v}`);
console.log(`Only Indigo: ${indg}`);
console.log(`Muppet: ${muppetName}, ${color}, ${song}, ${job}, ${partner}`);
console.log(`Nested Muppet: Song 2: ${song2}, Song 4: ${song4}, Job: ${nestedJob}, Partner: ${nestedPartner}`);
