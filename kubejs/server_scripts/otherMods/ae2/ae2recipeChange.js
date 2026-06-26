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
        { id: 'ae2:network/blocks/pattern_providers_interface' },
        'minecraft:iron_ingot',
        'gtceu:enhanced_fluix_ingot'
    )

    event.replaceInput(
        { id: 'ae2:network/blocks/interfaces_interface' },
        'minecraft:iron_ingot',
        'gtceu:enhanced_fluix_ingot'
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
        Item.of(Item.of('ae2:pattern_provider'), 2),
        [
            'ACA',
            'B D',
            'ACA'
        ],
        {
            A: 'gtceu:end_certus_quartz2_ingot',
            D: 'ae2:formation_core',
            C: '#gtceu:circuits/hv',
            B: 'ae2:annihilation_core',
        }
    )

    event.shaped(
        Item.of(Item.of('ae2:pattern_provider'), 4),
        [
            'ACA',
            'B D',
            'ACA'
        ],
        {
            A: 'gtceu:venus_certus_quartz2_ingot',
            D: 'ae2:formation_core',
            C: '#gtceu:circuits/ev',
            B: 'ae2:annihilation_core',
        }
    )

    event.shaped(
        Item.of(Item.of('ae2:pattern_provider'), 8),
        [
            'ACA',
            'B D',
            'ACA'
        ],
        {
            A: 'gtceu:magical_certus_quartz2_ingot',
            D: 'ae2:formation_core',
            C: '#gtceu:circuits/iv',
            B: 'ae2:annihilation_core',
        }
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

    event.recipes.gtceu.macerator()
        .itemInputs(
            'advanced_ae:shattered_singularity'
        )
        .itemOutputs(
            'advanced_ae:quantum_infused_dust'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(50)

    let inscriberPress = [
        {in: ['ae2:engineering_processor_press', 'ae2:logic_processor_press'], out: 'advanced_ae:quantum_processor_press', duration: 1000, EU: GTValues.VA[GTValues.HV], id: 1},
        {in: ['advanced_ae:quantum_processor_press', 'minecraft:iron_block'], out: 'advanced_ae:quantum_processor_press', duration: 300, EU: GTValues.VA[GTValues.HV], id: 2},
        {in: ['ae2:engineering_processor_press', 'minecraft:iron_block'], out: 'ae2:engineering_processor_press', duration: 300, EU: GTValues.VA[GTValues.LV], id: 3},
        {in: ['ae2:logic_processor_press', 'minecraft:iron_block'], out: 'ae2:logic_processor_press', duration: 300, EU: GTValues.VA[GTValues.LV], id: 4},
        {in: ['ae2:silicon_press', 'minecraft:iron_block'], out: 'ae2:silicon_press', duration: 300, EU: GTValues.VA[GTValues.LV], id: 5},
        {in: ['ae2:calculation_processor_press', 'minecraft:iron_block'], out: 'ae2:calculation_processor_press', duration: 300, EU: GTValues.VA[GTValues.LV], id: 6},
        {in: ['megacells:accumulation_processor_press', 'minecraft:iron_block'], out: 'megacells:accumulation_processor_press', duration: 300, EU: GTValues.VA[GTValues.MV], id: 7},
        {in: ['ae2:silicon_press', 'ae2:calculation_processor_press'], out: 'megacells:accumulation_processor_press', duration: 1000, EU: GTValues.VA[GTValues.MV], id: 8},
    ]

    inscriberPress.forEach((items) => {
        let safeRecipeId = items.out.replace(':', '_') + '_' + items.id;
        let recipe = event.recipes.gtceu.alloy_smelter(safeRecipeId);

        if (items.in.includes('minecraft:iron_block')) {
            let press = items.in.find(item => item !== 'minecraft:iron_block');
            
            recipe
                .notConsumable(press)
                .itemInputs('minecraft:iron_block')
                .itemOutputs(items.out)
                .duration(items.duration)
                .EUt(items.EU);
        } else {
            recipe
                .itemInputs(items.in)
                .itemOutputs(items.out)
                .duration(items.duration)
                .EUt(items.EU);
        }
    })


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

    event.replaceInput(
        'merequester:requester',
        'minecraft:amethyst_shard',
        '#gtceu:circuits/lv'
    )

    event.replaceInput(
        'aeinfinitybooster:infinity_card',
        'minecraft:netherite_ingot',
        '#gtceu:circuits/ev'
    )

    event.replaceInput(
        'aeinfinitybooster:dimension_card',
        'minecraft:nether_star',
        '#gtceu:circuits/ev'
    )

    event.replaceInput(
        'expatternprovider:assembler_matrix_frame',
        'minecraft:iron_ingot',
        'gtceu:end_certus_quartz2_ingot'
    )

    event.replaceInput(
        'advanced_ae:quantumcore',
        'advanced_ae:shattered_singularity',
        'gtceu:venus_certus_quartz2_ingot'
    )

    event.replaceInput(
        'expatternprovider:wireless_connector',
        '#ae2:smart_cable',
        'gtceu:magical_certus_quartz2_ingot'
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