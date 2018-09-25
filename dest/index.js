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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(require("./layout"));
var React = require("react");
var Gentelella = /** @class */ (function (_super) {
    __extends(Gentelella, _super);
    function Gentelella(props) {
        return _super.call(this, props) || this;
    }
    Gentelella.prototype.render = function () {
        return React.createElement("div", { className: "container body" },
            React.createElement("div", { className: "main_container" }, this.props.children));
    };
    Gentelella.prototype.componentDidMount = function () {
        document.body.className = "nav-md";
    };
    return Gentelella;
}(React.Component));
exports["default"] = Gentelella;
