function initMap() {

  	var xhr = new XMLHttpRequest();
		xhr.open("GET","https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=569a1c979fb8cecccf783e3c77e46755ca2079d9");
		xhr.send(null);

  	xhr.addEventListener('readystatechange',function(){
            
			if (xhr.readyState === 4 )
                        {

                              if (xhr.status > 0 && xhr.status <= 199)
                              {
                                    insertionElementHtml('6');
                                    document.getElementById('messageErrorMap').innerHTML =  'Le serveur renvoi un message d\'erreur de type "Information"' + '</br></br>'+'Réservation impossible pour le moment';
                              };

                              if (xhr.status >= 200 && xhr.status <= 299)
                              {
                                    responses = JSON.parse(xhr.responseText);

      					var center = new google.maps.LatLng(45.774204,4.867512);
      					var map = new google.maps.Map(document.getElementById('map'),{zoom:12,center:center,mapTypeId: google.maps.MapTypeId.ROADMAP});

      					for (let i=0; i<responses.length ; i++)

                                    {

      						let position = {lat:responses[i].position.lat, lng:responses[i].position.lng}
      						let latLng = new google.maps.LatLng(position);

      						var x

      						if(responses[i].status == 'CLOSED') { x ='../applicationSection/map/icons/free-4-red.png'} else { if (responses[i].available_bikes >0) {x ='../applicationSection/map/icons/free-4-green.png'} else {x ='../applicationSection/map/icons/free-4-orange.png'}};

      						let marker = new google.maps.Marker(

      						      {
      							position: latLng,
      							icon: x,
      							size: (10, 10),
      						      }
      						);

      						marker.addListener('click', function(){
      							document.getElementById('nameStation').textContent= responses[i].name;
      							document.getElementById('adressForm').textContent= responses[i].address;
      							document.getElementById('stateStationForm').textContent=  responses[i].status;
      							document.getElementById('nbPlaceForm').textContent=  responses[i].available_bike_stands;
      							document.getElementById('nbPlaceDispoForm').textContent=  responses[i].available_bikes;

      							setTimeout(function(){ marker.setAnimation(null); }, 375);

      							marker.setAnimation(google.maps.Animation.BOUNCE);

      							if (document.getElementById('nbPlaceDispoForm').textContent == 0 )
                                                {
      								document.getElementById('btnlaunchbooking').style.display = 'none';
                                                }

                                                else
                                                {
                                                      document.getElementById('btnlaunchbooking').style.display = 'block';

                                                }
      						});

      						markers.push(marker);
      					};


      					let markerCluster = new MarkerClusterer(map, markers, {imagePath: '../applicationSection/map/icons/m'});
                              };

                              if (xhr.status >= 300 && xhr.status <= 399)
                              {
                                    insertionElementHtml('6');
                                    document.getElementById('messageErrorMap').innerHTML =  'Le serveur renvoi un message d\'erreur de type "Redirection"' + '</br></br>'+'Réservation impossible pour le moment';
                              };

                              if (xhr.status >= 400 && xhr.status <= 499)
                              {
                                    insertionElementHtml('6');
                                    document.getElementById('messageErrorMap').innerHTML =  'Le serveur renvoi un message d\'erreur de type "Client error"' + '</br></br>'+'Réservation impossible pour le moment';
                              };

                              if (xhr.status >= 500 )
                              {
                                    insertionElementHtml('6');
                                    document.getElementById('messageErrorMap').innerHTML =  'Le serveur renvoi un message d\'erreur de type "Server Error"' + '</br></br>'+'Réservation impossible pour le moment';
                              };

                        };

		});
	};
