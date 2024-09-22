var TheForm=document.querySelector( ".TheForm");
var productInput=document.querySelector('#name');
var descriptionInput=document.querySelector('#description');
var priceInput=document.querySelector('#price');

var products=[];

TheForm.onsubmit = function(e){
    e.preventDefault();

     var product = {
         name: productInput.value,
         description: descriptionInput.value,
         price:priceInput.value,
     }
products.push(product);
print();
}
function print(){
    var data=``;

    for (var i = 0; i < products.length; i++) {
        data+=`<tr>
        <td>${products[i].name}</td>
        <td>${products[i].description}</td>
        <td>${products[i].price}</td>
        </tr>`;
    }
    
    document.querySelector("tbody").innerHTML=data;
}
