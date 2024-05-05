function checkBlock() {
    const faultyJsonString = '{"name": "John",  : 30}';
    try {
      const parsedData = JSON.parse(faultyJsonString);
      console.log(parsedData);
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.log('Syntax Error');
      } else {
        console.log('An error occurred: ' + error.message);
      }
    }
  }
  checkBlock();
  