//here is our code in js


// elkhadragy part view products in home page
const xhr = new XMLHttpRequest();
const products_view = document.getElementById("all_products_view");
let users = {};

xhr.open('GET', 'https://afternoon-falls-30227.herokuapp.com/api/v1/products/');
xhr.send();
xhr.onload = loadpage;

function loadpage(){
    if(xhr.status == 200){
        users = JSON.parse(xhr.response).data;

        
        for(let i = 0; i<10; i++){

            //create element div and add its classes
            let div_col = document.createElement("div");
                div_col.classList.add("col-sm");
                div_col.classList.add("col-md-6");
                div_col.classList.add("col-lg");

            //create div single_product and add class to isolation
            let single_product = document.createElement("div");
                single_product.classList.add("product");

            //create link a that contains image and overlay
            let a_contains_img = document.createElement("a");
            let a_contains_img_attr = document.createAttribute("href");
                a_contains_img_attr.value = "#";
                a_contains_img.setAttributeNode(a_contains_img_attr);
                a_contains_img.classList.add("img-prod");

            

        }
        
    }else{
        console.log("faild");
    }
}