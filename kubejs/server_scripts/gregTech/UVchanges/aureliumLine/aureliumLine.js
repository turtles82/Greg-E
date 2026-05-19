ServerEvents.recipes((event) => {

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:raw_aurelium'
        )
        .inputFluids(
            'gtceu:aqua_regia 350'
        )
        .outputFluids(
            'gtceu:aurelium_nitrate_solution 500',
            'gtceu:aurelium_sludge 350'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(300)

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:aurelium_nitrate_solution 600'
        )
        .outputFluids(
            'gtceu:oxygen 250',
            'gtceu:nitrogen 100',
        )
        .itemOutputs(
            'gtceu:refined_aurelium_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(600)
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:aurelium_sludge 250'
        )
        .outputFluids(
            'gtceu:oxygen 450',
            'gtceu:hydrogen 150',
        )
        .itemOutputs(
            'gtceu:purified_aurelium_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:fluorine 780',
            'gtceu:hydrogen 400',
            'gtceu:vadricium 250'
        )
        .outputFluids(
            'gtceu:fluorovadric_acid 1000'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(450)
        .circuit(8)

    event.recipes.gtceu.extractor()
        .itemInputs(
            'gtceu:vadricium_dust'
        )
        .outputFluids(
            'gtceu:vadricium 144'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:purified_aurelium_dust',
            'gtceu:refined_aurelium_dust'
        )
        .inputFluids(
            'gtceu:fluorovadric_acid 450'
        )
        .itemOutputs(
            'gtceu:unstable_aurelium_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(650)
        .circuit(8)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:unstable_aurelium_dust'
        )
        .inputFluids(
            'gtceu:argon 500'
        )
        .itemOutputs(
            'gtceu:hot_aurelium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(900)
        .blastFurnaceTemp(8000)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_aurelium_ingot'
        )
        .itemOutputs(
            'gtceu:aurelium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(350)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:aurelium_ingot'
        )
        .itemOutputs(
            'gtceu:aurelium_block'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)

    event.replaceInput(
        'gtceu:shaped/parallel_hatch_mk3',
        'gtceu:vanadium_gallium_double_cable',
        'gtceu:aurelium_block'
    )

})