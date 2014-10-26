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
}

function init(){
    for( i = 0 ; i < 4 ; i ++ )
        for( j = 0 ; j < 4 ; j ++ ){

            gridCell = $('#grid-cell-'+i+"-"+j);
            gridCell.css('top', getPosTop( i ) );
            gridCell.css('left', getPosLeft( j ) );
        }

}
