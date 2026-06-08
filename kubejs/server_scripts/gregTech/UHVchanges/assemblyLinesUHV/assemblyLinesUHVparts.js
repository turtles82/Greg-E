ServerEvents.recipes(event => {

    event.recipes.gtceu.assembly_line('getuhvmotor')
        .itemInputs(
            '2x gtceu:long_magnetic_samarium_rod',
            '8x gtceu:long_nebulon_alpha_rod',
            '8x gtceu:nebulon_alpha_ring',
            '16x gtceu:nebulon_alpha_round',
            '64x gtceu:fine_tritanium_wire',
            '64x gtceu:fine_tritanium_wire',
            '64x gtceu:fine_tritanium_wire',
            '32x gregecore:draconium_cable_single_wire'
        )
        .inputFluids(
            'gtceu:soldering_alloy 576',
            'gtceu:lubricant 1000',
            'gtceu:enriched_naquadah 576'
        )
        .itemOutputs('gtceu:uhv_electric_motor')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_electric_motor')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('getuhvpump')
        .itemInputs(
            'gtceu:uhv_electric_motor',
            'gregecore:draconium_cable_octal_wire',
            '4x gtceu:nebulon_alpha_plate',
            '16x gtceu:nebulon_alpha_screw',
            '16x gtceu:silicone_rubber_ring',
            'gtceu:naquadah_alloy_rotor',
            '4x gregecore:draconium_cable_single_wire'
        )
        .inputFluids(
            'gtceu:soldering_alloy 576',
            'gtceu:lubricant 1000',
            'gtceu:enriched_naquadah 576'
        )
        .itemOutputs('gtceu:uhv_electric_pump')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_electric_pump')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembler('getfluidregulator')
        .itemInputs(
            'gtceu:uhv_electric_pump',
            '2x #gtceu:circuits/uhv'
        )
        .itemOutputs(
            'gtceu:uhv_fluid_regulator'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.assembly_line('getuhvconveyor')
        .itemInputs(
            '2x gtceu:uhv_electric_motor',
            '4x gtceu:nebulon_alpha_plate',
            '8x gtceu:nebulon_alpha_ring',
            '32x gtceu:nebulon_alpha_round',
            '8x gtceu:nebulon_alpha_screw',
            '4x gregecore:draconium_cable_single_wire'
        )
        .inputFluids(
            'gtceu:soldering_alloy 576',
            'gtceu:lubricant 1000',
            'gtceu:styrene_butadiene_rubber 3456',
            'gtceu:enriched_naquadah 576'
        )
        .itemOutputs('gtceu:uhv_conveyor_module')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_conveyor_module')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('getuhvpiston')
        .itemInputs(
            'gtceu:uhv_electric_motor',
            '8x gtceu:nebulon_alpha_plate',
            '8x gtceu:nebulon_alpha_ring',
            '32x gtceu:nebulon_alpha_round',
            '8x gtceu:nebulon_alpha_rod',
            '2x gtceu:naquadria_gear',
            '4x gtceu:small_naquadria_gear',
            '4x gregecore:draconium_cable_single_wire'
        )
        .inputFluids(
            'gtceu:soldering_alloy 576',
            'gtceu:lubricant 1000',
            'gtceu:enriched_naquadah 576'
        )
        .itemOutputs('gtceu:uhv_electric_piston')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_electric_piston')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('getuhvrobotarm')
        .itemInputs(
            '8x gtceu:long_nebulon_alpha_rod',
            '2x gtceu:nebulon_alpha_gear',
            '6x gtceu:small_nebulon_alpha_gear',
            '2x gtceu:uhv_electric_motor',
            'gtceu:uhv_electric_piston',
            'kubejs:animated/draconicprocessor',
            '2x #gtceu:circuits/uhv',
            '4x #gtceu:circuits/uv',
            '4x gregecore:draconium_cable_single_wire'
        )
        .inputFluids(
            'gtceu:soldering_alloy 1728',
            'gtceu:lubricant 1000',
            'gtceu:enriched_naquadah 576'
        )
        .itemOutputs('gtceu:uhv_robot_arm')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_robot_arm')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('getuhvemitter')
        .itemInputs(
            'gtceu:nebulon_alpha_frame',
            'gtceu:uhv_electric_motor',
            '8x gtceu:long_nebulon_alpha_rod',
            'gtceu:gravi_star',
            '4x #gtceu:circuits/uhv',
            '64x gtceu:naquadria_foil',
            '32x gtceu:naquadria_foil',
            '8x gregecore:draconium_cable_single_wire'
        )
        .inputFluids(
            'gtceu:soldering_alloy 1728',
            'gtceu:enriched_naquadah 576'
        )
        .itemOutputs('gtceu:uhv_emitter')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_emitter')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('getuhvsensor')
        .itemInputs(
            'gtceu:nebulon_alpha_frame',
            'gtceu:uhv_electric_motor',
            '8x gtceu:nebulon_alpha_plate',
            'gtceu:gravi_star',
            '4x #gtceu:circuits/uhv',
            '64x gtceu:naquadria_foil',
            '32x gtceu:naquadria_foil',
            '8x gregecore:draconium_cable_single_wire'
        )
        .inputFluids(
            'gtceu:soldering_alloy 1728',
            'gtceu:enriched_naquadah 576'
        )
        .itemOutputs('gtceu:uhv_sensor')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_sensor')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))

    event.recipes.gtceu.assembly_line('getuhvfieldgenerator')
        .itemInputs(
            'gtceu:nebulon_alpha_frame',
            '12x gtceu:nebulon_alpha_plate',
            'gtceu:gravi_star',
            '2x gtceu:uhv_emitter',
            '2x #gtceu:circuits/uhv',
            '64x gtceu:fine_tritanium_wire',
            '64x gtceu:fine_tritanium_wire',
            '8x gregecore:draconium_cable_single_wire'
        )
        .inputFluids(
            'gtceu:soldering_alloy 1728',
            'gtceu:enriched_naquadah 576'
        )
        .itemOutputs('gtceu:uhv_field_generator')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_field_generator')).EUt(GTValues.VA[GTValues.UHV]).CWUt(128))


})