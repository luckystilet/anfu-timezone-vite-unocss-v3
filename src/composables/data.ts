import timezoneRaw from 'timezones.json'
import type { Timezone } from '~/types'
export const timezones: Timezone[] = timezoneRaw.flatMap((i) => {
  return i.utc.map(u => ({
    name: u,
    offset: i.offset,
    isdst: i.isdst,
    abbr: i.abbr,
  }))
})
