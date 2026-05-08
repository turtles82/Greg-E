GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

  event
    .create("aeassembler")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("aeassembler", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("aeassembler")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("CCCCCC", "AAAAAA", "AAAAAA")
        .aisle("CCCCCC", "AFFFFA", "AAAAAA")
        .aisle("CCCCCC", "ABBBEA", "AGGGAA")
        .where("A", Predicates.blocks("chisel_chipped_integration:factory_slighly_rusty_plate"))
        .where("B", Predicates.blocks("minecraft:glass"))
        .where("C", Predicates.blocks("chisel_chipped_integration:factory_slighly_rusty_plate")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)))
        .where("E", Predicates.controller(Predicates.blocks(definition.get())))
        .where("F", Predicates.blocks("chisel_chipped_integration:technical_engineering_pipes_0")
                .or(Predicates.blocks("chisel_chipped_integration:technical_engineering_pipes_1"))
                .or(Predicates.blocks("chisel_chipped_integration:technical_engineering_pipes_2"))
                .or(Predicates.blocks("chisel_chipped_integration:technical_engineering_pipes_3")))
        .where("G", Predicates.blocks("chisel_chipped_integration:technical_fan"))
    .build())
    .workableCasingModel(
      'kubejs:block/chisel/platex',
      "gtceu:block/machines/circuit_assembler"
    );

});
