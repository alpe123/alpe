import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lang: 'en-US',
  title: "Alpe",
  description: "Stats and tools",
  base: "/alpe/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'SB', link: '/sb/' },
      { text: 'CR', link: '/cr/' }
    ],

    sidebar: [
      {
        text: 'Squad Busters',
        link: '/sb/',
        items: [
          { text: 'Maps',
            link: '/sb/maps',
            items: [
              { text: 'Green World', link: '/sb/maps_w1' },
              { text: 'Desert World', link: '/sb/maps_w2' },
              { text: 'Royal World', link: '/sb/maps_w3' },
              { text: 'Beach World', link: '/sb/maps_w4' },
              { text: 'Green World (Endgame)', link: '/sb/maps_w1e' }
            ]
          },
          { text: 'Troops',
            link: '/sb/troops_cards'},
          { text: 'Enemies (soon)'}
        ]
      },
      {
        text: 'Clash Royale (soon)',
        link: '/cr/',
        items: []
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/Alpe123_CR' },
      // { icon: 'reddit', link: 'https://www.reddit.com/user/alpe123/' },
      { icon: 'github', link: 'https://github.com/alpe123' }
    ]
  }
})

function getImageUrl(path) {
  return new URL(`../assets/${path}`, import.meta.url).href
}