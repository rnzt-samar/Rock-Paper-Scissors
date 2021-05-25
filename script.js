function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice= yourChoice.id;
    botChoice= numberToChoice(ranToRpsINt());
    console.log('computer choice,'+botChoice);
     results= decideWinner(humanChoice, botChoice);
     console.log(results);
    message= finalMessage(results) ;
    console.log(message)// message="YOu won"green
    rpsfrontEnd(yourChoice.id,botChoice, message);
}
function ranToRpsINt(){
    return Math.floor(Math.random()*3)+0;
}
function numberToChoice(number){
    return ['rock','paper','scissors'][number]
}
function decideWinner(yourChoice,computerChoice){
    var rpsDatabase={
        'rock': {'scissors':1, 'rock': 0.5, 'paper':0 } ,
        'paper': {'scissors':0, 'rock':1 , 'paper':0.5 } ,
        'scissors': {'scissors':0.5, 'rock':0, 'paper':1 }
    }
    var yourScore= rpsDatabase[yourChoice][computerChoice];
    var computerScore= rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore]
}
function finalMessage([yourScore,computerScore]){
    if (yourScore==0){
        return {'message':'You Lost', 'color':'red'};
    }
    else if (yourScore==0.5){
        return {'message':'Tie','color':'yellow'}
    }
    else{
        return {'message':'You Won','color':'green'}
    }
        
}
function rpsfrontEnd(humanIMageChoice,botImageChoice,finalMessage){
    var imagesDatabase={
        'rock':document.getElementById('rock').src ,
        'paper':document.getElementById('paper').src ,
        'scissors':document.getElementById('scissors').src 
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv= document.createElement('div');
    var botdiv= document.createElement('div');
    var messagediv= document.createElement('div');

    humandiv.innerHTML="<img src='"+imagesDatabase[humanIMageChoice]+"' height=150 width=150 style='box-shadow:0 10px 50px rgba(37,56,233,1);'>"
    messagediv.innerHTML="<h1 style='color:"+finalMessage['color']+"; font-size:60px; padding:30px;'>"+finalMessage['message']+"</h1>"
    botdiv.innerHTML="<img src='"+imagesDatabase[botImageChoice]+"' height=150 width=150 style='box-shadow:0 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv)
    document.getElementById('flex-box-rps-div').appendChild(botdiv);

}




























