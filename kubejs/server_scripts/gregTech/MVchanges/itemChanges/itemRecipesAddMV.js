ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('kubejs:senironsmpile', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:senironspeck',
        }
    )

    event.shaped(
        Item.of('kubejs:seniron', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:senironsmpile',
        }
    )

    event.shaped(
        Item.of('kubejs:lapisspile', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:lapisspeck',
        }
    )

    event.shaped(
        Item.of('minecraft:lapis_lazuli', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:lapisspile',
        }
    )

    event.replaceInput(
        'gtceu:shaped/emitter_mv',
        'gtceu:flawless_emerald_gem',
        'minecraft:emerald'
    )

    event.replaceInput(
        'gtceu:assembler/emitter_mv',
        'gtceu:flawless_emerald_gem',
        'minecraft:emerald'
    )

    event.shaped(
        Item.of('relics:researching_table', 1),
        [
            'CCC',
            'DBD',
            'AAA'
        ],
        {
            A: 'twilightforest:twilight_oak_planks',
            B: '#gtceu:circuits/mv',
            C: 'minecraft:red_wool',
            D: 'minecraft:gold_nugget'
        }
    )

});

