let product=localStorage.getItem("product");
let products=product.split(' ');
console.log(products[0]);



var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        let res =JSON.parse(xhttp.responseText);
        let id=res.data[3]['ProductId'];
        if(products[0]==id){
            
             //img
             
             let elemImg = document.createElement("img");
             let img=res.data[1]['ProductPicUrl'];
             elemImg.setAttribute("src",img);
             elemImg.setAttribute("height", "200");
             elemImg.setAttribute("width", "200");
             elemImg.setAttribute("alt", "Flower");
             document.getElementById("abc").appendChild(elemImg);
            
            //id
            let elemPrice=document.createElement("span");
            let price=res.data[1]['Price'];
            elemPrice.innerHTML=price;
            document.getElementById("abc").appendChild(elemPrice);
            let convertPrice=Number(price);
           // name
           let name=res.data[1]['Name'];
           let elemName=document.createElement("span");
           elemName.innerHTML=name;
           document.getElementById("abc").appendChild(elemName);

           // input
           let inputquantity = document.createElement('input');
           inputquantity.setAttribute("type","number");
           inputquantity.setAttribute("min","0");
           inputquantity.setAttribute("max","10");
           inputquantity.setAttribute("id","input-price")
           document.getElementById("abc").appendChild(inputquantity);

           //total price
           let inputPrice=document.getElementById('input-price');
           inputquantity.addEventListener("input",function(){
             let p=inputPrice.value;
             let totalelem=document.createElement("span");
             let total=Number(p)*convertPrice;

             totalelem.innerHTML=total;
            document.getElementById("abc").appendChild(totalelem);
           });
          
           
           
        
        }


    }
};

xhttp.open("GET", "https://afternoon-falls-30227.herokuapp.com/api/v1/products/", true);
xhttp.send();