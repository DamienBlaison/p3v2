// test modification
// declaration des varialbles

var testStorage = 0;
var signed = false;
var testSignature = 0;
var markers=[];
var marker= null;
var read_statute = 0;

var arrayHtml = [

	//******************************    section map et formulaire ***************************************************************************//
	sectionSlider = new ObjHtml('section','sectionSlider','sectionSlider','body','','','','','1'),

	sectionMapForm = new ObjHtml('section','sectionMapForm','sectionMapForm','body','','','','','1'),
		divMap = new ObjHtml('div','map','map','sectionMapForm','','','','','1'),

	////////////////////////////////    form reservation    ///////////////////////////////////////////////////

		divForm = new ObjHtml('div','divForm','divForm','sectionMapForm','','','','','1'),

		nameStationTitle = new ObjHtml('p','nameStationTitle','titleDetailStation','divForm','STATION','','','','1'),
		nameStation = new ObjHtml('p','nameStation','nameStation','divForm',' - ','','','','1'),
		adressStationTitle = new ObjHtml('p','adressStationTitle','titleDetailStation','divForm','ADRESSE','','','','1'),
		adressForm = new ObjHtml('p','adressForm','adressForm','divForm',' - ','','','','1'),
		stateStationTitle = new ObjHtml('p','stateStationTitle','titleDetailStation','divForm','STATUT','', '','','1'),
		stateStationForm = new ObjHtml('p','stateStationForm','stateStationForm','divForm',' - ','','','','1'),
		nbPlaceStationTitle = new ObjHtml('p','nbPlaceStationTitle','titleDetailStation','divForm','NOMBRE DE PLACE(S) DISPONIBLE(S)','','','','1'),
		nbPlaceForm = new ObjHtml('p','nbPlaceForm','nbPlaceForm','divForm',' - ','','','','1'),
		nbPlaceDispoStationTitle = new ObjHtml('p','nbPlaceDispoStationTitle','titleDetailStation','divForm','NOMBRE DE VELO(S) DISPONIBLE(S)','','','','1'),
		nbPlaceDispoForm = new ObjHtml('p','nbPlaceDispoForm','nbPlaceDispoForm','divForm',' - ','','','','1'),
		nameCustomer = new ObjHtml('p','nameCustomer','titleDetailStation','divForm','NOM : ','','','','1'),
		nameCustomerInput = new ObjHtml('input','nameCustomerInput','infoCustomerInput','divForm','NOM : ','',localStorage.getItem('nameCustomer'),'','1'),
		firstnameCustomer = new ObjHtml('p','prénameCustomer','titleDetailStation','divForm','PRENOM : ','','','','1'),
		firstnameCustomerInput = new ObjHtml('input','firstnameCustomerInput','infoCustomerInput','divForm','PRENOM : ','',localStorage.getItem('firstnameCustomer'),'','1'),
		btnlaunchbooking = new ObjHtml('input','btnlaunchbooking','btnlaunchbooking','divForm','','','RESERVER','button','1'),

		divFormSignature = new ObjHtml('div','divFormSignature','divFormSignature','body','','','','','2'),
		divFormSignatureBtn = new ObjHtml('div','divFormSignatureBtn','divFormSignatureBtn','divFormSignature','','','','','2'),
		myCanvas = new ObjHtml('canvas','signUser','signUser','divFormSignatureBtn','','','','','2'),
		btnEraseSign = new ObjHtml( 'input','btnEraseSign','btnEraseSign','divFormSignatureBtn','','','Effacer la signature','button','2'),
		closeCross = new ObjHtml('i','closeCross','fas fa-times','divFormSignature','','','','','2'),
		resumReservationForm = new ObjHtml('div','resumReservationForm','resumReservationForm','divFormSignature','','','','','2'),
			resumReservation = new ObjHtml('div','resumReservation','resumReservation','resumReservationForm','<span>Résumé de la réservation </span> <br /><br />','','','','2'),
			stationReserve = new ObjHtml('div','stationReserve','stationReserve','resumReservationForm','','','','','2'),
			nbVeloReservation = new ObjHtml('p','nbVeloReservation','','resumReservationForm','Combien de vélo(s) souhaitez vous réserver ?','','','','2'),
			listeResa = new ObjHtml('select','listeResa','liste','resumReservationForm','','','','','2'),
			btnConfirmReservation = new ObjHtml('input','btnConfirmReservation','','resumReservationForm','','','Réservation','button','2'),
			btnAnnulReservation = new ObjHtml('input','btnAnnulReservation','btnAnnulReservation','resumReservationForm','','','Annulation de la reservation','button','2'),
			divTimerReservation = new ObjHtml('div','divTimerReservation','divTimerReservation','resumReservationForm','','','','','3'),
			nbM = new ObjHtml('div','nbM','tuileCount','divTimerReservation','','','','','3'),
			nbS = new ObjHtml('div','nbS','tuileCount','divTimerReservation','','','','','3'),
			hideSign = new ObjHtml('div','hideSign','','divFormSignatureBtn','','','','','4'),

		windowConfirmAnnulResa =new ObjHtml('div','windowConfirmAnnulResa','windowConfirmAnnulResa','body','','','','','5'),
		messsageInfoResa = new ObjHtml('h1','','','windowConfirmAnnulResa',"Attention , une réservation est déjà en cours <br /> voulez vous annuller cette dernière?",'','','','5'),
		btnYes = new ObjHtml('input','btnYes','btn','windowConfirmAnnulResa','','','Yes','button','5'),
		btnNo = new ObjHtml('input','btnNo','btn','windowConfirmAnnulResa','','','Non','button','5'),

		messageError = new ObjHtml('p','messageErrorMap','messageErrorMap','map','La réservation est pour le moment indisponible','','','','6'),

	//******************************     section footer    ***************************************************//
 	footer = new ObjHtml('section','footer','footer','body','Vous n\'avez aucune réservation en cours','','','','1')



	//'' = new ObjHtml(type,id,classCss,idparent,text,title,value,type,insert),

	];

// insertion des elements html de base de l'appli
var slider = [
	slide1 = new contenuSlide('src=IMG_1.png','CHOISIR UNE STATION SUR LA CARTE','Icone rouge ajourée : regroupement de stations','Icone rouge : station fermée','Icone orange: station ouverte, 0 vélo disponible','Icone verte : station ouverte x vélo(s) disponible(s)'),
	slide2 = new contenuSlide('src=IMG_2.png','VISUALISER ET RESERVER','Les infos de la station correspondent à vos attentes ?', 'Cliquer sur le bouton réserver ','Sinon choisir une autre station','Cette fois c\'est la bonne ? , cliquer sur le bouton réserver'),
	slide3 = new contenuSlide('src=IMG_3.png','VALIDER SA RESERVATION','Apposer votre signature','Choisir le nombre de vélos à réserver','Valider votre réservation','Votre réservation sera valide durant 20 minutes'),
	];

insertionElementHtml('1');

// insertion des slides dans un tableau pour pouvoir y accéder avec des index

var slider = [slide1,slide2,slide3];
	slider.id = 'slider';

// boucle de création des elements HTML
creationElementSlider();

/////////////////////////////    navigation Slider      ////////////////////////////////////////////////////////////
Slider();
scrolling();

//////////////////////////////////////////////      action au click sur le bouton reserver (apparition du formulaire de reservation) //////////////////////////////////////

	var slideIndex = 3;
document.getElementById('btnlaunchbooking').addEventListener('click',function(){testbooking()});
