let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');

function compare() {
   let a;
   a = a1.value - a2.value;
   console.log(a);
   result1.innerHTML = a.toFixed();
}
function compare2() {
   let a;
   a = a1u.value - a2u.value;
   console.log(a);
   result2.innerHTML = a.toFixed();
}
