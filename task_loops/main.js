//Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

for (let n=0;n<100;n++){
    if (n%2!=0){
        console.log(n)
    }
}

//Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

let answer= '';
let end=98;

for (let n=2;n<100;n+=2){
    answer+= ' ' + n + ' ';
    answer+= ' ' + end + ' ',
    end-= 2;
    }
console.log(answer);

//Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

   
let distance, time;

while (distance!=0){
    distance = Number(prompt('enter distance in Kms'));
    if (distance==0){
        console.log('distance 0-game over');
        break;
    }
    time=Number(prompt('Enter time in hours'));
    let average = distance/time;
    console.log('Average is',average);
}

//Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.
let count=0;
for (let i = 1; i <= 20; i++) {   //for (let i=0;i<20;i++) Counting starts from zero or i can be indicated as counter.
  let num = Number(prompt('Enter a number'));  //Number is a method
  if (num % 2 === 0) {
    count++;
  }
}
console.log(`${count} were even numbers out of the 20 numbers entered.`);

//Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

let num;
let sum=0;
let average;
let countAgain=0;

while (num!=0) {
    num = Number(prompt('Enter a number'));
    
   
    if (num == 0){
        console.log('You entered 0, program ended');
        break;
    }

    countAgain++;
    sum += num; /*  <---- this means: sum = sum + num; */
    average = sum / count      // use (count-1) if there there is no if conditions
     
    console.log('sum is ',sum);
}
console.log('average of given input is ',average);

//Make a program that asks 25 numbers from the user. In the end program prints out average of the numbers.
let countMore=0;
let sumMore=0;
let averageMore;

for(let i=1;i<=25;i++) {
    let num = Number(prompt('Enter number'));
    countMore++;
    sumMore+= num;
    averageMore= sumMore/countMore

   }
console.log('Average of the given numbers is',averageMore);

//Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

let input;
let inputTwo;
let countY = 0;
let averageY;
let sumY = 0;
let y=true;
let n=false;

for (i=1; ; i++) {
    input = Number(prompt('Enter a number'))
    inputTwo = Number(prompt('Do you want to continue giving numbers?Type y for yes or n for no'))
   
   
       if (inputTwo=true){
           continue;
          
        }
        if(inputTwo=false){
            console.log('You entered n, program ends now');
            break;
        }
        
        
      countY++;
        sumY = sumY+input;
        averageY = sumY/countY
    }

console.log('Average',averageY)


//Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.


let inputX;
let inputZ;
let countZ=0;
function smallestNumber() {
    const inputX = Number(prompt('How many numbers you want to enter?'));
    for (let inputX=0; ; inputX++){
     let inputZ = Number(prompt('Input your number'))
     countZ++;

     if (inputZ>=countZ){
        break;
     }
    }
}
smallestNumber();

