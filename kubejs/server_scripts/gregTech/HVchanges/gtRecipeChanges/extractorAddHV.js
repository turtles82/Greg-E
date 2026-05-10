ServerEvents.recipes((event) => {

    event.recipes.gtceu.extractor('deepslatedrillingfluid')
        .itemInputs(
            '2x kubejs:deepslateearth'
        )
        .outputFluids(
            'kubejs:deepdrill 1000'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])

})