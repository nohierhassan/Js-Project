




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
                    let elemImg = document.createElement("img");
                    elemImg.setAttribute("src",img);
                    elemImg.setAttribute("height", "200");
                    elemImg.setAttribute("width", "200");
                    elemImg.setAttribute("alt", "Flower");
                    document.getElementById("abc").appendChild(elemImg);
                    let br = document.createElement("br");
                    document.getElementById('abc').appendChild(br);
                   // get name of product
                    let name=data.data[i]['Name'];
                    let elemName=document.createElement("span");
                    elemName.innerHTML=name;
                   
                    document.getElementById("abc").appendChild(elemName);
                    document.getElementById('abc').appendChild(br);

                    //price
                    
                    let price=data.data[i]['Price'];
                    let elemPrice=document.createElement("span");
                    elemPrice.innerHTML=price;
                    document.getElementById("abc").appendChild(elemPrice);
                    document.getElementById('abc').appendChild(br);
                    let convertPrice=Number(price);


                // quanyity
                 let inputquantity = document.createElement('input');
                 inputquantity.setAttribute("type","number");
                 inputquantity.setAttribute("min","1");
                 inputquantity.setAttribute("max","10");
                 inputquantity.setAttribute("value","0");

                 inputquantity.setAttribute("class","input-price")
                 document.getElementById("abc").appendChild(inputquantity);
                 document.getElementById('abc').appendChild(br);

                 //total price
                 
                   inputquantity.addEventListener('change',(ev)=>{
                   
                      let inputPrice=inputquantity.value;
                    console.log(typeof inputPrice)
                        tot=inputPrice*convertPrice;
                       

                        
                 });

                 
                

            }
            
          
        }
           
       
      }
     
  });
}