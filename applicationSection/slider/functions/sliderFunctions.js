
//------------- ANIMATION FUNCTION SLIDER ----------------*/
//1 function scrolling : to change slides every 5 seconds
//2 function stop_play : to pause the slider and to unpause the slider

var slideIndex = 3;

function contenuSlide(image,title,item1,item2,item3,item4)
{
	this.image = image;
	this.title = title;
	this.item1 = item1;
	this.item2 = item2;
	this.item3 = item3;
	this.item4 = item4;
}

function creationElementSlider()
{
	for (var i = 0 ; i <slider.length ; i++)
      {
	      var divSlide = document.createElement('div');
		      divSlide.id = 'divSlide' + i;
		      divSlide.className= 'divSlide';
		      document.getElementById('sectionSlider').appendChild(divSlide);

	      var slide = document.createElement('img');
                  slide.id='slide'+i;
                  slide.className='mySlides';
	            slide.src='../applicationSection/slider/pictures/IMG_'+(1+i)+'.png';
		      document.getElementById('divSlide' + i).appendChild(slide);

	      var textSlide = document.createElement('div')
		      textSlide.id = 'textSlide' + i;
		      textSlide.className= 'textSlide';
	            document.getElementById('divSlide' + i).appendChild(textSlide);

	      var titleSlide = document.createElement('h1');
                  titleSlide.id = 'titleSlide'+ i;
		      titleSlide.className = 'titleSlide';
		      document.getElementById('textSlide'+i).appendChild(titleSlide);
		      titleSlide.innerHTML = slider[i].title;

	      var ulSlide = document.createElement('ul')
		      ulSlide.id ='ulSlide' + i;
		      document.getElementById('textSlide'+i).appendChild(ulSlide);

		for (var j = 0; j<4 ; j++)
            {
			var liSlide =document.createElement('li');
			      liSlide.id = 'liSlide' + i + j;
			      document.getElementById('ulSlide'+i).appendChild(liSlide);
			var itemBoucle = 'item'+(j+1);
			      liSlide.innerHTML= slider[i][itemBoucle];
		}
      };

};

function Slider()
{
	var buttonContainer = document.createElement('div');
            buttonContainer.id= 'buttonContainer';
            document.getElementById('sectionSlider').appendChild(buttonContainer);

	var divBtnSliderRight = document.createElement('div');
            divBtnSliderRight.id='divBtnSliderRight';
            divBtnSliderRight.className="divBtnSliderRight";

	var divBtnSliderLeft = document.createElement('div');
	      divBtnSliderLeft.id='divBtnSliderLeft';
	      divBtnSliderLeft.className="divBtnSliderLeft";

	var btnStop = document.createElement('div');
            btnStop.id='btnStop';
            btnStop.innerHTML="&#10074&#10074";
            document.getElementById('buttonContainer').appendChild(btnStop);
            document.getElementById('btnStop').addEventListener('click', function(){stop_play()});

            divBtnSliderRight.onclick= function(){plusDivs(1)};
            divBtnSliderLeft.onclick= function(){plusDivs(-1)};

            document.addEventListener("keydown", function(e){

                  if(e.keyCode === 37)
                  {
        	               plusDivs(-1);
                  }
                  else if(e.keyCode === 39)
                  {
        	            plusDivs(1);
   			}
		});
	//boucle de création des pastilles de slide

	for (var i=0; i< slider.length ; i++)
      {

		var spanBadge=document.createElement('span');
		spanBadge.id='spanBadge'+i;
		spanBadge.className='spanBadge';
		document.getElementById('buttonContainer').appendChild(spanBadge);
	}

	document.getElementById('buttonContainer').appendChild(divBtnSliderLeft);
	document.getElementById('buttonContainer').appendChild(divBtnSliderRight);

	divBtnSliderRight.innerHTML='&#10095';
	divBtnSliderLeft.innerHTML='&#10094';

      spanBadge0.onclick= function(){currentDiv(1)};
      spanBadge1.onclick= function(){currentDiv(2)};
      spanBadge2.onclick= function(){currentDiv(3)};


}


function plusDivs(n)
{
	showDivs(slideIndex += n);
}

function currentDiv(n)
{
      showDivs(slideIndex = n);
}

function showDivs(n)
{
	var i;
	var x = document.getElementsByClassName("divSlide");
	var dots = document.getElementsByClassName("spanBadge");

	if (n > x.length)
      {
	      slideIndex = 1
	}

	if (n < 1)
      {
		slideIndex = x.length;
	}

      for (i = 0; i < x.length; i++)
      {
		x[i].style.display = "none";
	}

      for (i = 0; i < dots.length; i++)
      {
		dots[i].className = dots[i].className.replace(" White", "");
      }

	x[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " White";

}

////////////////////////////////////////////////////////////////////////////////
///////////////////////  User actions control //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function keyboard_control(e)
{
      if(e.keyCode === 37)
            {plusDivs(-1);}
      else if(e.keyCode === 39)
            {plusDivs(1);}
}

function scrolling()
{
	if (read_statute === 0 )
            {
                  document.getElementById('divBtnSliderRight').click();
            }
	      setTimeout(scrolling,5000);
	};

function stop_play()
{
	if (read_statute === 0)
            {read_statute = 1;btnStop.innerHTML="&#9654";}
      else
            {read_statute = 0 ;btnStop.innerHTML="&#10074&#10074";} ;
}
