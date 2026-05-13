ServerEvents.tags('item', (event) => {

    event.remove('forge:ingots/neutronium', 'avaritia:neutron_ingot')
    event.remove('forge:nuggets/neutronium', 'avaritia:neutron_nugget')
    event.remove('forge:ingots/uranium', 'ad_extendra:uranium_ingot')
    event.remove('forge:nuggets/uranium', 'ad_extendra:uranium_nugget')
    event.remove('forge:plates/uranium', 'ad_extendra:uranium_plate')
    event.remove('forge:ingots/plutonium', 'ad_extendra:plutonium_ingot')
    event.remove('forge:nuggets/plutonium', 'ad_extendra:plutonium_nugget')
    event.remove('forge:plates/plutonium', 'ad_extendra:plutonium_plate')

})