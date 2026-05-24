ServerEvents.recipes((event) => {

    event.recipes.gtceu.specialoreprocessingplant()
        .itemInputs(
            'gtceu:raw_pandora'
        )
        .itemOutputs(
            '2x gtceu:pandora_dust',
            'gtceu:tiny_stone_dust'
        )
        .outputFluids(
            'gtceu:pandora_gas 750',
            'gtceu:pandora 500'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(300)

    event.recipes.gtceu.specialoreprocessingplant()
        .itemInputs(
            'gtceu:raw_insanium'
        )
        .itemOutputs(
            '3x gtceu:insanium_dust',
            '2x gtceu:tiny_stone_dust',
            'gtceu:tiny_garnet_sand_dust'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(300)

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:pandora 1000'
        )
        .outputFluids(
            'gtceu:elpisium 450',
            'gtceu:corporium 650',
            'gtceu:nitrogen 200',
            'gtceu:helium_3 50'
        )
        .itemOutputs(
            'gtceu:muddied_banditium_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:muddied_banditium_dust'
        )
        .itemOutputs(
            'gtceu:banditium_dust',
            'gtceu:stone_dust',
            '2x gtceu:tiny_steel_dust',
            'gtceu:tiny_iron_dust',
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(400)

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:elpisium 1000'
        )
        .outputFluids(
            'gtceu:oxygen 50',
            'gtceu:nitrogen 900',
            'gtceu:helium 50'
        )
        .itemOutputs(
            'gtceu:elpisium_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:corporium 1000'
        )
        .outputFluids(
            'gtceu:radon 200',
            'gtceu:argon 300',
            'gtceu:helium 500',
        )
        .itemOutputs(
            'gtceu:hyperium_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:hyperium_dust'
        )
        .inputFluids(
            'gtceu:radon 100'
        )
        .itemOutputs(
            'gtceu:hot_hyperium_ingot'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .blastFurnaceTemp(5000)
        .duration(900)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_hyperium_ingot'
        )
        .itemOutputs(
            'gtceu:hyperium_ingot'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(300)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:hyperium_dust',
            'gtceu:elpisium_dust',
            'gtceu:banditium_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 150'
        )
        .itemOutputs(
            '3x gtceu:jakobium_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .blastFurnaceTemp(5000)
        .duration(300)

    event.recipes.gtceu.fusion_reactor()
        .inputFluids(
            'gtceu:pandora_gas 16',
            'gtceu:helium 16'
        )
        .outputFluids(
            'gtceu:eden_6 16'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(60)
        .fusionStartEU(150000000)

    event.recipes.gtceu.advanced_fusion()
        .inputFluids(
            'gtceu:pandora_gas 1600',
            'gtceu:helium 1600'
        )
        .outputFluids(
            'gtceu:eden_6 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 3200)

    event.recipes.gtceu.autoclave()
        .inputFluids(
            'gtceu:eden_6 144'
        )
        .itemOutputs(
            'gtceu:eden_6_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.mixer()
        .itemInputs(
            'gtceu:eden_6_dust',
            'gtceu:jakobium_dust',
            'gtceu:hyperium_dust'
        )
        .itemOutputs(
            '3x gtceu:skagium_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(300)
        .circuit(12)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:skagium_dust'
        )
        .inputFluids(
            'gtceu:sulfuric_acid 650'
        )
        .outputFluids(
            'gtceu:skagium 250'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .circuit(12)

    event.recipes.gtceu.fusion_reactor()
        .inputFluids(
            'gtceu:skagium 160',
            'gtceu:europium 2'
        )
        .outputFluids(
            'gtceu:rakkium 160'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(60)
        .fusionStartEU(150000000)

    event.recipes.gtceu.advanced_fusion()
        .inputFluids(
            'gtceu:skagium 16000',
            'gtceu:europium 200'
        )
        .outputFluids(
            'gtceu:rakkium 16000'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 2700)

    event.recipes.gtceu.electrolyzer()
        .itemInputs(
            'gtceu:pandora_dust'
        )
        .inputFluids(
            'gtceu:sulfuric_acid 288'
        )
        .itemOutputs(
            'gtceu:tiny_steel_dust',
            'gtceu:tiny_iron_dust',
            'gtceu:tiny_gold_dust'
        )
        .outputFluids(
            'gtceu:molten_sanity 144'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.insaniumtreatmentfacilty()
        .itemInputs(
            'gtceu:insanium_dust'
        )
        .inputFluids(
            'gtceu:molten_sanity 144'
        )
        .itemOutputs(
            'gtceu:refined_insanium_dust'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)

    event.recipes.gtceu.insaniumtreatmentfacilty()
        .itemInputs(
            'gtceu:refined_insanium_dust'
        )
        .inputFluids(
            'gtceu:europium 4'
        )
        .itemOutputs(
            'gtceu:puric_insanium_dust'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:puric_insanium_dust'
        )
        .inputFluids(
            'gtceu:sulfuric_acid 500'
        )
        .outputFluids(
            'gtceu:puric_insanium 500'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(400)
        .circuit(12)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:puric_insanium 250',
            'gtceu:rakkium 250'
        )
        .outputFluids(
            'gtceu:handsomium 500'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
        .circuit(12)

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:handsomium 1000'
        )
        .outputFluids(
            'gtceu:radon 200',
            'gtceu:argon 250',
            'gtceu:eridium 550'
        )
        .itemOutputs(
            'gtceu:maliwanium_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.autoclave()
        .inputFluids(
            'gtceu:eridium 1000'
        )
        .itemOutputs(
            'gtceu:eridium_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:eridium_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 150'
        )
        .itemOutputs(
            'gtceu:hot_eridium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .blastFurnaceTemp(5000)
        .duration(800)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:maliwanium_dust'
        )
        .inputFluids(
            'gtceu:nitrogen 150'
        )
        .itemOutputs(
            'gtceu:hot_maliwanium_ingot'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .blastFurnaceTemp(5000)
        .duration(800)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_eridium_ingot'
        )
        .itemOutputs(
            'gtceu:eridium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_maliwanium_ingot'
        )
        .itemOutputs(
            'gtceu:maliwanium_ingot'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:eridium_ingot'
        )
        .itemOutputs(
            'gtceu:eridium_block'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:maliwanium_ingot'
        )
        .itemOutputs(
            'gtceu:maliwanium_block'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:hyperium_ingot'
        )
        .itemOutputs(
            'gtceu:hyperium_block'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:maliwanium_ingot'
        )
        .itemOutputs(
            '8x gtceu:maliwanium_foil'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .circuit(10)


     event.shaped(
        Item.of('gtceu:specialoreprocessingplant', 1),
        [
            'FAF',
            'BCB',
            'DED'
        ],
        {
            A: '#gtceu:circuits/luv',
            B: 'gtceu:luv_electric_motor',
            C: 'gtceu:luv_robot_arm',
            D: 'gtceu:shock_proof_cutting_casing',
            E: 'gtceu:luv_machine_hull',
            F: 'gtceu:secure_maceration_casing'
        }
    )

    event.shaped(
        Item.of('gtceu:insaniumtreatmentfacilty', 1),
        [
            'FAF',
            'BCB',
            'DED'
        ],
        {
            A: '#gtceu:circuits/luv',
            B: 'gtceu:luv_electric_motor',
            C: 'gtceu:luv_robot_arm',
            D: 'gtceu:nichrome_coil_block',
            E: 'gtceu:luv_machine_hull',
            F: 'gtceu:inert_machine_casing'
        }
    )

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:eridium_ingot'
        )
        .itemOutputs(
            '8x gtceu:eridium_foil'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .circuit(10)


    event.recipes.gtceu.large_chemical_reactor('uhpicwafer2')
        .itemInputs(
            'gtceu:hpic_wafer',
            '4x gtceu:eridium_foil'
        )
        .inputFluids(
            'gtceu:naquadah 450'
        )
        .itemOutputs(
            '4x gtceu:uhpic_wafer'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(1000)
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(24)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:hyperium_ingot'
        )
        .itemOutputs(
            '8x gtceu:hyperium_foil'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
        .circuit(10)


    event.recipes.gtceu.large_chemical_reactor('qubit2')
        .itemInputs(
            'gtceu:nano_cpu_wafer',
            '4x gtceu:hyperium_foil'
        )
        .inputFluids(
            'gtceu:gallium_arsenide 200'
        )
        .itemOutputs(
            '4x gtceu:qbit_cpu_wafer'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(24)

    event.recipes.gtceu.large_chemical_reactor('hpic2')
        .itemInputs(
            'gtceu:mpic_wafer',
            '4x gtceu:maliwanium_foil'
        )
        .inputFluids(
            'gtceu:vanadium_gallium 200'
        )
        .itemOutputs(
            '4x gtceu:hpic_wafer'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1000)
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(24)


    event.replaceInput(
        'gtceu:shaped/large_assembler',
        'gtceu:platinum_single_cable',
        'gtceu:hyperium_block'
    )

    event.replaceInput(
        'gtceu:shaped/large_circuit_assembler',
        'gtceu:platinum_single_cable',
        'gtceu:hyperium_block'
    )

    event.replaceInput(
        'gtceu:assembly_line/research_station',
        'gtceu:uranium_rhodium_dinaquadide_double_wire',
        'gtceu:maliwanium_ingot'
    )

    event.replaceInput(
        'gtceu:assembler/optical_pipe',
        'gtceu:silver_foil',
        'gtceu:maliwanium_foil'
    )



})