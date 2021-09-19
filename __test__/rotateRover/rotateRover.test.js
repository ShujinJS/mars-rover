const rotateRover = require("./rotateRover");

let roverAngleFirst = -90;
let roverAngleSecond = -90;


test("Have I turned Left?", () => {
    expect(rotateRover(roverAngleFirst,"L")).toBe(roverAngle=-180)
});

test("Have I turned Right?", () => {
    expect(rotateRover(roverAngleSecond,"R")).toBe(roverAngle=0)
});


