// CODE here for your Lambda Classes
/******Step 1: Create the classes for: Person, Instructor, Student, and Project Manager********/
//'Person' is the base class
class Person {
  constructor(parentAttributes) {
    this.name = parentAttributes.name;
    this.age = parentAttributes.age;
    this.location = parentAttributes.location;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}.`;
  }
}

//'Instructor' class -> inherits(extends) from 'Person' class
class Instructor extends Person {
  constructor(instructorAttributes) {
    //super connects intructorAttributes to Person
    super(instructorAttributes);
    this.speciality = instructorAttributes.speciality;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo() {
    return `Today we are learning about ${this.speciality}`;
  }
  //pass in a the 'alica' object as 'studentObject' to access student properties,
  grade(studentObject) {
    return `${studentObject.name} receives a perfect score on ${this.favLanguage}`;
  }
}

//'Student' class -> inherits(extends) from the 'Person' class
class Student extends Person {
  constructor(studentAttributes) {
    //super connects studentAttributes to the 'Person' class
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  // need to use forEach to log out favSubjects one by one
  listSubjects() {
    this.favSubjects.forEach(item => console.log(item));
  }
  //pass in a subject as argument
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  //
  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge on ${subject}`;
  }
}

//'Project Manager' class -> inherits(extends) from the 'Instructor' class
class Project extends Instructor {
  constructor(projectAttributes) {
    //super connects projectAttributes to the 'Instructor class
    super(projectAttributes);
    this.gradClassName = projectAttributes.gradClassName;
    this.favInstructor = projectAttributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to the ${channel}, @channel standy times and I'm back!.`;
  }
  //pass in a the 'alica' object as 'studentObject' to access student properties, and pass in 'subject' parameter.
  debugsCode(studentObject, studentSubject) {
    return `${this.name} debugs ${studentObject.name} code on ${studentSubject}`;
  }
}

/*****STEP 2:CREATE PERSON, INSTRUCTOR(SAMPLE GIVEN TO US), STUDENT, AND PROJECT MANAGER OBJECTS */
//Sample Instructor object
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });

//Person object
const todd = new Person({
  name: 'Liam Murphy',
  age: 44,
  location: 'Halifax, Nova Scotia, Canada'
});

// Instructor object
const marina = new Instructor({
  name: 'Marina Baskova',
  age: '58',
  location: 'San Fran, California, United States',
  speciality: 'node.js',
  favLanguage: 'JavaScript',
  catchPhrase: 'Our team is the best!'
});

//Student object
const alicia = new Student({
  name: 'Alicia Murphy',
  age: 40,
  locaton: 'Toronto, Ontario, Canada',
  previousBackground: 'startups',
  className: 'Web25',
  favSubjects: ['HTML', 'CSS', 'JavaScript']
});

//Project Manager object
const john = new Project({
  name: 'John Wick',
  age: 75,
  location: 'In hiding and healing from a beat down somewhere, Canada',
  gradClassName: 'Web 16',
  favInstructor: 'Don Murphy'
});

console.log(todd.speak()); //logs 'Hello, my name is Liam Murphy, I am from Halifax, Nova Scotia, Canada'
console.log(marina.demo()); //logs 'Today we are learning about node.js'
console.log(marina.grade(alicia)); //logs pass in the 'student' object to access student properties.'Alicia Murphy receives a perfect score on JavaScript '
alicia.listSubjects(); //logs 'HTML, CSS, JavaScript'
console.log(alicia.PRAssignment('Java')); //logs 'Alicia Murph has submitted a PR for HTML, CSS, JavaScript'
console.log(alicia.sprintChallenge('Python')); //logs 'Alica Murphy has begun a sprint challenge on HTML, CSS, JavaScript'
console.log(john.standUp('Web24')); //logs 'John Wick announces to the Web 16, @channel standy times and I'm Back.'
console.log(john.debugsCode(alicia, 'UI/UX')); //logs pass in the 'student' object to access student properties. 'John Wick debugs Alicia Murphy code on UI/UX'
