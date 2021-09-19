function rotateRover(angle,c){
    if(c=="L" || c=="l"){
        return angle+=(-90);
    }else if(c=="R" || c=="r"){
        return angle+=(90);
    }
}

module.exports = rotateRover;