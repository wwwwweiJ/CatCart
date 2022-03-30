class addCart {
    constructor(name , price , count = 1){
        this.name = name 
        this.price = price 
        this.count = count 
    }

    inputValue (){
         return (this.count += 1)
    }
    
    subTotal(){
        return this.price * this.count
    }
}

export default addCart