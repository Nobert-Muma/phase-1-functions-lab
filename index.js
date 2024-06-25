// Code your solution in this file!



    function distanceFromHqInBlocks(blockNumber) {
      const startingBlock = 42; 
      return Math.abs(blockNumber - startingBlock);
    }

    function distanceFromHqInFeet(blockNumber) {
      const blockDistance = 264; 
      return distanceFromHqInBlocks(blockNumber) * blockDistance;
    }

    function distanceTravelledInFeet(startBlock, destinationBlock) {
      const blockDistance = 264; 
      return Math.abs(startBlock - destinationBlock) * blockDistance;
    }
    
    function calculatesFarePrice(startBlock, destinationBlock) {
      const distance = distanceTravelledInFeet(startBlock, destinationBlock);
      const freeDistance = 400; 
      const farePerFoot = 0.0256; 
    
      if (distance <= freeDistance) {
        return 0;
      } else if (distance > freeDistance && distance <= 2000) {
        return 2.56;
      } else if (distance > 2000 && distance <= 2500) {
        return 25;
      } else {
        return "cannot travel that far";
      }
    }
  
    
    