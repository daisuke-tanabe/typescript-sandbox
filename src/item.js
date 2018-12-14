"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(name, price) {
        this.name = name;
        this.price = price;
    }
    Item.prototype.say = function (elem) {
        if (elem) { // 引数がnullでない場合
            elem.innerHTML = '書名：' + this.name + '  価格: ' + this.price + '円';
        }
    };
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.js.map