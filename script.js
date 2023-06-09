const btn = document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function(button,index){
  button.addEventListener("click",function(event){{
    let btnItem = event.target
    let product = btnItem.parentElement
    let productImg = product.querySelector("img").src
    let productName = product.querySelector("div.name").innerText
    let productPrice = product.querySelector("div.price").innerText
    // console.log(productImg,productName,productPrice)
    addCart(productImg,productName,productPrice)
}})
})

function addCart(productImg,productName,productPrice){
  let addtr = document.createElement("tr")
  let trContent = `<tr>
  <td style="display: flex;align-items: center;">
      <img style="width: 70px ;" src="${productImg}" alt="">
      ${productName}
  </td>
  <td><p><span>${productPrice}</span><sup>đ</sup></p></td>
  <td><input style="width:30px;outline:none;" type="number" value="1" min="1"></td>
  <td style="cursor: pointer;"><span class="cart-delete">Xoá</span></td>
</tr>`

  addtr.innerHTML=trContent
  let cartTable = document.querySelector("tbody")
  cartTable.append(addtr)
  // console.log(addtr)
  cartTotal()
  deleteCart()
  
}

/* tính tổng */
function cartTotal(){
  let cartItem = document.querySelectorAll("tbody tr")
  let total = 0
  // console.log(cartItem.length)
  for (let i = 0;i < cartItem.length;i++){
      let inputValue = cartItem[i].querySelector("input").value
      // console.log(inputValue)
      let productPrice = cartItem[i].querySelector("span").innerHTML
      // console.log(productPrice)
      totalOnePrice = parseFloat(inputValue) * parseFloat(productPrice) * 1000;
      console.log(totalOnePrice)
      total =total+totalOnePrice
      

  }
  let cartTotalAll =document.querySelector(".price-total")
  cartTotalAll.innerHTML =total.toLocaleString('de-DE')
  console.log(cartTotalAll)
  inputChange()
  

}

function deleteCart(){
  let cartItem = document.querySelectorAll("tbody tr")
  for (let i = 0;i < cartItem.length;i++){
    let productDel = document.querySelectorAll(".cart-delete")
    productDel[i].addEventListener("click",function(event){
      let cartDelete = event.target
      let cartItemAll = cartDelete.parentElement.parentElement
      let status = confirm('delete It?');
      if (status) {
        cartItemAll.remove()
        cartTotal()
      }
      
    })
  }
}

function inputChange(){
  let cartItem = document.querySelectorAll("tbody tr")
  for (let i = 0;i < cartItem.length;i++){
    let inputValue = cartItem[i].querySelector("input")
    inputValue.addEventListener("change",function(){
        cartTotal()
    })
  }
}
