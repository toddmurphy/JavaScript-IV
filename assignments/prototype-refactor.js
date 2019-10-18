/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// === GameObject Constructor Function ===
// * createdAt
// * name
// * dimensions (These represent the character's size in the video game)
// * destroy() // prototype method that returns: `${this.name} was removed from the game.`
// */

// function GameObject(attributes) {
//   this.createdAt = attributes.createdAt;
//   this.name = attributes.name;
//   this.dimensions = attributes.dimensions;
// }

// GameObject.prototype.destroy = function() {
//   return `${this.name} was removed from the game`;
// };

//Converted 'GameObject' function to 'Game' class
class Game {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game`;
  }
}

/*
=== CharacterStats Constructor Function ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/

// function CharacterStats(attributes) {
//   GameObject.call(this, attributes);
//   this.healthPoints = attributes.healthPoints;
// }

//Converted 'CharacterStats' function to 'Character' class
class Character extends Game {
  constructor(attributes) {
    super(attributes); //need to connect 'Character' atributes to parent 'Game' class
    this.healthPoints = attributes.healthPoints;
  }
  takeDamage() {
    return ` ${this.name} took damage`;
  }
}

//Object.create creates the object with (GameObject.prototype) links or reference and brings-->  GameOject.prototype.destroy
/***** ORDER MATTERS*/
// CharacterStats.prototype = Object.create(GameObject.prototype); //inheriting destroy() from GameObject
// CharacterStats.prototype.takeDamage = function() {
//   return ` ${this.name} took damage`; //what object name? do we pick an object name from below (mage, swordsman, archer)?
// };

/*
=== Humanoid Constructor Function (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/
// function Humanoid(attributes) {
//   CharacterStats.call(this, attributes);
//   (this.team = attributes.team),
//     (this.weapons = attributes.weapons),
//     (this.language = attributes.languag);
// }

class Humanoid extends Character {
  constructor(attributes) {
    super(attributes);
    this.weapons = attributes.weapons;
    this.language = attributes.language;
    this.team = attributes.team;
  }
  greet() {
    return `${this.name} offers a greeting ${this.language}`;
  }
}
//add test
// Humanoid.prototype = Object.create(CharacterStats.prototype); //inheriting destroy() from GameObject through CharacterStats

// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting ${this.language}`;
// };

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Tongue'
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Tongue'
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table ->
console.log(mage.weapons); // Staff of Shamalama ->
console.log(archer.language); // Elvish ->
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
