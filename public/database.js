console.log('In show_data_get.js');

let button=document.getElementById('get');

button.addEventListener('click',async function onclick() {

    const res=await fetch('/api');
    const data=await res.json();

    console.log(data);


    var ul=document.getElementById('unorder_list');
    var string="";
    //var src="";
    for (item in data) {

        //var latt=item.lat;
        console.log(data[item].lat);    
        string+='<li>'+" # latitude:"+data[item].lat+"&deg;"+'</li><br>';
        string+='<li>'+" # longitude:"+data[item].long+"&deg"+'</li><br>';
        string+='<li>'+" # mood:"+data[item].mood+'</li><br>';
        string+='<li>'+" # mood:"+data[item].work+'</li><br>';
        const img=document.createElement('img');
        img.src=data[item].image64;
        document.body.append(img);
        //ul.append(string);
    }
    //console.log(string);
    ul.innerHTML=string;
    //ul.appendChild(string);
    
})