const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

GTCEuStartupEvents.registry('gtceu:material', event => {

    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_SMALL_GEAR)
    GTMaterials.Naquadria.addFlags(GTMaterialFlags.GENERATE_SMALL_GEAR)
    GTMaterials.Titanium.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)

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

    addFluid(GTMaterials.SodiumHydroxide, $FluidStorageKeys.LIQUID)

});

let addFluid = (mat, key) => {
    let prop = new $FluidProperty();
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
    mat.setProperty(PropertyKey.FLUID, prop);
}