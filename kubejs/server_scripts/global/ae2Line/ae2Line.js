ServerEvents.recipes((event) => {

    event.recipes.gtceu.mixer()
        .itemInputs(
            '3x gtceu:silver_dust',
            '4x gtceu:lead_dust',
            '2x ae2:fluix_dust'
        )
        .inputFluids(
            'gtceu:oxygen 150'
        )
        .itemOutputs(
            '4x gtceu:refined_fluix_dust'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(350)
        .circuit(4)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:refined_fluix_dust'
        )
        .itemOutputs(
            'gtceu:refined_fluix_ingot'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(800)
        .blastFurnaceTemp(1500)

    event.recipes.gtceu.lathe()
        .itemInputs(
            'gtceu:refined_fluix_ingot'
        )
        .itemOutputs(
            '2x gtceu:refined_fluix_rod'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:refined_fluix_ingot'
        )
        .itemOutputs(
            '2x gtceu:refined_fluix_rod'
        )
        .notConsumable('gtceu:rod_extruder_mold')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.assembler()
        .itemInputs(
            '4x gtceu:refined_fluix_rod'
        )
        .itemOutputs(
            'gtceu:refined_fluix_frame'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(60)
        .circuit(4)

    event.shaped(
        Item.of('gtceu:refined_fluix_frame', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'gtceu:refined_fluix_rod',
            B: '#forge:tools/wrenches'
        }
    )

    event.recipes.gtceu.mixer()
        .itemInputs(
            '4x gtceu:manganese_dust',
            '2x gtceu:vanadium_dust',
            '2x gtceu:refined_fluix_dust'
        )
        .inputFluids(
            'kubejs:alchessence 150'
        )
        .itemOutputs(
            '4x gtceu:enhanced_fluix_dust'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(350)
        .circuit(4)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:enhanced_fluix_dust'
        )
        .itemOutputs(
            'gtceu:enhanced_fluix_ingot'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(600)
        .blastFurnaceTemp(1500)

    event.recipes.gtceu.lathe()
        .itemInputs(
            'gtceu:enhanced_fluix_ingot'
        )
        .itemOutputs(
            '2x gtceu:enhanced_fluix_rod'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:enhanced_fluix_ingot'
        )
        .itemOutputs(
            '2x gtceu:enhanced_fluix_rod'
        )
        .notConsumable('gtceu:rod_extruder_mold')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.assembler()
        .itemInputs(
            '4x gtceu:enhanced_fluix_rod'
        )
        .itemOutputs(
            'gtceu:enhanced_fluix_frame'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(60)
        .circuit(4)

    event.shaped(
        Item.of('gtceu:enhanced_fluix_frame', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'gtceu:enhanced_fluix_rod',
            B: '#forge:tools/wrenches'
        }
    )

    event.recipes.gtceu.macerator()
        .itemInputs(
            'gtceu:end_certus_quartz_gem'
        )
        .itemOutputs(
            '2x gtceu:end_certus_quartz_dust'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(100)

    event.recipes.gtceu.autoclave()
        .itemInputs(
            'gtceu:end_certus_quartz_dust'
        )
        .itemOutputs(
            'gtceu:end_certus_quartz_gem'
        )
        .inputFluids(
            'gtceu:distilled_water 200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(150)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:end_certus_quartz_dust'
        )
        .itemOutputs(
            'gtceu:end_certus_quartz2_ingot'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(800)
        .blastFurnaceTemp(2000)

    event.recipes.gtceu.lathe()
        .itemInputs(
            'gtceu:end_certus_quartz2_ingot'
        )
        .itemOutputs(
            '2x gtceu:end_certus_quartz_rod'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:end_certus_quartz2_ingot'
        )
        .itemOutputs(
            '2x gtceu:end_certus_quartz_rod'
        )
        .notConsumable('gtceu:rod_extruder_mold')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)

    event.recipes.gtceu.assembler()
        .itemInputs(
            '4x gtceu:end_certus_quartz_rod'
        )
        .itemOutputs(
            'gtceu:end_certus_quartz_frame'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(60)
        .circuit(4)

    event.shaped(
        Item.of('gtceu:end_certus_quartz_frame', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'gtceu:end_certus_quartz_rod',
            B: '#forge:tools/wrenches'
        }
    )

    event.recipes.gtceu.sifter()
        .itemInputs(
            'ad_astra:venus_sandstone'
        )
        .chancedOutput('gtceu:venus_certus_quartz_gem', 500, 0)
        .EUt(GTValues.VA[GTValues.EV])
        .duration(150)

    event.recipes.gtceu.macerator()
        .itemInputs(
            'gtceu:venus_certus_quartz_gem'
        )
        .itemOutputs(
            '2x gtceu:venus_certus_quartz_dust'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(100)

    event.recipes.gtceu.autoclave()
        .itemInputs(
            'gtceu:venus_certus_quartz_dust'
        )
        .itemOutputs(
            'gtceu:venus_certus_quartz_gem'
        )
        .inputFluids(
            'gtceu:distilled_water 200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(150)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:venus_certus_quartz_dust'
        )
        .itemOutputs(
            'gtceu:venus_certus_quartz2_ingot'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(800)
        .blastFurnaceTemp(3500)

    event.recipes.gtceu.lathe()
        .itemInputs(
            'gtceu:venus_certus_quartz2_ingot'
        )
        .itemOutputs(
            '2x gtceu:venus_certus_quartz_rod'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:venus_certus_quartz2_ingot'
        )
        .itemOutputs(
            '2x gtceu:venus_certus_quartz_rod'
        )
        .notConsumable('gtceu:rod_extruder_mold')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)

    event.recipes.gtceu.assembler()
        .itemInputs(
            '4x gtceu:venus_certus_quartz_rod'
        )
        .itemOutputs(
            'gtceu:venus_certus_quartz_frame'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(60)
        .circuit(4)

    event.shaped(
        Item.of('gtceu:venus_certus_quartz_frame', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'gtceu:venus_certus_quartz_rod',
            B: '#forge:tools/wrenches'
        }
    )

    event.recipes.botania.terra_plate(
        'gtceu:magical_certus_quartz_gem',
        [
            'gtceu:exquisite_echo_shard_gem',
            'minecraft:netherite_ingot',
            'botanicalextramachinery:crimson_ingot',
            'gtceu:venus_certus_quartz_gem',
            'kubejs:ivalloy',
            'undergarden:forgotten_ingot'
        ],
        750000
    )

    event.recipes.gtceu.macerator()
        .itemInputs(
            'gtceu:magical_certus_quartz_gem'
        )
        .itemOutputs(
            '2x gtceu:magical_certus_quartz_dust'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(100)

    event.recipes.gtceu.autoclave()
        .itemInputs(
            'gtceu:magical_certus_quartz_dust'
        )
        .itemOutputs(
            'gtceu:magical_certus_quartz_gem'
        )
        .inputFluids(
            'gtceu:distilled_water 200'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(150)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:magical_certus_quartz_dust'
        )
        .itemOutputs(
            'gtceu:magical_certus_quartz2_ingot'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(800)
        .blastFurnaceTemp(3500)

    event.recipes.gtceu.lathe()
        .itemInputs(
            'gtceu:magical_certus_quartz2_ingot'
        )
        .itemOutputs(
            '2x gtceu:magical_certus_quartz_rod'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:magical_certus_quartz2_ingot'
        )
        .itemOutputs(
            '2x gtceu:magical_certus_quartz_rod'
        )
        .notConsumable('gtceu:rod_extruder_mold')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)

    event.recipes.gtceu.assembler()
        .itemInputs(
            '4x gtceu:magical_certus_quartz_rod'
        )
        .itemOutputs(
            'gtceu:magical_certus_quartz_frame'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(60)
        .circuit(4)

    event.shaped(
        Item.of('gtceu:magical_certus_quartz_frame', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'gtceu:magical_certus_quartz_rod',
            B: '#forge:tools/wrenches'
        }
    )

})