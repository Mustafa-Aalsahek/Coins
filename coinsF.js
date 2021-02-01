let num, result=[];
let  i = Coins = 0;
let cabin = [0,0,0,0,0];
let change =[25,10,5,2,1];
function calc(){
    num = document.getElementById("number").value;
/* check if it's possible to subtract "change" element
   from the total number, then increase "cabin" amount
*/
    while (i < change.length){
        if (num - change[i] >= 0){
            num-=change[i];
            cabin[i] += 1;
        }else{
            Coins += cabin[i];
            i++;
        }
    }
/* show the number of coins used and show "Specific result" */
    document.getElementById("result").innerHTML = Coins + " coins <br> <br>" ;
    document.getElementById("option").style.display = "inline";
}
/*  check the times used of each coin and store them in result[] */
function coinsCheck(){
    for (var j=0;j<change.length;j++){
        if (cabin[j] !== 0){
            result[j] = "(" + cabin[j] + ") " + change[j] + "'s <br>";
        }
    }
// filter the result from empty elements
    var filtered=result.filter(Boolean);
  //  filtered = filtered.replace(/,/g,'');
    if (document.getElementById("check").checked){
        document.getElementById("div").style.display = "inline";
        document.getElementById("specific").innerHTML= (filtered.join('')); // remove the commas in the array
    }else{
        document.getElementById("div").style.display = "none";
    }
}