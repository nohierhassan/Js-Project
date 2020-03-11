//here is our code in js

// elkhadragy part view products in home page
const xhr = new XMLHttpRequest();
var product_details=new XMLHttpRequest();
const products_view = document.getElementById("all_products_view");
let users = {};
let one_product={};
// section that view product details
 // variable that contains card productID saved in localstoradge
var product_card = "";

//function creat elements and append it to the div
let create_divs = (ele, i, users) => {
    //create element div and add its classes
    let div_col = document.createElement("div");
    div_col.className += "col-sm col-md-6 col-lg-3";

   //create div single_product and add class to isolation
   let single_product = document.createElement("div");
       single_product.classList.add("product");

   //create link a that contains image and overlay
   let a_contains_img = document.createElement("a");
   let a_contains_img_attr = document.createAttribute("href");
       a_contains_img_attr.value = "#";
       a_contains_img.setAttributeNode(a_contains_img_attr);
       a_contains_img.classList.add("img-prod");
   
   // create img_product and add src and class to it with alt value
   let img_product = document.createElement("img");
   let img_alt_attr = document.createAttribute("alt");
       img_alt_attr.value = users[i].Name;
       img_product.setAttributeNode(img_alt_attr);
       img_product.className += "img-fluid";
       img_product.src = users[i].ProductPicUrl;

   //append img_product to a_contains_img
   a_contains_img.appendChild(img_product);

   //create div overlay with its class  
   let div_overlay = document.createElement("div");
       div_overlay.classList.add("overlay");

   //append div_overlay to a_contains_img
   a_contains_img.appendChild(div_overlay);

   // append a_contains_img to div product
   single_product.appendChild(a_contains_img);
   

   //create div_text with its class
   let div_text = document.createElement("div");
       div_text.className += "text py-3 px-3";

   //create h3
   let h3 = document.createElement("h3");

   //create a link add href and append it to h3
   let a_link_product = document.createElement("a");
   let a_link_product_attr = document.createAttribute("href");
       a_link_product_attr.value = `https://afternoon-falls-30227.herokuapp.com/api/v1/products/${users[i].ProductId}`;
       a_link_product.setAttributeNode(a_link_product_attr);
   let a_link_product_text = document.createTextNode(users[i].Name);
       a_link_product.appendChild(a_link_product_text);

   //add a_link_product to h3 
   h3.appendChild(a_link_product);

   //append h3 to div_text
   div_text.appendChild(h3);

   // create p_price with its class and text_value
   let p_price = document.createElement("p");
       p_price.classList.add("price")
       p_price.textContent = `${users[i].Price} ${users[i].CurrencyCode}`;

   //append p_price to div_text
   div_text.appendChild(p_price);

   //create p for button
   let p_button = document.createElement("p");
       p_button.className += "bottom-area d-flex px-3";

   //create add to cart button
    add_cart_button = document.createElement("button");
       add_cart_button.className += "buy-now text-center py-2";
       add_cart_button.innerHTML = `Add to cart <i class="fas fa-cart-plus"></i>`;

    //create Show details  button
   let show_details_button = document.createElement("button");
        show_details_button.className += "buy-now text-center py-2";
        show_details_button.innerHTML = ` Show Details `;
        
   //append add_cart_button to p_button
   p_button.appendChild(add_cart_button);
   p_button.appendChild(show_details_button);


   //append p_button to div_text
   div_text.appendChild(p_button);

   // append div_text to div product
   single_product.appendChild(div_text);

   //append product to div_col
   div_col.appendChild(single_product);

    //append div_col to products_view
    products_view.appendChild(div_col);

    // click button to add productid to local storage
    add_cart_button.addEventListener('click', (e)=>{
        console.log(users[i]);
        product_card += users[i].ProductId + " ";
        localStorage.setItem("product", product_card);
        // console.log(localStorage.getItem("product"));
    });

    //click button to view product view
    a_contains_img.addEventListener('click', (e)=>{
        // e.preventDefault();
        product_details_view.style.display = 'block';
        // console.log(users[i].ProductId);
        // product_details.open('GET', `https://afternoon-falls-30227.herokuapp.com/api/v1/products/${users[i].ProductId}`);
        // console.log(`https://afternoon-falls-30227.herokuapp.com/api/v1/products/${users[i].ProductId}`)
        // product_details.send();
        // console.log(product_details.status);
        // if(product_details.status == 200){
        //     one_product = JSON.parse(product_details.response).data;
        // }else{
        //     console.log("faild");
        // }
        fetch(`https://afternoon-falls-30227.herokuapp.com/api/v1/products/${users[i].ProductId}`)
        .then(response => {
            return response.json();
        })
        .then(data =>   {
            one_product=data['data'];
            document.getElementById("ProductId").innerHTML=` ProductId : ${one_product.ProductId}`;
            document.getElementById("Category").innerHTML=` Category : ${one_product.Category}`;
            document.getElementById("MainCategory").innerHTML=` MainCategory : ${one_product.MainCategory}`;
            document.getElementById("TaxTarifCode").innerHTML=` TaxTarifCode : ${one_product.TaxTarifCode}`;
            document.getElementById("SupplierName").innerHTML=` SupplierName : ${one_product.SupplierName}`;
            document.getElementById("WeightMeasure").innerHTML=` WeightMeasure : ${one_product.WeightMeasure}`;
            document.getElementById("WeightUnit").innerHTML=` WeightUnit : ${one_product.WeightUnit}`;
            document.getElementById("Description").innerHTML=` Description : ${one_product.Description}`;
            document.getElementById("Name").innerHTML=` Name : ${one_product.Name}`;
            document.getElementById("DateOfSale").innerHTML=` DateOfSale : ${one_product.DateOfSale}`;
            document.getElementById("ProductPicUrl").src= `${one_product.ProductPicUrl}`;
            document.getElementById("Status").innerHTML=` Status : ${one_product.Status}`;
            document.getElementById("Quantity").innerHTML=` Quantity : ${one_product.Quantity}`;
            document.getElementById("UoM").innerHTML=` UoM : ${one_product.UoM}`;
            document.getElementById("CurrencyCode").innerHTML=` CurrencyCode : ${one_product.CurrencyCode}`;
            document.getElementById("Price").innerHTML=` Price : ${one_product.Price}`;
            document.getElementById("Width").innerHTML=` Width : ${one_product.Width}`;
            document.getElementById("Depth").innerHTML=` Depth : ${one_product.Depth}`;
            document.getElementById("Height").innerHTML=` Height : ${one_product.Height}`;
            document.getElementById("DimUnit").innerHTML=` DimUnit : ${one_product.DimUnit}`;
            
             
        })
        .catch(err => {
            console.log("faild");
        })
        
        
       
        
 

    });
  
}




xhr.open('GET', 'https://afternoon-falls-30227.herokuapp.com/api/v1/products/');
xhr.send();
xhr.onload = loadpage;

function loadpage(){
    if(xhr.status == 200){
        users = JSON.parse(xhr.response).data;

        users.map(create_divs);

        add_cart_button.addEventListener('click', (e)=>{
            console.log("ddd");
        });
        
    }else{
        console.log("faild");
    }
}
 // make pagination in home page 
let page = 1;
let pagination_ul = document.querySelectorAll("#pagination_ul li");
pagination_ul.forEach( (li, index) => {
    li.addEventListener('click', function(e){
        page = this.textContent;
        
        if(this.hasAttribute("class")) {     
            this.setAttribute("class", "active");
        }else{
            this.setAttribute("class", "active");
        }
        for (let sibling of this.parentNode.children) {
            if (sibling !== this) sibling.classList.remove('active');
        }

        products_view.innerHTML = "";
        xhr.open('GET', `https://afternoon-falls-30227.herokuapp.com/api/v1/products/?page=${page}`);
        xhr.send();
        xhr.onload = loadpage;
        console.log(this);
    });
});



