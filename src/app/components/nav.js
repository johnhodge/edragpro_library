'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavItems = void 0;
var navigation_1 = require("next/navigation");
var react_1 = __importStar(require("react"));
var aside_menu_1 = __importDefault(require("./aside-menu"));
var brand_1 = __importDefault(require("./brand"));
var icons_1 = require("./icons");
var link_1 = __importDefault(require("./link"));
function GlobalNav(props) {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    function handleClick() {
        if (!open) {
            setOpen(true);
        }
        else {
            setOpen(false);
        }
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'sticky top-0 p-4 bg-gray-50 border-b border-gray-500 flex justify-between items-center z-10' },
            react_1.default.createElement(brand_1.default, null),
            react_1.default.createElement("nav", { className: 'flex gap-4 items-center' },
                react_1.default.createElement("ul", { className: 'max-md:hidden flex flex-row gap-4 not-prose' },
                    react_1.default.createElement(NavItems, { navItems: props.navItems, setOpen: handleClick, open: open })),
                react_1.default.createElement("span", { onClick: handleClick, className: 'hover:cursor-pointer' },
                    react_1.default.createElement(icons_1.Menu, { theme: 'gray' })))),
        react_1.default.createElement(aside_menu_1.default, { open: open, setOpen: handleClick, navItems: props.navItems, session: props.session, showLogin: true }, props.children)));
}
exports.default = GlobalNav;
function NavItems(props) {
    function handleClick() {
        if (!open) {
            props.setOpen(true);
        }
        else {
            props.setOpen(false);
        }
    }
    var pathName = (0, navigation_1.usePathname)();
    if (pathName === '/contact') {
        return null;
    }
    else {
        return (react_1.default.createElement(react_1.default.Fragment, null, props.navItems.map(function (item) {
            return !props.mobile ? (react_1.default.createElement("li", { key: "".concat(item.name.toLowerCase().replaceAll(' ', '-'), "_").concat(item.sys.id) },
                react_1.default.createElement(link_1.default, { href: "/".concat(item.name.toLowerCase().replaceAll(' ', '-')), title: item.name, type: 'internal', className: 'font-semibold' }, item.name))) : (react_1.default.createElement("li", { key: "".concat(item.name.toLowerCase().replaceAll(' ', '-'), "_").concat(item.sys.id), onClick: handleClick },
                react_1.default.createElement(link_1.default, { href: "/".concat(item.name.toLowerCase().replaceAll(' ', '-')), title: item.name, type: 'internal', className: 'font-semibold' }, item.name)));
        })));
    }
}
exports.NavItems = NavItems;
//# sourceMappingURL=nav.js.map