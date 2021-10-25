Hooks.once("init", function () {
    CONFIG.DND5E.itemRarity.veryCommon = "very common";
});

Hooks.once('libChangelogsReady', function () {
    libChangelogs.register(
        "brodericks-compendium",
        "<ul><li>Add first batch of images.</li><li>Relabel the item compendium to &quot;Broderick's Compendium: Plants and Fungi&quot;.</li></ul>",
        "minor"
    );
});
