<script setup lang="ts">
import TimezoneItem from '~/components/TimezoneItem.vue'
</script>

<template>
  <div class="flex flex-col gap4 p4 text-rose-700">
    <div
      v-for="(timezone, idx) in zones"
      :key="timezone.name"
      class="relative flex"
    >
      <TimezoneItem :timezone="timezone" />
      <span class="absolute top-0 left-0 w-6 text-xl h-full flex flex-col items-center cursor-pointer">
        <span
          class="icon-btn color-red-600"
          i-carbon-close
          title="Remove"
          @click="onRemoveZone(timezone)"
        />
        <span
          v-if="idx !== 0"
          class="icon-btn color-green-400"
          i-carbon-caret-up
          title="Move up"
          @click="onMoveZone(timezone, -1)"
        />
        <span
          v-if="idx !== zones.length - 1"
          class="icon-btn color-green-400"
          i-carbon-caret-down
          title="Move down"
          @click="onMoveZone(timezone, 1)"
        />
      </span>
    </div>
  </div>
</template>

<style></style>
