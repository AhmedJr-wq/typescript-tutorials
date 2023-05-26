var _a, _b, _c;
//undefined and null
//undefined means no value is assigned yet when a variable is declared
// when no value is assigned yet, null is default value used when a variable is declared
var title = {
    textField: {
        input: "name"
    }
};
console.log((_a = title === null || title === void 0 ? void 0 : title.textField) === null || _a === void 0 ? void 0 : _a.input); //Optional Chaining
var course = {
    name: "JavaScript",
    description: "JavaScript is a programming language that conforms to the ECMAScript specification."
};
var titleField = (_b = course === null || course === void 0 ? void 0 : course.name) !== null && _b !== void 0 ? _b : "Test is cancelled"; //null coalescing
console.log(titleField);
var user = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'United State of America',
    },
};
var country = (_c = user.address) === null || _c === void 0 ? void 0 : _c.country; // No error, country is null
console.log(country);
