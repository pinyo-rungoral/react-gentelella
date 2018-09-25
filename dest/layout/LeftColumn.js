"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
;
var LeftColumn = /** @class */ (function (_super) {
    __extends(LeftColumn, _super);
    function LeftColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeftColumn.prototype.render = function () {
        return React.createElement("div", { className: "left_col col-md" + (this.props.md || 3) }, "LeftColumn");
    };
    return LeftColumn;
}(React.Component));
exports.LeftColumn = LeftColumn;
