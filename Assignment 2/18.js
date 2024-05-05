function convertCase(lowercase, uppercase) {
    const upperConverted = lowercase.toUpperCase();
    const lowerConverted = uppercase.toLowerCase();
    console.log('Converted to uppercase:', upperConverted);
    console.log('Converted to lowercase:', lowerConverted);
  }
  
  function main() {
    const lowercaseString = 'abc';
    const uppercaseString = 'DEF';
    convertCase(lowercaseString, uppercaseString);
  }
  main();
  