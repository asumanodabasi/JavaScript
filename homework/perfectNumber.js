function perfect() {

    for (let i = 1; i < 1000; i++) {
        let total=0
       for(let a=1;a<i;a++){
        if(i%a==0){
            total=total+a   
        }
    } 
      if(i==total){
        console.log("Mükemmel Sayılar: "+i)
    }
    }
}
perfect()