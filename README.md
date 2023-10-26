# EdgarPro Library

This is the component library used by EdgarPro to maintain a uniform experience between web and app.

## Installation

```zsh
pnpm install @edgarpro/library@latest
```

```zsh
npm install @edgarpro/library@latest
```

## Recommended setup

To use the EdgarPro component library on your product, please make sure to implement the following:

### Tailwind content

The EdgarPro component library is built with Tailwind and is based on primary, secondar, and gray colors. To have consistent styling across the application and website, please add these settings to your `tailwind.config.js`:

This will apply tailwind classes from the component library:

```javascript
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    ... 
    './node_modules/@edgarpro/**/*.{js,ts,jsx,tsx,mdx}',
  ],
```

### Colors

This will ensure proper color matching:

```javascript
const colors = require('tailwindcss/colors');
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
        secondary: colors.sky,
      },
    },
  },
```
### Plugins

These plugins are what we use to style typography and forms:

```javascript
plugins: [
  require('@tailwindcss/typography'), 
  require('@tailwindcss/forms')
],

```