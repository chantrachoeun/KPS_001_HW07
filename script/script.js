var height = $(window).height();
var width = $(window).width();

$(function(){
	Ball1();
	Ball2();
	Ball3();
	Ball4();
	Ball5();
});


function Ball1(){
	$(".ball1").animate({ left: width -100 +'px'},1000,function(){
		$(".ball1").animate({ top: height -100 +'px'},1000,function(){
			$(".ball1").animate({ left: '0px'},1000,function(){
				$(".ball1").animate({ top: '0px'},1000,function(){
					Ball1();
				});
			});
		});	
	});
}


function Ball2(){
	$(".ball2").animate({ left: width -200 +'px'},500,function(){
		$(".ball2").animate({ top: height -200 +'px'},500,function(){
			$(".ball2").animate({ left: '100px'},500,function(){
				$(".ball2").animate({ top: '100px'},500,function(){
					Ball2();
				});
			});
		});	
	});
}


function Ball3(){
	$(".ball3").animate({ left: width -100 +'px', top: height -100 +'px' },300,function(){
		$(".ball3").animate({ top: '0px', left : width-100+"px"},300,function(){
			$(".ball3").animate({ top: height-100+'px', left: '0px'},300,function(){
				$(".ball3").animate({ top: '0px', left: '0px'},300,function(){
					Ball3();
				});
			});
		});	
	});
}



function Ball4(){
	$(".ball4").animate({ left: width -100 +'px', top: height -100 +'px'},500,function(){
		$(".ball4").animate({ top: '0px', left:'0px'},500,function(){
			Ball4();
		});	
	});
}



function Ball5(){
	$(".ball5").animate({ left: width/2 -100 +'px' },300,function(){
		$(".ball5").animate({ top: height-100+ 'px'},300,function(){
			$(".ball5").animate({ left: width-100+ 'px'},300,function(){
				$(".ball5").animate({ top: '0px'},500,function(){
					$(".ball5").animate({ top: height/2-100 + 'px', left: width/2-100+"px"},300,function(){
						$(".ball5").animate({ top: height-100 + 'px'},300,function(){
							$(".ball5").animate({ left: '0px'},300,function(){
								$(".ball5").animate({ top: '0px'},300,function(){
									Ball5();
								});	
							});	
						});	
					});	
				});	
			});	
		});	
	});
}