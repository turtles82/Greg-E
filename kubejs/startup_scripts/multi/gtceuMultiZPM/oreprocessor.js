GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("oreprocessor")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("oreprocessor", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("oreprocessor")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("iiiii", "bcccb", "bcccb", "bbbbb", "aaaaa", "bbbbb", "bcccb", "bcccb", "ggggg")
        .aisle("idddi", "ceeec", "ceeec", "beeeb", "afffa", "beeeb", "ceeec", "ceeec", "gbbbg")
        .aisle("idddi", "ceeec", "ceeec", "beeeb", "afffa", "beeeb", "ceeec", "ceeec", "gbbbg")
        .aisle("idddi", "ceeec", "ceeec", "beeeb", "afffa", "beeeb", "ceeec", "ceeec", "gbbbg")
        .aisle("iijii", "bcccb", "bcccb", "bbbbb", "aaaaa", "bbbbb", "bcccb", "bcccb", "ggggg")
        .where("a", Predicates.blocks("gtceu:high_temperature_smelting_casing"))
        .where("b", Predicates.blocks("gtceu:secure_maceration_casing"))
        .where("c", Predicates.blocks("gtceu:tempered_glass"))
        .where("d", Predicates.blocks("gtceu:tungstensteel_gearbox"))
        .where("e", Predicates.blocks("minecraft:air"))
        .where("f", Predicates.blocks("gtceu:crushing_wheels"))
        .where("g", Predicates.blocks('gtceu:high_temperature_smelting_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2)) 
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1)))
        .where("i", Predicates.blocks('gtceu:high_temperature_smelting_casing')
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))  
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("j", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/high_temperature_smelting_casing",
      "gtceu:block/multiblock/distillation_tower"
    );
});