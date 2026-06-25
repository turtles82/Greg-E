GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("bacteriabreeder")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(2, 3, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("bacteriabreedercycle")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(2, 3, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("bacteriabreeder", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeTypes(["bacteriabreeder", "bacteriabreedercycle"])
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('HHHHHHH', 'ABBBBBA', 'ABBBBBA', 'ABBBBBA', 'ABBBBBA', 'AAAAAAA')
        .aisle('HGGGGGH', 'B     B', 'B     B', 'B     B', 'B     B', 'AEEEEEA')
        .aisle('HGGGGGH', 'B C C B', 'B C C B', 'B C C B', 'B C C B', 'AECECEA')
        .aisle('HGGGGGH', 'B  D  B', 'B  D  B', 'B  D  B', 'B  D  B', 'AEEDEEA')
        .aisle('HGGGGGH', 'B C C B', 'B C C B', 'B C C B', 'B C C B', 'AECECEA')
        .aisle('HGGGGGH', 'B     B', 'B     B', 'B     B', 'B     B', 'AEEEEEA')
        .aisle('HHHIHHH', 'ABBBBBA', 'ABBBBBA', 'ABBBBBA', 'ABBBBBA', 'AAAAAAA')
        .where("A", Predicates.blocks('gtceu:reaction_safe_mixing_casing'))
        .where("B", Predicates.blocks('gtceu:tempered_glass'))
        .where("C", Predicates.blocks('gregecore:ptfe_engine_intake'))
        .where("D", Predicates.blocks('gtceu:ptfe_pipe_casing'))
        .where("E", Predicates.blocks('gtceu:steel_turbine_casing'))
        .where("F", Predicates.blocks('gregecore:ptfe_firebox_casing'))
        .where("G", Predicates.blocks('gtceu:robust_machine_casing'))
        .where("H", Predicates.blocks('gtceu:reaction_safe_mixing_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))   
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("I", Predicates.controller(Predicates.blocks(definition.get())))
        .where(" ", Predicates.any())
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/reaction_safe_mixing_casing",
      "gtceu:block/multiblock/distillation_tower"
    );
});