const commandRover = require("./commandRover");

var command = "M";

test("Have I moved to North?", () =>{
    let roverDirection = "N";
    let roverPositionX = 0;
    let roverPositionY = 0;

    expect(commandRover(command, roverPositionX, roverPositionY,roverDirection)).toBe(roverPositionY=-1);
});

test("Have I moved to East?", () =>{
    let roverDirection = "E";
    let roverPositionX = 0;
    let roverPositionY = 0;

    expect(commandRover(command, roverPositionX, roverPositionY,roverDirection)).toBe(roverPositionX=1);
});

test("Have I moved to South?", () =>{
    let roverDirection = "S";
    let roverPositionX = 0;
    let roverPositionY = 0;

    expect(commandRover(command, roverPositionX, roverPositionY,roverDirection)).toBe(roverPositionY=1);
});

test("Have I moved to West?", () =>{
    let roverDirection = "W";
    let roverPositionX = 0;
    let roverPositionY = 0;
    
    expect(commandRover(command, roverPositionX, roverPositionY,roverDirection)).toBe(roverPositionX=-1);
});