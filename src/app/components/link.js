"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
var react_1 = __importDefault(require("react"));
var tailwind_merge_1 = require("tailwind-merge");
function GlobalLink(props) {
    var defaultclassName = 'text-secondary-600 no-underline md:hover:underline';
    var className = (0, tailwind_merge_1.twMerge)(defaultclassName, props.className);
    if (props.type != 'external') {
        return (react_1.default.createElement(link_1.default, { href: !props.pageAnchor ? props.href : "#".concat(props.href), title: props.title, "aria-label": props.title, className: className, target: '_self' }, props.children));
    }
    else {
        return (react_1.default.createElement(link_1.default, { href: !props.pageAnchor ? props.href : "#".concat(props.href), title: props.title, className: className, target: '_blank', referrerPolicy: 'no-referrer', rel: 'noopener noreferrer' }, props.children));
    }
}
exports.default = GlobalLink;
//# sourceMappingURL=link.js.map