"use strict";
require("./button.scss");
const React = require("react");
class Button extends React.Component {
    render() {
        return React.createElement("div", { className: "button" }, this.props.children);
    }
}
exports.Button = Button;
//# sourceMappingURL=button.js.map