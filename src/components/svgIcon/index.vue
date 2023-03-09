<template>
  <svg aria-hidden="true" class="cp-icon">
    <use :href="`#icon-${name}`" />
  </svg>
</template>

<script setup lang="ts">
  defineProps<{
    name: string
  }>()
</script>