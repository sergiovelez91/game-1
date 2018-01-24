$(document).ready(function() {

    var game = new Game();


    $(document).keydown(function(e){
        switch (e.keyCode){
            case 39 :
            if(game.player1.canIExecute){
                game.player1.frogInAir[0] = true;
                game.player1.moveRight();
                game.player1.delay();
            }
            break;

            case 37 :
            if(game.player1.canIExecute){
                game.player1.frogInAir[1] = true;
                game.player1.moveLeft();
                game.player1.delay();
            }
            break;

            case 77 :
                game.tongue1.tongueOut();
            break;

        }
    })

    $(document).keyup(function(e){
        switch (e.keyCode){

            case 77 :
            console.log(e.keyCode)    
                game.tongue1.tongueIn();
            break;

        }
    })

    function update(){
        if(game.player1.frogInAir[0]){
            game.player1.moveRight();
        }

        if(game.player1.frogInAir[1]){
            game.player1.moveLeft();
        }
        console.log(game.player1.canIExecute)        
        game.player1.render();
        game.insect1.update(); 
        game.insect2.update();
        game.monster1.update();
        game.tongue1.render(game.player1.x, game.player1.y);
       
     
    }

    setInterval(update,1500/60);

});