function keyDownHandler(e){
    console.log("Key Down Event",e.key,e.keyCode);
}

function keyPressHandler(e){
    console.log("Key was pressed",e.key,e.keyCode);
}

function keyUpHandler(){
    console.log("Key Up Event fired.");
}

function pageLoad(){
    alert('Welcome');
}