for(let x=1;x<=13;x++){
  fetch(`https://afternoon-falls-30227.herokuapp.com/api/v1/products/?page=${x}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let productsId=localStorage.getItem("product").split(" ");
    let products= productsId.filter((item, index) => productsId.indexOf(item) === index)
    for(let j=0;j<products.length;j++){
      for(let i=0;i<data.data.length;i++){
        // check if id in local storage equal real id
      let id=data.data[i]['ProductId'];
      if(products[j]==id){
            // get img
              let img= data.data[i]['ProductPicUrl'];
              let body =document.getElementById('abc');
              let r = document.createElement("TR");
              r.setAttribute("height","100");
              // add cell
              let td = document.createElement("TD");
                // put image into cell
              let createImg = document.createElement("IMG");
              createImg.setAttribute("src",img);
              createImg.setAttribute("height","150");
              td.appendChild(createImg);
              r.appendChild(td);
              body.appendChild(r);

             // get name of product
              let name=data.data[i]['Name'];
              let nameTd = document.createElement("TD");
              nameTd.innerHTML=name;
              r.appendChild(nameTd);
              body.appendChild(r);
              //price
              let price=data.data[i]['Price'];
              let priceTd = document.createElement("TD");
              priceTd.innerHTML=price;
              r.appendChild(priceTd);
              body.appendChild(r);
              let convertPrice=Number(price);
              // quanyity
              let inputquantity = document.createElement('input');
              inputquantity.setAttribute("type","number");
              inputquantity.setAttribute("min","0");
              let max=data.data[i]['Quantity'];
              inputquantity.setAttribute("max",max);
              inputquantity.setAttribute("value","0");
              let inputTd = document.createElement("TD");

              inputTd.appendChild(inputquantity);
              r.appendChild(inputTd);
              body.appendChild(r);
           
               //total price
         
              var totalPriceAll=document.getElementById('total_price');
              let totalTd=document.createElement("TD");
              totalTd.setAttribute('class','totalTd');
              inputquantity.addEventListener('click',function(event){
                let inputPrice=inputquantity.value;
                tot=inputPrice*convertPrice;
                totalTd.innerHTML=tot; 
                updateCartTotal();
              });
              r.appendChild(totalTd);
              body.appendChild(r);
       }
     }
 }
});
}
          
          
          
        
        
      
  
//     function to get total
function updateCartTotal() {
let totalPriceRow = document.getElementsByClassName('totalTd');
var total = 0;
for (var i = 0; i < totalPriceRow.length; i++) {
 let con=Number(totalPriceRow[i].innerHTML);
 total+=con ;
}
let theTotal=document.getElementById('total_price');
theTotal.innerHTML=total;
}
      





           

            

            



           
           
            
      

   
        
           
            
           
          
          
          
         

     