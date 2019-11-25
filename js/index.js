const productOne = { 
      id:1,
      code: '044',
      cat:'Bracelet',
      colors:
      {
          colorOne:'red',
          colorTwo: 'green',
          colorThree: 'white'
      },
      material: 'gold',
      rate: 4.4,
      rateStar:{
          full : '<i class="material-icons">star</i>',
          half : '<i class="material-icons">star_half</i>',
          empty: '<i class="material-icons">star_border</i>'
      },
      price: 60, 
      dscnt_prc: 39, 
      image:'product-code-044.jpg'
    };



function getAllProductsData(product) {

   return `<article class="product one">
          <div class="image"><img src="img/${product.image}" alt="Code: 044"></div>
          <h3>Code: ${product.code}</h3>
          <div class="color"> 
              <button class="${product.colors.colorOne}"></button>
              <button class="${product.colors.colorTwo}"></button>
              <button class="${product.colors.colorThree}"></button>
          </div>
          <div class="p-material">
            <span>${product.material}</span>
          </div>
          <div class="p-rating">        
          ${product.rate} <span> ${getProductRating(product)} </span>
          </div>
          <div class="price">
            <span><small><del>${'$' + product.price.toFixed(2)}</del></small><ins> ${'$' +product.dscnt_prc.toFixed(2)}</ins></span>
          </div>
          <div class="favorite">
            <button type="button"><i class="material-icons">favorite</i></button>
          </div>
          <div class="more"><a href="product.html" target="_blank">see more</a></div>
        </article>`;
}

function getProductRating(product){
    let c = 0;
    let strst = '';
    for(i=1;i<=product.rate;i++){
        strst += product.rateStar.full;
        c++;
    }
    if(c%product.rate!=0)
    {
        strst += product.rateStar.half;
        c++;
    } 
    if(c<5)
    {
        for(i=1;i<=5-c;i++){
            strst += product.rateStar.empty;
        }
    }
    return strst;
}

document.getElementById('all-products').innerHTML = getAllProductsData(productOne);
