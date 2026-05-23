ServerEvents.recipes((event) => {

    event.recipes.gtceu.specializedassemblyline('specialized1')
        .itemInputs(
            '8x gtceu:neuro_processing_unit',
            '8x gtceu:highly_advanced_soc',
            '64x gtceu:fine_yttrium_barium_cuprate_wire',
            '64x gtceu:naquadah_bolt'
        )
        .inputFluids(
            'gtceu:soldering_alloy 300'
        )
        .itemOutputs(
            '32x gtceu:wetware_processor'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(20)

    event.recipes.gtceu.specializedassemblyline('specialized2')
        .itemInputs(
            '8x gtceu:wetware_printed_circuit_board',
            '32x gtceu:wetware_processor',
            '32x gtceu:advanced_smd_inductor',
            '32x gtceu:advanced_smd_capacitor',
            '64x gtceu:ram_chip',
            '64x gtceu:fine_yttrium_barium_cuprate_wire'
        )
        .inputFluids(
            'gtceu:soldering_alloy 300'
        )
        .itemOutputs(
            '16x gtceu:wetware_processor_assembly'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(20)

    event.recipes.gtceu.specializedassemblyline('specialized3')
        .itemInputs(
            '4x gtceu:wetware_printed_circuit_board',
            '16x gtceu:wetware_processor_assembly',
            '32x gtceu:advanced_smd_diode',
            '16x gtceu:nor_memory_chip',
            '64x gtceu:ram_chip',
            '64x gtceu:fine_yttrium_barium_cuprate_wire',
            '64x gtceu:polybenzimidazole_foil',
            '8x gtceu:europium_plate'
        )
        .inputFluids(
            'gtceu:soldering_alloy 1500'
        )
        .itemOutputs(
            '8x gtceu:wetware_processor_computer'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(20)

    event.recipes.gtceu.specializedassemblyline('specialized4')
        .itemInputs(
            '4x gtceu:tritanium_frame',
            '8x gtceu:wetware_processor_computer',
            '64x gtceu:advanced_smd_diode',
            '64x gtceu:advanced_smd_capacitor',
            '64x gtceu:advanced_smd_transistor',
            '64x gtceu:advanced_smd_resistor',
            '64x gtceu:advanced_smd_inductor',
            '64x gtceu:ram_chip',
            '48x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire',
            '64x gtceu:polybenzimidazole_foil',
            '32x gtceu:europium_plate'
        )
        .inputFluids(
            'gtceu:soldering_alloy 3500'
        )
        .itemOutputs(
            '4x gtceu:wetware_processor_mainframe'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(20)

    event.recipes.gtceu.specializedassemblyline('specialized5')
        .itemInputs(
            '12x #gtceu:circuits/uhv',
            '4x gtceu:neutronium_frame',
            '64x gtceu:advanced_smd_diode',
            '64x gtceu:advanced_smd_capacitor',
            '64x gtceu:advanced_smd_transistor',
            '16x gtceu:stellarium_rod',
            '16x gtceu:stellarium_plate',
            '64x gtceu:polybenzimidazole_foil',
            '64x gtceu:ram_chip',
            '64x gtceu:ram_chip',
            '32x gregecore:awakened_draconium_cable_double_wire',
            '16x gtceu:neutronium_plate'
        )
        .inputFluids(
            'gtceu:soldering_alloy 5000',
            'gtceu:polybenzimidazole 3000'
        )
        .itemOutputs(
            '3x kubejs:animated/draconicprocessor'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(20)


})
