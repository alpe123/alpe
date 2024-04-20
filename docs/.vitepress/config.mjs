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
        items: [
          { text: 'Maps', link: '/sb/maps' },
          { text: 'Troops', link: '/sb_troops' },
          { text: 'Enemies', link: '/sb_enemies' }
        ]
      },
      {
        text: 'Clash Royale',
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

