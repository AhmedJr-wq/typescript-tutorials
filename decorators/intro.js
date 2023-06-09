//Decorators allow you to modify the behavior of classes, methods, properties, or parameters at design time. 
//They provide a way to annotate and modify the structure or functionality of code elements.
// Decorators are denoted by the @ symbol followed by an expression, which is evaluated at runtime.
var DbService = /** @class */ (function () {
    function DbService() {
    }
    // @Log()
    DbService.prototype.saveData = function (data) {
        console.log("Saving data in the database...");
    };
    return DbService;
}());
var db = new DbService();
db.saveData({ Hello: 'World' });
