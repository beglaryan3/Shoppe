// <-- burgerMenu
const nav = document.querySelector(".nav")
const menu = document.querySelector(".burger_menu")
const line1 = document.getElementById("burger_line1")
const line2 = document.getElementById("burger_line2")
const line3 = document.getElementById("burger_line3")
menu.addEventListener("click", function () {
    nav.classList.toggle("nav_active")
    line1.classList.toggle("active")
    line2.classList.toggle("active")
    line3.classList.toggle("active")

})

// -->burgerMenu



// <--slider
const swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    loop: true,
    spaceBetween: 20,
});
// --> slider



// <-- productContainer
const shopContainer = document.querySelector(".section_container")
const productsArray = [
    {
        productImage: "img1.png",
        productName: "Lira Earring",
        productPrice: "$20,00",
    },
    {
        productImage: "img2.png",
        productName: "Hal Earring",
        productPrice: "$25,00",
    },
    {
        productImage: "img3.png",
        productName: "Keade Hair Pin Set Of.3",
        productPrice: "$30,00",
    },
    {
        productImage: "img4.png",
        productName: "Hair Pin Set Of.3",
        productPrice: "$30,00",
    },
    {
        productImage: "img5.png",
        productName: "Plaine Necklace",
        productPrice: "$19,00",
    },
    {
        productImage: "img6.png",
        productName: "Yuki Hair Pin Set Of.3",
        productPrice: "$29,00",
    },
]

productsArray.forEach(item => {
    const productItem = document.createElement("div")
    productItem.className = "product_item"
    shopContainer.append(productItem)

    const productImageWrapper = document.createElement("div")
    productImageWrapper.className = "product_image_wrapper"
    productItem.append(productImageWrapper)
    const productImage = document.createElement("img")
    productImage.className = "product_image"
    productImage.src = `image/${item.productImage}`
    productImageWrapper.append(productImage)

    const productbtn = document.createElement("button")
    productbtn.className = "addToCard_button"
    productbtn.textContent = "ADD TO CART"
    productImageWrapper.append(productbtn)

    const productTitle = document.createElement("h3")
    productTitle.className = "product_title"
    productTitle.textContent = `${item.productName}`
    productItem.append(productTitle)



    const productKosten = document.createElement("p")
    productKosten.className = "product_price"
    productKosten.textContent = `${item.productPrice}`
    productItem.append(productKosten)
})
// --> productContainer



//< --category 
const accessoryCategory = [...document.querySelectorAll(".accessory_cotegory")]

accessoryCategory.forEach(item => {
    item.addEventListener("click", function () {
        const key = item.textContent.toLowerCase()

        createAccessory(categoryList[key], key)
        getButtons()
        
    })
})

function createAccessory(obj, folderName) {
    const images = obj.image
    const names = obj.name
    const prices = obj.price

    shopContainer.innerHTML = images.map((element, index) => {
        return `
    <div class="product_item">
        <div class="product_image_wrapper">
              <img src="image/${folderName}/${element}" alt="a" class="product_image">
              <button class="addToCard_button">ADD TO CART</button>
        </div>
        <h3 class="product_title">${names[index]}</h3>
        <p class="product_price">${prices[index]}</p>
    </div>
    `
    }).join("")
}
const categoryList = {
    "bracelet gold": {
        image: [
            "bracelet1.jpg",
            "bracelet2.jpg",
            "bracelet3.jpg",
            "bracelet4.jpg",
            "bracelet5.jpg",
            "bracelet6.jpg",
            "bracelet7.jpg",
            "bracelet8.jpg",
            "bracelet9.jpg",
            "bracelet10.jpg"
        ],
        name: [
            "LTK Group",
            "Karina",
            "Sweetv Kristal",
            "Cerslimo",
            "Jual Lanmi",
            "Bracciale Donna",
            "Liul Bijoux",
            "Enamour Group",
            "JV Mae Variedades",
            "Pitani",
        ],
        price: [
            "$15,00",
            "$30,00",
            "$21,00",
            "$129,00",
            "$19,00",
            "$33,00",
            "$20,00",
            "$45,00",
            "$12,00",
            "$50,00",
        ]
    },
    // 
    "bracelet silver": {
        image: [
            "bracelet1.jpg",
            "bracelet2.jpg",
            "bracelet3.jpg",
            "bracelet4.jpg",
            "bracelet5.jpg",
            "bracelet6.jpg",
            "bracelet7.jpg",
            "bracelet8.jpg",
            "bracelet9.jpg",
            "bracelet10.jpg"
        ],
        name: [
            "Swarovski Angelic",
            "Fairygate",
            "Natalia CZ",
            "Flora Perlen",
            "Daiwujan",
            "Urban Echo",
            "Swarovski Lifelong Heart",
            "Swarovski  Lifelong Gold Heart",
            "Swarovski  Mesmera",
            "Graff Laurence"
        ],
        price: [
            "$138,00",
            "$15,00",
            "$56,00",
            "$53,00",
            "$59,00",
            "$18,00",
            "$89,00",
            "$88,00",
            "$149,00",
            "$33000,00"
        ]
    },
    // 
    earring: {
        image: [
            "earring1.jpg",
            "earring2.jpg",
            "earring3.jpg",
            "earring4.jpg",
            "earring5.jpg",
            "earring6.jpg",
            "earring7.jpg",
            "earring8.jpg",
            "earring9.jpg",
            "earring10.jpg"
        ],
        name: [
            "H&M Ladies",
            "Noco The Brand",
            "Daiwujan",
            "JV Mae Variedades",
            "Mesmera",
            "Swarovski",
            "Laurence",
            "Urban Echo",
            "Fairygate",
            "Daiwujan"
        ],
        price: [
            "$83,00",
            "$54,00",
            "$476,00",
            "$129,00",
            "$179,00",
            "$323,00",
            "$19,00",
            "$45,00",
            "$35,00",
            "$78,00"
        ]
    },
    // 
    anklet: {
        image: [
            "kette1.jpg",
            "kette2.jpg",
            "kette3.jpg",
            "kette4.jpg",
            "kette5.jpg",
            "kette6.jpg",
            "kette7.jpg",
            "kette8.jpg",
            "kette9.jpg",
            "kette10.jpg"
        ],
        name: [
            "Urban Echo",
            "Swarovski Angelic",
            "Daiwujan",
            "JV Mae Variedades",
            "Natalia CZ",
            "Mesmera",
            "JV Mae Variedades",
            "Fairygate",
            "Laurence",
            "Mesmera"
        ],
        price: [
            "$29,00",
            "$25,00",
            "$46,00",
            "$129,00",
            "$19,00",
            "$33,00",
            "$29,00",
            "$45,00",
            "$65,00",
            "$78,00"
        ]
    },
    // 
    "ring gold": {
        image: [
            "ring1.jpg",
            "ring2.jpg",
            "ring3.jpg",
            "ring4.jpg",
            "ring5.jpg",
            "ring6.jpg",
            "ring7.jpg",
            "ring8.jpg",
            "ring9.jpg",
            "ring10.jpg"
        ],
        name: [
            "Natalia CZ",
            "Urban Echo",
            "Noco The Brand",
            "JV Mae Variedades",
            " Kristal",
            "Fairygate",
            "Swarovski Angelic",
            "Sweetv Kristal",
            "Mesmera",
            "Laurence",
        ],
        price: [
            "$29,00",
            "$25,00",
            "$46,00",
            "$129,00",
            "$19,00",
            "$33,00",
            "$29,00",
            "$45,00",
            "$65,00",
            "$78,00",
        ]
    },
    // 
    "ring silver": {
        image: [
            "ring1.jpg",
            "ring2.jpg",
            "ring3.jpg",
            "ring4.jpg",
            "ring5.jpg",
            "ring6.jpg",
            "ring7.jpg",
            "ring8.jpg",
            "ring9.jpg",
            "ring10.jpg",
        ],
        name: [
            "Fairygate",
            "Daiwujan",
            "Urban Echo",
            "Noco The Brand",
            "Natalia CZ",
            "JV Mae Variedades",
            "Swarovski Angelic",
            "Mesmera",
            "Laurence",
            "Daiwujan"
        ],
        price: [
            "$29,00",
            "$25,00",
            "$46,00",
            "$129,00",
            "$19,00",
            "$33,00",
            "$29,00",
            "$45,00",
            "$65,00",
            "$78,00"
        ]
    },
    // 
    "kette gold": {
        image: [
            "kette1.jpg",
            "kette2.jpg",
            "kette3.jpg",
            "kette4.jpg",
            "kette5.jpg",
            "kette6.jpg",
            "kette7.jpg",
            "kette8.jpg",
            "kette9.jpg",
            "kette10.jpg"
        ],
        name: [
            "Mesmera",
            "Laurence",
            "Daiwujan",
            "Urban Echo",
            "Noco The Brand",
            "Natalia CZ",
            "Swarovski Angelic",
            "Fairygate",
            "LTK Group",
            "Sweetv Kristal"
        ],
        price: [
            "$29,00",
            "$25,00",
            "$46,00",
            "$129,00",
            "$19,00",
            "$33,00",
            "$29,00",
            "$45,00",
            "$65,00",
            "$78,00"
        ]
    },
    // 
    "kette silver": {
        image: [
            "kette1.jpg",
            "kette2.jpg",
            "kette3.jpg",
            "kette4.jpg",
            "kette5.jpg",
            "kette6.jpg",
            "kette7.jpg",
            "kette8.jpg",
            "kette9.jpg",
            "kette10.jpg"
        ],
        name: [
            "Swarovski Angelic",
            "JV Mae Variedades",
            "Noco The Brand",
            "Laurence",
            "Daiwujan",
            "Swarovski Angelic",
            "Sweetv Kristal",
            "Natalia CZ",
            "Urban Echo",
            "Fairygate"
        ],
        price: [
            "$29,00",
            "$25,00",
            "$46,00",
            "$129,00",
            "$19,00",
            "$33,00",
            "$29,00",
            "$45,00",
            "$65,00",
            "$78,00"
        ]
    }
    // 
}
//category  -->




// <-- cart
const cartIconeCuantity = document.querySelector(".cart_cuantity")
const cartContainer = document.querySelector(".cart_container")
const cartIcon = document.getElementById("cart_icone")
cartIcon.onclick = () => cartContainer.classList.toggle("show")


const cartList = document.querySelector(".cart_list")
const cartTotalItems = document.querySelector(".total_items")
const cartTotalPrice = document.querySelector(".total_price")
const totalItems = document.querySelector(".total_items")


function getButtons() {
    const addToCartButtons = [...document.querySelectorAll(".addToCard_button")]
    addToCartButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const btnParent = btn.closest(".product_item")
            createCartItem(btnParent)
           showMessage()

        })
    })
}




// 
function showMessage() {
    const toCartMessage = document.createElement("p")
    toCartMessage.className = "cart_message"
    setTimeout(() => { toCartMessage.classList.add("active") })
    toCartMessage.textContent = "Item added to cart"
    document.body.appendChild(toCartMessage)
    setTimeout(() => { toCartMessage.remove() }, 500)
}
// 


function createCartItem(parentElement) {
    const name = parentElement.querySelector(".product_title").textContent
    const imageSrc = parentElement.querySelector(".product_image").src
    const price = parentElement.querySelector(".product_price").textContent

    const cartItem = document.createElement("li")
    cartItem.className = "cart_item"
    cartItem.innerHTML = `
    <img src="${imageSrc}" alt="" class="cart_image">
    <div class="cartItem_info">
        <div>
            <h3 class="cartItem_name">${name}</h3>
            <p class="cartItem_price">${price}</p>
        </div>
        <div class="cuantity_box">
        <span>QTY:</span>
        <span class="cuantity_minus">-</span>
        <span class="cuantity">1</span>
        <span class="cuantity_plus">+</span>
        </div>
    </div>
    <button class="cartItem_close">
        <i class="fa fa-times" aria-hidden="true"></i>
    </button>
    
    `
    cartList.append(cartItem)
    let listChildren = cartList.children.length
    totalItems.textContent = `${listChildren} Items`
    cartIconeCuantity.textContent = listChildren
    updateTotalPrice(price, 1)
    delteItem(cartItem)
    updateCuantity(cartItem)

}


function updateTotalPrice(price, value) {
    // let newPrice = +price.split(",")[0].replace("$","")
    // let newPrice = Number(price.split(",")[0].replace(/\D/g,""))     /\D/g ----ayn maen@ inchy tiv che


    let newPrice = parseInt(price.split(",")[0].replace(/\D/g, ""))
    let textPrice = cartTotalPrice.textContent
    let newTotalPrice = parseInt(textPrice.replace(/\D/g, "")) + (newPrice * value)
    cartTotalPrice.textContent = "$ " + newTotalPrice

}


function updateCuantity(item) {
    const cuantityBox = item.querySelector(".cuantity_box")
    cuantityBox.addEventListener("click", function (event) {
        const cuantityElement = cuantityBox.querySelector(".cuantity")
        const parentElement = cuantityBox.closest(".cart_item")
        const price = parentElement.querySelector(".cartItem_price").textContent
        let cuantityValue = +cuantityElement.textContent
        if (event.target.classList.contains("cuantity_plus")) {
            cuantityValue++
            cuantityElement.textContent = cuantityValue
            updateTotalPrice(price, 1)
        }
        else if (event.target.classList.contains("cuantity_minus") && cuantityValue > 1) {
            cuantityValue--
            cuantityElement.textContent = cuantityValue
            updateTotalPrice(price, -1)
        }
    })
}



function delteItem(item) {
    const deleteBtn = item.querySelector(".cartItem_close")
    const price = item.querySelector(".cartItem_price").textContent
    const newPrice = +price.split(",")[0].replace(/\D/g, "")


    deleteBtn.addEventListener("click", function () {
        item.remove()  //jnjum enq apranq@                              
        const cuantity = +item.querySelector(".cuantity").textContent    //gtnum enq jnjvox apranqi qanak@
        let totalPrice = newPrice * cuantity   //hashvum enq jnjvox apranqi yndhanur gumar@

        const currentTotalPrice = Number(cartTotalPrice.textContent.replace(/\D/g, ""))  //stanum enq zambyuxi yndhanur gumr@
        cartTotalPrice.textContent = "$ " + (currentTotalPrice - totalPrice)  //zambyuxi yndhanur gumaric hanum enq jnjvox apranqi gun@


        // tarmacnum enq zambyuxum exac apranqneri qanak@
        let listChildren = cartList.children.length
        totalItems.textContent = `${listChildren} Items`
        cartIconeCuantity.textContent = listChildren


    })
}
// --> cart

window.onload = () => getButtons() 









