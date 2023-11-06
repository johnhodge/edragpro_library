"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function GlobalCallout(props) {
    var colors = {
        alert: 'border-orange-300 bg-orange-50 prose-orange text-orange-600 prose-strong:text-orange-600 prose-headings:text-orange-600',
        note: 'border-sky-300 bg-sky-50 prose-sky text-sky-600 prose-strong:text-sky-600 prose-headings:text-sky-600',
        success: 'border-emerald-300 bg-emerald-50 prose-emerald text-emerald-600 prose-strong:text-emerald-600 prose-headings:text-emerald-600',
    };
    var icons = {
        alert: '⚠️',
        note: 'ℹ️',
        success: '✅',
    };
    return (react_1.default.createElement("aside", { className: "border rounded-lg p-4 mb-4 flex gap-2 ".concat(colors[props.type]) },
        react_1.default.createElement("span", { className: 'font-emoji' }, icons[props.type]),
        react_1.default.createElement("span", { id: 'callout', className: 'last:mb-0 prose-p:mt-0' }, props.children)));
}
exports.default = GlobalCallout;
