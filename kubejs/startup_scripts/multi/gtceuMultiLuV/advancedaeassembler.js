GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("advancedaeassembler")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(9, 3, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.MIXER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("advancedaeassembler", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("advancedaeassembler")
    .appearanceBlock(GCYMBlocks.CASING_VIBRATION_SAFE)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("iiiiiiiii", "bcddcddcb", "bcddcddcb", "bcddcddcb", "aaaaaaaaa")
        .aisle("iaaaaaaai", "eeeeeeeee", "eeffeffee", "eeeeeeeee", "aaaaaaaaa")
        .aisle("iaaaaaaai", "eeeeeeeee", "eggggggge", "eeeeeeeee", "aaaaaaaaa")
        .aisle("iaaaaaaai", "eeeeeeeee", "eeffeffee", "eeeeeeeee", "aaaaaaaaa")
        .aisle("iiiihiiii", "bcddcddcb", "bcddcddcb", "bcddcddcb", "aaaaaaaaa")
        .where("a", Predicates.blocks("gtceu:nonconducting_casing"))
        .where("b", Predicates.blocks("gtceu:sturdy_machine_casing"))
        .where("c", Predicates.blocks("gtceu:stainless_steel_frame"))
        .where("d", Predicates.blocks("minecraft:air"))
        .where("e", Predicates.blocks("gtceu:large_scale_assembler_casing"))
        .where("f", Predicates.blocks("ae2:quartz_vibrant_glass"))
        .where("g", Predicates.blocks("gtceu:steel_gearbox"))
        .where('h', Predicates.controller(Predicates.blocks(definition.get())))
        .where('i', Predicates.blocks('gtceu:nonconducting_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/nonconducting_casing",
      "gtceu:block/machines/circuit_assembler"
    );
});