var searchRoot = document.getElementById('search_1');
var multiSelectRoot = document.getElementById('multiSelect_1');

var allProducts = [
  {
    url:'https://images.techhive.com/images/article/2016/10/iphone7plus-100686585-large.jpg',
    name:'Iphone 7',
    price:'50k',
    categories :['electronics']
  },
  {
    url:'https://cnet3.cbsistatic.com/img/XZaRQsEpWqQ75UXC-jtlbL4TnBw=/1200x675/2020/04/22/9c0515dc-bb9f-4386-9052-79885ef81ca8/iphone-se-2020-21.jpg',
    name:'Iphone 10',
    price:'90k',
    categories :['electronics']
  },
  {
    url:'https://images-na.ssl-images-amazon.com/images/I/81HSzsIkJdL._AC_SX342_.jpg',
    name:'Iphone 11',
    price:'90k',
    categories :['electronics']
  },
  {
    url:'https://cdn.vox-cdn.com/thumbor/3SDag4_szhZrsfE86H7OGXcesxs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19395168/vpavic_191118_3800_0122.jpg',
    name:'Macbook Pro',
    price:'200k',
    categories :['electronics']
  },{
    url:'https://cdn.vox-cdn.com/thumbor/GwXxxi4AobcKVlfS3Mpr3hR3UUU=/0x0:1020x677/1200x800/filters:focal(492x226:654x388)/cdn.vox-cdn.com/uploads/chorus_image/image/60347191/oo04_09_1316tt.0.0.jpeg',
    name:'Macbook Air',
    price:'100k',
    categories :['electronics']
  },
  {
    url:'https://cdn.vox-cdn.com/thumbor/3SDag4_szhZrsfE86H7OGXcesxs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19395168/vpavic_191118_3800_0122.jpg',
    name:'Macbook Pro 2',
    price:'100k',
    categories :['electronics']
  },
  {
    url:'https://ii1.pepperfry.com/media/catalog/product/c/a/568x284/camila-3-seater-sofa-in-garnet-red-colour-by-casacraft-camila-3-seater-sofa-in-garnet-red-colour-by--pfaxws.jpg',
    name:'Sofa',
    price:'20k',
    categories :['furnitues']
  },{
    url:'https://www.woodenstreet.com/image/data/dining-tables/paul-dining-table/revised/honey/front-table.jpg',
    name:'Table',
    price:'15k',
    categories :['furnitues']
  },{
    url:'https://www.ulcdn.net/images/products/290945/original/Bocado_Columbian_Walnut_2_Door_LP.jpg?1575882227',
    name:'Cupboard',
    price:'50k',
    categories :['furnitues']
  },{
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsw2SyEYzmhTweZjO86Jc5CPIGiTEiJJdqW7jajMOda-W9CP5M&usqp=CAU',
    name:'Cricket Bat',
    price:'5k',
    categories :['sports']
  },{
    url:'https://5.imimg.com/data5/LY/NF/MY-3239865/badmintos-bat-500x500.jpg',
    name:'Badminton Racket',
    price:'10k',
    categories :['sports']
  },{
    url:'https://www.thestatesman.com/wp-content/uploads/2020/04/1c5b1aa3386eeb2c21d633f04e2ddfbe.jpg',
    name:'Footbal',
    price:'2k',
    categories :['sports']
  },
  {
    url:'https://jadeblue.com/media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/i/4/i40a_1.jpg',
    name:'Shirt',
    price:'1k',
    categories :['fashion']
  },{
    url:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8317095/2019/1/3/2ef997e5-49e4-41ff-bdb5-472d9065972f1546505439988-Pannkh-Women-Multicoloured-Solid-Top-with-Skirt-284154650543-1.jpg',
    name:'Skirt',
    price:'2k',
    categories :['fashion']
  },
  {
    url:'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/13685/135645/Autumn-Womens-Tops-And-Blouses-Long-Sleeve-Chiffon-Blouse-Ladies-Tops-New-Lace-Patchwork-Women-Shirts__26241.1544088601.jpg?c=2&imbypass=on',
    name:'kurta',
    price:'1k',
    categories :['fashion']
  },{
    url:'https://us.123rf.com/450wm/ollinka/ollinka1804/ollinka180400051/100550511-jeans-stacked-on-a-wooden-background.jpg?ver=6',
    name:'Jeans',
    price:'2k',
    categories :['fashion']
  },{
    url:'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/13685/135645/Autumn-Womens-Tops-And-Blouses-Long-Sleeve-Chiffon-Blouse-Ladies-Tops-New-Lace-Patchwork-Women-Shirts__26241.1544088601.jpg?c=2&imbypass=on',
    name:'Top',
    price:'1k',
    categories :['fashion']
  },{
    url:'https://rukminim1.flixcart.com/image/714/857/jw5a2kw0/t-shirt/h/3/v/m-usts5786-u-s-polo-assn-original-imafgw9yz5wjchry.jpeg?q=50',
    name:'T Shirt',
    price:'2k',
    categories :['fashion']
  }
];

var allCategories=['electronics','furnitues','sports','fashion'];
var carouselRoot = document.getElementById( 'carousel_1');
var carousel = new Carousel(carouselRoot);
var mySellect = sellect("#my-element", {
    originList: allCategories,
    destinationList: [],
    onInsert: function() {
      let selectedCategories = mySellect.getSelected();
      const filteredData = allProducts.filter((elm)=>(elm.categories.some(category=>selectedCategories.some((value)=>category.includes(value)))));
      const displayData = filteredData.length === 0?allProducts: filteredData;
      carousel.render(displayData);
    }
});

mySellect.init();
carousel.render(allProducts);
