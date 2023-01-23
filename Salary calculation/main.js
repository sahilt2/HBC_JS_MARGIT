function salaryCal() {
    const hourlySalary = prompt("Enter your hourly salary")
    const hoursWorked = prompt ("Enter your working hours in a day")
    if (hoursWorked<=7) {
      console.log(`Your salary is ${hourlySalary*hoursWorked} euros in a day`);
    }
    else if (hoursWorked>7 && hoursWorked<9){
        console.log(`Your salary is ${hourlySalary*hoursWorked+((hoursWorked-7)*(hourlySalary*0.5) )} euros in a day`);
    }
    else {
        console.log(`Your salary is ${hourlySalary*hoursWorked+((hourlySalary*0.5*2))+((hoursWorked-9)*hourlySalary )} euros in a day`)
    }
    }

salaryCal();

