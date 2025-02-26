<script setup lang="ts">
import Button from 'primevue/button'

export interface SdoButtonProps {
  label: string
  severity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast'
}

const props = defineProps<SdoButtonProps>()
</script>

<template>
  <Button v-bind="props" />
</template>
