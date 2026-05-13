GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('fractalium')
        .ore()
        .formula('Fr')
        .blastTemp(3700)
        .color(0x7811ee)
        .iconSet(GTMaterialIconSet.EMERALD)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.NO_ORE_PROCESSING_TAB)

    event.create('dirtied_fractalium')
        .dust()
        .formula('Fr')
        .color(0x663773)
        .iconSet(GTMaterialIconSet.EMERALD)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('muddied_fractalium')
        .dust()
        .formula('Fr')
        .color(0x4a2a51)
        .iconSet(GTMaterialIconSet.EMERALD)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('grau_aqua')
        .fluid()
        .formula('H₂[Pb(SbF₆)₃] · Cp₂')
        .color(0x14052a)
        .iconSet(GTMaterialIconSet.EMERALD)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('dead_ether')
        .fluid()
        .formula('∄')
        .color(0xc6fdef)
        .iconSet(GTMaterialIconSet.EMERALD)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('chrono_percipitate')
        .dust()
        .fluid()
        .formula('Cp₂')
        .color(0xd2e663)
        .iconSet(GTMaterialIconSet.EMERALD)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    //₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉

})