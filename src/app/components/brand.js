"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("next/image"));
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("./link"));
function Brand() {
    var brandName = 'EdgarPro';
    return (react_1.default.createElement("div", { className: 'relative h-7 w-24' },
        react_1.default.createElement(link_1.default, { href: '/', title: "Go to the ".concat(brandName, " homepage"), type: 'internal' },
            react_1.default.createElement(image_1.default, { src: '/logo.svg', alt: 'EdgarPro Logo', fill: true }))));
}
exports.default = Brand;
//# sourceMappingURL=brand.js.map