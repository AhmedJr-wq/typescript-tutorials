//Generic classes allow you to create classes that can work with different types.
var Container = /** @class */ (function () {
    function Container(key, value) {
        this.key = key;
        this.value = value;
    }
    Container.prototype.print = function () {
        console.log("Key: ".concat(this.key, " Value: ").concat(this.value));
    };
    return Container;
}());
var val1 = new Container('Hello', 2);
var p1 = val1.key;
val1.print();
