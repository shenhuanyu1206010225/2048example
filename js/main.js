var board = [];
var score = 0;
var gridCell;
var i, j;

$(document).ready(function(){
    newgame();
});

function newgame(){
    //初始化棋盘格
    init();
    //在随机两个格子生成数字
    genNumber();
    genNumber();
    
}

function init(){
    for( i = 0 ; i < 4 ; i ++ ){
        board[i]=[];
        for( j = 0 ; j < 4 ; j ++ ){
            board[i][j]=0;
            gridCell = $('#grid-cell-'+i+"-"+j);
            gridCell.css('top', getPosTop( i ) );
            gridCell.css('left', getPosLeft( j ) );
        }
    }
    updateBoardView();
    
}


function updateBoardView(){
    $(".number-cell").remove();
    gcont=$("#grid-container");
    for( i = 0 ; i < 4 ; i ++ ){
        for( j = 0 ; j < 4 ; j ++ ){
            gcont.append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"'+'></div>');
            var numCell=$("#number-cell-"+i+"-"+j);
            if (board[i][j]==0) {
                numCell.css("width","0px");
                numCell.css("height","0px");
                numCell.css('top', getPosTop( i )+50 );
                numCell.css('top', getPosLeft( j )+50 );

            }
            else{
                numCell.css("width","100px");
                numCell.css("height","100px");
                numCell.css('top', getPosTop( i ));
                numCell.css('left', getPosLeft( j ));
                numCell.css('background-color', getNumBackgroundColor( board[i][j] ));
                numCell.css('color', getNumColor( board[i][j] ));
                numCell.text(board[i][j]);
            }     
        }
    }
}



function genNumber(){
    if(!noSpace(board)){
        var rn=Math.random()>=0.5?2:4;
        do{
            var rx=Math.floor(Math.random()*4)
            var ry=Math.floor(Math.random()*4)
            if (board[rx][ry]==0){
                board[rx][ry]=rn;
                showNumAnitmate(rx, ry, rn)
                return true;
            }
        }while(true)    
    }
    else return false;
}


$(document).keydown(function(event)){
    switch(event.keyCode){
        case 37:
            if (moveLeft()){
                genNumber();
                isGameover();

            };
            break;
        case 38:
            if (moveUp()){
                genNumber();
                isGameover();

            };
            break;
        case 39:
            if (moveRight()){
                genNumber();
                isGameover();
            };
            break;
        case 40
            if (moveDown()){
                genNumber();
                isGameover();
            };
            break;
        default:
            break;
    }
}

