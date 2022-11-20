<script  lang="ts" setup="">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    dark:i-carbon-sun
    i-carbon-moon
    @click="toggleDark()"
  />
</template>

<style></style>
