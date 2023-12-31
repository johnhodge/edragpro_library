"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function GlobalLoadingState() {
    return (react_1.default.createElement("div", { className: 'min-w-full min-h-[calc(100dvh-154px)] flex justify-center items-center animate-pulse' },
        react_1.default.createElement("figure", { className: 'w-28' },
            react_1.default.createElement("svg", { className: 'w-full h-auto', viewBox: '0 0 386 254', fill: 'none', xmlns: 'https://www.w3.org/2000/svg' },
                react_1.default.createElement("path", { d: 'M0.5 253.031V0.968994H182.635V56.107H69.109V99.431H173.257V154.569H69.109V197.892H182.64L182.635 253.031H0.5Z', fill: '#EA580C' }),
                react_1.default.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M182.635 0.968994V56.107V253.031H251.245V178.2H289.252C308.5 178.2 325.324 174.631 339.721 167.492C354.2 160.354 365.427 150.179 373.407 136.969C381.469 123.759 385.5 108.128 385.5 90.077C385.5 72.19 381.594 56.559 373.778 43.184C365.962 29.81 355.022 19.43 340.955 12.046C326.887 4.66101 310.474 0.968994 291.719 0.968994H182.635ZM296.036 120.846C290.361 123.636 283.492 125.031 275.43 125.031H251.245V55.615H275.43C283.492 55.615 290.361 57.01 296.036 59.8C301.796 62.507 306.197 66.446 309.241 71.615C312.368 76.702 313.929 82.856 313.929 90.077C313.929 97.215 312.368 103.41 309.241 108.661C306.197 113.913 301.796 117.974 296.036 120.846Z', fill: '#374151' })))));
}
exports.default = GlobalLoadingState;
