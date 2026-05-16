GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('vileheart_plate')
        .color(0x42000D)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('pure_vileheart_plate')
        .color(0x290008)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('pristine_vileheart_plate')
        .color(0x000000)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create('primal_vileheart_plate')
        .color(0x1A0005)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('proto_vileheart_plate')
        .color(0x0F0003)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    //₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉

})