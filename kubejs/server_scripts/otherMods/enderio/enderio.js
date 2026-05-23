ServerEvents.recipes((event) => {

    event.remove({type: 'enderio:alloy_smelting'})
    let alloys = [
        {output: 'enderio:copper_alloy_ingot', inputs: ['minecraft:copper_ingot', 'ae2:silicon'], duration: 300, energy: GTValues.VA[GTValues.LV]},
        {output: 'enderio:energetic_alloy_ingot', inputs: ['minecraft:gold_ingot', 'minecraft:glowstone_dust'], duration: 300, energy: GTValues.VA[GTValues.LV]},
        {output: 'enderio:vibrant_alloy_ingot', inputs: ['enderio:energetic_alloy_ingot', 'minecraft:ender_pearl'], duration: 300, energy: GTValues.VA[GTValues.MV]},
        {output: 'enderio:redstone_alloy_ingot', inputs: ['minecraft:redstone', 'ae2:silicon'], duration: 400, energy: GTValues.VA[GTValues.LV]},
        {output: 'enderio:conductive_alloy_ingot', inputs: ['enderio:copper_alloy_ingot', 'minecraft:redstone'], duration: 400, energy: GTValues.VA[GTValues.MV]},
        {output: 'enderio:pulsating_alloy_ingot', inputs: ['minecraft:iron_ingot', 'minecraft:ender_pearl'], duration: 400, energy: GTValues.VA[GTValues.LV]},
        {output: 'enderio:dark_steel_ingot', inputs: ['minecraft:obsidian', 'minecraft:iron_ingot'], duration: 500, energy: GTValues.VA[GTValues.HV]},
        {output: 'enderio:soularium_ingot', inputs: ['minecraft:copper_ingot', '#minecraft:soul_fire_base_blocks'], duration: 500, energy: GTValues.VA[GTValues.LV]},
        {output: 'enderio:end_steel_ingot', inputs: ['minecraft:end_stone', 'enderio:dark_steel_ingot'], duration: 500, energy: GTValues.VA[GTValues.HV]}
    ]

    alloys.forEach((items) => {

        event.recipes.gtceu.alloy_smelter(items.output + '_converted')
            .itemInputs(
                items.inputs
            )
            .itemOutputs(
                items.output
            )
            .EUt(items.energy)
            .duration(items.duration)

    })



    event.remove({type: 'enderio:sag_milling'})

    let mill = [
        {output: 'enderio:ender_crystal_powder', input: 'enderio:ender_crystal', duration: 300, energy: GTValues.VA[GTValues.LV]},
        {output: 'enderio:prescient_powder', input: 'enderio:prescient_crystal', duration: 300, energy: GTValues.VA[GTValues.LV]},
        {output: 'enderio:vibrant_powder', input: 'enderio:vibrant_crystal', duration: 300, energy: GTValues.VA[GTValues.MV]},
        {output: 'enderio:pulsating_powder', input: 'enderio:pulsating_crystal', duration: 300, energy: GTValues.VA[GTValues.HV]},
        {output: 'enderio:withering_powder', input: 'minecraft:wither_skeleton_skull', duration: 300, energy: GTValues.VA[GTValues.LV]}
    ]

    mill.forEach((items) => {

        event.recipes.gtceu.macerator(items.output + '_converted')
            .itemInputs(
                items.input
            )
            .itemOutputs(
                items.output
            )
            .EUt(items.energy)
            .duration(items.duration)

    })

    event.recipes.gtceu.alloy_smelter()
        .itemInputs(
            '4x gtceu:quartz_sand_dust',
            'minecraft:obsidian'
        )
        .itemOutputs(
            'enderio:fused_quartz'
        )
        .duration(150)
        .EUt(GTValues.VA[GTValues.LV])

    event.remove('enderio:conduit_binder_composite')
    event.recipes.gtceu.mixer()
        .itemInputs(
            '2x minecraft:clay_ball',
            '2x minecraft:sand',
            '4x minecraft:gravel'
        )
        .itemOutputs(
            '8x enderio:conduit_binder_composite'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(4)

    event.remove('enderio:primitive_alloy_smelter')
    event.remove('enderio:alloy_smelter')
    event.remove('enderio:painting_machine')
    event.remove('enderio:stirling_generator')
    event.remove('enderio:sag_mill')
    event.remove('avaritia:eio_creative_power')
    event.remove('enderio:staff_of_levity')
    event.remove('enderio:energy_conduit')
    event.remove('enderio:crafter')
    event.remove('enderio:drain')

    event.remove('enderio:wood_gear')
    event.remove('enderio:wood_gear_corner')
    event.remove('enderio:stone_gear')
    event.remove('enderio:stone_gear_upgrade')
    event.remove('enderio:dark_bimetal_gear')
    event.remove('enderio:photovoltaic_composite')
    event.remove('enderio:wired_charger')
    event.remove('enderio:impulse_hopper')

    event.remove('enderio:aversion_obelisk')

    event.remove({ id: /enderio:.*_alloy_grinding_ball/ })
    event.remove('enderio:dark_steel_grinding_ball')
    event.remove('enderio:end_steel_grinding_ball')
    event.remove('enderio:soularium_grinding_ball')

    event.remove('enderio:energetic_photovoltaic_module')
    event.remove('enderio:pulsating_photovoltaic_module')
    event.remove('enderio:vibrant_photovoltaic_module')

    event.remove('enderio:extraction_speed_upgrade_1_upgrade')
    event.remove('enderio:extraction_speed_upgrade_2_upgrade')
    event.remove('enderio:extraction_speed_upgrade_3_upgrade')

    event.recipes.botania.runic_altar(
        'minecraft:zombie_head',
        [
            'minecraft:rotten_flesh',
            'minecraft:rotten_flesh',
            'minecraft:rotten_flesh',
            'minecraft:rotten_flesh'
        ],
        2500
    )

    event.recipes.botania.mana_infusion(
        'minecraft:creeper_head',
        'minecraft:zombie_head',
        2500
    )

    event.recipes.botania.mana_infusion(
        'minecraft:piglin_head',
        'minecraft:creeper_head',
        2500
    )

    event.recipes.botania.mana_infusion(
        'minecraft:dragon_head',
        'minecraft:piglin_head',
        2500
    )

    event.recipes.botania.mana_infusion(
        'minecraft:player_head',
        'minecraft:dragon_head',
        2500
    )

    event.recipes.botania.mana_infusion(
        'minecraft:zombie_head',
        'minecraft:player_head',
        2500
    )

    event.replaceInput(
        'enderio:slice_and_splice',
        '#forge:heads',
        '#gtceu:circuits/lv'
    )

    event.replaceInput(
        'enderio:extraction_speed_upgrade_1',
        'minecraft:redstone_torch',
        '#gtceu:circuits/lv'
    )

    event.replaceInput(
        'enderio:extraction_speed_upgrade_2',
        'minecraft:redstone_torch',
        '#gtceu:circuits/mv'
    )

    event.replaceInput(
        'enderio:extraction_speed_upgrade_3',
        'minecraft:redstone_torch',
        '#gtceu:circuits/hv'
    )

    event.replaceInput(
        'enderio:extraction_speed_upgrade_4',
        'minecraft:redstone_torch',
        '#gtceu:circuits/ev'
    )

    event.replaceInput(
        {input: 'enderio:grains_of_infinity'},
        'enderio:grains_of_infinity',
        '#gtceu:circuits/ulv'
    )

    event.replaceInput(
        'enderio:soul_binder',
        'enderio:empty_soul_vial',
        '#gtceu:circuits/hv'
    )

    event.replaceInput(
        'enderio:enchanter',
        'enderio:dark_steel_ingot',
        'gtceu:aluminium_ingot'
    )

    event.replaceInput(
        'enderio:soul_chain',
        'enderio:powdered_quartz',
        'gtceu:quartz_sand_dust'
    )

    event.shaped(
        Item.of('gtceu:hv_soul_binder', 1),
        [
            'BAB',
            'CDC',
            'BEB'
        ],
        {
            A: 'enderio:empty_soul_vial',
            B: 'enderio:soularium_ingot',
            C: '#gtceu:circuits/hv',
            D: 'enderio:ensouled_chassis',
            E: 'enderio:z_logic_controller'
        }
    )

    event.recipes.gtceu.soul_binding()
        .itemInputs(
            '4x minecraft:ender_pearl',
            'enderio:vibrant_crystal'
        )
        .inputFluids(
            'gtceu:glue 144'
        )
        .itemOutputs(
            'enderio:ender_crystal'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

})