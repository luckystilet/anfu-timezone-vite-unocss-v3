import type { Timezone } from '~/types'

export const now = useNow({ interval: 30_000 })
const zonesNames = useStorage<string[]>('world-time-zones', [])
export const zones = computed(() => {
  const initialZones: Timezone[] = []
  zonesNames.value.forEach((name) => {
    const res = timezones.find(i => i.name === name)
    if (!res)
      return
    initialZones.push(res)
  })
  return initialZones
})

export function addToTimezone(timezone: Timezone) {
  zonesNames.value.push(timezone.name)
}
export function onRemoveZone(timezone: Timezone) {
  zonesNames.value = zonesNames.value.filter(name => name !== timezone.name)
}
export function onMoveZone(timezone: Timezone, delta: 1 | -1) {
  const index = zonesNames.value.indexOf(timezone.name)
  if (index === -1)
    return
  const target = index + delta
  const other = zonesNames.value[target]
  zonesNames.value[target] = timezone.name
  zonesNames.value[index] = other
}

const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone

if (!zones.value.length)
  zonesNames.value.push(userTimezone)
