let users = [
  { name: "Jay", age: 25 },
  { name: "Ankit", age: 30 },
  { name: "Ravi", age: 20 }
];

// Sort by age (ascending)
users.sort((a, b) => a.age - b.age);
console.log(users);

// Sort by name (alphabetically)
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);
