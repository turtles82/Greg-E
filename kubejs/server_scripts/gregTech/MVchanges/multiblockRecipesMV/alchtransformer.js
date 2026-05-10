ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gtceu:alchtransformer', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/mv',
            B: 'minecraft:chain',
            C: 'minecraft:cauldron',
            D: 'gtceu:mv_electric_pump',
            E: 'gtceu:mv_machine_hull'
        }
    )

    event.recipes.gtceu
        .alchtransformer('transformcommontdeepslate')
        .itemInputs('2x kubejs:commonearth')   
        .inputFluids('kubejs:alchessence 500') 
        .itemOutputs('kubejs:deepslateearth')
        .duration(100)
        .EUt(120)

    event.recipes.gtceu
        .alchtransformer('cobbleonecompression')
        .itemInputs('9x minecraft:cobblestone')   
        .itemOutputs('kubejs:cobbleone')
        .duration(20)
        .EUt(120)

    event.recipes.gtceu
        .alchtransformer('cobbletwocompression')
        .itemInputs('9x kubejs:cobbleone')   
        .itemOutputs('kubejs:cobbletwo')
        .duration(20)
        .EUt(120)

    event.recipes.gtceu
        .alchtransformer('cobblethreecompression')
        .itemInputs('9x kubejs:cobbletwo')   
        .itemOutputs('kubejs:cobblethree')
        .duration(100)
        .EUt(120)

    event.recipes.gtceu
        .alchtransformer('cobblefourcompression')
        .itemInputs('9x kubejs:cobblethree')   
        .itemOutputs('kubejs:cobblefour')
        .duration(100)
        .EUt(120)

    event.recipes.gtceu
        .alchtransformer('cobblefivecompression')
        .itemInputs('9x kubejs:cobblefour')   
        .itemOutputs('kubejs:cobblefive')
        .duration(100)
        .EUt(120)

    event.recipes.gtceu
        .alchtransformer('wateronecompression')
        .inputFluids('minecraft:water 9000')   
        .itemOutputs('kubejs:waterone')
        .duration(20)
        .EUt(120)

    event.recipes.gtceu
        .alchtransformer('watertwocompression')
        .itemInputs('9x kubejs:waterone')   
        .itemOutputs('kubejs:watertwo')
        .duration(20)
        .EUt(120)

    event.recipes.gtceu
        .alchtransformer('waterthreecompression')
        .itemInputs('9x kubejs:watertwo')   
        .itemOutputs('kubejs:waterthree')
        .duration(100)
        .EUt(120)

    event.recipes.gtceu
        .alchtransformer('waterfourcompression')
        .itemInputs('9x kubejs:waterthree')   
        .itemOutputs('kubejs:waterfour')
        .duration(100)
        .EUt(120)

    event.recipes.gtceu
        .alchtransformer('waterfivecompression')
        .itemInputs('9x kubejs:waterfour')   
        .itemOutputs('kubejs:waterfive')
        .duration(100)
        .EUt(120)

});