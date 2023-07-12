//iki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir
function isFriend(number1,number2) {
    let total1=0
    let total2=0
    for (let i = 0; i < number1; i++) {
        if(number1%i==0){
            total1=total1+i
        }
    }
    for (let i = 0; i < number2; i++) {
        if(number2%i==0){
            total2=total2+i
        }
    }
    if(number1==total2 && number2==total1){
        console.log("Bu iki sayı arkadaştır")
    }
    else{
        console.log("Bu iki sayı arkadaş değildir")
      }
}

isFriend(220,284)
isFriend(11,55)