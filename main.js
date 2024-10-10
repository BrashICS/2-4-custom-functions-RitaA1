/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 

    
let volume = 5


/** 
// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

}

/*****  Your code goes below  *****/

//Part 1
/** 
function to_fahrenheit() {
 let celsius = +prompt("write a temperature in celsius:")
 let fahrenheit = Math.round((celsius * 9/5) + 32)
 console.log(`${celsius}° Celsius is equal to ${fahrenheit}° Fahrenheit`)
}

to_fahrenheit()

//Part 2
function to_celsius() {
    let fahrenheit = +prompt("write a temperature in fahrenheit:")
    celsius = Math.round((fahrenheit - 32) * 5/9)
    console.log(`${fahrenheit}° Fahrenheit is equal to ${celsius}° Celsius`)
   }

to_celsius()


//part 3
function roll_die10() {
console.log(Math.floor(Math.random()*10 + 1))
}

roll_die10()

//part 4
function roll_die6() {
    console.log(Math.floor(Math.random()*6 + 1))
    }
    
roll_die6()

**/

//practice
function top_value() {
let value = +prompt("What is the top number:")
value = Math.round(Math.random()*value + 1)
console.log(`Number is: ${value}`)
}


function show_volume() {
console.log(volume)
}

function volume_up() {
volume = volume + 1
console.log(show_volume())
}

function volume_down() {
    volume = volume - 1
    console.log(show_volume())
}

function random_volume(){
    let volume = Math.round(Math.random()*10 + 1)
    console.log(volume)
}

function born_in() {
    let age = +prompt("How old are you?")
    let year = 2024 - age
    console.log(`You were born in ${year}`)
}

function roll_d6() {
    console.log(Math.floor(Math.random()*6 + 1))

}