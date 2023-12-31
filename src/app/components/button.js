'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tailwind_merge_1 = require("tailwind-merge");
var icons_1 = require("./icons");
var link_1 = __importDefault(require("./link"));
function GlobalButton(props) {
    var colors = {
        primary: "".concat(!props.ghost ? 'bg-primary-100' : '', " border-primary-500 text-primary-600 md:hover:bg-primary-50 md:hover:no-underline"),
        secondary: "".concat(!props.ghost ? 'bg-secondary-100' : '', " border-secondary-500 text-secondary-600 md:hover:bg-secondary-50 md:hover:no-underline"),
        gray: "".concat(!props.ghost ? 'bg-gray-100' : '', " border-gray-500 text-gray-600 md:hover:bg-gray-50 md:hover:no-underline"),
    };
    var icon = {
        check: react_1.default.createElement(icons_1.Check, { theme: props.theme }),
        code: react_1.default.createElement(icons_1.Code, { theme: props.theme }),
        login: react_1.default.createElement(icons_1.Login, { theme: props.theme }),
    };
    var defaultClassname = 'not-prose flex flex-row items-center gap-2 w-fit px-4 py-2 rounded-lg border font-semibold';
    var classNames = (0, tailwind_merge_1.twMerge)(defaultClassname, colors[props.theme], props.className);
    if (props.eventType === 'link') {
        return (react_1.default.createElement(link_1.default, { className: classNames, href: props.href, title: props.title, type: props.type, pageAnchor: props.pageAnchor },
            react_1.default.createElement("span", null, props.children),
            props.icon ? react_1.default.createElement("span", null, icon[props.icon]) : ''));
    }
    else if (props.eventType === 'onClick') {
        return (react_1.default.createElement("button", { className: classNames, onClick: props.event, title: props.title },
            props.children,
            props.icon ? react_1.default.createElement("span", null, icon[props.icon]) : ''));
    }
    else {
        return null;
    }
}
exports.default = GlobalButton;
