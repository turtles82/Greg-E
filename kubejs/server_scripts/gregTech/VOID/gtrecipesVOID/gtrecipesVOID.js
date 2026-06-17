ServerEvents.recipes((event) => {

    event.remove({ id: 'gtceu:extruder/nan_certificate'})
    event.recipes.gtceu.mixer('notnoobanymore')
        .itemInputs(
            'gregecore:unstable'
        )
        .inputFluids(
            'gtceu:nlgibsonium 1000',
            'gtceu:waidaoium 1000'
        )
        .itemOutputs(
            'gtceu:nan_certificate'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1000)

    event.recipes.gtceu.gas_collector('winner1')
        .outputFluids(
            'gtceu:nlgibsonium 100'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .circuit(13)
        .dimension("gregecore:fracture_dimension")

    event.recipes.gtceu.gas_collector('winner2')
        .outputFluids(
            'gtceu:waidaoium 100'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .circuit(14)
        .dimension("gregecore:fracture_dimension")

})