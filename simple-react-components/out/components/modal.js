"use strict";
require("./modal.scss");
const React = require("react");
class Modal extends React.Component {
    render() {
        const { text } = this.props;
        return React.createElement("div", { className: "button" }, text);
    }
}
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map