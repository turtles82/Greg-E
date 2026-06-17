ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembly_line('getdraconiumprocessor')
        .itemInputs(
            '3x #gtceu:circuits/uhv',
            'gtceu:neutronium_frame',
            '64x gtceu:advanced_smd_diode',
            '64x gtceu:advanced_smd_capacitor',
            '64x gtceu:advanced_smd_transistor',
            '64x gtceu:advanced_smd_resistor',
            '64x gtceu:advanced_smd_inductor',
            '64x gtceu:polybenzimidazole_foil',
            '64x gtceu:ram_chip',
            '64x gtceu:ram_chip',
            '16x gregecore:awakened_draconium_cable_double_wire',
            '8x gtceu:neutronium_plate',
            '4x gtceu:stellarium_rod',
            '4x gtceu:stellarium_plate',
        )
        .inputFluids(
            'gtceu:soldering_alloy 5000',
            'gtceu:polybenzimidazole 3000'
        )
        .itemOutputs('kubejs:animated/draconicprocessor')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:wetware_processor_mainframe')).EUt(GTValues.VA[GTValues.UEV]).CWUt(256))

    event.recipes.gtceu.assembly_line('getdraconiumprocessor2')
        .itemInputs(
            '3x #gtceu:circuits/uhv',
            'gtceu:neutronium_frame',
            '16x kubejs:ultimatecapacitor',
            '16x kubejs:ultimatediode',
            '16x kubejs:ultimateinductor',
            '16x kubejs:ultimatetransistor',
            '16x kubejs:ultimateresistor',
            '64x gtceu:polybenzimidazole_foil',
            '2x gtceu:highly_advanced_soc',
            '16x gregecore:awakened_draconium_cable_double_wire',
            '8x gtceu:neutronium_plate',
            '4x gtceu:stellarium_rod',
            '4x gtceu:stellarium_plate',
        )
        .inputFluids(
            'gtceu:soldering_alloy 5000',
            'gtceu:polybenzimidazole 3000'
        )
        .itemOutputs('2x kubejs:animated/draconicprocessor')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Item.of('kubejs:ultimateresistor')).EUt(GTValues.VA[GTValues.UEV]).CWUt(256))

    event.recipes.gtceu.assembly_line('getstreilecleanhatch')
        .itemInputs(
            '3x kubejs:animated/draconicprocessor',
            'gtceu:cleaning_maintenance_hatch',
            'gtceu:uev_machine_hull',
            '4x gtceu:uhv_robot_arm',
            '8x gregecore:awakened_draconium_cable_single_wire'
        )
        .inputFluids(
            'gtceu:soldering_alloy 1000',
            'gtceu:polybenzimidazole 500'
        )
        .itemOutputs('gtmutils:sterile_cleaning_maintenance_hatch')
        .duration(500)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:cleaning_maintenance_hatch')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('getavaritiat4crafting')
        .itemInputs(
            '4x kubejs:animated/draconicprocessor',
            '4x gtceu:neutronium_frame',
            '8x gtceu:neutronium_plate',
            'minecraft:beacon'
        )
        .itemOutputs('avaritia:extreme_crafting_table')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Item.of('avaritia:double_compressed_crafting_table')).EUt(GTValues.VA[GTValues.UEV]).CWUt(256))

    event.recipes.gtceu.assembly_line('getstarfeeder')
        .itemInputs(
            '8x kubejs:animated/draconicprocessor',
            '4x gtceu:neutronium_frame',
            '32x gtceu:atomic_casing',
            '8x gtceu:neutronium_plate',
            '8x pipez:item_pipe'
        )
        .itemOutputs('gregecore:star_feeder')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_input_bus')).EUt(GTValues.VA[GTValues.UEV]).CWUt(256))

    event.recipes.gtceu.assembly_line('getrepairpart')
        .itemInputs(
            '4x kubejs:animated/draconicprocessor',
            '4x gtceu:neutronium_frame',
            '32x gtceu:high_temperature_smelting_casing',
            '8x gtceu:neutronium_plate',
        )
        .itemOutputs('gregecore:repair_part_input_machine')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Item.of('gregecore:star_feeder')).EUt(GTValues.VA[GTValues.UEV]).CWUt(256))

    event.recipes.gtceu.assembly_line('getspecializedassemblyline')
        .itemInputs(
            'avaritia:infinity_ingot',
            '16x kubejs:animated/draconicprocessor',
            '32x gtceu:neutronium_frame',
            '16x gtceu:uhv_robot_arm',
            '16x gtceu:uhv_field_generator',
            '16x gtceu:uhv_emitter'
        )
        .itemOutputs('gregecore:specializedassemblyline')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Item.of('avaritia:infinity_ingot')).EUt(GTValues.VA[GTValues.UEV]).CWUt(512))

    event.recipes.gtceu.assembly_line('getepicparallel')
        .itemInputs(
            'avaritia:infinity_ingot',
            '16x kubejs:animated/draconicprocessor',
            '32x gtceu:neutronium_frame',
            '4x gtceu:uv_parallel_hatch',
            '16x avaritia:endest_pearl',
            '8x gtceu:uhv_sensor',
            '4x gtceu:uhv_field_generator'
        )
        .itemOutputs('gtceu:uhv_uhv_parallel_hatch')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Item.of('avaritia:infinity_catalyst')).EUt(GTValues.VA[GTValues.UEV]).CWUt(512))

    event.recipes.gtceu.assembly_line('getdonationalt2634144arrrrrr')
        .itemInputs(
            '64x avaritia:infinity_ingot',
            '64x gtceu:neutronium_frame',
            '64x kubejs:animated/draconicprocessor',
        )
        .itemOutputs('gregecore:ascencion_holder')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Item.of('bloodmagic:blankrune')).EUt(GTValues.VA[GTValues.UEV]).CWUt(512))

})