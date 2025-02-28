<script setup lang="ts">
import SdoButton from '@/components/Button/SdoButton.vue'
import SdoAvatar from '@/components/Avatar/SdoAvatar.vue'
import SdoText from '@/components/Text/SdoText.vue'
</script>

<template>
  <!-- Components usage -->
  <SdoButton label="Hello world" />
  <br />
  <br />
  <SdoAvatar title="JD" />
  <br />
  <br />
  <SdoText class="text-blue-200" variant="h1">Hello text</SdoText>

  <!-- Tailwind test -->
  <h1 class="text-lg uppercase text-blue-500">Test tailwind</h1>
</template>
