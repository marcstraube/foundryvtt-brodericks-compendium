# Broderick's Compendium: Plants and Fungi Across the Realm

![All Releases Download Count](https://img.shields.io/github/downloads/marcstraube/foundryvtt-brodericks-compendium/module.zip?color=2b82fc&label=%20Downloads%20%28all%29&style=for-the-badge)
![Latest Release Download Count](https://img.shields.io/github/downloads/marcstraube/foundryvtt-brodericks-compendium/latest/module.zip?label=Downloads%20%28latest%20release%29&style=for-the-badge)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/marcstraube/foundryvtt-brodericks-compendium?label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge)
![Foundry Core Minimal Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmarcstraube%2Ffoundryvtt-brodericks-compendium%2Fmaster%2Fmodule.json&label=Foundry%20Version&query=$.compatibility.minimum&colorB=orange&style=for-the-badge)
[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fbrodericks-compendium&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=brodericks-compendium)
[![ko-fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/J3J1FVK91)
[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/NerdyByNatureDev)

A module for FoundryVTT that includes over 600 fantasy plants from Broderick's Compendium: Plants and Fungi Across the
Realm (version 2.0)
(Source: <https://www.reddit.com/r/DnD/comments/83oupp/brodericks_compendium_plants_and_fungi_across_the/>).
I did not create any of the plants. This addon includes rolltables for the following regions as per the source material:

* Arctic
* City
* Coastal
* Desert
* Forest
* Jungle
* Mountain
* Ocean
* Plains
* River
* Swamp
* Underdark & Cave

Roll tables and plants are included as compendiums. Open up the roll table and select the region type your party is
searching in. Results will be added to a "Found Plants" loot actor for distribution to the players.

## Wait a minute... I've already seen this!

This module is a fork of the
wonderful [FoundryVTT-FantasyPlants](https://github.com/KyleBishop/FoundryVTT-FantasyPlants) module by Kyle Bishop, but
has since received a ton of updates:

* Cleaned-up CSS on item descriptions.
* Picture or icon for every plant.
* Every plant description contains the biomes where to find it.
* Some already legendary plants get an additional info, if they are "Exceedingly Rare".
* Rebalanced roll tables.
* Compatibility for the new rarity setting, which got introduced by the DND5E 1.4.0 system.
* and more

## Installation

**Method 1:**

* Start Foundry and head to the Add-on Modules tab.
* Click Install Module.
* Search for "Broderick's Compendium"
* Click the install button when it comes up.

**Method 2:**

* Start Foundry and head to the Add-on Modules tab.
* Click Install Module.
* Paste the following link into the "Manifest URL" field at the
  bottom: <https://github.com/marcstraube/foundryvtt-brodericks-compendium/releases/latest/download/module.json>
* Click Install

## Optional Dependencies

Install [Better Rolltables](https://github.com/ultrakorne/better-rolltables)
and [Loot Sheet NPC 5E](https://github.com/jopeek/fvtt-loot-sheet-npc-5e) for enhanced functionality.

## Suggested Use

I currently use this in my campaign to allow players to forage. If you use the included roll tables for the region(s)
they are in, you can select the Generate Loot button on the table, it will create a new instance of the item on the
Actor "Found Plants" in the Actors tab (it will create that loot actor if you don't have it already).

I also
have [Forien's Unidentified Items](https://github.com/League-of-Foundry-Developers/foundryvtt-forien-unidentified-items/)
add-on and right-click the new plant and mystify before letting the players see it/access it. You can save a copy to
your items for reference if you want.

## What's to come?

* <del>I hope, that someday I am able to add images (only free-to-use) to every plant in the compendium.</del> Replace
  icons with images (AI image generation is a godsent for this!)
* Add seasons and prices to the plants.
* <del>Add a second compendium with potions and mixtures made from the plants (and their prices).</del>
* Where needed, add more information on the appearance of the plants.
* Add more plants, monsters and potions.

If you're interested to help, don't hesitate to create a pull request!
