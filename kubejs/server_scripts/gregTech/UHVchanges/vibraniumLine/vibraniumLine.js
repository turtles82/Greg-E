ServerEvents.recipes((event) => {

    event.recipes.gtceu.specialoreprocessingplant()
        .itemInputs(
            'gtceu:raw_dirty_vibranium'
        )
        .itemOutputs(
            '2x gtceu:dirty_vibranium_dust'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(300)

    event.recipes.gtceu.electrolyzer()
        .itemInputs(
            '3x gtceu:dirty_vibranium_dust'
        )
        .itemOutputs(
            '3x gtceu:vanadium_dust',
            'gtceu:gold_dust',
            '2x gtceu:iron_dust'
        )
        .outputFluids(
            'gtceu:oxygen 200',
            'gtceu:vibranium_slurry 1000'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:vibranium_slurry 1000'
        )
        .outputFluids(
            'gtceu:muddy_vibranium 800',
            'gtceu:aluminium 100',
            'gtceu:gold 100',
        )
        .chancedOutput('gtceu:muddy_vibranium_dust', 1000, 0)
        .disableDistilleryRecipes(true)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(500)

    event.recipes.gtceu.autoclave()
        .inputFluids(
            'gtceu:muddy_vibranium 1000'
        )
        .itemOutputs(
            'gtceu:muddy_vibranium_dust'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:muddy_vibranium_dust'
        )
        .itemOutputs(
            'gtceu:vibranium_dust',
            '2x gtceu:carbon_dust',
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:vibranium_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 500'
        )
        .itemOutputs(
            'gtceu:hot_vibranium_ingot'
        )
        .blastFurnaceTemp(10000)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_vibranium_ingot'
        )
        .itemOutputs(
            'gtceu:vibranium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)

    event.recipes.gtceu.extruder()
        .itemInputs(
            '4x gtceu:vibranium_ingot'
        )
        .itemOutputs(
            'gtceu:vibranium_gear'
        )
        .notConsumable('gtceu:gear_extruder_mold')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:vibranium_ingot'
        )
        .itemOutputs(
            'gtceu:small_vibranium_gear'
        )
        .notConsumable('gtceu:small_gear_extruder_mold')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.lathe()
        .itemInputs(
            'gtceu:vibranium_ingot'
        )
        .itemOutputs(
            '2x gtceu:vibranium_rod'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:vibranium_ingot'
        )
        .itemOutputs(
            'gtceu:vibranium_plate'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:vibranium_ingot'
        )
        .itemOutputs(
            '4x gtceu:vibranium_foil'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
        .circuit(10)

    event.recipes.gtceu.bender()
        .itemInputs(
            '2x gtceu:vibranium_ingot'
        )
        .itemOutputs(
            'gtceu:double_vibranium_plate'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
        .circuit(2)

    event.recipes.gtceu.bender()
        .itemInputs(
            '2x gtceu:vibranium_plate'
        )
        .itemOutputs(
            'gtceu:double_vibranium_plate'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
        .circuit(2)


})