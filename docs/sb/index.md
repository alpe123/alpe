---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Alpe"
  text: "Squad Up!"
  tagline: "with unique stats for your battles."
  image:
    src: https://eu-north-1.console.aws.amazon.com/s3/object/alpe1?region=eu-north-1&bucketType=general&prefix=assets/Squad_Logo_Original.png
    alt: Alpe

features:
  - icon:
      src: https://eu-north-1.console.aws.amazon.com/s3/object/alpe1?region=eu-north-1&bucketType=general&prefix=assets/appicon_sb_2cs.png
    title: SB Maps
    details: Find about the chests, boxes and structure of all the maps
    link: /sb/maps
  - icon:
      src: https://eu-north-1.console.aws.amazon.com/s3/object/alpe1?region=eu-north-1&bucketType=general&prefix=assets/appicon_sb_2csbw.png
    title: SB Troops
    details: Compare all the different units to build the best squad
  - icon:
      src: https://eu-north-1.console.aws.amazon.com/s3/object/alpe1?region=eu-north-1&bucketType=general&prefix=assets/appicon_sb_2csbw.png
    title: SB Enemies
    details: Stats for all the enemies and bosses you'll find
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