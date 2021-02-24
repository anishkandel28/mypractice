function calculateTip() {
    var billAmount = document.getElementById("billAmt").value;
    var serviceQual = document.getElementById("service").value;
    var numberOfPeople = document.getElementById("people").value;

    // validate input
    if (billAmount === "" || serviceQual === "") {
        alert("Please Enter Values");
        return;
    }
    //check to see if this is empty or equal to 1
    if (numberOfPeople === "" || numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //calculation
    var total = (billAmount * serviceQual) / numberOfPeople;
    //round off decimal number
    total = Math.floor(total)

    //dispaly the tip
    document.getElementById("totaltip").style.display = "block";
    document.getElementById("result").innerHTML = total;
}
//hide the tip amount on load  
document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

//calling function
document.getElementById("calculate").onclick = function() {
    calculateTip();
}

document.getElementById("clear").onclick = function() {
    document.getElementById("myForm").reset();
    document.getElementById("totaltip").style.display = "none";
}