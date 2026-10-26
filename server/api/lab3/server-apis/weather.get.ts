const WEATHER_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=42.34&longitude=-71.09' +
  '&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph'

type Weather = { current: { time: string; temperature_2m: number; wind_speed_10m: number } }

// Successful responses are reused for 30 minutes; failures throw and aren't cached.
const getWeather = defineCachedFunction(() => $fetch<Weather>(WEATHER_URL), {
  name: 'lab3-weather',
  maxAge: 1800,
})

export default defineEventHandler(async () => {
  try {
    return { weather: await getWeather(), error: null }
  } catch (err) {
    return { weather: null, error: err instanceof Error ? err.message : 'unknown error' }
  }
})
