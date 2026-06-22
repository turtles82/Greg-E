ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembly_line('getrealityfracturepart')
        .itemInputs(
            '64x avaritia:infinity',
            '64x #gtceu:circuits/uhv',
            '64x #gtceu:circuits/uhv',
            '64x #gtceu:circuits/uhv',
            '64x gtceu:neutronium_frame',
            '64x gtceu:advanced_smd_diode',
            '64x gtceu:advanced_smd_capacitor',
            '64x gtceu:advanced_smd_transistor',
            '64x gtceu:advanced_smd_resistor',
            '64x gtceu:advanced_smd_inductor',
            '64x gtceu:polybenzimidazole_foil',
            '64x gtceu:ram_chip',
            '64x gtceu:qbit_cpu_chip',
            '64x gregecore:awakened_draconium_cable_double_wire',
            '32x gtceu:double_neutronium_plate'
        )
        .inputFluids(
            'gtceu:soldering_alloy 50000',
            'gtceu:polybenzimidazole 50000'
        )
        .itemOutputs('gregecore:realityfracturepart')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Item.of('gregecore:tome3')).EUt(GTValues.VA[GTValues.UEV]).CWUt(1024))

    event.recipes.gtceu.assembly_line('getrealityfractureneginne')
        .itemInputs(
            '64x avaritia:infinity',
            '64x gtceu:uhv_sensor',
            '64x gtceu:uhv_electric_motor',
            '64x gtceu:uhv_conveyor_module',
            '64x gtceu:uhv_electric_piston',
            '64x gtceu:uhv_robot_arm',
            '64x gtceu:uhv_field_generator',
            '64x gtceu:uhv_emitter',
            '64x gtceu:qbit_cpu_chip',
            '64x gregecore:awakened_draconium_coil',
            '64x gtceu:double_neutronium_plate'
        )
        .inputFluids(
            'gtceu:soldering_alloy 50000',
            'gtceu:polybenzimidazole 50000'
        )
        .itemOutputs('gregecore:realityfractureengine')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Item.of('gregecore:tome1')).EUt(GTValues.VA[GTValues.UEV]).CWUt(1024))

})