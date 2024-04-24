var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var harsh = /** @class */ (function () {
    function harsh() {
    }
    harsh.prototype.move = function () {
        console.log("Animal is moving");
    };
    return harsh;
}());
var vaishali = /** @class */ (function (_super) {
    __extends(vaishali, _super);
    function vaishali() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    vaishali.prototype.bark = function () {
        console.log("Dog is barking");
    };
    return vaishali;
}(harsh));
var vaishu = new vaishali();
vaishu.move(); // Output: Animal is moving
vaishu.bark(); // Output: Dog is barking
