---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Alpe
  text: Squad Up!
  tagline: with unique stats for your battles.
  image:
    src: /Squad_Logo_Original.png
    alt: Alpe

features:
  - icon:
      src: /appicon_sb_2cs.png
    title: Maps
    details: Find about the chests, boxes and structure of all the maps
    link: /sb/maps
  - icon:
      src: /appicon_sb_2cs.png
    title: Troops
    details: Compare all the different units to build the best squad
    link: /sb/troops
  - icon:
      src: /appicon_sb_2cs.png
    title: Monsters
    details: Stats for all the enemies and bosses you'll find
    link: /sb/monsters
  - icon:
      src: /appicon_sb_2cs.png
    title: Chest Cycle
    details: How to know the rarity of your next chest
    link: /sb/chest_cycle
  - icon:
      src: /appicon_sb_2cs.png
    title: Chest Sizes
    details: Basic information about chest sizes and bonus taps
    link: /sb/chest_sizes
  - icon:
      src: /appicon_sb_2cs.png
    title: World Progression
    details: Overview of the Squad Level progression based on Portal Energy
    link: /sb/progression_worlds
  - icon:
      src: /appicon_sb_2cs.png
    title: Mega Drop Chances
    details: Probability to get Mega troops from a chest during battles
    link: /sb/mega_chances
  - icon:
      src: /appicon_sb_2cs.png
    title: General Tips
    details: Do you know all of them? 
    link: /sb/tips
  - icon:
      src: /appicon_sb_2cs.png
    title: Additional Resources
    details: Several links, tools and resources to external pages
    link: /sb/resources
---

<style>
:root {

  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(70deg, #b71684 10%, #bdf4f8);

  --vp-home-hero-image-background-image: linear-gradient(10deg, #b71684 50%, #bdf4f8 20%);
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