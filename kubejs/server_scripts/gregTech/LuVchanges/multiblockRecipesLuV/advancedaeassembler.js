ServerEvents.recipes((event) =>{ 
 event.shaped(
        Item.of('gtceu:advancedaeassembler', 1),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: '#gtceu:circuits/luv',
            B: 'gtceu:luv_electric_motor',
            C: 'gtceu:luv_robot_arm',
            D: 'gtceu:nonconducting_casing',
            E: 'gtceu:luv_machine_hull'
        }
    )

    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('8x ae2:printed_logic_processor', '8x minecraft:redstone', '8x ae2:printed_silicon')    
        .itemOutputs('8x ae2:logic_processor')
        .circuit(8)
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('8x ae2:printed_engineering_processor', '8x minecraft:redstone', '8x ae2:printed_silicon')    
        .itemOutputs('8x ae2:engineering_processor')
        .circuit(8)
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('8x ae2:printed_calculation_processor', '8x minecraft:redstone', '8x ae2:printed_silicon')    
        .itemOutputs('8x ae2:calculation_processor')
        .circuit(8)
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('8x advanced_ae:printed_quantum_processor', '8x minecraft:redstone', '8x ae2:printed_silicon')    
        .itemOutputs('8x advanced_ae:quantum_processor')
        .circuit(8)
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV])  

    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('8x megacells:printed_accumulation_processor', '8x minecraft:redstone', '8x ae2:printed_silicon')    
        .itemOutputs('8x megacells:accumulation_processor')
        .circuit(8)
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('12x ae2:certus_quartz_crystal', '16x minecraft:redstone', '3x ae2:logic_processor')    
        .itemOutputs('3x ae2:cell_component_1k')
        .circuit(1)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('3x ae2:quartz_glass', '12x minecraft:redstone', '3x ae2:cell_component_1k', '3x ae2:calculation_processor')    
        .itemOutputs('3x ae2:cell_component_4k')
        .circuit(4)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('3x ae2:quartz_glass', '12x minecraft:glowstone_dust', '3x ae2:cell_component_4k', '3x ae2:calculation_processor')    
        .itemOutputs('3x ae2:cell_component_16k')
        .circuit(16)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('3x ae2:quartz_glass', '12x minecraft:glowstone_dust', '3x ae2:cell_component_16k', '3x ae2:calculation_processor')    
        .itemOutputs('3x ae2:cell_component_64k')
        .circuit(16)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('3x ae2:quartz_glass', '12x ae2:sky_dust', '3x ae2:cell_component_64k', '3x ae2:calculation_processor')    
        .itemOutputs('3x ae2:cell_component_256k')
        .circuit(16)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('3x ae2:quartz_vibrant_glass', '12x ae2:sky_dust', '3x ae2:cell_component_256k', '3x megacells:accumulation_processor')    
        .itemOutputs('3x megacells:cell_component_1m')
        .circuit(16)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('3x ae2:quartz_vibrant_glass', '12x #forge:dusts/ender_pearl', '3x megacells:cell_component_1m', '3x megacells:accumulation_processor')    
        .itemOutputs('3x megacells:cell_component_4m')
        .circuit(16)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('3x ae2:quartz_vibrant_glass', '12x #forge:dusts/ender_pearl', '3x megacells:cell_component_4m', '3x megacells:accumulation_processor')    
        .itemOutputs('3x megacells:cell_component_16m')
        .circuit(16)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('3x ae2:quartz_vibrant_glass', '12x ae2:matter_ball', '3x megacells:cell_component_16m', '3x megacells:accumulation_processor')    
        .itemOutputs('3x megacells:cell_component_64m')
        .circuit(16)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.recipes.gtceu
        .advancedaeassembler()
        .itemInputs('3x ae2:quartz_vibrant_glass', '12x ae2:matter_ball', '3x megacells:cell_component_64m', '3x megacells:accumulation_processor')    
        .itemOutputs('3x megacells:cell_component_256m')
        .circuit(16)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu
        .advancedaeassembler() 
        .itemInputs('8x minecraft:gold_ingot')
        .notConsumable('ae2:logic_processor_press')
        .itemOutputs('8x ae2:printed_logic_processor')
        .circuit(4)
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.recipes.gtceu
        .advancedaeassembler() 
        .itemInputs('8x minecraft:diamond')
        .notConsumable('ae2:engineering_processor_press')
        .itemOutputs('8x ae2:printed_engineering_processor')
        .circuit(4)
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV])

    
    event.recipes.gtceu
        .advancedaeassembler() 
        .itemInputs('8x ae2:certus_quartz_crystal')
        .notConsumable('ae2:calculation_processor_press')
        .itemOutputs('8x ae2:printed_calculation_processor')
        .circuit(4)
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV])

    
    event.recipes.gtceu
        .advancedaeassembler() 
        .itemInputs('8x ae2:silicon')
        .notConsumable('ae2:silicon_press')
        .itemOutputs('8x ae2:printed_silicon')
        .circuit(4)
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.recipes.gtceu
        .advancedaeassembler() 
        .itemInputs('8x advanced_ae:quantum_alloy')
        .notConsumable('advanced_ae:quantum_processor_press') 
        .itemOutputs('8x advanced_ae:printed_quantum_processor')
        .circuit(4)
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu
        .advancedaeassembler() 
        .itemInputs('8x megacells:sky_steel_ingot')
        .notConsumable('advanced_ae:quantum_processor_press')
        .itemOutputs('8x megacells:printed_accumulation_processor')
        .circuit(4)
        .duration(800)
        .EUt(GTValues.VA[GTValues.LV])

})