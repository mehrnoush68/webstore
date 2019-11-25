/************* GLOBAL VARIABLES/DATA *************/

// An Object holds multiple variables (properties) together
// product1
const product1 = { 
      id:1,
      code: '044',
      cat:'Bracelet',
      colors:
      {
          colorOne:'red',
          colorTwo: 'green',
          colorThree: 'white'
      },
      material: 'Gold',
      rate: 4.4,
      rateStar:{
          full : '<i class="material-icons">star</i>',
          half : '<i class="material-icons">star_half</i>',
          empty: '<i class="material-icons">star_border</i>'
      },
      price: 60, 
      dscnt_prc: 21, 
      image:'product-code-044.jpg'
    };
// product2
const product2 = { 
        id:2,
        code: '055',
        cat:'Bracelet',
        colors:
        {
            colorOne:'red',
            colorTwo: 'brown',
            colorThree: 'white'
        },
        material: 'Gold',
        rate: 4.0,
        rateStar:{
            full : '<i class="material-icons">star</i>',
            half : '<i class="material-icons">star_half</i>',
            empty: '<i class="material-icons">star_border</i>'
        },
        price: 50, 
        dscnt_prc: 0, 
        image:'product-code-055.jpg'
      };
// product3
const product3 = { 
        id:3,
        code: '066',
        cat:'Bracelet',
        colors:
        {
            colorOne:'red',
            colorTwo: null,
            colorThree: 'white'
        },
        material: 'Gold',
        rate: 4.0,
        rateStar:{
            full : '<i class="material-icons">star</i>',
            half : '<i class="material-icons">star_half</i>',
            empty: '<i class="material-icons">star_border</i>'
        },
        price: 80, 
        dscnt_prc: 41, 
        image:'product-code-066.jpg'
      };
// product4
const product4 = { 
        id:4,
        code: '077',
        cat:'Bracelet',
        colors:
        {
            colorOne:'red',
            colorTwo: 'blue',
            colorThree: 'white'
        },
        material: 'Gold',
        rate: 4.4,
        rateStar:{
            full : '<i class="material-icons">star</i>',
            half : '<i class="material-icons">star_half</i>',
            empty: '<i class="material-icons">star_border</i>'
        },
        price: 60, 
        dscnt_prc: 31, 
        image:'product-code-077.jpg'
      };
// product5
const product5 = { 
        id:5,
        code: '088',
        cat:'Bracelet',
        colors:
        {
            colorOne:'red',
            colorTwo: null,
            colorThree: 'white'
        },
        material: 'Gold,Silver',
        rate: 4.0,
        rateStar:{
            full : '<i class="material-icons">star</i>',
            half : '<i class="material-icons">star_half</i>',
            empty: '<i class="material-icons">star_border</i>'
        },
        price: 75, 
        dscnt_prc: 0, 
        image:'product-code-088.jpg'
      };
// product6
const product6 = { 
        id:6,
        code: '099',
        cat:'Bracelet',
        colors:
        {
            colorOne:'red',
            colorTwo: 'black',
            colorThree: 'white'
        },
        material: 'Gold',
        rate: 4.0,
        rateStar:{
            full : '<i class="material-icons">star</i>',
            half : '<i class="material-icons">star_half</i>',
            empty: '<i class="material-icons">star_border</i>'
        },
        price: 70, 
        dscnt_prc: 20, 
        image:'product-code-099.jpg'
      };

/************* FUNCTIONS *************/
// Stored functions that will run as part of this application

// Function: getProductRating
// Parameters: product:Object
// Returns: String: strs
function getProductRating(product){
    let c = 0;
    let strs = '';
    for(i=1;i<=product.rate;i++){
        strs += product.rateStar.full;
        c++;
    }
    if(c%product.rate!=0)
    {
        strs += product.rateStar.half;
        c++;
    } 
    if(c<5)
    {
        for(i=1;i<=5-c;i++){
            strs += product.rateStar.empty;
        }
    }
    return strs;
}
// Function: getColor
// Parameters: colors:Object
// Returns: String:strcolor
function getColor(colors) {
    let strcolor='';
    if (colors.colorOne!=null) {
       strcolor+= `<button class="${colors.colorOne}"></button>`;
    }
    if (colors.colorTwo!=null) {
        strcolor+= `<button class="${colors.colorTwo}"></button>`;
    }
    if (colors.colorThree!=null) {
        strcolor+= `<button class="${colors.colorThree}"></button>`;
    }
    return strcolor;
}
// Function: getDiscountPrice
// Parameters: product:Object
// Returns: String:lastprice
function getDiscountPrice(product){
    let lastprice = `<ins> ${'$' +( product.price- product.dscnt_prc).toFixed(2)}</ins>`;
    if(product.dscnt_prc!=0) {
        lastprice = `<small id='dsctprice'><del>${'$' + product.price.toFixed(2)}</del></small> ` + lastprice;
    }
    return lastprice;
} 

// Function: getAllProductsString
// Parameters: product:Object
// Return: String of HTML (<article>)
function getAllProductsString(product) {

   return `<article class="product one">
          <div class="image"><img src="img/${product.image}" alt="Code: 044"></div>
          <h3>Code: ${product.code}</h3>
          <div class="color"> 
              ${getColor(product.colors)}
          </div>
          <div class="p-material">
            <span>${product.material}</span>
          </div>
          <div class="p-rating">        
          ${product.rate} <span> ${getProductRating(product)} </span>
          </div>
          <div class="price">
          <span> ${getDiscountPrice(product)} </span>
          </div>
          <div class="favorite">
            <button type="button"><i class="material-icons">favorite</i></button>
          </div>
          <div class="more"><a href="product.html" target="_blank">see more</a></div>
        </article>`;
}


/************* EXECUTABLE *************/
// Execute functions that will access data
document.getElementById('all-products').innerHTML = getAllProductsString(product1)
document.getElementById('all-products').innerHTML += getAllProductsString(product2)
document.getElementById('all-products').innerHTML += getAllProductsString(product3)
document.getElementById('all-products').innerHTML += getAllProductsString(product4)
document.getElementById('all-products').innerHTML += getAllProductsString(product5)
document.getElementById('all-products').innerHTML += getAllProductsString(product6)