import './assets/main.css'
import './assets/tailwind.css'

import { installPrimeVue } from './plugin' // ✅ Import plugin function

//  Export install function (no need for separate build)
export { installPrimeVue }

//  Ensure all components are explicitly exported
export { default as SdoButton } from './components/Button/SdoButton.vue'
export { default as SdoAvatar } from './components/Avatar/SdoAvatar.vue'

//  Export Tailwind config
import { tailwindConfig } from './tailwind'
export { tailwindConfig }

//  Export colors config
import { COLORS } from './theme/colors'
export { COLORS }
