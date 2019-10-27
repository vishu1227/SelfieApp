console.log('Hello consol!');
var capture;
var buttonTirarFoto;
var buttonSalvarFoto;
var fotoTirada;
var modo = 0;
var confirmarTakeSnap = false;
var lat=0;
var long=0;


console.log('Hello consol!');


const button=document.getElementById('submit');

function setup()
{
   
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
  
  buttonTirarFoto = createButton("Take Snap!");
  buttonTirarFoto.position(width/2-70, height - 60); 
  buttonTirarFoto.mousePressed(takeSnap);
  
  buttonSalvarFoto = createButton("Save the image!");
  buttonSalvarFoto.position(width/2 - 120, height - 60);
  buttonSalvarFoto.hide();
  buttonSalvarFoto.mousePressed(saveSnap);
   

   //capture.hide();
   

    if ("geolocation" in navigator) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position);
    
            document.getElementById('lat').innerHTML="latitude : "+position.coords.latitude+'&deg';
            document.getElementById('long').innerHTML="longitude : "+position.coords.longitude+'&deg';
    
            lat=position.coords.latitude;
            long=position.coords.longitude;
            
          });
      } else {
        /* geolocation IS NOT available */
      }     
}
function draw() {    
  if(modo == 0){ 
    image(capture, width/2 + 25, 0);   
  }else if(modo == 1){
    background(255);
    image(fotoTirada, 0, 0, width, height);
    saveCanvas("minhaFoto", "jpg");
    background(255);
    modo = 0;
  }
}

function takeSnap(){
 tint(255);
 image(capture, 20, 0);
 fotoTirada = capture.get();
 image(fotoTirada, 20, 0);
 
 //Tive que usar esse codigo abaixo anteriormente para a camera não travar ao usar o capture.get().
// capture = createCapture(VIDEO); consegui evitar de usar esse codigo que suja cada vez mais o html com novas tags de video
 //capture.hide(); colocando o tint ali em cima.
 
 confirmarTakeSnap = true;
}

function saveSnap(){
  if(confirmarTakeSnap){
   modo = 1;
  }
}
button.addEventListener('click',async function onclick(){
  capture.loadPixels();
  var image64=capture.canvas.toDataURL();
  //console.log(image64);
  
  var mood=document.getElementById('mood').value;
  var work=document.getElementById('work').value;
  const data={lat,long,mood,work,image64};

  console.log(data);
  const option={
  method: 'POST',
  headers: {
                'Content-Type': 'application/json'
                //'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        }  


  /*const img=createElement('img');
  img.src=data.image64;*/
  //var image=document.getElementById('image64');
  //image.src=image64;
  //document.body.append(img);
        //to post the data to the server
  const data_fetch=await fetch('/api_post',option);//data fetch is used to recieve the response from the server
  const json_data=await data_fetch.json();//data gettinig is of the form text
  console.log(json_data);
})
//var D_button=document.getElementById('fetch_db');
//D_button.onclick="window.location.href = 'localhost:5000/database.html';";