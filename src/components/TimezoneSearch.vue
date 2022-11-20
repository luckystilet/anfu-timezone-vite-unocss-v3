<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from '~/types'

const fuse = new Fuse(timezones, {
  keys: ['name'],
})
let input = $ref('')
let index = $ref(0)
const searchResult = $computed(() => {
  return fuse.search(input)
})
function add(t: Timezone) {
  addToTimezone(t)
  input = ''
  index = 0
}
function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown')
    index = (index + 1) % searchResult.length
  else if (e.key === 'ArrowUp')
    index = (index - 1 + searchResult.length) % searchResult.length
  else if (e.key === 'Enter')
    add(searchResult[index].item)
}
function onCleanInput() {
  input = ''
}
</script>

<template>
  <div class="z-10 text-red relative" tabindex="-1" @keydown.esc="onCleanInput">
    <input
      v-model="input"
      type="text"
      placeholder="Search timezone"
      class="px2 py1 bg-transparent w-full"
      border="~ base rounded"
      @keydown="onKeyDown"
    >
    <div
      v-show="input"
      class="flex flex-col absolute top-full bg-base left-0 right-0 rounded max-h-50 overflow-auto"
    >
      <TimezoneItem
        v-for="(i, idx) in searchResult"
        :key="i.refIndex"
        :class="{ 'bg-gray:5': idx === index }"
        :timezone="i.item"
        @click="add(i.item)"
      />
    </div>
  </div>
</template>
