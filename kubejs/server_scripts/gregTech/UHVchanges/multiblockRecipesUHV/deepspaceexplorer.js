ServerEvents.recipes((event) => {

    event.recipes.gtceu.deep_space_explore()
        .itemInputs(
            'minecraft:dirt'
        )
        .itemOutputs(
            'minecraft:stick'
        )
        .duration(1000)
        .addData('drone', 1)
        .addData('system', 1)

})