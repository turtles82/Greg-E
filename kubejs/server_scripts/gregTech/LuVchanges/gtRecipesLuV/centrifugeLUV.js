ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('getthebismuth')
        .itemInputs(
            'kubejs:gassydust'
        )
        .chancedOutput('gtceu:bismuth_dust', 200, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(1)

})