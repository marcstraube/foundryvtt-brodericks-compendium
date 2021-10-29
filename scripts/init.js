Hooks.once("init", function () {
    CONFIG.DND5E.itemRarity.veryCommon = "very common";
});

Hooks.once('libChangelogsReady', function () {
    libChangelogs.register(
        "brodericks-compendium",
        "<ul><li>Add compendium of plant books: &quot;Broderick's Compendium: Books&quot;.</li></ul>",
        "minor"
    );
});
