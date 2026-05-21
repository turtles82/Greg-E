ServerEvents.recipes((event) => {

    event.recipes.gtceu.specialoreprocessingplant()
        .itemInputs(
            'gtceu:raw_decursium' 
        )
        .itemOutputs(
            '4x gtceu:recursium_dust'
        )
        .outputFluids(
            'gtceu:decursium_oxide 1000'
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.autoclave()
        .itemInputs(
            '2x gtceu:recursium_dust'
        )
        .inputFluids(
            'gtceu:neutronium 16'
        )
        .itemOutputs(
            'gtceu:recursium_2_dust'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.autoclave()
        .itemInputs(
            '2x gtceu:recursium_2_dust'
        )
        .inputFluids(
            'gtceu:neutronium 16'
        )
        .itemOutputs(
            'gtceu:recursium_3_dust'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:recursium_3_dust'
        )
        .inputFluids(
            'gtceu:decursium_oxide 500'
        )
        .itemOutputs(
            'gtceu:decursium_dust' 
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(4)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:decursium_dust'
        )
        .inputFluids(
            'gtceu:neutronium 160'
        )
        .itemOutputs(
            'gtceu:hot_decursium_ingot' 
        )
        .blastFurnaceTemp(11500)
        .duration(800)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_decursium_ingot' 
        )
        .itemOutputs(
            'gtceu:decursium_ingot' 
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:decursium_ingot'
        )
        .itemOutputs(
            'gtceu:decursium_block' 
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.UHV])


    

    

})