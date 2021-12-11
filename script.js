/*To enhance the web page created for the small business, we are going to include some additional JavaScript elements. For each
 of the rows on the bill, read the item description and its price and store as an array. Create a 'Cashier' object which has
  properties for the discount rate and the VAT rate. Create a method called 'ringUp' which accepts three arrays of items and
   prices and stores the subtotal in another property of the object. Create three additional methods which returns the 
   calculated discount, VAT and total. The function to get the total should call the other functions to get the calculated 
   values for discount and VAT as part of its execution. Populate the respective elements of the web page with the output of 
   the methods from the 'Cashier' object
*/

var item1 = [];
var item2 = [];
var item3 = [];

item1.push(document.getElementById("item-1-description").textContent);
item2.push(document.getElementById("item-2-description").textContent);
item3.push(document.getElementById("item-3-description").textContent);

item1.push(parseInt(document.getElementById("item-1-price").textContent));
item2.push(parseInt(document.getElementById("item-2-price").textContent));
item3.push(parseInt(document.getElementById("item-3-price").textContent));

var subtotalvalue = document.getElementById("sub-total-value"  );
var discountvalue = document.getElementById("discount-value");
var vatvalue = document.getElementById("VAT-value");
var totalvalue = document.getElementById("total-value");

var cashier = {
  vatRate: 0.125,
  discountRate: 0.05,
  ringUp: function() {
    var subtotal = item1[1] + item2[1] + item3[1];
    return subtotal;
  },

  calcDisc: function() {
    return this.ringUp() * this.discountRate;
  },

  calcVat: function() {
    return (this.ringUp() - this.calcDisc()) * this.vatRate;
  },

  calcTotal: function() {
     return this.ringUp() + this.calcVat();
  }
};

subtotalvalue.textContent = "$" + (cashier.ringUp().toPrecision(4));
discountvalue.textContent = "$" + cashier.calcDisc().toPrecision(3);
vatvalue.textContent = "$" + cashier.calcVat().toPrecision(4);
totalvalue.textContent = "$" + cashier.calcTotal().toPrecision(5);