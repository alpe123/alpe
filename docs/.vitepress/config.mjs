import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link',
          { rel: 'icon', href: '/favicon.ico' },
          { rel: 'stylesheet', href: '../styles/styles.css' }
         ]
        ],
  lang: 'en-US',
  title: "Alpe",
  logo: "/logo_alpe_4.png",
  description: "Stats and tools",
  base: "/alpe/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo_alpe_9_c.png",
    siteTitle: "Alpe",
    search: {
      provider: 'local'
    },
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
            link: '/sb/troops',
            items: [
              { text: 'Info Cards', link: '/sb/troops_cards' },
              { text: 'Sorted by DPS', link: '/sb/troops_by_dps' },
              { text: 'Sorted by HP', link: '/sb/troops_by_hp' },
              { text: 'Fusion Multipliers', link: '/sb/troops_fusion_multipliers' }
            ]
          },
          { text: 'Monsters',
          link: '/sb/monsters',
          items: [
            { text: 'Small', link: '/sb/monsters_small.html' },
            { text: 'Medium', link: '/sb/monsters_medium.html' },
            { text: 'Big', link: '/sb/monsters_big.html' },
            { text: 'Bosses', link: '/sb/monsters_bosses.html' }
          ]
          },
          { text: 'More Stuff',
          link: '/sb/more_stuff',
          items: [
            { text: 'Chest Sizes', link: '/sb/chest_sizes.html' },
            { text: 'Chest Cycle', link: '/sb/chest_cycle.html' },
            { text: 'Chest Prices', link: '/sb/chest_prices.html' },
            { text: 'Mega Drop Chances', link: '/sb/mega_chances.html' },
            { text: 'General Tips', link: '/sb/tips.html' },
            { text: 'Additional Resources', link: '/sb/resources.html' }
          ]
          }
        ]
      },
      {
        text: 'Share on Twitter!',
        link: 'https://twitter.com/intent/tweet?text=Check%20out%20this%20unique%20site%20for%20%23SquadBusters!&url=https://alpe123.github.io/alpe/sb/'
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