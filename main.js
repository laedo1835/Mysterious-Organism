//Factory Function with Two paramaters
const pAequorFactory = (specimenNum, dna) => {

    return {                                                   //the object that gets returned by pAequorFactory
      _specimen: specimenNum,
      _dna: dna,
        

      mutate() {                                               //returns a random number from the already randomized return of returnRandBase() function.
        const pAequorOne = {};                                              
        let randIndex = Math.floor(Math.random() * this._dna); //assigns variable to a math.random() method to be used locally and multiplies it against the return of the _dna property.
        let newBase = returnRandBase();                        //reassigns the returnBase to a local variable so it can be used inside the .mutate() factory function method.
        while (this._dna[randIndex] === newBase) {             //as long as the random indexes return matching values, they get updated to the new variable and and random iteration gets ran and assign again and again until the two values don't match.  
            newBase = returnRandBase();
          }
        this.dna[randIndex] = newBase;                         // I don't know why this has to be ran again when it was ran already in the while loop. 
        return this._dna;                                      // returns the resuls of the .mutate() method 
      },                                                       //  ,      REMEMBER: THIS IS NEEDED TO SEPARATE EACH OBJECT          ,
      

      compareDNA(otherPAqeour) {                                // Goal is to compare two random pAequor DNA strands and return the percentage that they are Similar(ities). Param is used for otherOrg.
        let count = 0;
        for (let i = 0; i < this.dna.length; i++) {              
            if (this.dna[i] == otherPAqeour.dna[i]) {           
              count += 1;
            }                                                               
          }
      console.log(`Specimen ${this.specimenNum} has ${count * 100/this.dna.length}% DNA bases in common with ${otherPAqeour.specimenNum}.`)
      },

      willLikelySurvive() {
        const cAndG = this.dna.filter(letter => letter === 'C' || letter === 'G');
    
        if (cAndG.length/this.dna.length > 0.6) {
          return true;
        } else {
          return false;
        }
      }
    }
  console.log(`Specimen #${this.specimenNum} has ${count * 100/this.dna.length}% DNA bases in common with #${otherPAqeour.specimenNum}.`)
}


// Returns a random DNA base

  const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

  /* prints output test. Shoudl return randomly A, T, C or G from the returnRandBase() Helper Function:
      const newBases = returnRandBase();
      console.log(newBases);
  */


const survivingSpecimen = [];
  let idCounter = 1;
    
    while (survivingSpecimen.length < 30) {
      let newOrg = pAequorFactory(idCounter, mockUpStrand());
      if (newOrg.willLikelySurvive()) {
        survivingSpecimen.push(newOrg);
      }
      idCounter++;
    }
    
    console.log(survivingSpecimen)
     

     
