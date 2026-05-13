GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('nyxium')
        .ore()
        .blastTemp(3700)
        .formula("Ny")
        .color(0x42252a)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.NO_ORE_PROCESSING_TAB)

    event.create('dormant_nyxium')
        .dust()
        .formula("Ny")
        .color(0x723f48)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('stellaric')
        .plasma()
        .formula("St+")
        .color(0x686b97)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('ionized_nyxium')
        .fluid()
        .formula("Ny+")
        .color(0x723f48)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('purified_nyxium')
        .dust()
        .formula("Ny")
        .color(0x723f48)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('stabilized_nyxium')
        .dust()
        .formula("Ny")
        .color(0x723f48)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)



})