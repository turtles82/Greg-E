ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:netherdrillrig', 1),
        [
            ' A ',
            'BBB',
            'BCB'
        ],
        {
            A: '#gtceu:circuits/iv',
            B: 'gtceu:steel_frame',
            C: 'gtceu:ev_machine_hull',
        }
    )

    event.recipes.gtceu
        .netherdrillrig('drillnetherrrite')
        .itemInputs(
            '2x kubejs:eidust'
        )
        .chancedOutput('minecraft:ancient_debris', 200, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)
        .dimension('minecraft:the_nether')

    event.recipes.gtceu
        .netherdrillrig('drillevilore')
        .itemInputs(
            '2x kubejs:earthlydust'
        )
        .itemOutputs(
            'kubejs:eidust'
        )
        .duration(40)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(2)   
        .dimension('minecraft:the_nether')     

})