GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('decursium')
        .ore()
        .blastTemp(3700)
        .formula("Ds")
        .color(0x43bc99)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.NO_ORE_PROCESSING_TAB)

    event.create('decursium_oxide')
        .fluid()
        .formula("02Ds")
        .color(0x359588)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('recursium')
        .dust()
        .formula("Rs")
        .color(0x667f99)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('recursium_2')
        .dust()
        .formula("Rs2")
        .color(0x667f99)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('recursium_3')
        .dust()
        .formula("Rs3")
        .color(0x667f99)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

})