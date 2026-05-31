GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

    event.create("decay_materials")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('decay_chamber', 'simple')
        .tiers([GTValues.UV, GTValues.UHV])
        .definition((tier, builder) => {
            return builder
                .recipeType('decay_materials')
                .workableTieredHullModel("gtceu:block/machines/polarizer")
        })

})