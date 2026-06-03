ServerEvents.recipes((event) => {

    event.remove('gtceu:shaped/uev_1a_energy_converter')
    event.remove('gtceu:shaped/uev_4a_energy_converter')
    event.remove('gtceu:shaped/uev_8a_energy_converter')
    event.remove('gtceu:shaped/uev_16a_energy_converter')

    event.shaped(
        Item.of('gtceu:uev_1a_energy_converter', 1),
        [
            ' AA',
            'ABC',
            ' AA'
        ],
        {
            A: 'gtceu:diamond_lattice_cable_single_wire',
            B: 'gtceu:uev_machine_hull',
            C: 'kubejs:animated/draconicprocessor'
        }
    )

    event.shaped(
        Item.of('gtceu:uev_4a_energy_converter', 1),
        [
            ' AA',
            'ABC',
            ' AA'
        ],
        {
            A: 'gtceu:diamond_lattice_cable_quadruple_wire',
            B: 'gtceu:uev_machine_hull',
            C: 'kubejs:animated/draconicprocessor'
        }
    )

    event.shaped(
        Item.of('gtceu:uev_8a_energy_converter', 1),
        [
            ' AA',
            'ABC',
            ' AA'
        ],
        {
            A: 'gtceu:diamond_lattice_cable_octal_wire',
            B: 'gtceu:uev_machine_hull',
            C: 'kubejs:animated/draconicprocessor'
        }
    )

    event.shaped(
        Item.of('gtceu:uev_16a_energy_converter', 1),
        [
            ' AA',
            'ABC',
            ' AA'
        ],
        {
            A: 'gtceu:diamond_lattice_cable_hex_wire',
            B: 'gtceu:uev_machine_hull',
            C: 'kubejs:animated/draconicprocessor'
        }
    )

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uev_machine_hull',
            'kubejs:animated/draconicprocessor',
            '4x gtceu:red_alloy_hex_cable',
            '16x gtceu:diamond_lattice_cable_hex_wire'
        )
        .itemOutputs(
            'gtmutils:uev_64a_energy_converter'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(40)

    event.shaped(
        Item.of('gtceu:uev_machine_casing', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'gtceu:vibranium_plate',
            B: '#forge:tools/wrenches'
        }
    )

    event.recipes.gtceu.assembler()
        .itemInputs(
            '8x gtceu:vibranium_plate'
        )
        .itemOutputs(
            'gtceu:uev_machine_casing'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(40)
        .circuit(8)

    event.remove({id: 'gtceu:shaped/uev_machine_hull'})
    event.shaped(
        Item.of('gtceu:uev_machine_hull', 1),
        [
            'CDC',
            'ABA',
            '   '
        ],
        {
            A: 'gtceu:diamond_lattice_cable_single_wire',
            B: 'gtceu:uev_machine_casing',
            C: 'gtceu:polybenzimidazole_plate',
            D: 'gtceu:stellarium_plate'
        }
    )

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uev_machine_casing',
            '2x gtceu:diamond_lattice_cable_single_wire',
            'gtceu:stellarium_plate'
        )
        .inputFluids(
            'gtceu:polybenzimidazole 288'
        )
        .itemOutputs(
            'gtceu:uev_machine_hull'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(40)
        .circuit(8)

    event.recipes.gtceu.assembly_line()
        .itemInputs(
            'gtceu:uev_machine_hull',
            '4x gtceu:diamond_lattice_cable_single_wire',
            '2x gtceu:highly_advanced_soc',
            'kubejs:animated/draconicprocessor',
            '2x gtceu:ruthenium_trinium_americium_neutronate_double_wire'
        )
        .inputFluids(
            'gtceu:sodium_potassium 15000',
            'gtceu:soldering_alloy 7000'
        )
        .itemOutputs('gtceu:uev_energy_input_hatch')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_energy_input_hatch')).EUt(GTValues.VA[GTValues.UEV]).CWUt(512))

    event.recipes.gtceu.assembly_line()
        .itemInputs(
            'gtceu:uev_machine_hull',
            '4x gtceu:diamond_lattice_cable_spring',
            '2x gtceu:highly_advanced_soc',
            'kubejs:animated/draconicprocessor',
            '2x gtceu:ruthenium_trinium_americium_neutronate_double_wire'
        )
        .inputFluids(
            'gtceu:sodium_potassium 15000',
            'gtceu:soldering_alloy 7000'
        )
        .itemOutputs('gtceu:uev_energy_output_hatch')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_energy_output_hatch')).EUt(GTValues.VA[GTValues.UEV]).CWUt(512))

    event.remove({id: 'gtceu:assembler/uev_transformer'})
    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uev_machine_hull',
            '4x gtceu:diamond_lattice_cable_single_wire',
            'gtceu:highly_advanced_soc'
        )
        .itemOutputs(
            'gtceu:uev_transformer_1a'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UEV])

    event.remove({id: 'gtceu:assembler/energy_hatch_4a_uev'})
    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uev_energy_input_hatch',
            '2x gtceu:diamond_lattice_cable_quadruple_wire',
            '2x gtceu:stellarium_plate'
        )
        .itemOutputs(
            'gtceu:uev_energy_input_hatch_4a'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UEV])

    event.remove({id: 'gtceu:assembler/energy_hatch_16a_uev'})
    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uev_transformer_1a',
            'gtceu:uev_energy_input_hatch_4a',
            '2x gtceu:diamond_lattice_cable_octal_wire',
            '4x gtceu:stellarium_plate'
        )
        .itemOutputs(
            'gtceu:uev_energy_input_hatch_16a'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UEV])

        event.remove({id: 'gtceu:assembler/dynamo_hatch_4a_uev'})
    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uev_energy_output_hatch',
            '2x gtceu:diamond_lattice_cable_quadruple_wire',
            '2x gtceu:stellarium_plate'
        )
        .itemOutputs(
            'gtceu:uev_energy_output_hatch_4a'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UEV])

    event.remove({id: 'gtceu:assembler/dynamo_hatch_16a_uev'})
    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:uev_transformer_1a',
            'gtceu:uev_energy_output_hatch_4a',
            '2x gtceu:diamond_lattice_cable_octal_wire',
            '4x gtceu:stellarium_plate'
        )
        .itemOutputs(
            'gtceu:uev_energy_output_hatch_16a'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.UEV])

})