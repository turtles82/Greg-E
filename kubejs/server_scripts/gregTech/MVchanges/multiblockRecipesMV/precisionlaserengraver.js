ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gtceu:precisionlaserengraver', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/mv',
            B: 'gtceu:laser_hazard_sign_block',
            C: 'gtceu:mv_conveyor_module',
            D: 'gtceu:mv_robot_arm',
            E: 'kubejs:magicallaserlens'
        }
    )

    let waferAll = [
        {id: 'gtceu:silicon_wafer', time: 1500, clean: false},
        {id: 'gtceu:phosphorus_wafer', time: 800, clean: true},
        {id: 'gtceu:naquadah_wafer', time: 350, clean: true},
        {id: 'gtceu:neutronium_wafer', time: 80, clean: true},
    ]

    let waferTwo = [
        {id: 'gtceu:phosphorus_wafer', time: 1500, clean: true},
        {id: 'gtceu:naquadah_wafer', time: 800, clean: true},
        {id: 'gtceu:neutronium_wafer', time: 300, clean: true},
    ]

    let waferThree = [
        {id: 'gtceu:naquadah_wafer', time: 1500, clean: true},
        {id: 'gtceu:neutronium_wafer', time: 800, clean: true},
    ]

    let tierOneWafer = [
        {id: 'gtceu:cpu_wafer', lens: '#forge:lenses/light_blue'},
        {id: 'gtceu:ram_wafer', lens: '#forge:lenses/green'},
        {id: 'gtceu:ilc_wafer', lens: '#forge:lenses/red'},
        {id: 'gtceu:simple_soc_wafer', lens: 'gtceu:cyan_glass_lens'},
        {id: 'gtceu:ulpic_wafer', lens: '#forge:lenses/blue'},
        {id: 'gtceu:lpic_wafer', lens: 'gtceu:orange_glass_lens'}
    ]

    let tierTwoWafer = [
        {id: 'gtceu:soc_wafer', lens: 'gtceu:yellow_glass_lens'},
        {id: 'gtceu:nand_memory_wafer', lens: 'gtceu:gray_glass_lens'},
        {id: 'gtceu:nor_memory_wafer', lens: 'gtceu:pink_glass_lens'},
        {id: 'gtceu:mpic_wafer', lens: 'gtceu:brown_glass_lens'},
    ]

    let tierThreeWafer = [
        {id: 'gtceu:advanced_soc_wafer', lens: '#forge:lenses/purple'}
    ]

    const countsTierOne = [2, 8, 16, 32]
    const countsTierTwo = [2, 8, 16]
    const countsTierThree = [2, 4]

    const voltagesTierOne = [GTValues.VA[GTValues.MV], GTValues.VA[GTValues.HV], GTValues.VA[GTValues.EV], GTValues.VA[GTValues.IV]]
    const voltagesTierTwo = [GTValues.VA[GTValues.HV], GTValues.VA[GTValues.EV], GTValues.VA[GTValues.IV]]
    const voltagesTierThree = [GTValues.VA[GTValues.EV], GTValues.VA[GTValues.IV]]

    tierOneWafer.forEach(target => {
        waferAll.forEach((inputWafer, index) => {

            let outputCount = countsTierOne[index]
            let energyValue = voltagesTierOne[index]

            let recipe = event.recipes.gtceu.precisionlaserengraver()
                .itemInputs(inputWafer.id)
                .notConsumable(target.lens)
                .itemOutputs(`${outputCount}x ${target.id}`)
                .duration(inputWafer.time) 
                .EUt(energyValue)

            if(inputWafer.clean == true) recipe.cleanroom(CleanroomType.CLEANROOM)
        })
    })

    tierTwoWafer.forEach(targetTwo => {
        waferTwo.forEach((inputWaferTwo, indexTwo) => {

            let outputCountTwo = countsTierTwo[indexTwo]
            let energyValueTwo = voltagesTierTwo[indexTwo]

            let recipe = event.recipes.gtceu.precisionlaserengraver()
                .itemInputs(inputWaferTwo.id)
                .notConsumable(targetTwo.lens)
                .itemOutputs(`${outputCountTwo}x ${targetTwo.id}`)
                .duration(inputWaferTwo.time) 
                .EUt(energyValueTwo)

            if(inputWaferTwo.clean == true) recipe.cleanroom(CleanroomType.CLEANROOM)
        })
    })

    tierThreeWafer.forEach(targetThree => {
        waferThree.forEach((inputWaferThree, indexThree) => {

            let outputCountThree = countsTierThree[indexThree]
            let energyValueThree = voltagesTierThree[indexThree]

            let recipe = event.recipes.gtceu.precisionlaserengraver()
                .itemInputs(inputWaferThree.id)
                .notConsumable(targetThree.lens)
                .itemOutputs(`${outputCountThree}x ${targetThree.id}`)
                .duration(inputWaferThree.time) 
                .EUt(energyValueThree)

            if(inputWaferThree.clean == true) recipe.cleanroom(CleanroomType.CLEANROOM)
        })
    })

    event.recipes.gtceu.precisionlaserengraver()
        .itemInputs(
            'gtceu:neutronium_wafer'
        )
        .notConsumable(
            'gtceu:black_glass_lens'
        )
        .itemOutputs(
            '2x gtceu:highly_advanced_soc_wafer'
        )
        .duration(1300)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM)

})