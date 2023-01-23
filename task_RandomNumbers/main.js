function randomNumber(){
    const numOne= Number (prompt('Enter first number'));
    const numTwo= Number (prompt('Enter second number'));
    const numThree= Number (prompt('Enter third number'));

    if (numOne>=0 || numTwo>=0 || numThree>=0){
        console.log(`The sum of input numbers is ${numOne+numTwo+numThree}`)

    }
    if (numOne>=0 && numTwo>=0 & numThree>=0) {
        console.log(`The multiplication of input numbers is ${numOne*numTwo*numThree}`)
    }
    else if (numOne<0 && numTwo<0 && numThree<0){
        console.log('only negatives')
    }
   
}
randomNumber();