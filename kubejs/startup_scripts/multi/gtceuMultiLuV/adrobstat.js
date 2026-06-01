GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("adrobstat")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(12, 3, 6, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.MIXER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("adrobstat", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("adrobstat")
    .appearanceBlock(GCYMBlocks.CASING_VIBRATION_SAFE)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("blllllllllllb", "accccccccccca", "accccccccccca", "accccccccccca", "accccccccccca", "accccccccccca", "baaaaaaaaaaab")
        .aisle("ldddddddddddl", "cbbbbbbbbbbbc", "cbbbbbbbbbbbc", "cbbbbbbbbbbbc", "cbbbbbbbbbbbc", "cbbbbbbbbbbbc", "accccccccccca")
        .aisle("ldddddddddddl", "cbbbebbbebbbc", "cbbbebbbebbbc", "cdddedddedddc", "cbbbbbbbbbbbc", "cbbbbbbbbbbbc", "accccccccccca")
        .aisle("ldddddddddddl", "cfgbbbgbbbgfc", "cfhghghghghfc", "cfiijiiijiifc", "cdddddddddddc", "cbbbbbbbbbbbc", "accccccccccca")
        .aisle("ldddddddddddl", "cbbbebbbebbbc", "cbbbebbbebbbc", "cdddedddedddc", "cbbbbbbbbbbbc", "cbbbbbbbbbbbc", "accccccccccca")
        .aisle("ldddddddddddl", "cbbbbbbbbbbbc", "cbbbbbbbbbbbc", "cbbbbbbbbbbbc", "cbbbbbbbbbbbc", "cbbbbbbbbbbbc", "accccccccccca")
        .aisle("blllllklllllb", "accccccccccca", "accccccccccca", "accccccccccca", "accccccccccca", "accccccccccca", "baaaaaaaaaaab")

        .where("a", Predicates.blocks("gtceu:large_scale_assembler_casing"))
        .where("b", Predicates.any())
        .where("c", Predicates.blocks("gtceu:laminated_glass"))
        .where("d", Predicates.blocks("gtceu:solid_machine_casing"))
        .where("e", Predicates.blocks("gtceu:steel_pipe_casing"))
        .where("f", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
        .where("g", Predicates.blocks("gtceu:clean_machine_casing"))
        .where("h", Predicates.blocks("gtceu:stainless_steel_gearbox"))
        .where("i", Predicates.blocks("gtceu:assembly_line_grating"))
        .where("j", Predicates.blocks("gtceu:steel_gearbox"))
        .where('k', Predicates.controller(Predicates.blocks(definition.get())))
        .where('l', Predicates.blocks("gtceu:large_scale_assembler_casing")
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(4).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/large_scale_assembling_casing",
      "gtceu:block/machines/assembler"
    );
});