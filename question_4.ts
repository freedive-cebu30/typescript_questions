modulus(5)
modulus(7)
modulus(26)

function modulus(num: number): void {
   if (num > 25) {
     console.log(num)
   } else {
     for (let $i = 1; $i <= 25; $i++) {
       if ($i % num == 0) {
         console.log($i)
       }
     }
   }
}
