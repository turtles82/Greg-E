ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:uv_decay_chamber', 1),
        [
            'DAD',
            'DBD',
            'DCD'
        ],
        {
            A: 'gtceu:radioactive_hazard_sign_block',
            B: 'gtceu:uv_machine_hull',
            C: '#gtceu:circuits/uv',
            D: 'gtceu:rubber_ingot'
        }
    )

    event.shaped(
        Item.of('gtceu:uhv_decay_chamber', 1),
        [
            'DAD',
            'DBD',
            'DCD'
        ],
        {
            A: 'gtceu:radioactive_hazard_sign_block',
            B: 'gtceu:uhv_machine_hull',
            C: '#gtceu:circuits/uhv',
            D: 'gtceu:rubber_ingot'
        }
    )
    
    event.recipes.gtceu.decay_materials()
        .itemInputs(
            '4x gtceu:americium_dust'
        )
        .itemOutputs(
            '4x gtceu:berkeliumish_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(500)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            '4x gtceu:calcium_dust'
        )
        .itemOutputs(
            'gtceu:calcium48_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .circuit(12)

    event.recipes.gtceu.extractor()
        .itemInputs(
            'gtceu:berkeliumish_dust'
        )
        .outputFluids(
            'gtceu:berkeliumish 144'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.extractor()
        .itemInputs(
            'gtceu:calcium48_dust'
        )
        .outputFluids(
            'gtceu:calcium48 144'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.fusion_reactor()
        .inputFluids(
            'gtceu:berkeliumish 16',
            'gtceu:calcium48 16'
        )
        .outputFluids(
            'gtceu:tennessineish 16'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .fusionStartEU(200000000)
        .duration(60)

    event.recipes.gtceu.advanced_fusion()
        .inputFluids(
            'gtceu:berkeliumish 1600',
            'gtceu:calcium48 1600'
        )
        .outputFluids(
            'gtceu:tennessineish 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .addData('heat_level', 1700)

    event.recipes.gtceu.autoclave()
        .inputFluids(
            'gtceu:tennessineish 144'
        )
        .itemInputs(
            'gtceu:tennessineish_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.atmosphericsampler('getbetterdustststsdtstfdtftdvtcvbncvhjb2')
        .itemInputs(
            '2x kubejs:activatedrune',
            'ad_astra:rocket_nose_cone'
        )
        .inputFluids(
            'gtceu:rocket_fuel 10',
            'gtceu:tennessineish 100'
        )
        .itemOutputs(
            '3x kubejs:dustwithbroom'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)   
        .circuit(2)

})