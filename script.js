var item1price = document.getElementById("item-1-price");
var item2price = document.getElementById("item-2-price");
var item3price = document.getElementById("item-3-price");

var subtotal = parseInt(item1price.textContent) + parseInt(item2price.textContent) + parseInt(item3price.textContent);

var subtotalvalue = document.getElementById("sub-total-value")
var discountvalue = document.getElementById("discount-value")
var vatvalue = document.getElementById("VAT-value")
var totalvalue = document.getElementById("total-value")

subtotalvalue.textContent = "$" + subtotal;
discount = subtotal * .05;
vat = (subtotal - discount) * 0.125;
total = (subtotal - discount) + vat;

discountvalue.textContent = "- $" + discount.toPrecision(3);
vatvalue.textContent = "$" + vat.toPrecision(4);
totalvalue.textContent = "$" + total.toPrecision(4);

