//vanilla,vanilla,vanilla,strawberry,coffee,coffee

function counter(){
    let string = prompt("What have you ordered recently?")
    //console.log(string)

    let orders = string.split(',')
    //console.log(orders)
    //console.log(orders[0])
 
    let orderCount = {}

    for(let item of orders){
        if(orderCount[item]){
            orderCount[item]+=1
        }else{
            orderCount[item] = 1
        }
    }
    console.log(orderCount)





    
}




counter()