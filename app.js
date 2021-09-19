let roverPsvrnc = document.getElementById("rover");
let controller = document.getElementById("roverController");
let roverCoordinates = document.getElementById("coordinates");
let cap = document.getElementById("caps");
let imgScreen = document.getElementById("image-screen");
let uploadBtn = document.querySelector("button");

var roverPositionX = 0;
var roverPositionY = 0;
var roverAngle = -90;
var roverDirection = "N";
var command = "";
roverCoordinates.innerHTML = `(${roverPositionX}, ${roverPositionY}, ${roverDirection})`


controller.addEventListener("input", getCommand);
function getCommand(e){

    command = e.target.value;
    setTimeout(function(){controller.value = "";}, 300);

    rotateRover(command);

    setDirection();

    commandRover();

    updateCoordinates(roverPositionX, roverPositionY, roverDirection);
}

// Bu fonksiyon rover'ı Sağa veya Sola döndürür
function rotateRover(){
    if(command=="L" || command=="l"){
        roverAngle+=(-90);
        roverPsvrnc.style.transform = `translateX(${roverPositionX*100}px) translateY(${roverPositionY*100}px) rotate(${roverAngle}deg)`;

    }else if(command=="R" || command=="r"){
        roverAngle+=(90);
        roverPsvrnc.style.transform = `translateX(${roverPositionX*100}px) translateY(${roverPositionY*100}px) rotate(${roverAngle}deg)`;
    }
}

// Bu fonksiyon rover'ın hangi yöne baktığını belirtir
function setDirection(){
    if(roverAngle == -90 || roverAngle == 270 || roverAngle == 630 ||
        roverAngle == -450 || roverAngle == -810 || roverAngle == -1170){
        console.log("We are facing North");
        roverDirection = "N";
    }else if(roverAngle == 0 || roverAngle == 360 || roverAngle == 720 || roverAngle == -360 || roverAngle == -720 || roverAngle == -1080){
        console.log("We are facing East");
        roverDirection = "E";
    }else if(roverAngle == 90 || roverAngle == 450 || roverAngle == 810 || roverAngle == -270 || roverAngle == -630 || roverAngle == -990){
        console.log("We are facing South");
        roverDirection = "S";
    }else if(roverAngle == 180 || roverAngle == 540 || roverAngle == 900 || roverAngle == -180 || roverAngle == -540 || roverAngle == -900){
        console.log("We are facing West");
        roverDirection = "W";
    }
}

// Bu fonksiyon rover'a komut verir.
function commandRover(){
    if(command =="M" || command =="m"){
        if(roverDirection == "N"){
            roverPositionY-= 1;
            roverPsvrnc.style.transform = `translateX(${roverPositionX*100}px) translateY(${roverPositionY*100}px) rotate(${roverAngle}deg)`;
        }else if(roverDirection == "E"){
            roverPositionX+= 1;
            roverPsvrnc.style.transform = `translateX(${roverPositionX*100}px) translateY(${roverPositionY*100}px) rotate(${roverAngle}deg)`
        }else if(roverDirection =="S"){
            roverPositionY+= 1;
            roverPsvrnc.style.transform = `translateX(${roverPositionX*100}px) translateY(${roverPositionY*100}px) rotate(${roverAngle}deg)`;
        }else if(roverDirection =="W"){
            roverPositionX-= 1;
            roverPsvrnc.style.transform = `translateX(${roverPositionX*100}px) translateY(${roverPositionY*100}px) rotate(${roverAngle}deg)`;
        }
    }else if(command == "C" || command =="c"){
        capture();
    }
}


function updateCoordinates(x,y,z){
    roverCoordinates.innerHTML = `(${x}, ${y}, ${z})`;
};

function capture(){
    let rndm = parseInt(Math.random() * 3);
    setTimeout(function(){
        cap.style.visibility ="visible";
    }, 1000);    
        imgScreen.innerHTML = `<img src="images/mars-image${rndm}.jpg">`;
};

uploadBtn.addEventListener("click", hideCaption);

function hideCaption (){
    cap.style.visibility = "hidden";
};

module.exports = roverPsvrnc;

