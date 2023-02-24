const cartArray = [];

function displayProduct(cartProduct) {

    let totalPrice = 0;
    // console.log(cartProduct);
    const tableBody = document.getElementById("cart-products");
    tableBody.innerHTML = "";
    for(let i = 0; i < cartProduct.length; i++)
    {
        // console.log(cartArray[i].productName, cartArray[i].productPrice);
        const name = cartArray[i].productName;
        const price = cartArray[i].productPrice;

        totalPrice = totalPrice + price;

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `;

        tableBody.appendChild(tr);
    }
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th></th>
    <th>Total Price</th>
    <th>${totalPrice}</th>
    `;
    tableBody.appendChild(tr);
}

function addToCart(element) 
{
    const productName = element.parentNode.parentNode.children[0].innerText;

    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const productObj = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }

    cartArray.push(productObj);
   
    document.getElementById("total-added-product").innerText = cartArray.length;

    displayProduct(cartArray);
}