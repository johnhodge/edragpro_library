"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
function GlobalLink(props) {
    var className = 'text-secondary-600 no-underline hover:underline';
    if (props.type != 'external') {
        return (<link_1.default href={props.href} title={props.title} aria-label={props.title} className={props.className ? props.className : className} target='_self'>
        {props.children}
      </link_1.default>);
    }
    else {
        return (<link_1.default href={props.href} title={props.title} className={props.className ? props.className : className} target='_blank' referrerPolicy='no-referrer' rel='noopener noreferrer'>
        {props.children}
      </link_1.default>);
    }
}
exports.default = GlobalLink;
//# sourceMappingURL=link.jsx.map