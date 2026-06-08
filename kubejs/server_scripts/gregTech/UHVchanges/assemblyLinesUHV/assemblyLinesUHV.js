ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembly_line('getenhancedfusion')
        .itemInputs(
            '16x #gtceu:circuits/uhv',
            '8x gtceu:fusion_coil',
            '2x gtceu:gravi_star',
            '6x gregecore:dense_draconium_cable_plate',
            '16x gtceu:uv_sensor',
            '16x gtceu:uv_field_generator',
            '16x gregecore:draconiumfusion'
        )
        .inputFluids(
            'gtceu:soldering_alloy 10000'
        )
        .itemOutputs('gregecore:enhancedfr')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_fusion_reactor')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('getenhancedcoolantinput')
        .itemInputs(
            '4x #gtceu:circuits/uhv',
            '2x gtceu:gravi_star',
            '6x gregecore:dense_draconium_cable_plate',
            '2x gtceu:uv_sensor',
            '2x gtceu:uv_field_generator',
            '8x gregecore:draconiumfusion'
        )
        .inputFluids(
            'gtceu:soldering_alloy 5000'
        )
        .itemOutputs('gregecore:advanced_coolant_input_machine')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gregecore:coolant_input_machine')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('getbettericircuit1111')
        .itemInputs(
            'gtceu:wetware_printed_circuit_board',
            '2x gtceu:wetware_processor_assembly',
            'gtceu:highly_advanced_soc',
            '2x kubejs:ultimatecapacitor',
            '2x kubejs:ultimateinductor',
            '24x gtceu:fine_yttrium_barium_cuprate_wire',
            '32x gtceu:polybenzimidazole_foil',
            '4x gtceu:europium_plate'
        )
        .inputFluids(
            'gtceu:soldering_alloy 1000'
        )
        .itemOutputs('2x gtceu:wetware_processor_computer')
        .duration(350)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('kubejs:ultimateinductor')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('getbettericircuit222222')
        .itemInputs(
            '2x gtceu:tritanium_frame',
            '2x gtceu:wetware_processor_computer',
            '4x kubejs:ultimatediode',
            '4x kubejs:ultimatetransistor',
            '64x gtceu:polybenzimidazole_foil',
            'gtceu:highly_advanced_soc',
            '64x gtceu:ram_chip',
            '16x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire',
            '8x gtceu:europium_plate'
        )
        .inputFluids(
            'gtceu:soldering_alloy 3000',
            'gtceu:polybenzimidazole 1000'
        )
        .itemOutputs('2x gtceu:wetware_processor_mainframe')
        .duration(850)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('kubejs:ultimatetransistor')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('getenhancedinput')
        .itemInputs(
            '4x #gtceu:circuits/uhv',
            '2x gtceu:gravi_star',
            '6x gregecore:dense_draconium_cable_plate',
            '2x gtceu:uv_field_generator',
            '8x gregecore:draconiumfusion'
        )
        .inputFluids(
            'gtceu:soldering_alloy 5000'
        )
        .itemOutputs('gregecore:advanced_heater_input_machine')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gregecore:advanced_coolant_input_machine')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('getlearningaccebf')
        .itemInputs(
            '64x #gtceu:circuits/uhv',
            '16x gtceu:gravi_star',
            '32x gtceu:uhv_sensor',
            '32x gtceu:uhv_field_generator',
            '8x gregecore:awakened_draconium_coil',
            '16x gtceu:shock_proof_cutting_casing',
            'kubejs:learningchip'
        )
        .inputFluids(
            'gtceu:soldering_alloy 15000'
        )
        .itemOutputs('gregecore:learning_acc_ebf')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:mega_blast_furnace')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('bv1g2b1f21vbawwawa2v12dv121')
        .itemInputs(
            '16x #gtceu:circuits/uhv',
            '8x gtceu:gravi_star',
            '64x gtceu:long_neutronium_rod',
            '16x gtceu:uhv_electric_motor',
            '16x gtceu:uhv_electric_piston',
            '32x gtceu:atomic_casing',
            '16x gtceu:hastelloy_c_276_frame',
            '16x gtceu:stress_proof_casing'
        )
        .inputFluids(
            'gtceu:soldering_alloy 10000'
        )
        .itemOutputs('gregecore:spaceelevator')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:long_neutronium_rod')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('gvfdbvfgd544545454554')
        .itemInputs(
            '16x #gtceu:circuits/uhv',
            '4x gtceu:uhv_emitter',
            '4x gtceu:uhv_electric_piston',
            '32x gtceu:atomic_casing',
            '16x gtceu:laminated_glass',
            '16x gtceu:vibration_safe_casing',
            '16x gtceu:computer_casing',
            '8x gtceu:vibranium_gear',
            '12x gtceu:vibranium_rod',
            '16x gtceu:double_vibranium_plate'
        )
        .inputFluids(
            'gtceu:soldering_alloy 10000'
        )
        .itemOutputs('gregecore:deep_space_explorer')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:vibranium_plate')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('dsvdfs54v5445545hvhvj')
        .itemInputs(
            '4x #gtceu:circuits/uhv',
            'gtceu:atomic_casing',
            '4x gtceu:small_vibranium_gear',
            '8x gtceu:vibranium_plate'
        )
        .inputFluids(
            'gtceu:soldering_alloy 10000'
        )
        .itemOutputs('gregecore:drone_access_machine')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:small_vibranium_gear')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('vf21vd2fv12dfv12df112')
        .itemInputs(
            '16x #gtceu:circuits/uhv',
            '16x gtceu:vibranium_foil',
            '4x gtceu:vibranium_gear',
            '8x gtceu:vibranium_plate',
            '4x gtceu:neutronium_frame',
            'gtceu:red_dye_spray_can'
        )
        .inputFluids(
            'gtceu:soldering_alloy 10000'
        )
        .itemOutputs('gregecore:spaceship1')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('ad_astra:rocket_nose_cone')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('dsv1d2fv12d1b2f1gb12')
        .itemInputs(
            '32x #gtceu:circuits/uhv',
            '16x gtceu:mellodium_foil',
            '4x gtceu:mellodium_gear',
            '8x gtceu:mellodium_plate',
            '4x gtceu:neutronium_frame',
            'gtceu:gray_dye_spray_can'
        )
        .inputFluids(
            'gtceu:soldering_alloy 10000'
        )
        .itemOutputs('gregecore:spaceship2')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gregecore:spaceship1')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('dfg12d2gb12121b2f1')
        .itemInputs(
            '64x #gtceu:circuits/uhv',
            '32x gtceu:prismalium_foil',
            '8x gtceu:prismalium_gear',
            '16x gtceu:prismalium_plate',
            '16x gtceu:neutronium_frame',
            'gtceu:black_dye_spray_can'
        )
        .inputFluids(
            'gtceu:soldering_alloy 10000'
        )
        .itemOutputs('gregecore:spaceship3')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gregecore:spaceship2')).EUt(GTValues.VA[GTValues.UHV]).CWUt(256))


})