Hooks.once("init", function () {
    CONFIG.DND5E.itemRarity.veryCommon = "very common";
});

Hooks.once('libChangelogsReady', function () {
    libChangelogs.register(
        "brodericks-compendium",
        "<ul>" +
        "<li>Update compatiblity for FoundryVTT v11.</li>" +
        "<li>Roll formulars in item descriptions are now clickable.</li>" +
        "<li>Update Plant Roll Tables to include the item images (if one exists).</li>" +
        "<li>Add missing plants to roll tables and remove duplicates and wrong categorized items.</li>" +
        "<li>Add new book &quot;Broderick's Compendium: Charms, Potions & Poisons&quot;.</li>" +
        "<li>Add new item &quot;Nine Herbs Charm&quot;.</li>" +
        "</ul>",
        "major"
    );
});
