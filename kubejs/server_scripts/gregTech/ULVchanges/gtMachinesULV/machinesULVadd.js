ServerEvents.recipes((event) => {
    
    //Change recipies in machines so it can act as LUV

    /*
    event.recipes.thermal.pulverizer(
        'gtceu:coal_dust',
        'minecraft:coal'
    );

    event.recipes.thermal.pulverizer(
        '4x gtceu:wood_dust',
        'minecraft:oak_log'
    );
    

    event.recipes.thermal.smelter(
        'gtceu:red_alloy_ingot', 
        ['minecraft:copper_ingot', '4x minecraft:redstone']
    );
    

    event.recipes.thermal.smelter(
        'minecraft:charcoal', 
        'minecraft:coal'
    );
    
  
    event.custom({
        type: 'thermal:smelter',
        ingredients: [
        { item: 'minecraft:iron_ingot' },
        { item: 'minecraft:coal', count: 4 }
            ],
        results: [
        { item: 'gtceu:steel_ingot' }
            ],
        energy: 10000,
        processingTime: 1000
    })
        

    event.recipes.thermal.press(
        'gtceu:glass_tube',
        'gtceu:glass_dust'
    );

    event.recipes.thermal.press(
        'minecraft:paper',
        'minecraft:sugar_cane'
    );

    event.recipes.thermal.press(
        'gtceu:wood_plate',
        '2x gtceu:wood_dust'
    );

    */

    event.recipes.gtceu.pulverizing('getcoalwhyidk')
        .itemInputs(
            'minecraft:coal'
        )
        .itemOutputs(
            'gtceu:coal_dust'
        )
        .EUt(GTValues.V[GTValues.ULV])
        .duration(100)

    event.recipes.gtceu.pulverizing('getwooddust')
        .itemInputs(
            'minecraft:oak_log'
        )
        .itemOutputs(
            '4x gtceu:wood_dust'
        )
        .EUt(GTValues.V[GTValues.ULV])
        .duration(100)

    event.recipes.gtceu.induction_smelting('getredalloyyyy')
        .itemInputs(
            'minecraft:copper_ingot', 
            '4x minecraft:redstone'
        )
        .itemOutputs(
            'gtceu:red_alloy_ingot'
        )
        .EUt(GTValues.V[GTValues.ULV])
        .duration(120)  
        .circuit(1)

    event.recipes.gtceu.induction_smelting('getcharcoallll')
        .itemInputs(
             'minecraft:coal'
        )
        .itemOutputs(
            'minecraft:charcoal'
        )
        .EUt(GTValues.V[GTValues.ULV])
        .duration(200) 
        .circuit(3) 

    event.recipes.gtceu.induction_smelting('getsteeeeeeeeel')
        .itemInputs(
             'minecraft:iron_ingot',
             '4x minecraft:coal'
        )
        .itemOutputs(
            'gtceu:steel_ingot'
        )
        .EUt(GTValues.V[GTValues.ULV])
        .duration(500)  
        .circuit(1)
        
    event.recipes.gtceu.induction_smelting('getsintercokeingot')
        .itemInputs(
             '2x minecraft:iron_ingot',
             'minecraft:coal'
        )
        .itemOutputs(
            '2x gtceu:sintercoke_ingot'
        )
        .EUt(GTValues.V[GTValues.ULV])
        .duration(200)  
        .circuit(2)

    event.recipes.gtceu.pressing('getglasstube')
        .itemInputs(
             'gtceu:glass_dust'
        )
        .itemOutputs(
            'gtceu:glass_tube'
        )
        .EUt(GTValues.V[GTValues.ULV])
        .duration(200)  

    event.recipes.gtceu.pressing('getpaeeeer')
        .itemInputs(
             'minecraft:sugar_cane'
        )
        .itemOutputs(
            'minecraft:paper'
        )
        .EUt(GTValues.V[GTValues.ULV])
        .duration(200)  

    event.recipes.gtceu.pressing('getplaaaank')
        .itemInputs(
            '2x gtceu:wood_dust'
        )
        .itemOutputs(
            'gtceu:wood_plate'
        )
        .EUt(GTValues.V[GTValues.ULV])
        .duration(200) 
        
    event.recipes.gtceu.waterwell('getfreewatah')
        .outputFluids(
            'minecraft:water 500'
        )
        .circuit(1)
        .adjacentFluids("minecraft:water","minecraft:water")
        .duration(200)

});