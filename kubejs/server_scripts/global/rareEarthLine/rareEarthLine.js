ServerEvents.recipes((event) => {

    event.recipes.gtceu.chemical_bath()
        .itemInputs(
            'gtceu:rare_earth_dust'
        )
        .inputFluids(
            'gtceu:sulfuric_acid 100'
        )
        .itemOutputs(
            'gtceu:refined_rare_earth_dust'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.distillery()
        .itemInputs(
            'gtceu:refined_rare_earth_dust'
        )
        .inputFluids(
            'gtceu:distilled_water 100'
        )
        .itemOutputs(
            'gtceu:distilled_rare_earth_dust'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:distilled_rare_earth_dust'
        )
        .inputFluids(
            'gtceu:sodium_potassium 100'
        )
        .itemOutputs(
            'gtceu:clean_rare_earth_dust'
        )
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.forgef()
        .itemInputs(
            'gtceu:clean_rare_earth_dust'
        )
        .inputFluids(
            'minecraft:lava 100'
        )
        .itemOutputs(
            'gtceu:boiled_rare_earth_dust'
        )
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.forgef()
        .itemInputs(
            'gtceu:clean_rare_earth_dust'
        )
        .inputFluids(
            'kubejs:acidinfusedlava 100'
        )
        .itemOutputs(
            'gtceu:boiled_rare_earth_dust'
        )
        .duration(20)
        .circuit(2)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:boiled_rare_earth_dust'
        )
        .inputFluids(
            'gtceu:epoxy 50'
        )
        .itemOutputs(
            'gtceu:blasted_rare_earth_dust'
        )
        .duration(200)
        .blastFurnaceTemp(4000)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.extractor()
        .itemInputs(
            'minecraft:snow_block'
        )
        .outputFluids(
            'ad_astra:cryo_fuel 100'
        )
        .duration(50)
        .EUt(GTValues.VA[GTValues.ZPM])

        
    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:blasted_rare_earth_dust'
        )
        .inputFluids(
            'ad_astra:cryo_fuel 100'
        )
        .itemOutputs(
            'gtceu:purified_rare_earth_dust'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembly_line()
        .itemInputs(
            'gtceu:purified_rare_earth_dust'
        )
        .inputFluids(
            'gtceu:europium 5'
        )
        .itemOutputs(
            'gtceu:filtered_rare_earth_dust'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:purified_rare_earth_dust')).EUt(GTValues.VA[GTValues.UV]).CWUt(8))

    event.recipes.gtceu.mixer()
        .itemInputs(
            'gtceu:filtered_rare_earth_dust'
        )
        .inputFluids(
            'gtceu:darmstadtium 5'
        )
        .itemOutputs(
            'gtceu:decontaminated_rare_earth_dust'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.advanced_fusion()
        .itemInputs(
            'gtceu:decontaminated_rare_earth_dust'
        )
        .inputFluids(
            'gtceu:neutronium 5'
        )
        .itemOutputs(
            'gtceu:strained_rare_earth_dust'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('heat_level', 1400) 
        
    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:refined_rare_earth_dust'
        )
        .chancedOutput('gtceu:small_cadmium_dust', 7000, 0)
        .chancedOutput('gtceu:small_neodymium_dust', 9000, 0)
        .chancedOutput('gtceu:small_samarium_dust', 7000, 0)
        .chancedOutput('gtceu:small_yttrium_dust', 7000, 0)
        .chancedOutput('gtceu:small_lanthanum_dust', 5000, 0)
        .itemOutputs(
            'gtceu:cerium_dust'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:distilled_rare_earth_dust'
        )
        .itemOutputs(
            '2x gtceu:cerium_dust',
            'gtceu:cadmium_dust',
            'gtceu:neodymium_dust',
            'gtceu:samarium_dust',
            'gtceu:yttrium_dust',
            'gtceu:lanthanum_dust'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:clean_rare_earth_dust'
        )
        .itemOutputs(
            '3x gtceu:cerium_dust',
            '2x gtceu:cadmium_dust',
            '2x gtceu:neodymium_dust',
            '2x gtceu:samarium_dust',
            '2x gtceu:yttrium_dust',
            '2x gtceu:lanthanum_dust'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:boiled_rare_earth_dust'
        )
        .itemOutputs(
            '4x gtceu:cerium_dust',
            '3x gtceu:cadmium_dust',
            '3x gtceu:neodymium_dust',
            '3x gtceu:samarium_dust',
            '3x gtceu:yttrium_dust',
            '3x gtceu:lanthanum_dust'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:blasted_rare_earth_dust'
        )
        .itemOutputs(
            '5x gtceu:cerium_dust',
            '5x gtceu:cadmium_dust',
            '5x gtceu:neodymium_dust',
            '5x gtceu:samarium_dust',
            '5x gtceu:yttrium_dust',
            '5x gtceu:lanthanum_dust'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:purified_rare_earth_dust'
        )
        .itemOutputs(
            '8x gtceu:cerium_dust',
            '8x gtceu:cadmium_dust',
            '8x gtceu:neodymium_dust',
            '8x gtceu:samarium_dust',
            '8x gtceu:yttrium_dust',
            '8x gtceu:lanthanum_dust'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:filtered_rare_earth_dust'
        )
        .itemOutputs(
            '12x gtceu:cerium_dust',
            '12x gtceu:cadmium_dust',
            '12x gtceu:neodymium_dust',
            '12x gtceu:samarium_dust',
            '12x gtceu:yttrium_dust',
            '12x gtceu:lanthanum_dust'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:decontaminated_rare_earth_dust'
        )
        .itemOutputs(
            '16x gtceu:cerium_dust',
            '16x gtceu:cadmium_dust',
            '16x gtceu:neodymium_dust',
            '16x gtceu:samarium_dust',
            '16x gtceu:yttrium_dust',
            '16x gtceu:lanthanum_dust'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:strained_rare_earth_dust'
        )
        .itemOutputs(
            '32x gtceu:cerium_dust',
            '32x gtceu:cadmium_dust',
            '32x gtceu:neodymium_dust',
            '32x gtceu:samarium_dust',
            '32x gtceu:yttrium_dust',
            '32x gtceu:lanthanum_dust'
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.UHV])

    
        
        

})