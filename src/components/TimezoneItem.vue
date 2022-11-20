<script  lang="ts">
import type { PropType } from 'vue'
import type { Timezone } from '~/types'
export default defineComponent({
  props: {
    timezone: { type: Object as PropType<Timezone>, required: true },
  },
  setup(props) {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: props.timezone.name,
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
    })
    const { timezone } = props
    const theState = $computed(() => timezone.name.split('/')[0])
    const city = $computed(() => timezone.name.split('/')[1].replace(/_/g, ' '))
    const offset = $computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset)
    // const time = $computed(() => now.value.toLocaleTimeString('en-US', { timeZone: timezone.name }))
    const time = $computed(() => formatter.format(now.value))
    //
    return { theState, city, offset, time }
  },
})
</script>

<template>
  <button class="flex gap-2 py2 w-full">
    <span class="font-mono w-10 text-right">
      {{ offset }}
    </span>
    <span class="flex items-end gap2 w-full">
      <span class="text-xl" style="line-height: 1">{{ theState }}</span>
      <span class="op80 text-xs" style="line-height: 1">
        {{ city }}
        <sup border="~ base rounded" px1>{{ timezone.abbr }}</sup>
      </span>
      <span class="op80 text-xs ml-auto" style="line-height: 1" tabular-nums>{{ time }}</span>
    </span>
  </button>
</template>

<style></style>
