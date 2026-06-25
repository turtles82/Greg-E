GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("specializedcrystallizer")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.MIXER);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("specializedcrystallizer", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("specializedcrystallizer")
    .appearanceBlock(GCYMBlocks.CASING_VIBRATION_SAFE)
    .recipeModifier(GTRecipeModifiers.OC_PERFECT)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("aiiia", "accca", "accca", "accca", "accca", "accca", "aaaaa")
        .aisle("ibbbi", "cdddc", "cdddc", "ccccc", "cdddc", "cdddc", "afffa")
        .aisle("ibbbi", "cdgdc", "cdgdc", "ccgcc", "cdgdc", "cdgdc", "afgfa")
        .aisle("ibbbi", "cdddc", "cdddc", "ccccc", "cdddc", "cdddc", "afffa")
        .aisle("aihia", "aeeea", "aeeea", "accca", "aeeea", "aeeea", "aaaaa")
        .where("a", Predicates.blocks("gtceu:tungstensteel_turbine_casing"))
        .where("b", Predicates.blocks("gtceu:tungstensteel_firebox_casing"))
        .where("c", Predicates.blocks("gtceu:robust_machine_casing"))
        .where("d", Predicates.any())
        .where("e", Predicates.blocks("gtceu:tempered_glass"))
        .where("f", Predicates.blocks("gtceu:tungstensteel_gearbox"))
        .where("g", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
        .where('h', Predicates.controller(Predicates.blocks(definition.get())))
        .where('i', Predicates.blocks('gtceu:tungstensteel_firebox_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1)))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/firebox/machine_casing_firebox_tungstensteel",
      "gtceu:block/multiblock/distillation_tower"
    );
});