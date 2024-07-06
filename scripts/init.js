Hooks.once("init", function () {
    CONFIG.DND5E.itemRarity.veryCommon = "very common";
});

const MODULE_ID = "brodericks-compendium";

Hooks.once("ready", async () => {
    if(game.modules.get("compendium-themer")?.active) {
        game.modules.get("compendium-themer").api.addModule(MODULE_ID, [
            {
                dataPack: `${MODULE_ID}.monsters`,
                colorText: `#136b00`,
                iconText: `fa-solid fa-ghost`,
                bannerImage: `modules/${MODULE_ID}/images/banner-monsters.webp`,
                backgroundColorText: `#D3B683`,
            },
            {
                dataPack: `${MODULE_ID}.plants`,
                colorText: `#136b00`,
                iconText: `fa-solid fa-hand-holding-seedling`,
                bannerImage: `modules/${MODULE_ID}/images/banner-plants.webp`,
                backgroundColorText: `#D3B683`,
            },
            {
                dataPack: `${MODULE_ID}.books`,
                colorText: `#136b00`,
                iconText: `fa-solid fa-book-section`,
                bannerImage: `modules/${MODULE_ID}/images/banner-books.webp`,
                backgroundColorText: `#D3B683`,
            },
            {
                dataPack: `${MODULE_ID}.planttables`,
                colorText: `#136b00`,
                iconText: `fa-solid fa-bag-seedling`,
                bannerImage: `modules/${MODULE_ID}/images/banner-planttables.webp`,
                backgroundColorText: `#D3B683`,
            },
        ]);
    }
});
