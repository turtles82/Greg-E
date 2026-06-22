ServerEvents.recipes((event) => {

    event.recipes.gtceu.sascrafting()
        .itemInputs(
            'minecraft:dirt'
        )
        .itemOutputs(
            'minecraft:stick'
        )
        .duration(1000)

})