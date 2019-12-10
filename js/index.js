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
        rate: 2.5,
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
        rate: 2.2,
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
        material: 'Silver',
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
      },{ 
        id:11,
        code: '104',
        cat:'Bracelet',
        colors:
        {
            colorOne: null,
            colorTwo: 'black',
            colorThree: 'white'
        },
        material: 'Silver',
        rate: 2.1,
        rateStar,
        price: 50, 
        dscnt_prc: 10, 
        image:'product-code-104.jpg'
      },{ 
        id:12,
        code: '105',
        cat:'Bracelet',
        colors:
        {
            colorOne: 'red',
            colorTwo: null,
            colorThree: 'white'
        },
        material: 'Gold',
        rate: 4.1,
        rateStar,
        price: 80, 
        dscnt_prc: 5, 
        image:'product-code-105.jpg'
      },{ 
        id:13,
        code: '106',
        cat:'Bracelet',
        colors:
        {
            colorOne: null,
            colorTwo: 'black',
            colorThree: null
        },
        material: 'Gold',
        rate: 3.5,
        rateStar,
        price: 90, 
        dscnt_prc: 0, 
        image:'product-code-106.jpg'
      },{ 
        id:14,
        code: '107',
        cat:'Bracelet',
        colors:
        {
            colorOne: 'red',
            colorTwo: 'brown',
            colorThree: 'green'
        },
        material: 'Gold',
        rate: 2.5,
        rateStar,
        price: 60, 
        dscnt_prc: 20, 
        image:'product-code-107.jpg'
      },{ 
        id:15,
        code: '108',
        cat:'Bracelet',
        colors:
        {
            colorOne: null,
            colorTwo: 'white',
            colorThree: 'green'
        },
        material: 'Silver',
        rate: 1,
        rateStar,
        price: 80, 
        dscnt_prc: 10, 
        image:'product-code-108.jpg'
      },{ 
        id:16,
        code: '109',
        cat:'Bracelet',
        colors:
        {
            colorOne: 'brown',
            colorTwo: 'white',
            colorThree: null
        },
        material: 'Gold,Silver',
        rate: 3,
        rateStar,
        price: 50, 
        dscnt_prc: 0, 
        image:'product-code-109.jpg'
      },{ 
        id:17,
        code: '110',
        cat:'Bracelet',
        colors:
        {
            colorOne: 'brown',
            colorTwo: null,
            colorThree: null
        },
        material: 'Gold',
        rate: 4,
        rateStar,
        price: 35, 
        dscnt_prc: 0, 
        image:'product-code-110.jpg'
      },{ 
        id:18,
        code: '111',
        cat:'Bracelet',
        colors:
        {
            colorOne: 'black',
            colorTwo: null,
            colorThree: null
        },
        material: 'Gold',
        rate: 5,
        rateStar,
        price: 50, 
        dscnt_prc: 0, 
        image:'product-code-111.jpg'
      },{ 
        id:19,
        code: '112',
        cat:'Bracelet',
        colors:
        {
            colorOne: 'blue',
            colorTwo: 'red',
            colorThree: null
        },
        material: 'Gold',
        rate: 1,
        rateStar,
        price: 90, 
        dscnt_prc: 5, 
        image:'product-code-112.jpg'
      },{ 
        id:20,
        code: '113',
        cat:'Bracelet',
        colors:
        {
            colorOne: 'brown',
            colorTwo: 'black',
            colorThree: null
        },
        material: 'Gold',
        rate: 5,
        rateStar,
        price: 105, 
        dscnt_prc: 8, 
        image:'product-code-113.jpg'
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

function filterByRating(prod) {
    // The variable "this" is filled with the 2nd filter argument
    if (this == 'all') {
      return true;
    } else if (Math.floor(prod.rate)== this) {
      return true;
    } else {
      return false;
    }
}

function filterByMaterial(prod) {
    if (this == 'all') {
        return true;
        } else if (prod.material.toUpperCase().includes(this.trim().toUpperCase()) == this.toUpperCase().includes(this.trim().toUpperCase())) {
        return true;
        } else {
        return false;
        }
}

function filterBycolor(prod) {
    if (this == 'all') {
        return true;
        } else if (prod.colors.colorOne == this || prod.colors.colorTwo == this || prod.colors.colorThree == this) {
        return true;
        } else {
        return false;
        }
}

// Function: getAllProductsString
// Parameters: product:Object
// Return: String of HTML (<article>)
function getAllProductsString(product) {

    if ((product.price- product.dscnt_prc) < 50) {
        greatdeal = `<small class="callout urgent">SPECIAL PRICE</small>`;
      } else {
        greatdeal = ``
      }

   return `<article class="product">
          <div class="image"><img src="img/${product.image}" alt="${product.code}"></div>
          <h3>Code: ${product.code}</h3>
          <div class="color"> 
              ${getColor(product.colors)}
          </div>
          <div class="p-material">
            <span>${product.material}</span>
          </div>
          <div class="p-rating">        
          ${product.rate} <span> ${getProductRating(product)}  </span>
          </div>
          <div class="price">
          <span> ${getDiscountPrice(product)}  </span>
          </div>
          <div class="p-deal">
          ${greatdeal}
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
        str += `<li id="page_${i+1}" class="active"><a href="#">${i+1}</a></li>  `; 
        //I couldn't do pagination!
        // document.getElementById('"page_${i+1}"').addEventListener('click', renderProducts(products.splice(0, pagesize)));
    }
    return str;
}

function loadproductsCategory(event) {
    const categoryImSearchingFor = event.target.value;
    renderProducts(products.filter(filterByRating, categoryImSearchingFor));
}

function loadProductMaterial(event) {
    const categoryImSearchingFor = event.target.value;
    renderProducts(products.filter(filterByMaterial, categoryImSearchingFor));
}

function loadProductColor(event) {
    const categoryImSearchingFor = event.target.value;
    renderProducts(products.filter(filterBycolor, categoryImSearchingFor));
}

function sortProductByPrice(event) {
    //I got this lines from this source: https://reactgo.com/sort-arrayofobjects/
    const sortMyProductByPrice = event.target.value;
    if (sortMyProductByPrice=='price-low'){
        renderProducts(products.sort(function(a,b){ return ((a.price - a.dscnt_prc) - (b.price - b.dscnt_prc))}));
    } 
    if (sortMyProductByPrice=='price-high'){
        renderProducts(products.sort(function(a,b){ return (b.price - b.dscnt_prc) - (a.price - a.dscnt_prc)}));
    } 
}

renderProducts(products);
// renderProducts(products.splice(5));

/************* EXECUTABLE *************/
// Execute functions that will access data
document.getElementById('pageNumber').innerHTML = pageNumberString(6);
document.getElementById('productsRating').addEventListener('change', loadproductsCategory);
document.getElementById('productsMaterial').addEventListener('change', loadProductMaterial);
document.getElementById('productsColors').addEventListener('change', loadProductColor);
document.getElementById('sort').addEventListener('change', sortProductByPrice);