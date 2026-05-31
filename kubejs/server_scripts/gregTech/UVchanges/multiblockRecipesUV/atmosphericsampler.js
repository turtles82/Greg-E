ServerEvents.recipes((event) => {

        event.shaped(
        Item.of('gtceu:atmosphericsampler', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/uv',
            B: 'gtceu:aluminium_frame',
            C: 'gtceu:secure_maceration_casing',
            D: 'gtceu:sturdy_machine_casing',
            E: 'gtceu:zpm_machine_hull'
        }
    )

    event.recipes.gtceu.atmosphericsampler('getbetterdustststsdtstfdtftdvtcvbncvhjb')
    .itemInputs(
        '2x kubejs:activatedrune',
        'ad_astra:rocket_nose_cone'
    )
    .inputFluids(
        'gtceu:rocket_fuel 50'
    )
    .itemOutputs(
        'kubejs:dustwithbroom'
    )
    .EUt(GTValues.VA[GTValues.UV])
    .duration(200)    
    .circuit(1)

});