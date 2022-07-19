
var slider = document.getElementById("myrange")

var output = document.getElementById("demo")
output.innerHTML=slider.value;



var rate =slider.onchange = function(){
        output.innerText = this.value;
}

var bill = document.getElementById("bill").value

console.log(bill)

function showbill(){
    inputbill =Number(document.getElementById("bill").value);

    var tipamount=Math.floor(inputbill/this.slider.value)

    document.getElementById("tipamount").innerHTML = "=" + tipamount

    var final = tipamount+inputbill

    document.getElementById("total").innerHTML="=" +final



    //var output = tipamount + this.inputbill.value


    //document.getElementById("total").innerHTML= output
    
};

//var tipamount = 
