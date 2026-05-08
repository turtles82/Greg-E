ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:sednasampler', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/uv',
            B: 'gtceu:tempered_glass',
            C: 'gtceu:nonconducting_casing',
            D: 'gtceu:stress_proof_casing',
            E: 'gtceu:uv_machine_hull'
        }
    )

    event.recipes.botania.mana_infusion('2x ad_extendra:sedna_stone', 'ad_extendra:sedna_stone', 1000, 'botania:conjuration_catalyst')

    event.recipes.gtceu.sednasampler()
        .itemInputs(
            '4x ad_extendra:sedna_stone'
        )
        .itemOutputs(
            'gtceu:sedna_sample_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(500)
        .dimension('ad_extendra:sedna')

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:sedna_sample_dust'
        )
        .itemOutputs(
            'gtceu:centrifuged_sedna_sample_dust',
            '3x gtceu:carbon_dust',
            'gtceu:phosphorus_dust',
            '2x gtceu:sodium_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(500)
        .dimension('ad_extendra:sedna')

    event.recipes.gtceu.electrolyzer()
        .itemInputs(
            'gtceu:centrifuged_sedna_sample_dust'
        )
        .itemOutputs(
            'gtceu:sednium_ferride_dust',
            '3x gtceu:sodium_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .dimension('ad_extendra:sedna')

    event.recipes.gtceu.extractor()
        .itemInputs(
            'incision:stomach'
        )
        .outputFluids(
            'gtceu:stygian_aqua_regia 144'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            'gtceu:sednium_ferride_dust'
        )
        .inputFluids(
            'gtceu:stygian_aqua_regia 500'
        )
        .itemOutputs(
            'gtceu:sednium_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(400)
        .dimension('minecraft:overworld')

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:sednium_dust'
        )
        .inputFluids(
            'gtceu:stygian_aqua_regia 1500'
        )
        .itemOutputs(
            'gtceu:sednium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .blastFurnaceTemp(8500)
        .duration(600)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:sednium_ingot'
        )
        .itemOutputs(
            '8x gtceu:fine_sednium_wire'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .circuit(3)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:wetware_circuit_board',
            '4x gtceu:fine_sednium_wire'
        )
        .inputFluids(
            'gtceu:iron_iii_chloride 3500'
        )
        .itemOutputs(
            '4x gtceu:wetware_printed_circuit_board'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(1200)
        .circuit(24)
        .cleanroom(CleanroomType.CLEANROOM)

        
        

    




});