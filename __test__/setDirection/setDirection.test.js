const setDirection = require("./setDirection");

var roverAngleN = -90;
var roverAngleE = -0;
var roverAngleS = 90;
var roverAngleW = 180;

test("Am I facing North?", () => {
    expect(setDirection(roverAngleN)).toBe("N");
});

test("Am I facing East?", () => {
    expect(setDirection(roverAngleE)).toBe("E");
});

test("Am I facing South?", () => {
    expect(setDirection(roverAngleS)).toBe("S");
});

test("Am I facing West?", () => {
    expect(setDirection(roverAngleW)).toBe("W");
});