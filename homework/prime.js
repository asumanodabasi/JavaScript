function findPrime(...numbers) {
   if(numbers<1){
    console.log("Please enter a positive number");
   }
   let isPrime=true
   for (let i = 0; i < numbers.length; i++) {
    for (let a = 2; a <numbers[i]; a++){
        if(numbers[i]%a==0){
            isPrime=false
            console.log(numbers[i]+ " This number is not prime")
            break
        }
       else{
        console.log(numbers[i]+ " This number is prime")  
        break  
       } 
    }
   }
}

//findPrime(10,5,3,6,11,4,13)

function listPrime() {
    
    for(let i=0;i<100;i++){
        let isPrime=false    
        for(let a=2;a<i;a++)
        {
            if(i%a==0){
             isPrime=false
             break
            }
            else{
                isPrime=true
            break
            }

        }
        if(isPrime==true){
            console.log("Prime Numbers : "+i)
            } 
    }
}

listPrime()