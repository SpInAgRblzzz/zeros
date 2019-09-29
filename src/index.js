module.exports = function zeros(expression) {
  let twoCounter = 0;
  let fiveCounter = 0;

  let factorials = expression.split('*');  

  factorials.forEach(function(it){
    if(it.includes('!!')){
      const factNumber = it.replace('!!','');
      //even      
      if(factNumber % 2 === 0){
        //count fives
        let five = 5;
        while((factNumber/2) >= five){
          fiveCounter += Math.floor((factNumber/five)/2);
          five *= 5;
        }

        //count twoes
        let two = 2;
        while(factNumber >= two){
          twoCounter += Math.floor(factNumber/two);
          two *= 2;
        }
      } else {
        let five = 5;
        while(factNumber >= five) {
          fiveCounter += Math.ceil(Math.floor(factNumber/five)/2);
          five *= 5;
        }
      }
    } else {      
      const factNumber = it.replace('!','');      
      //count fives
      let five = 5;
      while(factNumber >= five){
        fiveCounter += Math.floor(factNumber/five);
        five *= 5;
      }

      //count twoes
      let two = 2;
      while(factNumber >= two){
        twoCounter += Math.floor(factNumber/two);
        two *= 2;
      }
    }
  });
  
  if(twoCounter < fiveCounter){return twoCounter};
  return fiveCounter;
}
