ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:oilrig', 1),
        [
            ' A ',
            'BBB',
            'BCB'
        ],
        {
            A: '#gtceu:circuits/ev',
            B: 'gtceu:stainless_steel_frame',
            C: 'gtceu:hv_machine_hull',
        }
    )

    event.recipes.gtceu.oilrig('drilloil')
        .itemInputs(
            '2x kubejs:earthlydust'
        )
        .outputFluids(
            'gtceu:oil_medium 1000'
        )
        .duration(250)
        .EUt(1680)
        .circuit(1)

    event.recipes.gtceu.oilrig('drillplatinum')
        .itemInputs(
            '2x kubejs:earthlydust'
        )
        .itemOutputs(
            '4x gtceu:purified_pentlandite_ore'
        )
        .duration(200)
        .EUt(1680)
        .circuit(2)

    event.recipes.gtceu.oilrig('drilltungstate')
        .itemInputs(
            '2x kubejs:earthlydust'
        )
        .chancedOutput(
            'gtceu:raw_tungstate', 10, 0
        )
        .duration(200)
        .EUt(1680)
        .circuit(3)   

    event.recipes.gtceu.oilrig('getthemrareeart')
        .itemInputs(
            '2x kubejs:earthlydust'
        )
        .chancedOutput('gtceu:rare_earth_dust', 10, 0)
        .duration(100)
        .circuit(4)
        .EUt(1680)

    event.recipes.gtceu.oilrig('magnesiumgetttt')
        .itemInputs(
            '2x kubejs:earthlydust'
        )
        .chancedOutput('gtceu:magnesium_dust', 10, 0)
        .duration(100)
        .circuit(5)
        .EUt(1680)

    event.recipes.gtceu.oilrig('rutilegetttt')
        .itemInputs(
            '2x kubejs:earthlydust'
        )
        .chancedOutput('gtceu:rutile_dust', 10, 0)
        .duration(100)
        .circuit(6)
        .EUt(1680)

    event.recipes.gtceu.oilrig('tantalumgetttt')
        .itemInputs(
            '2x kubejs:earthlydust'
        )
        .chancedOutput('gtceu:tantalum_dust', 10, 0)
        .duration(100)
        .circuit(7)
        .EUt(1680)

    event.recipes.gtceu.oilrig('bariumgetttt')
        .itemInputs(
            '2x kubejs:earthlydust'
        )
        .chancedOutput('gtceu:barium_dust', 10, 0)
        .duration(100)
        .circuit(8)
        .EUt(1680)

})