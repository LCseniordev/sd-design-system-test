<script setup lang="ts">
import Button from 'primevue/button'

const props = defineProps<{
  label: string
  severity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast'
}>()
</script>

<template>
  <Button v-bind="props" />
</template>
