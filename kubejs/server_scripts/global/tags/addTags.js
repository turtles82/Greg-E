ServerEvents.tags('item', event => {

    event.add('gtceu:circuits', 'kubejs:universal/lv')
    event.add('gtceu:circuits/lv', 'kubejs:universal/lv')

    event.add('gtceu:circuits', 'kubejs:universal/mv')
    event.add('gtceu:circuits/mv', 'kubejs:universal/mv')

    event.add('gtceu:circuits', 'kubejs:universal/hv')
    event.add('gtceu:circuits/hv', 'kubejs:universal/hv')

    event.add('gtceu:circuits', 'kubejs:universal/ev')
    event.add('gtceu:circuits/ev', 'kubejs:universal/ev')

    event.add('gtceu:circuits', 'kubejs:universal/iv')
    event.add('gtceu:circuits/iv', 'kubejs:universal/iv')

    event.add('gtceu:circuits', 'kubejs:universal/luv')
    event.add('gtceu:circuits/luv', 'kubejs:universal/luv')

    event.add('gtceu:circuits', 'kubejs:universal/zpm')
    event.add('gtceu:circuits/zpm', 'kubejs:universal/zpm')

    event.add('gtceu:circuits', 'kubejs:universal/uv')
    event.add('gtceu:circuits/uv', 'kubejs:universal/uv')

    event.add('gtceu:circuits', 'kubejs:universal/uhv')
    event.add('gtceu:circuits/uhv', 'kubejs:universal/uhv')

    event.add('forge:leather', 'gtceu:artificial_leather_plate')

    //cataclysm imitation ingots tagging
    event.add('grege:witherite', 'cataclysm:witherite_ingot')
    event.add('grege:witherite', 'gtceu:imitation_witherite_ingot')

    event.add('grege:ancientmetal', 'cataclysm:ancient_metal_ingot')
    event.add('grege:ancientmetal', 'gtceu:ancient_metal_imitation_ingot')

    event.add('grege:ignitium', 'cataclysm:ignitium_ingot')
    event.add('grege:ignitium', 'gtceu:ignitium_imitation_ingot')

    event.add('grege:powcell', 'cataclysm:lava_power_cell')
    event.add('grege:powcell', 'kubejs:imitationbattery')

    event.add('grege:enderium', 'gtceu:enderium_ingot')
    event.add('grege:enderium', 'gtceu:enderium_imitation_ingot')

    event.add('grege:cursium', 'gtceu:cursium_imitation_ingot')
    event.add('grege:cursium', 'cataclysm:cursium_ingot')

    event.add('grege:lightning', 'cataclysm:essence_of_the_storm')
    event.add('grege:lightning', 'gtceu:storm_imitation_ingot')


})