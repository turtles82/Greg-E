GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('berkeliumish')
        .dust()
        .fluid()
        .formula('Bk-249')
        .color(0x28d77d)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('calcium48')
        .dust()
        .fluid()
        .formula('Ca-48')
        .color(0xbcbebd)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('tennessineish')
        .dust()
        .fluid()
        .formula('Ts-294')
        .color(0x27d828)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

})