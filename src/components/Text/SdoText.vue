<script setup lang="ts">
import { computed } from 'vue'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body'
  | 'caption'
  | 'caption-sm'
  | 'button'
  | 'button-sm'
  | 'link-body'
  | 'link-caption'

export interface SdoTextProps {
  variant?: TypographyVariant
  as?: string
}

const props = defineProps<{
  variant?: TypographyVariant
  as?: string
  class?: string
}>()

// Define a mapping between variants and HTML tags
const tagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body: 'p',
  caption: 'span',
  'caption-sm': 'span',
  button: 'span',
  'button-sm': 'span',
  'link-body': 'a',
  'link-caption': 'a',
}

const tag = computed(() => props.as || (props.variant && tagMap[props.variant]))

const computedClass = computed(() => ({
  'text-[34px] leading-[52px]': props.variant === 'h1',
  'text-3xl leading-[46px]': props.variant === 'h2',
  'text-2xl leading-[38px]': props.variant === 'h3',
  'text-lg leading-[28px]': props.variant === 'h4',
  'text-base leading-[24px]': props.variant === 'h5',
  'text-sm leading-[20px]': props.variant === 'body',
  'text-xs leading-[24px]': props.variant === 'caption',
  'text-[10px] leading-[14px]': props.variant === 'caption-sm',
  'text-sm leading-[20px] tracking-wide': props.variant === 'button',
  'text-xs leading-[16px] tracking-wide': props.variant === 'button-sm',
  'text-sm leading-[20px] underline cursor-pointer': props.variant === 'link-body',
  'text-xs leading-[16px] underline cursor-pointer': props.variant === 'link-caption',
}))
</script>

<template>
  <component :is="tag" :class="[computedClass, props.class]">
    <slot />
  </component>
</template>
