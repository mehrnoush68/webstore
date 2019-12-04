/************* GLOBAL VARIABLES/DATA *************/

// An Object holds multiple variables (properties) together
const rateStar = {
    full : '<i class="material-icons">star</i>',
    half : '<i class="material-icons">star_half</i>',
    empty: '<i class="material-icons">star_border</i>'
}

const products = [
    { 
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
        rateStar,
        price: 60, 
        dscnt_prc: 21, 
        image:'product-code-044.jpg'
      },{ 
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
        rateStar,
        price: 50, 
        dscnt_prc: 0, 
        image:'product-code-055.jpg'
      },{ 
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
        rateStar,
        price: 80, 
        dscnt_prc: 41, 
        image:'product-code-066.jpg'
      },{ 
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
        rateStar,
        price: 60, 
        dscnt_prc: 31, 
        image:'product-code-077.jpg'
      },{ 
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
        rateStar,
        price: 75, 
        dscnt_prc: 0, 
        image:'product-code-088.jpg'
      },{ 
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
        rateStar,
        price: 70, 
        dscnt_prc: 20, 
        image:'product-code-099.jpg'
      },{ 
        id:7,
        code: '100',
        cat:'Bracelet',
        colors:
        {
            colorOne: null,
            colorTwo: null,
            colorThree: 'white'
        },
        material: 'Gold',
        rate: 4.5,
        rateStar,
        price: 95, 
        dscnt_prc: 0, 
        image:'product-code-100.jpg'
      },{ 
        id:8,
        code: '101',
        cat:'Bracelet',
        colors:
        {
            colorOne:'grey',
            colorTwo: null,
            colorThree: 'white'
        },
        material: 'Gold',
        rate: 4.2,
        rateStar,
        price: 60, 
        dscnt_prc: 10, 
        image:'product-code-101.jpg'
      },{ 
        id:9,
        code: '102',
        cat:'Bracelet',
        colors:
        {
            colorOne:'red',
            colorTwo: 'black',
            colorThree: 'white'
        },
        material: 'Gold',
        rate: 5.0,
        rateStar,
        price: 72, 
        dscnt_prc: 20, 
        image:'product-code-102.jpg'
      },{ 
        id:10,
        code: '103',
        cat:'Bracelet',
        colors:
        {
            colorOne:'red',
            colorTwo: null,
            colorThree: null
        },
        material: 'Gold',
        rate: 2.9,
        rateStar,
        price: 125, 
        dscnt_prc: 0, 
        image:'product-code-103.jpg'
      }
]



/************* FUNCTIONS *************/
// Stored functions that will run as part of this application

// Function: getProductRating
// Parameters: product:Object
// Returns: String: strs
function getProductRating(product){
    let c = 0;
    let strs = '';
    for(i=1;i<=product.rate;i++){          // i=1 1<= 4.4 until i=4
        strs += product.rateStar.full;      // strs = 4*full
        c++;                                // c=1 until c=4
    }
    if(c%product.rate!=0)                   // 4%4.4!=0
    {                                        
        strs += product.rateStar.half;      //  strs = half
        c++;                                //  c=5
    } 
    if(c<5)                                 // 5<5 it doesn't go to this if
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
          <div class="image"><img src="img/${product.image}" alt="${product.code}"></div>
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

function renderProducts (arrToRender) {
    const arrOfHtmlProducts = arrToRender.map(getAllProductsString);
    const strOfHtmlProducts = arrOfHtmlProducts.join('\n');
    document.getElementById('all-products').innerHTML = strOfHtmlProducts;
}
function pageNumberString(pagesize) {
    var str='';
    for (var i=0; i<=(products.length/pagesize); i++) {
        str += `<li id="page_${i+1} "class="active"><a href="#">${i+1}</a></li>  `;
        // document.getElementById('"page_${i+1}"').addEventListener('click', renderProducts(products.splice(0, pagesize)));
    }
    return str;
}

/************* EXECUTABLE *************/
// Execute functions that will access data

renderProducts(products.splice(5));
document.getElementById('pageNumber').innerHTML = pageNumberString(5);