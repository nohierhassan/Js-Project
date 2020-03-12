




/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
            
        
        let res =JSON.parse(xhttp.responseText);
        let id=res.data[i]['ProductId'];
        if(products[i+1]==id){
            
             //img
             
             let elemImg = document.createElement("img");
             let img=res.data[i]['ProductPicUrl'];
             elemImg.setAttribute("src",img);
             elemImg.setAttribute("height", "200");
             elemImg.setAttribute("width", "200");
             elemImg.setAttribute("alt", "Flower");
             document.getElementById("abc").appendChild(elemImg);
            
            //id
            let elemPrice=document.createElement("span");
            let price=res.data[i]['Price'];
            elemPrice.innerHTML=price;
            document.getElementById("abc").appendChild(elemPrice);
            let convertPrice=Number(price);
           // name
           let name=res.data[i]['Name'];
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
             p*=convertPrice;

             totalelem.innerHTML=p;

             document.getElementById("abc").appendChild(totalelem);
           

            

            



           
           
            
            

           });
          
          
        }
        
        
        }
       

    
    

};
xhttp.open("GET", "https://afternoon-falls-30227.herokuapp.com/api/v1/products/", true);
    xhttp.send();
       

*/
   var tot=0
    for(let x=1;x<=13;x++){
      fetch(`https://afternoon-falls-30227.herokuapp.com/api/v1/products/?page=${x}`)
      .then((response) => {
    return response.json();
    })
  .then((data) => {
      //console.log(data);
   // console.log(data.data[0]['ProductId']);

     let productsId=localStorage.getItem("product").split(" ");
     let products= productsId.filter((item, index) => productsId.indexOf(item) === index)
   
      
      for(let j=0;j<products.length;j++){
        for(let i=0;i<data.data.length;i++){
          

            
            let id=data.data[i]['ProductId'];
            if(products[j]==id){
                  // get img
                    let img= data.data[i]['ProductPicUrl'];
                    let body =document.getElementById('abc');
                    let r = document.createElement("TR");
                    r.setAttribute("height","100");
                    // add cell
                    let td = document.createElement("TD");
                    

                    //td.setAttribute("height","200");
                    // put image into cell
                    let createImg = document.createElement("IMG");
                    createImg.setAttribute("src",img);
                    createImg.setAttribute("height","150");
                    td.appendChild(createImg);
                    r.appendChild(td);
                    body.appendChild(r);

                   
                    //
                   
                    //let br = document.createElement("br");
                    //document.getElementById('abc').appendChild(br);
                   // get name of product
                    let name=data.data[i]['Name'];
                    let nameTd = document.createElement("TD");

                   // let elemName=document.createElement("span");
                    nameTd.innerHTML=name;
                    r.appendChild(nameTd);
                    body.appendChild(r);
                      //document.getElementById('abc').appendChild(br);

                    //price
                    
                    let price=data.data[i]['Price'];
                   // let elemPrice=document.createElement("span");
                   let priceTd = document.createElement("TD");

                    priceTd.innerHTML=price;
                    r.appendChild(priceTd);
                    body.appendChild(r);
                    //document.getElementById("abc").appendChild(elemPrice);
                   // document.getElementById('abc').appendChild(br);
                    let convertPrice=Number(price);


                // quanyity
                 let inputquantity = document.createElement('input');
                 inputquantity.setAttribute("type","number");
                 inputquantity.setAttribute("min","1");
                 inputquantity.setAttribute("max","10");
                 inputquantity.setAttribute("value","0");
                 let inputTd = document.createElement("TD");
                // priceTd.innerHTML=price;
                 inputTd.appendChild(inputquantity);
                 r.appendChild(inputTd);
                 body.appendChild(r);

                 //inputquantity.setAttribute("class","input-price")
               //  document.getElementById("abc").appendChild(inputquantity);
                // document.getElementById('abc').appendChild(br);

                 //total price
                 
                
                
                  let totalTd=document.createElement("TD");
                  inputquantity.addEventListener('click',function(event){
                      
                    let inputPrice=inputquantity.value;
                    let tot=inputPrice*convertPrice;
                    totalTd.innerHTML=tot; 
                       
                      
                    
                   });
                   r.appendChild(totalTd);
                   body.appendChild(r);

                   

                 
              
                  
                  
                  
                

            }
            
          
        }
           
       
      }
     
  });
}