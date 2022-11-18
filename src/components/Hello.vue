<script setup lang="ts">
  // import { computed } from 'vue'

  const props = defineProps<{
    name: string
  }>()
  
  const uppercase = computed(() => props.name.toUpperCase())
</script>
<template>
  <div text="blue 3xl">Hello!! {{ uppercase }}</div>
  <div i-carbon-bee text-2xl text-yellow/>
</template>
