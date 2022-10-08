Hooks.once("init", function () {
    CONFIG.DND5E.itemRarity.veryCommon = "very common";
});

Hooks.once('libChangelogsReady', function () {
    libChangelogs.register(
        "brodericks-compendium",
        "<ul>" +
        "<li>Add support for <a href='https://foundryvtt.com/packages/bug-reporter' target='_blank' style='font-style: bold;'>Bug Reporter</a> module.</li>" +
        "</ul>",
        "minor"
    );
});
