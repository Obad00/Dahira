import { ref, onMounted, onUnmounted } from 'vue'

export function useCountdown(targetDate) {
  const target = new Date(targetDate).getTime()
  const days = ref('--')
  const hours = ref('--')
  const mins = ref('--')
  const secs = ref('--')
  let timer = null

  function pad(n) {
    return String(n).padStart(2, '0')
  }

  function tick() {
    const diff = target - Date.now()
    if (isNaN(target)) return
    if (diff <= 0) {
      days.value = hours.value = mins.value = secs.value = '00'
      return
    }
    days.value = pad(Math.floor(diff / 86400000))
    hours.value = pad(Math.floor((diff % 86400000) / 3600000))
    mins.value = pad(Math.floor((diff % 3600000) / 60000))
    secs.value = pad(Math.floor((diff % 60000) / 1000))
  }

  onMounted(() => {
    tick()
    timer = setInterval(tick, 1000)
  })
  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  return { days, hours, mins, secs }
}
