ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gtceu:evaporator', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/lv',
            B: 'minecraft:water_bucket',
            C: 'gtceu:lv_conveyor_module',
            D: 'gtceu:lv_electric_pump',
            E: 'gtceu:lv_machine_hull'
        }
    )

    event.recipes.gtceu.evaporator('salt_dust_from_water') 
        .inputFluids('minecraft:water 200')    
        .itemOutputs('gtceu:salt_dust')
        .circuit(1)
        .duration(50)
        .EUt(15)

    event.recipes.gtceu.evaporator('rock_salt_from_saltwater')
        .inputFluids('gtceu:salt_water 1000')
        .itemOutputs('gtceu:rock_salt_dust')
        .circuit(2)
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

});