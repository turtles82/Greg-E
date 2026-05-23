GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

    event.create("astrophage_charging")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(1, 0, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MAGNET, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

    event.create("soul_binding")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(3, 3, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MAGNET, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('astrophage_charger', 'simple')
        .tiers([GTValues.UHV])
        .definition((tier, builder) => {
            return builder
                .recipeType('astrophage_charging')
                .workableTieredHullModel("gtceu:block/machines/polarizer")
        })

    event.create('soul_binder', 'simple')
        .tiers([GTValues.HV])
        .definition((tier, builder) => {
            return builder
                .recipeType('soul_binding')
                .workableTieredHullModel("gtceu:block/machines/polarizer")
        })

})