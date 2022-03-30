import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import addCart from "./addCart"
import reMove from "./remove"
import upDateTotal from './updateTotal'

const addBtn = document.querySelectorAll(".btn-warning")
const bodyTr = document.querySelector("tbody")
const totalPrice = document.querySelector("tfoot tr td:nth-child(3)")
let dataBase = []

addBtn.forEach(x => {
    x.addEventListener("click" , ()=>{
        const name = x.parentElement.children[0].textContent
        const price = x.parentElement.children[1].textContent.replace("$" , "")
        let product = new addCart()
        if (bodyTr.innerHTML.includes(name)){
            dataBase.forEach(e => {
                if(e.name == name){
                    e.inputValue()
                    upDate(e)}
            })
        }else{
            product.name = name
            product.price = price 
            dataBase.push(product)
            inserProduct(name , price , 1 )
            upDate(dataBase[0])}
        reMove()
    })
})

function upDate(e){
    const input = bodyTr.querySelectorAll("input")
    input.forEach(x => {
        if(x.parentElement.parentElement.children[0].textContent === e.name){
            x.value = e.count
            x.parentElement.parentElement.children[3].textContent = "$" + e.subTotal()
        }})
    upDateTotal()
    }

function inserProduct( name , price , count ){
    const result = `<tr>
    <td>${name}</td>
    <td><input type="number" value="${count}" /></td>
    <td>$${price}</td>
    <td>$${price}</td>
    <td>
      <button class="btn btn-danger btn-sm">
        <i class="fas fa-trash-alt"></i>
      </button>
    </td>
    </tr>`
    bodyTr.insertAdjacentHTML("afterbegin" , result)
}
    const clearCart = document.querySelector(".btn-success")
    clearCart.addEventListener("click" , () => {
        bodyTr.innerHTML = ""
        dataBase.length = 0
        totalPrice.textContent = "$0"  
    })

    export default dataBase

