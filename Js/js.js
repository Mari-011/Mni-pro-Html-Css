var allitems=document.querySelectorAll('.list li');
var btn=document.querySelector('#btn');
var cart=document.querySelector('#content');
var totalPrice=0;
allitems.forEach(function(item){
    item.onclick=function(){
        totalPrice += parseInt(item.getAttribute('price'));
        // console.log(totalPrice)
    }
});
btn.onclick=function(){
    cart.innerHTML=totalPrice;
}