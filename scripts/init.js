Hooks.once('libChangelogsReady', function () {
    libChangelogs.register(
        "brodericks-compendium",
        "<ul>" +
        "<li>Big image update: All plants and monsters now use their own image or icon.</li>" +
        "<li>Fix CR of Marsh Maw monster.</li>" +
        "<li>Create new compendium for plant and fungi based monsters.</li>" +
        "<li>Update desriptions of Covadish, Dagmather and Gefnul to give more information on their appearance.</li>" +
        "<li>Add pre-defined folder structure for compendiums (FoundryVTT >= 11).</li>" +
        "<li>Add banner images for compendiums (FoundryVTT >= 11)</li>" +
        "</ul>",
        "major"
    );
});

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