ServerEvents.recipes((event) => {

    event.recipes.botania.mana_infusion(
        '2x ad_extendra:b_stone',
        'ad_extendra:b_stone',
        500,
        'botania:conjuration_catalyst'
    )

    event.recipes.gtceu.macerator()
        .itemInputs(
            'ad_extendra:b_stone'
        )
        .itemOutputs(
            'gtceu:proxima_centauri_b_stone_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(50)

    event.recipes.gtceu.electrolyzer()
        .itemInputs(
            'gtceu:proxima_centauri_b_stone_dust'
        )
        .itemOutputs(
            'gtceu:small_stone_dust'
        )
        .outputFluids(
            'gtceu:proxima_centauri_b_stone 300'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(150)

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:proxima_centauri_b_stone 1000'
        )
        .outputFluids(
            'gtceu:prometheum 700',
            'gtceu:nitrogen 350',
            'gtceu:liquid_prometheum 200',
            'gtceu:oxygen 150'
        )
        .chancedOutput('gtceu:small_stone_dust', 5000, 0)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(350)
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.centrifuge()
        .inputFluids(
            'gtceu:prometheum 500'
        )
        .itemOutputs(
            '2x gtceu:prometheum_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:prometheum_dust'
        )
        .inputFluids(
            'gtceu:neon 60'
        )
        .itemOutputs(
            'gtceu:hot_prometheum_ingot'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(700)
        .blastFurnaceTemp(6000)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_prometheum_ingot'
        )
        .itemOutputs(
            'gtceu:prometheum_ingot'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            '4x gtceu:cadmium_dust',
        )
        .inputFluids(
            'gtceu:hydrogen 1000',
            'gtceu:oxygen 680'
        )
        .outputFluids(
            'gtceu:cadmium_acid 750'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .circuit(6)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:prometheum_dust'
        )
        .inputFluids(
            'minecraft:water 2000',
            'gtceu:fluorine 800',
            'gtceu:cadmium_acid 600',
            'gtceu:liquid_prometheum 300'
        )
        .outputFluids(
            'gtceu:diluted_cadmium_acid 1200'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .circuit(6)

    event.recipes.gtceu.electrolyzer()
        .inputFluids(
            'gtceu:diluted_cadmium_acid 500'
        )
        .itemOutputs(
            '2x gtceu:hephaestium_dust'
        )
        .outputFluids(
            'gtceu:cadmium_acid 200'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(300)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:hephaestium_dust'
        )
        .inputFluids(
            'gtceu:neon 60'
        )
        .itemOutputs(
            'gtceu:hot_hephaestium_ingot'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(700)
        .blastFurnaceTemp(6000)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_hephaestium_ingot'
        )
        .itemOutputs(
            'gtceu:hephaestium_ingot'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)

    event.remove('gtceu:assembler/neutron_reflector')
    event.recipes.gtceu.assembler('reflector1')
        .itemInputs(
            'gtceu:ruridit_plate',
            '2x gtceu:double_beryllium_plate',
            '4x gtceu:double_tungsten_carbide_plate',
        )
        .inputFluids(
            'gtceu:tin_alloy 4608'
        )
        .itemOutputs(
            'gtceu:neutron_reflector'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(4000)

    event.recipes.gtceu.assembler('reflector2')
        .itemInputs(
            'gtceu:ruridit_plate',
            '2x gtceu:double_beryllium_plate',
            '4x gtceu:double_tungsten_carbide_plate',
            'gtceu:hephaestium_ingot'
        )
        .inputFluids(
            'gtceu:tin_alloy 4608'
        )
        .itemOutputs(
            '3x gtceu:neutron_reflector'
        )
        .circuit(2)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(3000)

    event.remove({output: 'gtceu:superconducting_coil'})
    event.recipes.gtceu.assembler('coil1')
        .itemInputs(
            '32x gtceu:indium_tin_barium_titanium_cuprate_double_wire',
            '32x gtceu:niobium_titanium_foil'
        )
        .inputFluids(
            'gtceu:trinium 3456'
        )
        .itemOutputs(
            'gtceu:superconducting_coil'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)

    event.recipes.gtceu.assembler('coil2')
        .itemInputs(
            '32x gtceu:indium_tin_barium_titanium_cuprate_double_wire',
            '32x gtceu:niobium_titanium_foil',
            '16x gtceu:hephaestium_ingot'
        )
        .inputFluids(
            'gtceu:trinium 2900'
        )
        .itemOutputs(
            '2x gtceu:superconducting_coil'
        )
        .circuit(2)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)

    event.recipes.gtceu.assembler('coil3')
        .itemInputs(
            '16x gtceu:uranium_rhodium_dinaquadide_double_wire',
            '16x gtceu:niobium_titanium_foil',
        )
        .inputFluids(
            'gtceu:trinium 2304'
        )
        .itemOutputs(
            'gtceu:superconducting_coil'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)

    event.recipes.gtceu.assembler('coil4')
        .itemInputs(
            '16x gtceu:uranium_rhodium_dinaquadide_double_wire',
            '16x gtceu:niobium_titanium_foil',
            '8x gtceu:hephaestium_ingot'
        )
        .inputFluids(
            'gtceu:trinium 2000'
        )
        .itemOutputs(
            '4x gtceu:superconducting_coil'
        )
        .circuit(2)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)

    event.recipes.gtceu.assembler('coil5')
        .itemInputs(
            '8x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire',
            '8x gtceu:niobium_titanium_foil',
        )
        .inputFluids(
            'gtceu:trinium 1152'
        )
        .itemOutputs(
            'gtceu:superconducting_coil'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)

    event.recipes.gtceu.assembler('coil6')
        .itemInputs(
            '8x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire',
            '8x gtceu:niobium_titanium_foil',
            '4x gtceu:hephaestium_ingot'
        )
        .inputFluids(
            'gtceu:trinium 1000'
        )
        .itemOutputs(
            '8x gtceu:superconducting_coil'
        )
        .circuit(2)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)

})