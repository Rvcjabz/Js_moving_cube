var canvas = document.getElementById('game')
var context = canvas.getContext('2d')

var x = 0;
var y = 0;
var direction ='right'

function play(){
    var key = keyboard.button()
    context.fillStyle ='#d08acb'
    context.clearRect(0,0,600,500)
    context.fillRect(x,y,50,50,);
    
    if(key == 'ArrowUp'){
        y = y - 1;
    }
    
    if(key == 'ArrowDown'){
        y = y + 1;
    }
    
    if(key == 'ArrowLeft'){
        x = x - 1;
    }
    
    if(key == 'ArrowRight'){
        x = x + 1;
    }

    window.requestAnimationFrame(play);
}
play();