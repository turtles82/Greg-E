ServerEvents.recipes((event) => {

    event.replaceInput(
        { id: 'advanced_ae:reactionchamber' },
        'ae2:condenser',
        '#gtceu:circuits/hv'
    )

    event.replaceInput(
        { id: 'advanced_ae:quantumcore' },
        'ae2:singularity',
        '#gtceu:circuits/ev'
    )

    event.replaceInput(
        { id: 'ae2:network/blocks/pattern_providers_interface' },
        'minecraft:crafting_table',
        '#gtceu:circuits/mv'
    )

    event.replaceInput(
        { id: 'ae2:network/crafting/molecular_assembler' },
        'minecraft:crafting_table',
        '#gtceu:circuits/mv'
    )

    event.replaceInput(
        { id: 'ae2:network/blocks/controller' },
        'ae2:fluix_crystal',
        '#gtceu:circuits/lv'
    )

    event.replaceInput(
        { id: 'ae2:network/blocks/storage_drive' },
        'ae2:engineering_processor',
        '#gtceu:circuits/lv'
    )

    event.replaceInput(
        { id: 'advanced_ae:flight_card' },
        'minecraft:tnt',
        '#gtceu:circuits/ev'
    )

    event.shaped(
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'),
        [
            'ABA',
            'ECE',
            'DDD'
        ],
        {
            A: 'ae2:quartz_glass',
            B: 'kubejs:cobblefour',
            C: 'ae2:cell_component_4k',
            D: 'minecraft:diamond',
            E: '#gtceu:circuits/mv'
        }
    )

    event.shaped(
        Item.of(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}')),
        [
            'ABA',
            'ECE',
            'DDD'
        ],
        {
            A: 'ae2:quartz_glass',
            B: 'kubejs:waterthree',
            C: 'ae2:cell_component_4k',
            D: 'minecraft:diamond',
            E: '#gtceu:circuits/mv'
        }
    )

    event.replaceInput(
        'expatternprovider:wireless_connector',
        'ae2:sky_dust',
        '#gtceu:circuits/iv'
    )

    event.replaceInput(
        'expatternprovider:wireless_hub',
        'ae2:quantum_link',
        '#gtceu:circuits/iv'
    )

    //Advanced aes reaction chamber recipie for matter balls
    event.custom({
        type: 'advanced_ae:reaction',
        energy: 10000,
        fluid: {
            fluidStack: {
                Amount: 500,
                FluidName: 'minecraft:water',
            },
        },
        input_items: [{
            amount: 64,
            ingredient: { 
                item: 'minecraft:cobblestone' 
            },
        }],
        output: { 
            '#' : 8,
            '#c': 'ae2:i',
            id: 'ae2:matter_ball' 
        }
    })
    .id('ae2:matter_ball_reaction_chamber');

    event.remove({ id: 'advanced_ae:quantum_alloy_plate' } )

    event.custom({
        type: 'advanced_ae:reaction',
        energy: 10000,
        fluid: {
            fluidStack: {
                Amount: 500,
                FluidName: 'minecraft:water',
            },
        },
        input_items: [
            {
                amount: 8,
                ingredient: { 
                    item: 'advanced_ae:quantum_alloy'
                },
            },
            {
                amount: 4,
                ingredient: { 
                    item: 'gtceu:titanium_ingot'
                },
            },
            {
                amount: 1,
                ingredient: { 
                    item: 'minecraft:nether_star'
                },
            }
        ],
        output: { 
            '#' : 1,
            '#c': 'ae2:i',
            id: 'advanced_ae:quantum_alloy_plate'
        }
    })
    .id('rgfverfsgvrrfdg');

});