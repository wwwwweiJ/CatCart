import  upDateTotal from "./updateTotal"
import dataBase from "./main";
const totalPrice = document.querySelector("tfoot tr td:nth-child(3)")

function reMove(){
    const rmBtn = document.querySelectorAll(".btn-danger")
    rmBtn.forEach(x =>{
        x.addEventListener("click" , function(){
            x.parentElement.parentElement.remove()
                
            dataBase.forEach(function(e , index){
                if(e.name === x.parentElement.parentElement.children[0].textContent){
                    dataBase.splice(index , 1)
                }
            })
            if(dataBase.length < 1 ){
                totalPrice.textContent = "$0"
            }
            upDateTotal()
        })
    })
  }
  export default reMove