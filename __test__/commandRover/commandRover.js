function commandRover(c,x,y,d){
    if(c =="M" || c =="m"){
        if(d == "N"){
            return y-= 1;
        }else if(d == "E"){
            return x+= 1;
        }else if(d =="S"){
            return y+= 1;
        }else if(d =="W"){
            return x-= 1;
        }
    }
}

module.exports = commandRover;