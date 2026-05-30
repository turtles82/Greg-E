ServerEvents.recipes((event) => {

    event.remove({id: 'gtceu:centrifuge/plutonium_239_separation'})
    event.recipes.gtceu.centrifuge()
        .itemInputs(
            '4x gtceu:plutonium_dust'
        )
        .itemOutputs(
            'gtceu:plutonium_241_dust'
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.LV])

})