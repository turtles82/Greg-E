ServerEvents.recipes((event) => {

    event.replaceInput(
        'pipez:basic_upgrade',
        'minecraft:iron_ingot',
        'gtceu:steel_ingot'
    )

    event.replaceInput(
        'pipez:improved_upgrade',
        'minecraft:gold_ingot',
        'gtceu:aluminium_ingot'
    )

    event.replaceInput(
        'pipez:advanced_upgrade',
        'minecraft:diamond_ingot',
        'gtceu:stainless_steel_ingot'
    )

    event.replaceInput(
        'pipez:ultimate_upgrade',
        'minecraft:netherite_ingot',
        'gtceu:titanium_ingot'
    )



})