function isRegularExpression(value) {
    return value instanceof RegExp;
  }
  

  const regexPattern = /\d+/;

  console.log(isRegularExpression(regexPattern)); 
  

  const notRegexPattern = 'This is not a regex';

  console.log(isRegularExpression(notRegexPattern));
  