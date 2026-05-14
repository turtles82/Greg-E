GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("precisionlaserengraver")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(2, 1, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_RESEARCH_STATION_2, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("precisionlaserengraver", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("precisionlaserengraver")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("jjjjjjj", "abbabba", "abbabba", "abbabba", "abbabba", "aaaaaaa")
        .aisle("jeeeeej", "bfffffb", "bfffffb", "bfffffb", "bfffffb", "aaaaaaa")
        .aisle("jeeeeej", "bfffffb", "bfffffb", "bfffffb", "bfffffb", "aaaaaaa")
        .aisle("jeeeeej", "affgffa", "afffffa", "affhffa", "affiffa", "aaaaaaa")
        .aisle("jeeeeej", "bfffffb", "bfffffb", "bfffffb", "bfffffb", "aaaaaaa")
        .aisle("jeeeeej", "bfffffb", "bfffffb", "bfffffb", "bfffffb", "aaaaaaa")
        .aisle("jjjkjjj", "abacaba", "abacaba", "abdadba", "abbbbba", "aaaaaaa")
        .where("a", Predicates.blocks("gtceu:solid_machine_casing"))
        .where("b", Predicates.blocks("gtceu:tempered_glass"))
        .where("c", Predicates.blocks("minecraft:iron_door"))
        .where("d", Predicates.blocks("chisel_chipped_integration:technical_fan"))
        .where("e", Predicates.blocks("chisel_chipped_integration:laboratory_dark_medium_tiles"))
        .where("f", Predicates.any())
        .where("g", Predicates.blocks("relics:researching_table"))
        .where("h", Predicates.blocks("minecraft:red_stained_glass"))
        .where("i", Predicates.blocks("gtceu:steel_gearbox"))
        .where("j", Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(2))  
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1)))  
        .where("k", Predicates.controller(Predicates.blocks(definition.get())))
    .build())
    .workableCasingModel(
      "gtceu:block/casings/solid/machine_casing_solid_steel",
      "gtceu:block/multiblock/gcym/large_engraving_laser"
    );
});