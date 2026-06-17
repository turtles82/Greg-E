const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

GTCEuStartupEvents.registry('gtceu:material', event => {

    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_SMALL_GEAR)
    GTMaterials.Naquadria.addFlags(GTMaterialFlags.GENERATE_SMALL_GEAR)
    GTMaterials.Titanium.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.Stellite100.addFlags(GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME)

    event.create('reinforced_cobblestone')
        .ingot()
        .formula("Fe + C + SiO₂")
        .color(0x36454F)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_PLATE)

    event.create('sintercoke')
        .ingot()
        .formula("Ca₂Fe₂O₄")
        .color(0x818589)
        .iconSet(GTMaterialIconSet.ROUGH)

    event.create('dielectric')
        .ingot()
        .color(0x010606)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('refined_dielectric')
        .ingot()
        .color(0x091727)
        .blastTemp(3700)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('pyrostellit')
        .ingot()
        .formula('Ps')
        .color(0xd7d628)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FOIL)

    event.create('aethelosil')
        .ingot()
        .color(0xfadb05)
        .formula('Ae')
        .blastTemp(3700)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FOIL)

    event.create('solar_bronze')
        .ingot()
        .color(0xdbac36)
        .formula('Cu4SnAg')
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FOIL)

    event.create('blaze_cubeish')
        .ingot()
        .color(0xe5b01a)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create('diamond_lattice_cable')
        .ingot()
        .cableProperties(GTValues.VA[GTValues.UEV], 256, 0, true)
        .ingot()
        .color(0x61cbdb)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_SPRING)

    event.create('dragons_breath')
        .fluid()
        .color(0xd629d4)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('sodium_coolant')
        .fluid()
        .color(0x5f6cd2)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('superheated_sodium')
        .fluid()
        .color(0xa98d7f)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('signalum')
        .ingot()
        .color(0xde7f21)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('lumium')
        .ingot()
        .color(0xfdff3e)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('nlgibsonium')
        .fluid()
        .color(0x7c837d)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('waidaoium')
        .fluid()
        .color(0xedd36f)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    addFluid(GTMaterials.SodiumHydroxide, $FluidStorageKeys.LIQUID)

});

let addFluid = (mat, key) => {
    let prop = new $FluidProperty();
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
    mat.setProperty(PropertyKey.FLUID, prop);
}