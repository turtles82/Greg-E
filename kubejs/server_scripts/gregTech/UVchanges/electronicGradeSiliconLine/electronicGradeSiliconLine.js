ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:czochralskipull', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/uv',
            B: 'gtceu:nonconducting_casing',
            C: 'gtceu:watertight_casing',
            D: 'gtceu:hastelloy_c_276_frame',
            E: 'gtceu:uv_machine_hull'
        }
    )

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:silicon_dioxide_dust',
            '2x gtceu:carbon_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 250'
        )
        .itemOutputs(
            'gtceu:metallurgical_grade_silicon_ingot'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .blastFurnaceTemp(7500)
        .duration(300)
        .circuit(2)

    event.recipes.gtceu.macerator()
        .itemInputs(
            'gtceu:metallurgical_grade_silicon_ingot'
        )
        .itemOutputs(
            'gtceu:metallurgical_grade_silicon_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            'gtceu:metallurgical_grade_silicon_dust'
        )
        .inputFluids(
            'gtceu:hydrochloric_acid 1000'
        )
        .outputFluids(
            'gtceu:trichlorosilane 500'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    event.recipes.gtceu.distillery()
        .inputFluids(
            'gtceu:trichlorosilane 1000'
        )
        .outputFluids(
            'gtceu:polycrystalline_silicon 750'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(300)
        .circuit(1)

    event.recipes.gtceu.autoclave()
        .inputFluids(
            'gtceu:polycrystalline_silicon 500'
        )
        .itemOutputs(
            'gtceu:polycrystalline_silicon_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(250)
        .circuit(1)

    event.recipes.gtceu.czochralskipull()
        .itemInputs(
            'gtceu:polycrystalline_silicon_dust'
        )
        .itemOutputs(
            'gtceu:electronic_grade_silicon_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(250)
        .circuit(1)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:electronic_grade_silicon_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 250'
        )
        .itemOutputs(
            'gtceu:electronic_grade_silicon_ingot'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .blastFurnaceTemp(7500)
        .duration(600)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:electronic_grade_silicon_ingot'
        )
        .itemOutputs(
            'gtceu:electronic_grade_silicon_plate'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.autoclave()
        .itemInputs(
            'gtceu:electronic_grade_silicon_plate'
        )
        .inputFluids(
            'gtceu:distilled_water 500'
        )
        .itemOutputs(
            'gtceu:shiny_electronic_grade_silicon_plate'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
      
    event.recipes.gtceu.circuit_assembler()
        .itemInputs(
            'gtceu:wetware_printed_circuit_board',
            '8x gtceu:stem_cells',
            '4x gtceu:polybenzimidazole_small_fluid_pipe',
            '4x gtceu:shiny_electronic_grade_silicon_plate',
            '8x gtceu:silicone_rubber_foil',
            '4x gtceu:hsse_bolt'

        )
        .inputFluids(
            'gtceu:sterilized_growth_medium 200'
        )
        .itemOutputs(
            '4x gtceu:neuro_processing_unit'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)


})