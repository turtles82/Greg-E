ServerEvents.recipes((event) => {

    event.remove({type: 'cataclysm:weapon_fusion'})
    event.remove('cataclysm:meat_shredder')
    event.remove('cataclysm:laser_gatling')
    event.remove('cataclysm:wither_assault_shoulder_weapon')
    event.remove('cataclysm:mechanical_fusion_anvil')
    event.remove('cataclysm:ancient_spear')
    event.remove('cataclysm:astrape')
    event.remove('cataclysm:ceraunus')
    event.remove('cataclysm:soul_render')
    event.remove('cataclysm:the_annihilator')
    event.remove('cataclysm:the_incinerator')
    event.remove('cataclysm:cursed_bow')


    event.recipes.botania.mana_infusion(
        '2x cataclysm:witherite_ingot',
        'cataclysm:witherite_ingot',
        1000,
        'botania:conjuration_catalyst'
    )

    event.shaped(
        Item.of('kubejs:strength_ring', 1),
        [
            ' B ',
            'A A',
            ' A '
        ],
        {
            A: 'cataclysm:witherite_ingot',
            B: 'minecraft:redstone_block'
        }
    )

    event.remove({output: 'cataclysm:abyssal_sacrifice'})
    event.shaped(
        Item.of('cataclysm:abyssal_sacrifice', 1),
        [
            'BAB',
            'ACA',
            'BAB'
        ],
        {
            A: 'minecraft:andesite',
            B: 'minecraft:kelp',
            C: '#gtceu:circuits/mv'
        }
    )

    event.shaped(
        Item.of('kubejs:regen_ring', 1),
        [
            ' B ',
            'A A',
            ' A '
        ],
        {
            A: 'gtceu:abyssal_wire_ingot',
            B: 'minecraft:lapis_block'
        }
    )

    event.recipes.botania.mana_infusion(
        '2x cataclysm:ancient_metal_ingot',
        'cataclysm:ancient_metal_ingot',
        1000,
        'botania:conjuration_catalyst'
    )

    event.shaped(
        Item.of('cataclysm:necklace_of_the_desert', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: '#forge:sand',
            B: 'cataclysm:ancient_metal_ingot'
        }
    )

    event.shaped(
        Item.of('kubejs:resist_bracelet', 1),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'cataclysm:ancient_metal_ingot',
            B: 'minecraft:red_dye',
            C: '#forge:leather'
        }
    )

    event.recipes.botania.mana_infusion(
        '2x cataclysm:ignitium_ingot',
        'cataclysm:ignitium_ingot',
        1000,
        'botania:conjuration_catalyst'
    )

    event.shaped(
        Item.of('kubejs:damage_belt', 1),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'cataclysm:ignitium_ingot',
            B: 'minecraft:gold_ingot',
            C: '#forge:leather'
        }
    )

    event.recipes.botania.mana_infusion(
        '2x cataclysm:lava_power_cell',
        'cataclysm:lava_power_cell',
        100,
        'botania:conjuration_catalyst'
    )

    event.shaped(
        Item.of('kubejs:earring1', 1),
        [
            ' A ',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:gold_nugget',
            B: 'cataclysm:lava_power_cell'
        }
    )

    event.shaped(
        Item.of('kubejs:earring2', 1),
        [
            ' A ',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:gold_nugget',
            B: 'gtceu:enderium_ingot'
        }
    )

    event.recipes.botania.mana_infusion(
        '2x cataclysm:cursium_ingot',
        'cataclysm:cursium_ingot',
        100,
        'botania:conjuration_catalyst'
    )

    event.shaped(
        Item.of('kubejs:trinket1', 1),
        [
            ' A ',
            'BBB',
            ' B '
        ],
        {
            A: '#forge:leather',
            B: 'cataclysm:cursium_ingot'
        }
    )

    event.recipes.botania.mana_infusion(
        '2x cataclysm:essence_of_the_storm',
        'cataclysm:essence_of_the_storm',
        100,
        'botania:conjuration_catalyst'
    )

    event.shaped(
        Item.of('kubejs:trinket2', 1),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: 'cataclysm:essence_of_the_storm'
        }
    )

})