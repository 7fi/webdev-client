<script setup lang="ts">
const LINKS = [
  { href: '/labs', id: 'wd-home-link', label: 'Home', match: (p: string) => p === '/labs' },
  { href: '/labs/lab1', id: 'wd-lab1-link', label: 'Lab 1', match: (p: string) => p.endsWith('/lab1') || p.includes('/lab1/') },
  { href: '/labs/lab2', id: 'wd-lab2-link', label: 'Lab 2', match: (p: string) => p.includes('/lab2') },
  { href: '/labs/lab3', id: 'wd-lab3-link', label: 'Lab 3', match: (p: string) => p.includes('/lab3') },
  { href: '/labs/lab4', id: 'wd-lab4-link', label: 'Lab 4', match: (p: string) => p.includes('/lab4') },
  { href: '/labs/lab5', id: 'wd-lab5-link', label: 'Lab 5', match: (p: string) => p.includes('/lab5') },
  { href: '/book/ch1', id: 'wd-toc-book-link', label: 'Chapter 1', match: (p: string) => p.startsWith('/book/ch1') },
  { href: '/', id: 'wd-kambaz-link', label: 'Kambaz', match: () => false },
  { href: 'https://kambaz.dev/book/ch3', id: 'wd-book-ch3-link', label: 'Book Ch3', match: () => false },
] as const

const activeStyle = {
  backgroundColor: '#2563eb',
  color: 'white',
  borderRadius: '4px',
  padding: '2px 8px',
  textDecoration: 'none',
}

const route = useRoute()
const links = computed(() => LINKS.map((link) => ({ ...link, active: link.match(route.path) })))
</script>
<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :id="link.id"
        :to="link.href"
        :style="link.active ? activeStyle : undefined"
        :aria-current="link.active ? 'page' : undefined"
      >
        {{ link.label }}
      </NuxtLink>
    </li>
    <li><a href="https://carteranderson.dev" target="_blank" rel="noreferrer">Carter</a></li>
  </ul>
</template>
