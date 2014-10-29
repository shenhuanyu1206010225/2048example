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
	var initAdd=false;
	var addScore=0;
	for(var i = 0 ; i < 4 ; i ++ ){
		var k=0;
		tempArr[i]=[];
		initAdd=false;
        for(var j = 0 ; j < 4 ; j ++ ){   
           if (board[i][j]!==0){
           		tempArr[i][k]=board[i][j];
           		if (!initAdd && k-1>=0 && tempArr[i][k]===tempArr[i][k-1]){
           		    	tempArr[i][k-1]+=tempArr[i][k];
           		    	addScore+=tempArr[i][k];
           		    	tempArr[i].pop();
           		    	k--;
           				initAdd=true;
           		}
           		k++;
           };		
        };
        if (tempArr[i].length>0  && tempArr[i].length<=3){
        	for (var h=0; h<4;h++){
        		if (h<tempArr[i].length && board[i][h]!==tempArr[i][h]){
        			board[i][h]=tempArr[i][h];
        			can=true;
        		}
        		if (h>=tempArr[i].length &&board[i][h]!==0){
        			board[i][h]=0; 
        			can=true;  			
        		}
        		else if (h>=tempArr[i].length){
        			board[i][h]=0;		
        		}
        	};
        	console.log(i+":"+tempArr[i]);
        };
    };
    
    if (can){           
    	updateBoardView(addScore);
    };
	return can;
}

function moveUp(){
	var can=false;
	return can;
}

function moveRight(){
	var can=false;
	var tempArr=[];
	var initAdd=false;
	var addScore=0;
	var len=board[0].length;
	for(var i = 0 ; i < len ; i ++ ){
		tempArr=board[i].filter(function(intem,index,array){
			return (item>0);
		});
		if (tempArr.length>0 && tempArr.length<len){
			for(var k=0,j=len;j>=0;j--){


			};
		};
	}
	if (can){           
    	updateBoardView(addScore);
    };
	return can;
}


function moveDown(){
	var can=false;
	return can;
}

