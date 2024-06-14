
var names = ["John", "Paul", "George", "Ringo", "Jennifer", "Amanda", "James", "Andrew"];

for (var i = 0; i < names.length; i++) {
  // Get the current name
  var name = names[i];
  
  if (name.charAt(0).toLowerCase() === 'j') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
