GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("specialoreprocessingplant")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("specialoreprocessingplant", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("specialoreprocessingplant")
    .appearanceBlock(GCYMBlocks.CASING_VIBRATION_SAFE)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("ppppppppppppppp", "bbkkkbbbbbbbbbb", "bblllbbbbbbbbbb", "bblllbbbbbbbbbb", "bbkkkbbbbbbbbbb", "bblllbbbbbbbbbb", "bblllbbbbbbbbbb", "bbkkkbbbbbbbbbb")
        .aisle("paaaaaaaaaaaaap", "bkbbbkbbbbbbbbb", "blbbblbbbbbbbbb", "blbbblbbbbbbbbb", "bkbbbkbmbbbmbbb", "blbbblbbbbbbbbb", "blbbblbbbbbbbbb", "bkkkkkbbbbbbbbb")
        .aisle("paaaaaaaaaaaaap", "bkbbbkbmbbbmbjb", "blbbblbmbbbmbjb", "blbbblbmbbbmbjb", "bkbbbkjjjijjjib", "blbbblbbbbbbbbb", "blbbblbbbbbbbbb", "bkknkkbbbbbbbbb")
        .aisle("paaaaaaaaaaaaap", "bkbbbkbbbbbbbjb", "blbbblbbbbbbbbb", "blbbblbbbbbbbbb", "bkbbbkbmbbbmbbb", "blbbblbbbbbbbbb", "blbbblbbbbbbbbb", "bkkkkkbbbbbbbbb")
        .aisle("paaaaaaaaaaaaap", "bbkkkbbbbbbbbib", "bblllbbbbbbbbbb", "bblllbbbbbbbbbb", "bbkkkbbbbbbbbbb", "bblllbbbbbbbbbb", "bblllbbbbbbbbbb", "bbkkkbbbbbbbbbb")
        .aisle("paaaaaaaaaaaaap", "bbbjbbbbbbbbbjb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("paaaaaaaaaaaaap", "bbbibbbbbbbbbjb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .aisle("paaaaaaaaaaaaap", "bdbjbdbbbbbcccb", "bdbbbdbbbbbcccb", "bdbbbdbbbbbcccb", "bfffffbbbbbcccb", "bfgggfbbbbbbbbb", "bfgggfbbbbbbbbb", "bhfffhbbbbbbbbb")
        .aisle("paaaaaaaaaaaaap", "bbbjbbbbbbccccc", "bbbbbbbbbbcbbbc", "bbbbbbbbbbceeec", "bfffffbbbbcbbbc", "bfbbbfbbbbbbbbb", "bfbbbfbbbbbbbbb", "bfffffbbbbbbbbb")
        .aisle("paaaaaaaaaaaaap", "bbbibbbbbbccccc", "bbbjbbbbbbcbbbc", "bbbjbbbbbbceeec", "bffiffbbbbcbbbc", "bfbbbfbbbbbbbbb", "bfbbbfbbbbbbbbb", "bfffffbbbbbbbbb")
        .aisle("paaaaaaaaaaaaap", "bdbbbdbbbbccccc", "bdbbbdbbbbcbbbc", "bdbbbdbbbbceeec", "bfffffbbbbcbbbc", "bfgggfbbbbbbbbb", "bfgggfbbbbbbbbb", "bhfffhbbbbbbbbb")
        .aisle("pppppppoppppppp", "bbbbbbbbbbbcccb", "bbbbbbbbbbbcccb", "bbbbbbbbbbbcccb", "bbbbbbbbbbbcccb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb", "bbbbbbbbbbbbbbb")
        .where("a", Predicates.blocks("gtceu:high_temperature_smelting_casing"))
        .where("b", Predicates.any())
        .where("c", Predicates.blocks("gtceu:secure_maceration_casing"))
        .where("d", Predicates.blocks("gtceu:solid_machine_casing"))
        .where("e", Predicates.blocks("gtceu:crushing_wheels"))
        .where("f", Predicates.blocks("gtceu:shock_proof_cutting_casing"))
        .where("g", Predicates.blocks("gtceu:tempered_glass"))
        .where("h", Predicates.blocks("gregecore:shockproof_engine"))
        .where("i", Predicates.blocks("gtceu:stainless_steel_gearbox"))
        .where("j", Predicates.blocks("gtceu:clean_machine_casing"))
        .where("k", Predicates.blocks("gtceu:nonconducting_casing"))
        .where("l", Predicates.blocks("gtceu:rtm_alloy_coil_block"))
        .where("m", Predicates.blocks("gtceu:stress_proof_casing"))
        .where("n", Predicates.abilities(PartAbility.MUFFLER).setMaxGlobalLimited(1).setPreviewCount(1))
        .where('o', Predicates.controller(Predicates.blocks(definition.get())))
        .where('p', Predicates.blocks("gtceu:high_temperature_smelting_casing")
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1)))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/high_temperature_smelting_casing",
      "gtceu:block/multiblock/distillation_tower"
    );
});