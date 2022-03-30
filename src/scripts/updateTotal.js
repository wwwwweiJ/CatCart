const totalPrice = document.querySelector("tfoot tr td:nth-child(3)")
import dataBase from "./main"

function upDateTotal(){
    let total = 0
    dataBase.forEach(x => {
        total = Math.round((total + (x.price * x.count)) * 100)/ 100
        return total
    })
    totalPrice.textContent = `$${total}`
    
    
}
export default  upDateTotal