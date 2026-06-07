ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('getberyllium')
        .itemInputs(
            'kubejs:activatedrune',
        )
        .chancedOutput('gtceu:raw_beryllium', 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(1)

    event.recipes.gtceu.centrifuge('getstibnite')
        .itemInputs(
            'kubejs:activatedrune',
        )
        .chancedOutput('gtceu:raw_stibnite', 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(2)

    event.recipes.gtceu.centrifuge('getnaquadah')
        .itemInputs(
            'kubejs:activatedrune',
        )
        .itemOutputs(
            '2x gtceu:raw_naquadah'
        )
        .duration(50)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(3)

    event.recipes.gtceu.centrifuge('getboron')
        .itemInputs(
            'kubejs:activatedrune',
        )
        .itemOutputs(
            '3x gtceu:boron_dust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(4)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:activatedrune',
        )
        .outputFluids(
            'gtceu:voidium 1000'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(5)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:activatedrune',
        )
        .itemOutputs(
            '2x gtceu:sturenium_35_dust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(6)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:activatedrune',
        )
        .itemOutputs(
            '2x gtceu:raw_plutonium'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(7)

});
