GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('aurelium')
        .ore()
        .formula("Au")
        .color(0xea7515)
        .blastTemp(3700)
        .iconSet(GTMaterialIconSet.RUBY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.NO_ORE_PROCESSING_TAB)

    event.create('aurelium_nitrate_solution')
        .fluid()
        .formula("Au(NO₃)₄ · aq")
        .color(0xc79238)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('refined_aurelium')
        .dust()
        .formula("AuOH₄")
        .color(0xc79238)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('aurelium_sludge')
        .fluid()
        .formula("AuO₂ · H₂O")
        .color(0x6f5220)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('purified_aurelium')
        .dust()
        .formula("AuO₂")
        .color(0x6f5220)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('unstable_aurelium')
        .dust()
        .formula("Au-")
        .color(0xea7515)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('vadricium')
        .dust()
        .fluid()
        .formula("Vd")
        .color(0x1239ed)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('fluorovadric_acid')
        .fluid()
        .formula("H₂VdF₇")
        .color(0x3769c8)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    //₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉
});