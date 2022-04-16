/*
Tiffany Harrell
CSC 227.0002 Final Project
4/8/2022
*/

var docText = function (id) {
    return document.getElementById(id);
}

function calculateTip () {

    //pull values from client side
    var billAmount = docText("total").value;
    var tipPerc = docText("tipPercent").value;
    
    //calling tipcalculation
    var tipAmount = tipCalculation(billAmount, tipPerc);
    
    //calling calculate total including tip
    var incTipTotal =totalWithTip(tipAmount, billAmount);

    //tip due box return id='tip'& total inc tip return id='totalIncTip'
    docText("tipDue").value = '$' + tipAmount.toString();
    docText("tipIncTotal").value = '$' + incTipTotal.toString();
}

function tipCalculation (billAmount, tipPerc) {
    //calculate tip
    return ((billAmount* (tipPerc / 100)).toFixed(2));
}

function totalWithTip (tipAmount, billAmount) {
    //calculate total with tip
    return ((parseFloat(tipAmount) + parseFloat(billAmount)).toFixed(2));
}
