function setDirection(angle){
    if(angle == -90 || angle == 270 || angle == 630 ||
        angle == -450 || angle == -810 || angle == -1170){
        return "N";
    }else if(angle == 0 || angle == 360 || angle == 720 || angle == -360 || angle == -720 || angle == -1080){
        return "E";
    }else if(angle == 90 || angle == 450 || angle == 810 || angle == -270 || angle == -630 || angle == -990){
        return "S";
    }else if(angle == 180 || angle == 540 || angle == 900 || angle == -180 || angle == -540 || angle == -900){
        return "W";
    }
}

module.exports = setDirection;