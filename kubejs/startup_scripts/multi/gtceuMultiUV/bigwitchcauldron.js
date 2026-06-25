GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("bigwitchcauldron")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(9, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("bigwitchcauldron", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("bigwitchcauldron")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle(' AAAAA ', ' HHHHH ', ' BBBBB ', ' BBBBB ', '  BBB  ')
        .aisle(' AAAAA ', ' HHHHH ', ' B   B ', 'CB   BC', ' B   B ')
        .aisle(' AAAAA ', ' HHHHH ', ' B   B ', 'CB   BC', ' B   B ')
        .aisle(' AAAAA ', ' HHHHH ', ' B   B ', 'CB   BC', ' B   B ')
        .aisle(' AAAAA ', ' HHIHH ', ' BBBBB ', ' BBBBB ', '  BBB  ')
        .where("A", Predicates.blocks('minecraft:campfire'))
        .where("B", Predicates.blocks('gtceu:nonconducting_casing'))
        .where("C", Predicates.blocks('minecraft:oak_wood'))
        .where("H", Predicates.blocks('gtceu:nonconducting_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("I", Predicates.controller(Predicates.blocks(definition.get())))
        .where(" ", Predicates.any())
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/nonconducting_casing",
      "gtceu:block/multiblock/distillation_tower"
    );
});