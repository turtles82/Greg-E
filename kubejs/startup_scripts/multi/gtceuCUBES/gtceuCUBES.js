const registerCube = (event, name, recipeType, baseCasing, textureBlock, modelOverlayName) => {
    event.create(name, "multiblock")
        .rotationState(RotationState.ALL)
        .recipeTypes(recipeType)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) => FactoryBlockPattern.start()
            .aisle("CCC", "CCC", "CCC")
            .aisle("CCC", "C C", "CCC")
            .aisle("CCC", "CBC", "CCC")
            .where("B", Predicates.controller(Predicates.blocks(definition.get())))
            .where("C", Predicates.blocks(baseCasing)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(9).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(9).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(9).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(9).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2))
            )
            .where(" ", Predicates.any())
        .build())
        .workableCasingModel(textureBlock, `gtceu:block/multiblock/${modelOverlayName}`);
};

const registerCubeAssemblers = (event, name, recipeType, baseCasing, textureBlock, modelOverlayName) => {
    event.create(name, "multiblock")
        .rotationState(RotationState.ALL)
        .recipeTypes(recipeType)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern((definition) => FactoryBlockPattern.start()
            .aisle("CCC", "CCC", "CCC")
            .aisle("CCC", "C C", "CCC")
            .aisle("CCC", "CBC", "CCC")
            .where("B", Predicates.controller(Predicates.blocks(definition.get())))
            .where("C", Predicates.blocks(baseCasing)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(9).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(9).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(9).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(9).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1).setPreviewCount(1))
            )
            .where(" ", Predicates.any())
        .build())
        .workableCasingModel(textureBlock, `gtceu:block/multiblock/${modelOverlayName}`);
};

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    
    registerCube(
        event, 
        "cube_wiremill",
        [GTRecipeTypes.WIREMILL_RECIPES, GTRecipeTypes.BENDER_RECIPES],
        "twilightforest:steeleaf_block",
        "twilightforest:block/steeleaf_block",
        "distillation_tower"
    );

    registerCube(
        event, 
        "cube_extruder",
        [GTRecipeTypes.EXTRUDER_RECIPES, GTRecipeTypes.CUTTER_RECIPES],
        "twilightforest:carminite_block",
        "twilightforest:block/carminite_block",
        "distillation_tower"
    );

    registerCubeAssemblers(
        event, 
        "cube_assembler",
        [GTRecipeTypes.ASSEMBLER_RECIPES, GTRecipeTypes.CIRCUIT_ASSEMBLER_RECIPES],
        "botania:terrasteel_block",
        "botania:block/terrasteel_block",
        "distillation_tower"
    );

    registerCubeAssemblers(
        event,
        'cube_oreprocesser',
        [GTRecipeTypes.CENTRIFUGE_RECIPES, GTRecipeTypes.ELECTROLYZER_RECIPES],
        'ad_astra:ostrum_block',
        "ad_astra:block/ostrum_block",
        "distillation_tower"
    )

    registerCube(
        event, 
        "cube_extractor",
        [GTRecipeTypes.EXTRACTOR_RECIPES, GTRecipeTypes.FLUID_SOLIDFICATION_RECIPES],
        "twilightforest:knightmetal_block",
        "twilightforest:block/knightmetal_block",
        "distillation_tower"
    );

    registerCube(
        event, 
        "cube_ore",
        [GTRecipeTypes.MACERATOR_RECIPES, GTRecipeTypes.ORE_WASHER_RECIPES],
        "ad_astra:desh_block",
        "ad_astra:block/desh_block",
        "distillation_tower"
    );

    registerCube(
        event, 
        "cube_mixer",
        [GTRecipeTypes.MIXER_RECIPES],
        "botania:manasteel_block",
        "botania:block/manasteel_block",
        "distillation_tower"
    );
});