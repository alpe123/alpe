import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link',
          { rel: 'icon', href: '../favicon.ico' },
          { rel: 'stylesheet', href: '../styles/styles.css' }
         ]
        ],
  lang: 'en-US',
  title: "Alpe",
  logo: "../logo_alpe_4.png",
  description: "Stats and tools",
  base: "/squad/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "../logo_alpe_9_c.png",
    siteTitle: "Alpe",
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: 'https://squad.royaleapi.com/' },
      { text: 'SB', link: 'https://squad.royaleapi.com/' },
      { text: 'CR', link: 'https://royaleapi.com/' }
    ],

    sidebar: [
      {
        text: 'Squad Busters',
        link: 'https://squad.royaleapi.com/',
        collapsed: true,
        items: [
          { text: 'Maps',
            link: 'https://squad.royaleapi.com/maps.html',
            collapsed: true,
            items: [
              { text: 'Green World', link: 'https://squad.royaleapi.com/maps/w1.html' },
              { text: 'Desert World', link: 'https://squad.royaleapi.com/maps/w2.html' },
              { text: 'Royal World', link: 'https://squad.royaleapi.com/maps/w3.html' },
              { text: 'Beach World', link: 'https://squad.royaleapi.com/maps/w4.html' },
              { text: 'Green World (Endgame)', link: 'https://squad.royaleapi.com/maps/w1e.html' }
            ]
          },
          { text: 'Troops',
            link: '/sb/troops',
            collapsed: true,
            items: [
              { text: 'Info Cards', link: 'https://squad.royaleapi.com/troops/cards.html' },
              { text: 'Sorted by DPS', link: 'https://squad.royaleapi.com/troops/by_dps.html' },
              { text: 'Sorted by HP', link: 'https://squad.royaleapi.com/troops/by_hp.html' },
              { text: 'DPS vs HP', link: 'https://squad.royaleapi.com/troops/chart_dpsvshp.html' },
              { text: 'Fusion Stats', link: 'https://squad.royaleapi.com/troops/fusions.html' },
              { text: 'Fusion Multipliers', link: 'https://squad.royaleapi.com/troops/fusion_multipliers.html' }
            ]
          },
          { text: 'Monsters',
            link: '/sb/monsters',
            collapsed: true,
            items: [
              { text: 'Small', link: 'https://squad.royaleapi.com/monsters/mall.html' },
              { text: 'Medium', link: 'https://squad.royaleapi.com/monsters/medium.html' },
              { text: 'Big', link: 'https://squad.royaleapi.com/monsters/big.html' },
              { text: 'Bosses', link: 'https://squad.royaleapi.com/monsters/bosses.html' },
              { text: 'All', link: 'https://squad.royaleapi.com/monsters/all.html' }
            ]
          },
          { text: 'More Stuff',
            link: '/sb/more_stuff',
            collapsed: false,
            items: [
              { text: 'Chest Cycle', link: 'https://squad.royaleapi.com/chests/cycle.html' },
              { text: 'Chest Sizes', link: 'https://squad.royaleapi.com/chests/sizes.html' },
              { text: 'Chest Prices', link: 'https://squad.royaleapi.com/chests/prices.html' },
              { text: 'World Progression', link: 'https://squad.royaleapi.com/other/progression_worlds.html' },
              { text: 'Mega Drop Chances', link: 'https://squad.royaleapi.com/other/mega_chances.html' },
              { text: 'General Tips', link: 'https://squad.royaleapi.com/other/tips.html' },
              { text: 'Additional Resources', link: 'https://squad.royaleapi.com/other/resources.html' }
            ]
          }
        ]
      },
      {
        text: '<a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20unique%20site%20for%20%23SquadBusters!&url=https://alpe123.github.io/alpe/sb/" target="_blank"> <img src="../share_x_2.png" /> </a>',
      },
      {
        text: '<a href="https://link.squadbusters.com/supportcreator/en/?code=ROYALEAPI" target="_blank"> <img src="../creator_code_2.png" /> </a>'
      },
      {
        text: '<a href="https://twitter.com/intent/user?user_id=872478339965038594" target="_blank"> <img src="../follow_alpe_2.png" /> </a>'
      }
    ],
    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/Alpe123_CR' },
      // { icon: 'reddit', link: 'https://www.reddit.com/user/alpe123/' },
      { icon: 'github', link: 'https://github.com/alpe123' }
    ],
    footer: {
      message: '<a href="https://supercell.com/en/fan-content-policy/">This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it.</a>',
      copyright: 'Copyright © 2024 Álvaro Peña. All rights reserved.'
    }
  }
})

function getImageUrl(path) {
  return new URL(`../assets/${path}`, import.meta.url).href
}