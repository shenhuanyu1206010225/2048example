function getPosTop(i){
    return 20 + i*120;
}

function getPosLeft(j){
    return 20 + j *120;
}

function noSpace(board){   
    for (var i=0;i<board.length;i++){
    	for (var j=0;j<board[i].length;j++){
    		if (board[i][j]==0)
    			return false;
    	}
    }
    return true;
}

function getNumBackgroundColor( num ){
	var bg;
	switch(num){
		case 2:
			bg="#eee4da";
			break;
		case 4:
		    bg="#eee4c8";
			break;
		case 8:
			bg="#f2b179";
			break;
		case 16:
		    bg="#f59563";
			break;
		case 32:
			bg="#f67e5f";
			break;
		case 64:
		    bg="#f65e3b";
			break;
		case 128:
			bg="#edcf72";
			break;
		case 256:
		    bg="#edcc61";
			break;
		case 512:
			bg="#3365e5";
			break;
		case 1024:
		    bg="#0099cc";
			break;
		case 2048:
			bg="#0066ee";
			break;
		case 4096:
		    bg="#9933ee";
			break;
		case 8192:
		    bg="#5588ff";
			break;
        default: 
        	bg="black";
	}
	return bg;
}

function getNumColor( num ){
	if (num<=4){
		return "#776e65";
	}
	else{
		return "white";
	}

}

function isGameover(){
	for( var i = 0 ;i < 4 ; i ++ ){
        for( var j = 0 ; j < 4 ; j ++ ){
        	if (board[i][j]===0)
        		return false;
        	else if  (i<3 && board[i][j]==board[i+1][j])
           	    return false;
           	else if  (j<3 && board[i][j]==board[i][j+1])
           	    return false;     	
   		};
   	};
    return true;
};

function gameover(){
	if (isGameover()){
		showGameoverAnimate();
	}

}

function moveLeft(){
	var can=false;
	var tempArr=[];
	var k;
	for( i = 0 ; i < 4 ; i ++ ){
		k=0;
		tempArr[i]=[];
        for( j = 0 ; j < 4 ; j ++ ){
           initAdd=false;
           if (board[i][j]!==0){
           		tempArr[i][k++]=board[i][j];
           		if (initAdd && k-2>0 && tempArr[i][k-1]==tempArr[i][k-2]){
           		    	tempArr[i][k-2]+=tempArr[i][k-2];
           				initAdd=true;
           		}
           }		
        }
        if (tempArr[i].length>0 && board[i][4]!=0 && tempArr[i].length<3){
        	can=true;
        	for (j=0; j<4;j++){
        		if (j<tempArr[i].length)
        			board[i][j]=tempArr[i][j];
        		else 
        			board[i][j]=0;
        	}
        }
    }

    if (can){           
    	updateBoardView();
    }
	return can;
}

function moveUp(){
	var can=false;
	return can;
}

function moveRight(){
	var can=false;
	return can;
}

function moveLeft(){
	var can=false;
	return can;
}

function moveDown(){
	var can=false;
	return can;
}

