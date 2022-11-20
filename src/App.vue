<script setup lang="ts">
</script>

<template>
  <div
    style="width: 100vw;overflow-x: hidden;"
    class="text-sans bg-canvas h-screen"
  >
    <Navbar class="mb8" />
    <div class="bg-base flex flex-col container mx-auto rounded">
      <div m2 border="~ base rounded" bg-white shadow>
        <ActionBar />
        <TimeSchedule />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
  &.dark {
    background: #222;
    color: azure;
  }
}
</style>
