Hooks.once("init", function () {
    CONFIG.DND5E.itemRarity.veryCommon = "very common";
});

Hooks.once('libChangelogsReady', function () {
    libChangelogs.register(
        "brodericks-compendium",
        "<ul>" +
        "<li>Add compendium with plant books sorted by biomes: &quot;Broderick's Compendium: Books&quot;.</li>" +
        "<li>Update compatibleCoreVersion to FoundryVtt v9.</li>" +
        "<li>Make &quot;Better Rolltables&quot; and &quot;Loot Sheet NPC 5E&quot; optional.</li>" +
        "</ul>",
        "minor"
    );
});
