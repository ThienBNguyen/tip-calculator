document.getElementById("container").onchange = function() {
  let bill = Number(document.getElementById("total").value);
  let tip = document.getElementById("tip").value;
  let split = document.getElementById("number").value;
  let tipValue = bill * (tip / 100);
  let newBillEach = (bill + tipValue) / split;
  let tipEach = tipValue / split;
  document.getElementById("tipoutput").innerHTML = tip + "%";
  document.getElementById("splitoutput").innerHTML = split;
  document.getElementById("new").innerHTML = "$" + newBillEach.toFixed(2);
  document.getElementById("amount").innerHTML = "$" + tipEach.toFixed(2);
};
