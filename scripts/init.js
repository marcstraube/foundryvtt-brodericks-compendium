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
Hooks.once('libChangelogsReady', function () {
});

Hooks.once("init", function () {
    CONFIG.DND5E.itemRarity.veryCommon = "very common";
});
