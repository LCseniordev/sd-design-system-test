<script setup lang="ts">
import Avatar from 'primevue/avatar'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <Avatar shape="circle" :label="props.title" />
</template>
