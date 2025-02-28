# sd-design-system

Reusable Vue 3 design system

## Package Installation

### Install package
```sh
npm i install sd-design-system@latest
```

### Import styles
Add this code in the `main.ts` in the app root:
```js
import 'sd-design-system/style.css'
```

### Import PrimeVue configuration
Note: No need to install PrimeVue in the project, it's bundled in the design system.
Add this code in the `main.ts` in the app root:

```js
import { installPrimeVue  } from 'sd-design-system';

const app = createApp(App)
installPrimeVue(app);
```

### Import tailwind configuration
Note: Tailwind should be installed in your dependencies. In your `tailwind.config.js` import and apply preset:
```js
import { tailwindConfig as designSystemConfig } from 'sd-design-system';

// Tailwind configuration
export default {
  presets: [designSystemConfig], // <- Add this line 
  content: [
    './src/**/*.{html,js,vue,ts}',
  ],
  //...
}

```


### Use components in the project

```vue
<script setup lang="ts">
  // Components import  
  import { SdoButton, SdoAvatar, SdoText } from 'sd-design-system'
</script>

<template>
  <!-- Components usage -->
  <SdoButton  label="Hello"  />
  <SdoAvatar title="H" />
  <SdoText class="text-blue-200" variant="h1">Hello text</SdoText>

  <!-- Use predefined colors from exported configuration  -->
  <h1 class="text-lg uppercase  text-blue-600">Test tailwind</h1>
  <h1 class="text-lg uppercase  text-blue-900">Test tailwind</h1>
</template>

```




## For design system development:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

