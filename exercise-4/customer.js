"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, Age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    Customer.prototype.getAge = function () {
        console.log("".concat(this.firstName, "'s Age is ").concat(this.Age));
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("Jeffrey", "Mcilveen", 28);
customer.greeter();
customer.getAge();
