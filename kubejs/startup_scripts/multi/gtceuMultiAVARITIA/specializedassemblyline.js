GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

  /*
  event
    .create("specializedassemblyline")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(15, 1, 3, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("specializedassemblyline", "multiblock")
    .rotationState(RotationState.ALL)
    .recipeType('specializedassemblyline')
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("aabbaIabbaa", "abcccdcccba", "bccccdccccb", "bccccdccccb", "bccccdccccb", "abcccdcccba", "aabbaIabbaa")
        .aisle("abaaaIaaaba", "beeeeeeeeeb", "ceeeeeeeeec", "ceeeedeeeec", "ceeeeeeeeec", "beeeeeeeeeb", "abaaaIaaaba")
        .aisle("baaaaIaaaab", "ceeeeeeeeec", "ceeeeeeeeec", "dfffffffffd", "ceeeeeeeeec", "ceeeeeeeeec", "baaaaIaaaab")
        .aisle("IIIIIIIIIII", "deeeedeeeed", "dfffffffffd", "ggggggggggg", "dfffffffffd", "deeeedeeeed", "IIIIIIIIIII")
        .aisle("baaaaIaaaab", "ceeeeeeeeec", "ceeeeeeeeec", "dfffffffffd", "ceeeeeeeeec", "ceeeeeeeeec", "baaaaIaaaab")
        .aisle("abaaaIaaaba", "beeeeeeeeeb", "ceeeeeeeeec", "ceeeedeeeec", "ceeeeeeeeec", "beeeeeeeeeb", "abaaaIaaaba")
        .aisle("aabbaJabbaa", "abcccdcccba", "bccccdccccb", "bccccdccccb", "bccccdccccb", "abcccdcccba", "aabbaIabbaa")
        .where("a", Predicates.blocks("gtceu:stress_proof_casing"))
        .where("b", Predicates.blocks("gtceu:solid_machine_casing"))
        .where("c", Predicates.blocks("gtceu:laminated_glass"))
        .where("d", Predicates.blocks("gtceu:high_temperature_smelting_casing"))
        .where("e", Predicates.any())
        .where("f", Predicates.blocks("gtceu:assembly_line_grating"))
        .where("g", Predicates.blocks("gtceu:assembly_line_unit"))
        .where("J", Predicates.controller(Predicates.blocks(definition.get())))
        .where("I", Predicates.blocks("gtceu:high_temperature_smelting_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))
              )
    .build())
    .workableCasingModel(
      'gtceu:block/casings/gcym/high_temperature_smelting_casing',
      'gtceu:block/multiblock/distillation_tower'
    );
    */
});
