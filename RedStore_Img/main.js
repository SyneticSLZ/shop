let shop = document.getElementById('shop');

let shopItemsData = [
{

    id: "item1",
    name: "casualshirt",
    price: 10,
    desc: "lorem ispum dsofis aoafjpa",
    image: "images/product-1.jpg"
},
{
    id: "item2",
    name: "noncausalshirt",
    price: 20,
    desc: "lorem ispum dsofis aoafjpa",
    image: "images/product-2.jpg"
},
{
    id: "item3",
    name: "tshirt",
    price: 530,
    desc: "lorem ispum dsofis aoafjpa",
    image: "images/product-3.jpg"
},
{
    id: "item4",
    name: "shirt",
    price: 500,
    desc: "lorem ispum dsofis aoafjpa",
    image: "images/product-4.jpg"
}
];

let basket = [];

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id,name,price,desc,image} = x;
        return `
        <div id=product-id-${id} class="col-4 item">
                <img src=${image} alt="">
                <h4>${name}</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>${price}</p>
                <div class="buttons">
                    <i onclick="increment(${id})" class="bi bi-plus-lg">+</i>
                    <div id=${id}  class="quantity">0</div>
                    <i onclick="decrement(${id})" class="bi bi-dash-lg">-</i><br>
                    <button  class="btn" type="button">Add to cart</button>
                </div>
            </div>
        `
    }).join(""));
};

generateShop();


let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=>x.id === selectedItem.id)


    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else{
        search.item += 1;
    }

    //console.log(basket)
    update(selectedItem.id);
};
let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=>x.id === selectedItem.id)


    if(search.item === 0) return;
    else{
        search.item -= 1;
    }

    //console.log(basket)
    update(selectedItem.id);
};
let update = (id)=>{
    let search = basket.find((x)=>x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
};