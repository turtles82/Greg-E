ServerEvents.recipes((event) => {

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            'gtceu:nickel_dust'
        )
        .inputFluids(
            'gtceu:oxygen 500'
        )
        .outputFluids(
            'gtceu:nickel_oxide 750'
        )
        .circuit(4)
        .EUt(GTValues.VA[GTValues.EV])
        .duration(75)

    event.recipes.gtceu.chemical_reactor()
        .inputFluids(
            'gtceu:nickel_oxide 500',
            'gtceu:hydrogen 1000'
        )
        .itemOutputs(
            '2x gtceu:dirty_nickelish_dust'
        )
        .outputFluids(
            'minecraft:water 550'
        )
        .circuit(4)
        .EUt(GTValues.VA[GTValues.EV])
        .duration(150)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:dirty_nickelish_dust'
        )
        .inputFluids(
            'gtceu:carbon_monoxide 750'
        )
        .outputFluids(
            'gtceu:nickel_tetracarbonyl 1000'
        )
        .itemOutputs(
            'gtceu:ash_dust',
            '2x gtceu:small_copper_dust',
            'gtceu:small_cobalt_dust'
        )
        .circuit(4)
        .EUt(GTValues.VA[GTValues.EV])
        .duration(250)

    event.recipes.gtceu.electric_blast_furnace()
        .inputFluids(
            'gtceu:nickel_tetracarbonyl 500'
        )
        .itemOutputs(
            'gtceu:pure_nickelish_dust'
        )
        .blastFurnaceTemp(4400)
        .EUt(GTValues.VA[GTValues.EV])
        .duration(125)

    event.recipes.gtceu.mixer('getfineduuuusttt2222')
        .itemInputs(
            '2x kubejs:voiddust',
            'gtceu:pure_nickelish_dust'
        )
        .inputFluids(
            'kubejs:meltedirt 250'
        )
        .itemOutputs(
            '3x kubejs:earthlydust'
        )
        .circuit(2)
        .EUt(GTValues.VA[GTValues.EV])
        .duration(100)


})