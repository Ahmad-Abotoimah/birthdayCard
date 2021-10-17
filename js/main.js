const person  = [
    {
        name : 'Sahar',
        img: 'https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png',
        age: 29,
        dop: '13 jan 1992'
    },
    {
        name : 'Reem',
        img: 'https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png',
        age: 27,
        dop: '18 feb 1994'
    },{
        name : 'Dania',
        img: 'https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png',
        age: 22,
        dop: '29 jan 1997'
    },{
        name : 'Ghoson',
        img: 'https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png',
        age: 21,
        dop: '14 Oct 1998'
    },{
        name : 'Hazem',
        img: 'https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png',
        age: 23,
        dop: '18 Oct 1998'
    },{
        name : 'Ahamad',
        img: 'https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png',
        age: 23,
        dop: '18 Oct 1998'
    }
];

var date = new Date()
var month = date.toLocaleString('en-US', { month: 'short' });
var day = date.getDate();
var today = day + ' '+ month;

var  counter = 0;

// var divElement = document.createElement('div');
 var cardsContainer = document.querySelector('.cards-container');

for(let i = 0 ; i<person.length;i++ ){
    if(person[i].dop.includes(today)){

     var divElement = document.createElement('div');
     divElement.id=i;
     divElement.setAttribute('class','card');
     cardsContainer.appendChild(divElement);
     //img 
     var img = document.createElement('img');
     divElement.appendChild(img);
     img.src = person[i].img;
     //div text
     let textDiv = document.createElement('div');
     divElement.appendChild(textDiv);
     var boldName = document.createElement('h5');
     var paragraph = document.createElement('p');
     textDiv.appendChild(boldName);
     textDiv.appendChild(paragraph);
     boldName.innerHTML = person[i].name  + '<br>' ;
     paragraph.innerHTML = person[i].age  ;
     counter++;
    }

}
//    textDiv.className=('text-div');
var header = document.querySelector('#header');
header.innerHTML = `${counter} Birthdays Today` 




var container = document.querySelector('.container');

var btn1DIV = document.createElement('div');
var btn1 = document.createElement('button');
btn1DIV.appendChild(btn1);
container.appendChild(btn1DIV);
btn1.innerHTML='red';
btn1.style.backgroundColor='red';
btn1.style.borderRadius='15px';
btn1.style.width='100px';
btn1.style.color='white';
btn1.style.marginLeft='30px';
btn1DIV.classList.add('btn-1')

var btn2DIV = document.createElement('div');
var btn2 = document.createElement('button');
btn2DIV.appendChild(btn2);
container.appendChild(btn2DIV);
btn2.innerHTML='black';
btn2.style.backgroundColor='black';
btn2.style.borderRadius='15px';
btn2.style.width='100px';
btn2.style.color='white';
btn2.style.marginLeft='30px';
btn2DIV.classList.add('btn-2')

var btn3DIV = document.createElement('div');
var btn3 = document.createElement('button');
btn3DIV.appendChild(btn3);
container.appendChild(btn3DIV);
btn3.innerHTML='pink';
btn3.style.backgroundColor='#F08AB1';
btn3.style.borderRadius='15px';
btn3.style.width='100px';
btn3.style.color='white';
btn3.style.marginLeft='30px';
btn3DIV.classList.add('btn-3')


var body = document.querySelector('body')


btn1.onclick = function red(){
 body.style.backgroundColor= 'red';
 clear.style.backgroundColor= 'red';

}

btn2.onclick = function black(){
    body.style.backgroundColor= 'black';
    clear.style.backgroundColor= 'black';
    clear.style.color='white';
   }

 btn3.onclick = function pink(){
    body.style.backgroundColor= '#F08AB1';
    clear.style.backgroundColor= '#F08AB1';
   }

var clear = document.querySelector('.clear');
// console.log(clear);

clear.onclick=function clearer(){
if (cardsContainer.style.display!=='none'){
    // clear.onclick=function clearAll(){
        cardsContainer.style.display='none';
    // }
}
else{
    // clear.onclick=function notclearAll(){
    cardsContainer.style.display='block';
// }
}
}
