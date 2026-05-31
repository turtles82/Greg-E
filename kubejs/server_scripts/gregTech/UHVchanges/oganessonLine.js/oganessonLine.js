ServerEvents.recipes((event) => {

    event.recipes.gtceu.linearaccel()
        .itemInputs(
            'kubejs:cm'
        )
        .inputFluids(
            'gtceu:alfa_particles 100'
        )
        .outputFluids(
            'gtceu:californiumish 144'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.linearaccel()
        .inputFluids(
            'gtceu:helium 150'
        )
        .outputFluids(
            'gtceu:alfa_particles 50'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.fusion_reactor()
        .inputFluids(
            'gtceu:californiumish 16',
            'gtceu:calcium48 16'
        )
        .outputFluids(
            'gtceu:oganessonish 16'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .fusionStartEU(600000000)
        .duration(60)

    event.recipes.gtceu.advanced_fusion()
        .inputFluids(
            'gtceu:californiumish 1600',
            'gtceu:calcium48 1600'
        )
        .outputFluids(
            'gtceu:oganessonish 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
        .addData('heat_level', 2900)

    event.recipes.gtceu.mixer('getthelastdust2')
        .itemInputs(
            '2x kubejs:dustwithbroom'
        )
        .inputFluids(
            'gtceu:neutronium 16',
            'gtceu:oganessonish 16'
        )
        .itemOutputs(
            '3x kubejs:neutroniuminfused'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .circuit(2)

})