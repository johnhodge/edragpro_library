'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = __importDefault(require("@/app/components/button"));
var icons_1 = require("@/app/components/icons");
var link_1 = __importDefault(require("@/app/components/link"));
var nav_1 = require("@/app/components/nav");
var react_1 = require("next-auth/react");
var react_2 = __importDefault(require("react"));
function AsideNav(props) {
    function handleClick() {
        if (!props.open) {
            props.setOpen(true);
        }
        else {
            props.setOpen(false);
        }
    }
    return (react_2.default.createElement("aside", { className: "p-4 flex flex-col gap-8 fixed z-20 inset-0 md:inset-y-0 md:right-0 md:left-1/2 xl:left-3/4 md:shadow-lg bg-white transition-transform ease-in-out duration-300 ".concat(!props.open ? 'translate-x-full' : '') },
        react_2.default.createElement("div", { className: 'flex gap-4 justify-between flex-row-reverse' },
            react_2.default.createElement("span", { onClick: handleClick, className: 'hover:cursor-pointer ' },
                react_2.default.createElement(icons_1.Close, { theme: 'gray' })),
            react_2.default.createElement("div", { className: 'flex gap-2 items-center flex-wrap' },
                props.showLogin ? (!props.session ? (react_2.default.createElement(button_1.default, { eventType: 'link', href: 'https://app.edgarpro.co/', type: 'internal', title: 'Log in', theme: 'gray', icon: 'login', ghost: true }, "Log in")) : (react_2.default.createElement(button_1.default, { eventType: 'onClick', event: react_1.signOut, title: 'Log out', theme: 'gray', icon: 'login', ghost: true }, "Log out"))) : null,
                props.showHome ? (react_2.default.createElement(link_1.default, { href: 'https://www.edgarpro.co', title: 'Return to www.edgarpro.co', type: 'internal' }, "edgarpro.co")) : null)),
        react_2.default.createElement("div", { className: 'max-h-[30%] md:max-h-full flex flex-col gap-4 overflow-y-scroll overscroll-y-none' }, props.children),
        react_2.default.createElement("hr", { className: 'md:hidden' }),
        react_2.default.createElement("nav", { className: 'max-h-[70%] overflow-y-scroll overscroll-y-none' }, !props.navItems ? ('') : (react_2.default.createElement("ul", { className: 'md:hidden flex flex-col gap-4 not-prose' },
            react_2.default.createElement(nav_1.NavItems, { navItems: props.navItems, setOpen: handleClick, open: props.open, mobile: true }))))));
}
exports.default = AsideNav;
