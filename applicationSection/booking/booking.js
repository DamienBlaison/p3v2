function testbooking(){


	if (testStorage === 1){

	insertionElementHtml('5');

	document.getElementById('btnNo').addEventListener('click', function(){document.getElementById('windowConfirmAnnulResa').parentNode.removeChild(document.getElementById('windowConfirmAnnulResa'))});
	document.getElementById('btnYes').addEventListener('click', function(){document.getElementById('windowConfirmAnnulResa').parentNode.removeChild(document.getElementById('windowConfirmAnnulResa'));annulationReservation();});

	} else {
		if (document.getElementById('nameCustomerInput').value===''|| document.getElementById('firstnameCustomerInput').value ===''){ alert('Merci de renseigner votre nom et prénom pour faire une réservation')}
		else{
		localStorage.setItem('nameCustomer',document.getElementById('nameCustomerInput').value);
		localStorage.setItem('firstnameCustomer',document.getElementById('firstnameCustomerInput').value);

		insertionElementHtml('2');
		insertionElementHtml('3');

		signUser();

		document.getElementById('stationReserve').innerHTML=document.getElementById('nameStation').textContent + '<br />'+ document.getElementById('adressForm').textContent;

		var compteurVeloDispo = document.getElementById('nbPlaceDispoForm').textContent ;

			for (i=0;i<compteurVeloDispo;i++){
				var option = document.createElement('option');
					option.classname= 'option';
					document.getElementById('listeResa').appendChild(option);
					option.innerHTML= i+1;
				};

		document.getElementById('closeCross').addEventListener('click', function(){closeFormReservation()});
		document.getElementById('btnAnnulReservation').addEventListener('click',function(){annulationReservation()});
		document.getElementById('btnEraseSign').addEventListener('click',function(){eraseSign()});
		document.getElementById('btnConfirmReservation').addEventListener('click', function(){confirmReservation()});
		};
	};
	};

function reservation()
{
	var s = 20/*3600/3*/;
	function clock()
	{
		if (s>=1)
		{
			s = s-1;
			var nbM = Math.floor(s / 60);
			document.getElementById('nbM').innerHTML= '\r' + nbM + '\r Minute(s)';
			document.getElementById('nbM').style.display='block';

			var nbS = s - (nbM*60);
			document.getElementById('nbS').innerHTML= '\r' + nbS + '\r Seconde(s)';
			document.getElementById('nbS').style.display='block';
			function pushStorage()
			{
				testStorage = 1;
				console.log (testStorage);

				sessionStorage.setItem('nbMSS',nbM);
				sessionStorage.setItem('nbSSS',nbS);

		 /* rappel après 1 secondes = 1000 millisecondes */
				document.getElementById('footer').innerHTML = 'Une réservation au nom de ' + sessionStorage.getItem('nameCustomerInput') +' '+ sessionStorage.getItem('firstnameCustomerInput')+ " est enregistrée pour " +sessionStorage.getItem('nbVeloReserverSS') + ' vélo(s) à la station ' + sessionStorage.getItem('nameStationSS') + ' . Cette dernière est valable encore ' + sessionStorage.getItem('nbMSS') + ' min et ' + sessionStorage.getItem('nbSSS') + ' sec.';
			};
			pushStorage();
			setTimeout(clock,1000);
		}
		else
		{
			document.getElementById('nbM').innerHTML= 'Réservation expirée';
			document.getElementById('nbS').style.display= 'none';
			document.getElementById('btnEraseSign').disabled=false;
			document.getElementById('btnConfirmReservation').disabled=false;
			document.getElementById('listeResa').disabled=false;
			testStorage = 0;
			console.log(testStorage);
			document.getElementById('footer').innerHTML ='Vous n\'avez aucune réservation en cours';
			var x = document.getElementById('divFormSignature');
			document.body.removeChild(x);
		}
	};
	clock();
};

function confirmReservation(){

	if (signed == true) {

		reservation();

		document.getElementById('divTimerReservation').style.display='flex';
		document.getElementById('btnEraseSign').disabled=true;
		document.getElementById('btnConfirmReservation').disabled=true;
		document.getElementById('listeResa').disabled=true;
		insertionElementHtml('4');


		sessionStorage.setItem("nameCustomerInput",document.getElementById('nameCustomerInput').value);
		sessionStorage.setItem("firstnameCustomerInput",document.getElementById('firstnameCustomerInput').value);
		sessionStorage.setItem("nameStationSS",document.getElementById('nameStation').textContent);
		sessionStorage.setItem("addressStationSS",document.getElementById('adressForm').textContent);
		sessionStorage.setItem("nbVeloReserverSS",document.getElementById('listeResa').value);
		sessionStorage.setItem("nbMSS",document.getElementById('nbM').textContent);
		sessionStorage.setItem("nbSSS",document.getElementById('nbS').textContent);

		testSignature=1;
		}

		else {

			alert('Merci de signer le formulaire avant de pouvoir valider votre réservation')
		};
	};
      function closeFormReservation(){

      	var b = 'Réservation expirée';
      	var d = 'Vous n\'avez aucune réservation en cours';
      	console.log(document.getElementById('footer').textContent)

      	if ((document.getElementById('nbM').textContent == b)||(document.getElementById('footer').textContent == 'Vous n\'avez aucune réservation en cours')){

      		document.getElementById('divFormSignature').parentNode.removeChild(document.getElementById('divFormSignature'))
      		testStorage=0;
      		}

      		else {

      		document.getElementById('divFormSignature').style.display = 'none';
      		testStorage=1;
      		};

      	};
      function annulationReservation(){
      	var x = document.getElementById('divFormSignature');
      	document.body.removeChild(x);
      	 testStorage=0;
      	 document.getElementById('footer').innerHTML = 'Vous n\'avez aucune réservation en cours';

      	};
	function eraseSign()
	{
			var a = document.getElementById('signUser');
			var ctx =a.getContext('2d');
			ctx.clearRect(0,0,300,300);
			ctx.beginPath();
			signed = false;
			document.getElementById('hideSign').parentNode.removeChild(document.getElementById('hideSign'));
	};


function signUser()
{
	var a = document.getElementById('signUser');
	a.width = '300';
	a.height = '300';
	var ctx =a.getContext('2d');
	var drawing = false;
		//propriété graphique du canvas
	ctx.lineWidth=1;
	ctx.fillStyle="black";
	signed = false;
		// action de la souris sur le canvas
	a.onmousedown= function(e)
	{
		drawing=true;
		signed= true;
		ctx.moveTo(e.offsetX,e.offsetY);
	};
	a.onmousemove= function (e)
	{
		if (drawing) draw(e.offsetX,e.offsetY);
	};

	a.onmouseup= function(e)
	{
		drawing = false;
	};
	function draw(x,y)
	{
		ctx.lineTo(x,y);
		ctx.stroke();
	};
};
