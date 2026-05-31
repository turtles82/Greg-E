ServerEvents.recipes((event) => {

    event.recipes.gtceu.mixer('getthelastdust')
        .itemInputs(
            '2x kubejs:dustwithbroom'
        )
        .inputFluids(
            'gtceu:neutronium 16'
        )
        .itemOutputs(
            'kubejs:neutroniuminfused'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.centrifuge('getthedraconium')
        .itemInputs(
            'kubejs:neutroniuminfused'
        )
        .chancedOutput('draconicevolution:draconium_dust', 100, 0)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.centrifuge('getthenebuliumoreeeee')
        .itemInputs(
            'kubejs:neutroniuminfused'
        )
        .chancedOutput('gtceu:raw_nebulon_omega', 100, 0)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .circuit(2)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:neutroniuminfused'
        )
        .chancedOutput('gtceu:raw_nyxium', 100, 0)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .circuit(3)

})