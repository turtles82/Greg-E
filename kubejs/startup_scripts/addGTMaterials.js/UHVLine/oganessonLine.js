GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('californiumish')
        .fluid()
        .formula("Cf")
        .color(0xb8476c)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('alfa_particles')
        .fluid()
        .formula("4He2+")
        .color(0xdfdf20)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('oganessonish')
        .fluid()
        .formula("Og")
        .color(0xbe419b)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

})