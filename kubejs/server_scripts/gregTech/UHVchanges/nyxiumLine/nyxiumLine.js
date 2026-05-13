ServerEvents.recipes((event) => {

    event.recipes.gtceu.macerator()
        .itemInputs(
            'gtceu:raw_nyxium'
        )
        .itemOutputs(
            'gtceu:dormant_nyxium_dust'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(300)
    
    event.recipes.gtceu.fusion_reactor()
        .inputFluids(
            'gtceu:helium_3 16',
            'gtceu:hydrogen 16'
        )
        .outputFluids(
            'gtceu:stellaric_plasma 16'
        )
        .fusionStartEU(600000000)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(64)

    event.recipes.gtceu.advanced_fusion()
        .inputFluids(
            'gtceu:helium_3 1600',
            'gtceu:hydrogen 1600'
        )
        .outputFluids(
            'gtceu:stellaric_plasma 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 4300)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:dormant_nyxium_dust'
        )
        .inputFluids(
            'gtceu:stellaric_plasma 250'
        )
        .itemOutputs(
            'gtceu:purified_nyxium_dust'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.chemical_bath()
        .itemInputs(
            'gtceu:purified_nyxium_dust'
        )
        .inputFluids(
            'gtceu:radon 350'
        )
        .outputFluids(
            'gtceu:ionized_nyxium 500'
        )        
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(250)

    event.recipes.gtceu.autoclave()
        .inputFluids(
            'gtceu:ionized_nyxium 350'
        )
        .itemOutputs(
           'gtceu:stabilized_nyxium_dust'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(300)
        .circuit(1)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:stabilized_nyxium_dust'
        )
        .inputFluids(
            'gtceu:argon 600'
        )
        .itemOutputs(
            'gtceu:hot_nyxium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(800)
        .blastFurnaceTemp(10000)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_nyxium_ingot'
        )
        .inputFluids(
            'gtceu:nitrogen'
        )
        .itemOutputs(
            'gtceu:nyxium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(350)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:nyxium_ingot'
        )
        .itemOutputs(
            'gtceu:nyxium_block'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)

    event.replaceInput(
        'gtceu:shaped/parallel_hatch_mk4',
        'gtceu:yttrium_barium_cuprate_double_cable',
        'gtceu:nyxium_block'
    )    

})