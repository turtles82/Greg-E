GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("sednasampler")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("sednasampler", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeTypes("sednasampler")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("gggggggggg", "aeeeeabbba", "aeeeeabbba", "aeeeeabbba", "aaaaaaaaaa")
        .aisle("gbbbbbbbbg", "efffcbcccb", "effccdcccb", "efcccecccb", "abbbbbbbba")
        .aisle("gbbbbbbbbg", "efffcbcccb", "eccccecccb", "eccccecccb", "abbbbbbbba")
        .aisle("gbbbbbbbbg", "efcccbcccb", "eccccdcccb", "eccccecccb", "abbbbbbbba")
        .aisle("ggggggghgg", "aeeeeaccca", "aeeeeaccca", "aeeeeaccca", "aaaaaaaaaa")
        .where("a", Predicates.blocks("gtceu:stress_proof_casing"))
        .where("b", Predicates.blocks("gtceu:nonconducting_casing"))
        .where("c", Predicates.any())
        .where("d", Predicates.blocks("gtceu:ptfe_pipe_casing"))
        .where("e", Predicates.blocks("gtceu:tempered_glass"))
        .where("f", Predicates.blocks("ad_extendra:sedna_stone"))
        .where("g", Predicates.blocks('gtceu:stress_proof_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("h", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/stress_proof_casing",
      "gtceu:block/multiblock/distillation_tower"
    );
});