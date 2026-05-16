ServerEvents.recipes((event) => {

    event.recipes.gtceu.gas_collector('gettwair')
        .circuit(5)
        .outputFluids(
            'gtceu:twilight_air 10000'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)
        .dimension("twilightforest:twilight_forest")

    event.recipes.gtceu.distillation_tower('distillcollectedtwair')
        .inputFluids(
            'gtceu:twilight_air 80000'
        )
        .outputFluids(
            'gtceu:nitrogen 35000',
            'gtceu:oxygen 30000',
            'gtceu:magic_gas 15000'
        )
        .duration(750)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.centrifuge('centrigutgeffemagicair')
        .inputFluids(
            'gtceu:magic_gas 5000'
        )
        .outputFluids(
            'gtceu:helium 1000',
            'gtceu:carbon_dioxide 1500',
            'gtceu:mana_mist 2500'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.chemical_reactor('getcrystalflerfefefdsdf')
        .itemInputs(
            'gtceu:nether_quartz_dust'
        )
        .inputFluids(
            'gtceu:mana_mist 1000'
        )
        .itemOutputs(
            'gtceu:raw_crystal_shards'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.autoclave('getmagiccrystalflerfefefdsdf')
        .itemInputs(
            'gtceu:raw_crystal_shards'
        )
        .inputFluids(
            'gtceu:glowstone 1000'
        )
        .itemOutputs(
            'gtceu:raw_energized_crystal_shards'
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.electrolyzer('getpixiegritssssssss')
        .itemInputs(
            'gtceu:raw_energized_crystal_shards'
        )
        .itemOutputs(
            'gtceu:pixie_grits_dust'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.autoclave('getpixiedustieeesyaaas')
        .itemInputs(
            'gtceu:pixie_grits_dust'
        )
        .inputFluids(
            'gtceu:distilled_water 750'
        )
        .itemOutputs(
            'gtceu:pixie_dust_dust'
        )
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.extractor('getpixiedustieeesfluidiiiesyaaas')
        .itemInputs(
            'gtceu:pixie_dust_dust'
        )
        .outputFluids(
            'gtceu:pixie_fluid 144'
        )
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.large_chemical_reactor('getbettergfvefgvrsfevfevfddfsvdfvs')
        .itemInputs(
            'gtceu:fiber_reinforced_circuit_board',
            '12x gtceu:annealed_copper_foil'
        )
        .inputFluids(
            'gtceu:iron_iii_chloride 500',
            'gtceu:pixie_fluid 250'
        )
        .itemOutputs(
            '4x gtceu:fiber_reinforced_printed_circuit_board'
        )
        .duration(1000)
        .circuit(24)
        .EUt(GTValues.VA[GTValues.LV])
        .cleanroom(CleanroomType.CLEANROOM)

    


})