<script setup lang="ts">
import Avatar from 'primevue/avatar'

export interface SdoAvatarProps {
  title: string
}

const props = defineProps<SdoAvatarProps>()
</script>

<template>
  <Avatar shape="circle" :label="props.title" />
</template>
