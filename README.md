# EdgarPro Library

This is the component library used by EdgarPro to maintain a uniform experience between the website and the application.

## Installation

```zsh
pnpm install @edgarpro/library@latest
```

```zsh
npm install @edgarpro/library@latest
```

## Included

This library includes  the following:

### Components
- GlobalButton
- GlobalNav
- GlobalCallout
- GlobalLink
- GlobalLoadingState
- GlobalStandardPage
- GlobalSystemPage

### Types
- LinkData
- MetadataData
- TableData
- TableConfigData
- HomepageSectionEntryData
- HomepageSectionCollectionData
- GlobalButtonData

## Recommended setup

To use the EdgarPro component library on your product, please make sure to implement the following tailwind configs:

### Content

The EdgarPro component library is built with Tailwind and is based on primary, secondary, and gray colors. To have consistent styling across the application and website, please add these settings to your `tailwind.config.js`:

This will apply tailwind classes from the component library:

```javascript
const config: Config = {
  content: [
    
    ...

    //⬇ Add this line after the default items to tell Tailwind to include classes used in this library ⬇ 

    './node_modules/@edgarpro/**/*.{js,ts,jsx,tsx,mdx}',
  ],
```

### Colors

This will ensure proper color matching:

```javascript
const colors = require('tailwindcss/colors');
...
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

You'll need to install them. Check the [Typography](https://tailwindcss.com/docs/typography-plugin) and [Forms](https://github.com/tailwindlabs/tailwindcss-forms) pages for more info.

## Mini CSS error
```
You forgot to add 'mini-css-extract-plugin'
``` 
If you see this error, try removing the `node_modules` folder and reinstalling the project. If that still doesn’t work, then you might need to add Mini CSS but you shouldn’t need to since Tailwind is responsible for all our CSS file creation.
