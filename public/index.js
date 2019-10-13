console.log('Hello consol!');
var capture;
var buttonTirarFoto;
var buttonSalvarFoto;
var fotoTirada;
var modo = 0;
var confirmarTakeSnap = false;


function setup()
{
    capture=createCapture(VIDEO);
    creatCanvas(windowWidth,windowHeight);
    
}

if ("geolocation" in navigator) {
    /* geolocation is available */
    console.log('Geolocation is available!!');

    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);

        document.getElementById('lat').innerHTML="Latitude:"+position.coords.latitude+'&deg';
        document.getElementById('long').innerHTML="Longitude:"+position.coords.longitude+'&deg';

      });

  } else {
    /* geolocation IS NOT available */
    console.log('please allow access to find location!!');
  }