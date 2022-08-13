var products = [
    {
        "product_name": "Top For Girls ",
        "price": 8000,
        "image": "assets/images/thrift/th.jpg"
    },

    {
        "product_name": "Shirt For Girls",
        "price": 3000,
        "image": "assets/images/thrift/th1.jpg"
    },

    {
        "product_name": "Thrift For Girls",
        "price": 6999,
        "image": "assets/images/thrift/th5.jpg"
    },
    {
        "product_name": "Long coat For Girls",
        "price": 6000,
        "image": "assets/images/thrift/th8.jpg"
    },

    {
        "product_name": "Top For Boys ",
        "price": 4800,
        "image": "assets/images/thrift/th4.jpg"
    },
    {
        "product_name": "Second For Boys",
        "price": 6500,
        "image": "assets/images/thrift/th6.jpg"
    },
    {
        "product_name": " Hoodie For boys",
        "price": 5500,
        "image": "assets/images/thrift/th9.jpg"
    },
    {
        "product_name": "Coat For Girls",
        "price": 2900,
        "image": "assets/images/thrift/th11.jpg"
    },

    {
        "product_name": " Watch ROLLEX ",
        "price": 3333,
        "image": "assets/images/thrift/watach5.jpg"
    },
    {
        "product_name": "Watch SK",
        "price": 2399,
        "image": "assets/images/thrift/watch6.jpg"
    },
    {
        "product_name": "Watch OMEGA ",
        "price": 2999,
        "image": "assets/images/thrift/watch1.jpg"
    },
    {
        "product_name": "Watch WM",
        "price": 4999,
        "image": "assets/images/thrift/watch9.jpg"
    },
    {
        "product_name": "Joggers ",
        "price": 2800,
        "image": "assets/images/thrift/sho3.jpg"
    },
    {
        "product_name": "boot ",
        "price": 1680,
        "image": "assets/images/thrift/sho4.jpg"
    },
    {
        "product_name": "Shoes",
        "price": 6600,
        "image": "assets/images/thrift/sho1.jpg"
    },
    {
        "product_name": "High Heels For Girls",
        "price": 1199,
        "image": "assets/images/thrift/sho2.jpg"
    },


    {
        "product_name": "Channel",
        "price": 899,
        "image": "assets/images/thrift/PER1.jpg"
    }, {
        "product_name": "Burberry",
        "price": 1299,
        "image": "assets/images/thrift/PER2.jpg"
    }, {
        "product_name": "Calvien Klein ",
        "price": 1799,
        "image": "assets/images/thrift/PER3.jpg"
    }, {
        "product_name": "Armani",
        "price": 1199,
        "image": "assets/images/thrift/PER4.jpg"
    },
];

var product_names = Array();
for(var i in products)
{
    product_names.push(products[i].product_name);
}





console.log(product_names);





function UpdateCartCount() {
    cart = JSON.parse(localStorage.getItem("cart"));
    if(cart != null)
    {
        var cart_count = cart.length;
        document.getElementById("cart_count").innerText = cart_count;
    }
}