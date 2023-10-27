"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var siteName = 'EdgarPro';
function SetMetadata(props) {
    return {
        metadataBase: new URL('https://www.edgarpro.co'),
        title: "".concat(props.title, " | ").concat(siteName),
        description: props.description,
        applicationName: siteName,
        alternates: {
            canonical: props.canonical,
        },
        themeColor: '#374151',
        referrer: 'origin-when-cross-origin',
        keywords: props.keywords,
        authors: [{ name: 'John', url: 'https://www.johnhodge.com' }],
        creator: 'John Hodge',
        publisher: 'John Hodge',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
    };
}
exports.default = SetMetadata;
//# sourceMappingURL=meta.js.map