function showNumAnitmate(i, j, randNum) {
    var numCell=$("#number-cell-"+i+"-"+j);
	numCell.css("background-color",getNumBackgroundColor( randNum ));
	numCell.css("color",getNumColor( randNum ));
	numCell.text(randNum);
	
	numberCell.animate({
		width:"100px",
		height:"100px",
		top:getPosTop(i),
		left:getPosLeft(j)
	  },
	  100
	);

}