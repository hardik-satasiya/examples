"use strict";
const React = require("react");
class Popover extends React.Component {
    render() {
        const { text } = this.props;
        return React.createElement("div", { className: "popover" }, text);
    }
}
exports.Popover = Popover;
//# sourceMappingURL=popover.js.map