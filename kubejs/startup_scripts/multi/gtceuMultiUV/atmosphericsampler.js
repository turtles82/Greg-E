GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("atmosphericsampler")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("atmosphericsampler", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("atmosphericsampler")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("aaagggggggaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa")
        .aisle("aagcbcbcbcgaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaadddddaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa")
        .aisle("agcccbbbcccga", "aadaaaaaaadaa", "aadaaaaaaadaa", "aadaaaaaaadaa", "aadaaaaaaadaa", "aadaaaaaaadaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaadaacaadaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa")
        .aisle("gcccccbcccccg", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaadaaaaadaaa", "aaadaaaaadaaa", "aaddaaaaaddaa", "aaadaaaaadaaa", "aaadaaaaadaaa", "aaadaacaadaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaaadddaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa")
        .aisle("gbccccbccccbg", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "adaaaaaaaaada", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaadaaadaaaa", "aaaadaaadaaaa", "aaaadacadaaaa", "aaaadacadaaaa", "aaaadacadaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa")
        .aisle("gcbccbbbccbcg", "aaaaaeaeaaaaa", "aaaaaeaeaaaaa", "aaaaaeaeaaaaa", "aaaaaeaeaaaaa", "aaaaaeaeaaaaa", "aaaaaeaeaaaaa", "aaaaaeaeaaaaa", "adaaaeaeaaada", "aaaaaaeaaaaaa", "aaaaaaeaaaaaa", "aaaaaaeaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaadaaaaadaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaadcdaaaaa", "aaaaadcdaaaaa", "aaaaaadaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa")
        .aisle("gbbbbbbbbbbbg", "caaaaafaaaaac", "caaaaafaaaaac", "caaaaafaaaaac", "caaaaafaaaaac", "acaaaafaaaaca", "acaaaafaaaaca", "acaaaafaaaaca", "adcaaafaaacda", "aacaaeeeaacaa", "aacaaeeeaacaa", "aaacaeeeacaaa", "aaacaaeaacaaa", "aaacaaeaacaaa", "aaadcaeacdaaa", "aaaacaeacaaaa", "aaaacaeacaaaa", "aaaaacecaaaaa", "aaaaacecaaaaa", "aaaaadedaaaaa", "aaaaaaeaaaaaa", "aaaaaaeaaaaaa", "aaaaaaeaaaaaa", "aaaaaaeaaaaaa", "aaaaaaeaaaaaa", "aaaaaaeaaaaaa", "aaaaaaeaaaaaa")
        .aisle("gcbccbbbccbcg", "aaaaaeaeaaaaa", "aaaaaeaeaaaaa", "aaaaaeaeaaaaa", "aaaaaeaeaaaaa", "aaaaaeaeaaaaa", "aaaaaeaeaaaaa", "aaaaaeaeaaaaa", "adaaaeaeaaada", "aaaaaaeaaaaaa", "aaaaaaeaaaaaa", "aaaaaaeaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaadaaaaadaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaadcdaaaaa", "aaaaadcdaaaaa", "aaaaaadaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa")
        .aisle("gbccccbccccbg", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "adaaaaaaaaada", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaadaaadaaaa", "aaaadaaadaaaa", "aaaadacadaaaa", "aaaadacadaaaa", "aaaadacadaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa")
        .aisle("gcccccbcccccg", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaadaaaaadaaa", "aaadaaaaadaaa", "aaddaaaaaddaa", "aaadaaaaadaaa", "aaadaaaaadaaa", "aaadaacaadaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaaadddaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa")
        .aisle("agcccbbbcccga", "aadaaaaaaadaa", "aadaaaaaaadaa", "aadaaaaaaadaa", "aadaaaaaaadaa", "aadaaaaaaadaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaadaacaadaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa")
        .aisle("aagcbcbcbcgaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaadddddaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa")
        .aisle("aaaggghgggaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaaaacaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa")
        .where("a", Predicates.any())
        .where("b", Predicates.blocks("gtceu:secure_maceration_casing"))
        .where("c", Predicates.blocks("gtceu:sturdy_machine_casing"))
        .where("d", Predicates.blocks("gtceu:aluminium_frame"))
        .where("e", Predicates.blocks("gtceu:stress_proof_casing"))
        .where("f", Predicates.blocks("gtceu:ptfe_pipe_casing"))
        .where("g", Predicates.blocks('gtceu:secure_maceration_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("h", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/secure_maceration_casing",
      "gtceu:block/multiblock/distillation_tower"
    );
});