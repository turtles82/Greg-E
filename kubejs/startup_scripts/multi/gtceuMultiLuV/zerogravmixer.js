GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("zerogravmixer", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("zerogravmixer")
    .appearanceBlock(GCYMBlocks.CASING_VIBRATION_SAFE)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('       ', '  EEE  ', ' E   E ', ' E   E ', ' E   E ', '  EEE  ', '       ')
        .aisle('  EEE  ', ' E   E ', 'E E E E', 'E EFE E', 'E E E E', ' E   E ', '  EEE  ')
        .aisle('       ', '  EEE  ', ' E   E ', ' E F E ', ' E   E ', '  EEE  ', '       ')
        .aisle('       ', '       ', '       ', '   F   ', '       ', '       ', '       ')
        .aisle('       ', '       ', '       ', '   F   ', '       ', '       ', '       ')
        .aisle('       ', '       ', '       ', '   F   ', '       ', '       ', '       ')
        .aisle('       ', '       ', '       ', '   G   ', '       ', '       ', '       ')
        .aisle('       ', '       ', '       ', '   F   ', '       ', '       ', '       ')
        .aisle('       ', '       ', '       ', '   F   ', '       ', '       ', '       ')
        .aisle('       ', '       ', '       ', '   F   ', '       ', '       ', '       ')
        .aisle('       ', '       ', '  BBB  ', '  BBB  ', '  CBC  ', '       ', '       ')
        .aisle('       ', '       ', '  BBB  ', '  BDB  ', '  BBB  ', '       ', '       ')
        .aisle('       ', '       ', '  BBB  ', '  BAB  ', '  CBC  ', '       ', '       ')
        .where('A', Predicates.controller(Predicates.blocks(definition.get())))
        .where('B', Predicates.blocks('gtceu:inert_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(6).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)))
        .where('C', Predicates.blocks('gregecore:ptfe_engine_intake'))
        .where('D', Predicates.blocks('gtceu:inert_machine_casing'))
        .where('E', Predicates.blocks('ad_extendra:neptunium_factory_block'))
        .where('F', Predicates.blocks('chisel_chipped_integration:factory_blue_circuits'))
        .where('G', Predicates.blocks('chisel_chipped_integration:factory_orange_white_caution_stripes'))
        .where(' ', Predicates.any())
    .build())
    .workableCasingModel(
      "gtceu:block/casings/solid/machine_casing_inert_ptfe",
      "gtceu:block/multiblock/distillation_tower"
    );
});