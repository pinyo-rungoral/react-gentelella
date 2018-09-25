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
var ContentBody = /** @class */ (function (_super) {
    __extends(ContentBody, _super);
    function ContentBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentBody.prototype.render = function () {
        return React.createElement("div", null, "Content body");
    };
    ContentBody.prototype.componentDidMount = function () {
        console.log('didmount');
        document.body.className = "nav-md";
    };
    return ContentBody;
}(React.Component));
exports.ContentBody = ContentBody;
