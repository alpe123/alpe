# Chest Cycle

::: warning

**The information shown in this page is unconfirmed.** The cycle below may have inconsistencies or not even active in the current build of the game. Additional information and context in this page were written under the assumption that the chest cycle is correct, but again, that might not be the case.

If you track your rewards thoroughly and reach any conclusions, let me know; I'll be doing the same.

This warning will be removed if the information is confirmed.
:::

Similar to Clash Royale, the rarity of chests that you earn with battles isn't random. It's predefined by a cycle that is consistent for every player, which ensures a balanced and consistent progression for all players.

## Overview

The chest cycle has a length of 60 chests, and the distribution of rarities is:

- 36 Common (60%)
- 18 Rare (30%)
- 6 Epic (10%)

## Cycle

<style>
    .heatmapChestCycle {
        width: 100%;
        text-align: left;
    }
    .heatmapChestCycle th {
        word-wrap: break-word;
        text-align: left;
        color: white;
        background: #202127;
    }
    .heatmapChestCycle tr:nth-child(1) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(2) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(3) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(4) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(5) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(6) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(7) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(8) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(9) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(10) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(11) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(12) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(13) { background: rgba(156, 1, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(14) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(15) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(16) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(17) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(18) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(19) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(20) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(21) { background: rgba(156, 1, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(22) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(23) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(24) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(25) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(26) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(27) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(28) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(29) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(30) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(31) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(32) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(33) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(34) { background: rgba(156, 1, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(35) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(36) { background: rgba(156, 1, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(37) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(38) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(39) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(40) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(41) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(42) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(43) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(44) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(45) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(46) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(47) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(48) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(49) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(50) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(51) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(52) { background: rgba(156, 1, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(53) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(54) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(55) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(56) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(57) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(58) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(59) { background: rgba(156, 1, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(60) { background: rgba(255, 179, 0, 0.30); }
</style>

<div class="heatmapChestCycle">

| Index | Icon | Rarity | 
| -- | -- | -- |
| 1 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 2 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 3 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 4 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 5 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 6 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 7 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 8 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 9 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 10 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 11 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 12 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 13 | <img src="../assets/chest_icon_epic.png"  width="40" height="40" /> | Epic |
| 14 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 15 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 16 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 17 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 18 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 19 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 20 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 21 | <img src="../assets/chest_icon_epic.png"  width="40" height="40" /> | Epic |
| 22 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 23 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 24 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 25 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 26 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 27 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 28 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 29 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 30 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 31 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 32 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 33 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 34 | <img src="../assets/chest_icon_epic.png"  width="40" height="40" /> | Epic |
| 35 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 36 | <img src="../assets/chest_icon_epic.png"  width="40" height="40" /> | Epic |
| 37 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 38 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 39 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 40 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 41 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 42 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 43 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 44 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 45 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 46 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 47 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 48 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 49 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 50 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 51 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 52 | <img src="../assets/chest_icon_epic.png"  width="40" height="40" /> | Epic |
| 53 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 54 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 55 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 56 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 57 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 58 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 59 | <img src="../assets/chest_icon_epic.png"  width="40" height="40" /> | Epic |
| 60 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |

</div>

## Finding your cycle

Knowing the rarity of your next chest isn't going to make a big difference, but it can be helpful to play as well as possible if you know your next chest will be Epic... or to be prepared with a 10-streak!

To do that, you'll want to pay attention to some unusual sequences of chests. The main ones are Epic chests and back-to-back Rares. If you keep track of the 3 chests that followed any of those, you'll be able to tell with certainty your position in the cycle.