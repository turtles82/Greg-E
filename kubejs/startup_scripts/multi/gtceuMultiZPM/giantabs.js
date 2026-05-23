GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("giantabs", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("alloy_blast_smelter")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers(
        [
            GTRecipeModifiers.OC_PERFECT, 
            GTRecipeModifiers.PARALLEL_HATCH, 
        ])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("bbiiiiibb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbaaaaabb")
        .aisle("bicccccib", "bdaaaaadb", "bdbbbbbdb", "bdbbbbbdb", "bdbbbbbdb", "bdbbbbbdb", "bdbbbbbdb", "bdaaaaadb", "bacccccab")
        .aisle("iccccccci", "babbbbbab", "bbeefeebb", "bbeefeebb", "bbeefeebb", "bbeefeebb", "bbeefeebb", "babbbbbab", "accccccca")
        .aisle("iccccccci", "babbbbbab", "bbebbbebb", "bbebbbebb", "bbebbbebb", "bbebbbebb", "bbebbbebb", "babbbbbab", "accccccca")
        .aisle("iccccccci", "babbbbbab", "bbfbbbfbb", "bbfbbbfbb", "bbfbbbfbb", "bbfbbbfbb", "bbfbbbfbb", "babbbbbab", "acccgccca")
        .aisle("iccccccci", "babbbbbab", "bbebbbebb", "bbebbbebb", "bbebbbebb", "bbebbbebb", "bbebbbebb", "babbbbbab", "accccccca")
        .aisle("iccccccci", "babbbbbab", "bbeefeebb", "bbeefeebb", "bbeefeebb", "bbeefeebb", "bbeefeebb", "babbbbbab", "accccccca")
        .aisle("bicccccib", "bdaaaaadb", "bdbbbbbdb", "bdbbbbbdb", "bdbbbbbdb", "bdbbbbbdb", "bdbbbbbdb", "bdaaaaadb", "bacccccab")
        .aisle("bbiijiibb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbbbbbbbb", "bbaaaaabb")
        .where("a", Predicates.blocks("gtceu:high_temperature_smelting_casing"))
        .where("b", Predicates.any())
        .where("c", Predicates.blocks("gtceu:stress_proof_casing"))
        .where("d", Predicates.blocks("gtceu:black_steel_frame"))
        .where("e", Predicates.heatingCoils())
        .where("f", Predicates.blocks("gtceu:steel_gearbox"))
        .where("g", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
        .where("i", Predicates.blocks('gtceu:high_temperature_smelting_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2))  
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(2))  
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))  
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2)) 
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("j", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/high_temperature_smelting_casing",
      "gtceu:block/multiblock/distillation_tower"
    );
});