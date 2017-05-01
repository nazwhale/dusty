var assert = {

  isEq: function(firstAssertion, secondAssertion) {
    if (firstAssertion !== secondAssertion) {
      throw new Error("Expected " + firstAssertion + " to equal " + secondAssertion + ".");
    } else {
      console.log('The isEq test passed');
      message = 'The isEq test passed';
      printMessages(message);
    }
  },

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('The isTrue test passed');
      message = 'The isTrue test passed';
      printMessages(message);
    }
  },

  isFalse: function(assertionToCheck) {
    if (!!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsy");
    } else {
      console.log('The isFalse test passed');
      message = 'The isFalse test passed';
      printMessages(message);
    }
  },
};

printMessages = function(message){
  var element = document.getElementById("testResults");
  console.log(element);
  var listItem = document.createElement('li');
  listItem.innerHTML = message;
  document.getElementById('testResults').appendChild(listItem);
}
