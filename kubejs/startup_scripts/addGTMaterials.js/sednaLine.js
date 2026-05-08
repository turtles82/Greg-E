GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('sedna_sample')
        .dust()
        .formula('C₃H₄Fe₂PNa₅Sd')
        .color(0xCC5500)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('centrifuged_sedna_sample')
        .dust()
        .formula('FeNa₃Sd')
        .color(0x8B4000)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('sednium_ferride')
        .dust()
        .formula('SdFe')
        .color(0xC04000)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('sednium')
        .ingot()
        .formula('Sd')
        .color(0xF88379)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create('stygian_aqua_regia')
        .fluid()
        .formula('HN0₃ · 3HF')
        .color(0xCC5500)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)


    //₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉

})