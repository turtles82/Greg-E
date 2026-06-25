GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("czochralskipull")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("czochralskipull", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeTypes("czochralskipull")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("abbba", "aggga", "accca", "accca", "bbbbb", "bbbbb", "bbbbb")
        .aisle("bcccb", "gbbbg", "cbbbc", "cbbbc", "bbbbb", "bbbbb", "bbbbb")
        .aisle("bcccb", "gbbbg", "cbdbc", "cbebc", "fbebf", "fbebf", "bfffb")
        .aisle("bcccb", "gbbbg", "cbbbc", "cbbbc", "bbbbb", "bbbbb", "bbbbb")
        .aisle("abbba", "aghga", "accca", "accca", "bbbbb", "bbbbb", "bbbbb")
        .where("a", Predicates.blocks("gtceu:hastelloy_c_276_frame"))
        .where("b", Predicates.any())
        .where("c", Predicates.blocks("gtceu:watertight_casing"))
        .where("d", Predicates.blocks("gtceu:assembly_line_unit"))
        .where("e", Predicates.blocks("gtceu:ultimet_frame"))
        .where("f", Predicates.blocks("gtceu:nonconducting_casing"))
        .where("g", Predicates.blocks('gtceu:watertight_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))   
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("h", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/watertight_casing",
      "gtceu:block/multiblock/distillation_tower"
    );
});