const numString = prompt("please enter a number : ");
const num = parseInt(numString);

if (!isNaN(num) && num >= 0) {
    console.log("Pythagorean numbers up to the entered number : ");

    for (let i = 0; i <= num; i++) {
        const pythagoreanNumber = i **2;
        console.log(pythagoreanNumber);
    }
} else {
    console.log("enter a real number !!!!!");
}

