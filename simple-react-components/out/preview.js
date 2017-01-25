"use strict";
require("./scss/main");
require("./preview.scss");
const React = require("react");
const components_1 = require("./components");
class ComponentsPreview extends React.Component {
    render() {
        return React.createElement("div", { className: "preview" },
            React.createElement("div", null,
                React.createElement(components_1.Button, null, "Primary button")),
            React.createElement("div", null,
                React.createElement(components_1.Button, null, "Secondary button")));
    }
}
//# sourceMappingURL=preview.js.map