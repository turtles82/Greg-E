ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:excavsite', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/ev',
            B: 'kubejs:cpottery',
            C: 'minecraft:brush',
            D: 'minecraft:oak_planks',
            E: 'gtceu:ev_machine_hull'
        }
    )

    event.recipes.gtceu
        .excavsite('excavxorpliers')
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .chancedOutput('kubejs:dwpliblue', 500, 0)   
        .chancedOutput('kubejs:dwppart', 2500, 0) 
        .chancedOutput('minecraft:stick', 7000, 0) 
        .notConsumable('minecraft:brush')
        .duration(200)
        .circuit(1)

    event.recipes.gtceu
        .excavsite('excavdragonhead')
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .chancedOutput('kubejs:drahead', 100, 0)   
        .chancedOutput('minecraft:clay', 2800, 0) 
        .chancedOutput('minecraft:stick', 7000, 0) 
        .notConsumable('minecraft:brush')
        .duration(200)
        .circuit(2)
})
