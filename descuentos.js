const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calculePriceWithDiscount);

function calculePriceWithDiscount(){

   const price = Number(inputPrice.value);
   const discount = Number(inputDiscount.value);

   console.log({price, discount });
   
   if (!price || !discount) {
    pResult.innerText = 'Dude, put the numbers lol';
    return;
   }

   if (discount > 100) {
    pResult.innerText = 'haha, no.';
    return;
   }

   const newPrice = (price * (100 - discount)) / 100;

pResult.innerText = 'The new price with discount is $' + 
newPrice;
}

