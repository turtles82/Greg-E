ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler('parallellboosterfirst')
        .itemInputs(
            '16x #gtceu:circuits/zpm',
            '32x gregecore:blood_infused_cable_double_wire',
            '2x gtceu:hssg_frame',
            '2x gtceu:zpm_robot_arm',
            '2x gtceu:zpm_electric_piston'
        )
        .itemOutputs('gregecore:parallel_booster_machine')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(1)

    event.recipes.gtceu.assembler()
        .itemInputs(
            '32x #gtceu:circuits/zpm',
            '32x gregecore:blood_infused_cable_double_wire',
            '32x gtceu:high_temperature_smelting_casing',
            '32x gtceu:stress_proof_casing',
            '8x gtceu:zpm_robot_arm',
            '8x gtceu:zpm_electric_piston'
        )
        .itemOutputs('gregecore:giantabs')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(2)

});