GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('gloomstone')
        .gem()
        .color(0x275642)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_PLATE)

    event.create('unrefined_abyssal_mix')
        .liquid()
        .color(0x4f3262)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('abyssal_nitroglyphic_acid')
        .liquid()
        .color(0x4f143f)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('mogmoss_fluid')
        .liquid()
        .color(0x6cab54)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    //₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉

})