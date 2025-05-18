


let Incriment = document.querySelector('.plus');
let Decrement = document.querySelector('.min');
let Count = 0;

if(Count <1){
  document.getElementById('price-bar').innerHTML = Count;
}
document.querySelector('#count-display').innerHTML =Count ;
Incriment.addEventListener('click', ()=>{
Count +=1;
document.getElementById('price-bar').innerHTML = Count*45
document.querySelector('.count-display').innerHTML = Count;

});
Decrement.addEventListener('click', ()=>{
 if(Count > 0){
  Count -=1;
  document.getElementById('price-bar').innerHTML = Count*45
  document.querySelector('.count-display').innerHTML = Count;
  
 }

  });






