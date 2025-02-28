import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Lara from '@primeuix/themes/lara'
import { COLORS } from '@/theme'

const AppPreset = definePreset(Lara, {
  semantic: {
    primary: COLORS.blue,
    danger: COLORS.red,
    blue: COLORS.blue,
    green: COLORS.green,
    red: COLORS.red,
  },
  components: {
    button: {
      // @ts-ignore
      label: {
        font: {
          weight: 500,
        },
      },
    },
  },
})

export function installPrimeVue(app: App, config?: Record<string, unknown>) {
  app.use(PrimeVue, {
    theme: {
      preset: AppPreset,
      ...config,
    },
  })
}
