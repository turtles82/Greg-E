ServerEvents.recipes((event) =>{

    event.recipes.gtceu.centrifuge('gypsumget')
        .itemInputs(
            'kubejs:voiddust'
        )
        .itemOutputs(
            '2x gtceu:gypsum_dust'
        )
        .duration(100)
        .EUt(480)
        .circuit(1)

    event.recipes.gtceu.centrifuge('calciteget')
        .itemInputs(
            'kubejs:voiddust'
        )
        .itemOutputs(
            '2x gtceu:calcite_dust'
        )
        .duration(100)
        .EUt(480)
        .circuit(2)

    event.recipes.gtceu.centrifuge('amethystget')
        .itemInputs(
            'kubejs:voiddust'
        )
        .itemOutputs(
            '2x minecraft:amethyst_shard'
        )
        .duration(100)
        .EUt(480)
        .circuit(3)

    event.recipes.gtceu.centrifuge('uraniumget')
        .itemInputs(
            'kubejs:voiddust'
        )
        .chancedOutput('gtceu:uranium_dust', 10, 0)
        .duration(100)
        .EUt(480)
        .circuit(4)
})