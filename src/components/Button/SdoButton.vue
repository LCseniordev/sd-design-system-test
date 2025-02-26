<script setup lang="ts">
import Button from 'primevue/button'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <Button :label="props.title" />
</template>
