// make a program that asks for one number from the user.Then the program finds out if the number is positive and if the number is divisible by 2. Message 'number....is even' is printed else 'number ....is off' is printed.

function evenOrOdd(){
    const number= prompt('Enter a number')
    if (number%2===0 && number>0 ){
        console.log(`number ${number} is even`)
    }
    else{
        console.log(`number ${number}' is odd`)
    }
}
evenOrOdd();