ServerEvents.recipes((event) => {

    event.recipes.gtceu.compressor()
        .itemInputs(
            '16x gtceu:gloomstone_dust'
        )
        .itemOutputs(
            'gtceu:gloomstone_gem'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(350)

    event.recipes.gtceu.extractor()
        .itemInputs(
            'undergarden:gloomgourd'
        )
        .outputFluids(
            'undergarden:virulent_mix_source 150'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.autoclave()
        .itemInputs(
            'gtceu:gloomstone_gem'
        )
        .inputFluids(
            'undergarden:virulent_mix_source 1000'
        )
        .itemOutputs(
            'gtceu:flawless_gloomstone_gem'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(400)
        .circuit(1)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:nitric_acid 750',
            'gtceu:sulfuric_acid 550',
            'undergarden:virulent_mix_source 450'
        )
        .outputFluids(
            'gtceu:unrefined_abyssal_mix 650'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(550)
        .circuit(6)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:unrefined_abyssal_mix 1500',
            'gtceu:chlorine 850'
        )
        .itemInputs(
            '6x undergarden:ink_mushroom'
        )
        .outputFluids(
            'gtceu:abyssal_nitroglyphic_acid 2000'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(1200)
        .circuit(6)

    event.recipes.gtceu.autoclave()
        .itemInputs(
            'gtceu:flawless_gloomstone_gem'
        )
        .inputFluids(
            'gtceu:abyssal_nitroglyphic_acid 500'
        )
        .itemOutputs(
            'gtceu:exquisite_gloomstone_gem'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(300)
        .circuit(1)

    event.recipes.gtceu.extractor()
        .itemInputs(
            'undergarden:mogmoss'
        )
        .outputFluids(
            'gtceu:mogmoss_fluid 144'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.cutter()
        .itemInputs(
            'gtceu:exquisite_gloomstone_gem'
        )
        .inputFluids(
            'gtceu:mogmoss_fluid 144'
        )
        .itemOutputs(
            '4x gtceu:gloomstone_plate'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(300)

    event.recipes.gtceu.large_chemical_reactor('nanocpuwafer2')
        .itemInputs(
            'gtceu:cpu_wafer',
            'gtceu:gloomstone_plate'
        )
        .inputFluids(
            'gtceu:glowstone 500'
        )
        .itemOutputs(
            '4x gtceu:nano_cpu_wafer'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(1000)
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(24)
        

})