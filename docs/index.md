---
layout: home

hero:
  name: "Alpe"
  text: "Stats and tools"
  tagline: for Clash Royale and Squad Busters
  image:
    src: /alpe/assets/logo_alpe_4.png
    alt: Alpe
  actions:
    - theme: brand
      text: Clash Royale
      link: /cr/index
    - theme: brand
      text: Squad Busters
      link: /sb/index

features:
  - icon:
      src: /alpe/assets/appicon_sb_2cs.png
    title: SB Maps
    details: Find about the chests, boxes and structure of all the maps
    link: /sb/maps
  - icon:
      src: /alpe/assets/appicon_sb_2csbw.png
    title: SB Troops
    details: Compare all the different units to build the best squad
  - icon:
      src: /alpe/assets/appicon_sb_2csbw.png
    title: SB Enemies
    details: Stats for all the enemies and bosses you'll find
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>