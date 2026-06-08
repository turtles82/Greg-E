ServerEvents.recipes((event) => {

    event.recipes.gtceu.gas_collector()
        .outputFluids(
            'gtceu:forge_smoke 10000'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)
        .circuit(7)
        .dimension('cataclysm_dimension:cataclysm_forge_of_aeons')

    event.recipes.gtceu.centrifuge()
        .inputFluids(
            'gtceu:forge_smoke 5000'
        )
        .itemOutputs(
            'gtceu:small_iron_dust',
            'gtceu:small_nickel_dust',
            'gtceu:small_imitation_witherite_dust'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    event.shapeless(
        Item.of('gtceu:imitation_witherite_dust', 1),
        [
            '4x gtceu:small_imitation_witherite_dust'
        ]
    )

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:imitation_witherite_dust'
        )
        .itemOutputs(
            'gtceu:imitation_witherite_ingot'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400)
        .blastFurnaceTemp(1500)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            '#grege:witherite'
        )
        .itemOutputs(
            '2x gtceu:witherite_wire_single_wire'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.circuit_assembler('betterboard11111111111')
        .itemInputs(
            'gtceu:phenolic_printed_circuit_board',
            'gtceu:basic_electronic_circuit',
            '2x #gtceu:diodes',
            '2x gtceu:witherite_wire_single_wire'
        )
        .itemOutputs(
            'gtceu:good_electronic_circuit'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(250)
        .circuit(2)

    event.recipes.gtceu.gas_collector()
        .outputFluids(
            'gtceu:abyssal_air 10000'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(300)
        .circuit(8)
        .dimension('cataclysm_dimension:cataclysm_abyssal_depths')

    event.recipes.gtceu.electrolyzer()
        .inputFluids(
            'gtceu:abyssal_air 5000'
        )
        .outputFluids(
            'gtceu:abyssal_goo 2500'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(300)
        .circuit(1)

    event.recipes.gtceu.mixer()
        .inputFluids(
            'gtceu:abyssal_goo 1000'
        )
        .itemInputs(
            'minecraft:egg'
        )
        .itemOutputs(
            'kubejs:imitationegg'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.analyzator()
        .itemInputs(
            'kubejs:imitationegg'
        )
        .itemOutputs(
            'gtceu:abyssal_wire_ingot'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.analyzator()
        .notConsumable(
            'cataclysm:abyssal_egg'
        )
        .itemOutputs(
            'gtceu:abyssal_wire_ingot'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)
        .circuit(2)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:abyssal_wire_ingot'
        )
        .itemOutputs(
            '2x gtceu:abyssal_wire_single_wire'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.circuit_assembler('circffvf12312311')
        .itemInputs(
            'gtceu:good_integrated_circuit',
            'gtceu:ilc_chip',
            '2x gtceu:ram_chip',
            '4x #gtceu:transistors',
            '8x gtceu:fine_electrum_wire',
            '2x gtceu:abyssal_wire_single_wire'
        )
        .itemOutputs(
            'gtceu:advanced_integrated_circuit'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(700)

    event.recipes.gtceu.sifter()
        .itemInputs(
            '4x #forge:sand'
        )
        .itemOutputs(
            'gtceu:small_impure_ancient_metal_dust'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
        .dimension('cataclysm_dimension:cataclysm_pharaohs_bane')

    event.shapeless(
        Item.of('gtceu:impure_ancient_metal_dust', 1),
        [
            '4x gtceu:small_impure_ancient_metal_dust'
        ]
    )

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            'gtceu:impure_ancient_metal_dust'
        )
        .inputFluids(
            'gtceu:sulfuric_acid 150'
        )
        .itemOutputs(
            'gtceu:dirty_ancient_metal_dust'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(250)
        .circuit(5)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:dirty_ancient_metal_dust'
        )
        .itemOutputs(
            'gtceu:quartz_sand_dust',
            'gtceu:ancient_metal_imitation_dust'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(150)
        .circuit(1)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:ancient_metal_imitation_dust'
        )
        .itemOutputs(
            'gtceu:ancient_metal_imitation_ingot'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(450)
        .blastFurnaceTemp(2000)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            '#grege:ancientmetal'
        )
        .itemOutputs(
            '2x gtceu:ancient_metal_single_wire'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.circuit_assembler('fvev123f32135e1gfe35v1531')
        .itemInputs(
            'gtceu:plastic_printed_circuit_board',
            'gtceu:micro_processor_assembly',
            '2x #gtceu:diodes',
            '2x gtceu:ram_chip',
            '4x gtceu:ancient_metal_single_wire',
            '12x gregecore:nobelium_bolt'
        )
        .itemOutputs(
            'gtceu:micro_processor_computer'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.gas_collector()
        .outputFluids(
            'gtceu:ignitium_infused_lava 10000'
        )   
        .circuit(9) 
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
        .dimension('cataclysm_dimension:cataclysm_infernos_maw')

    event.recipes.gtceu.centrifuge()
        .inputFluids(
            'gtceu:ignitium_infused_lava 5000'
        )
        .outputFluids(
            'minecraft:lava 100',
            'gtceu:dirty_ignitium_lava 3500'
        )
        .itemOutputs(
            'gtceu:ash_dust'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(350)
        .circuit(4)

    event.recipes.gtceu.electrolyzer()
        .inputFluids(
            'gtceu:dirty_ignitium_lava 2000'
        )
        .outputFluids(
            'minecraft:lava 100'
        )
        .itemOutputs(
            'gtceu:ignitium_imitation_dust',
            'gtceu:small_stone_dust'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(300)
        .circuit(2)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:ignitium_imitation_dust'
        )
        .itemOutputs(
            'gtceu:ignitium_imitation_ingot'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(800)
        .blastFurnaceTemp(2500)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            '#grege:ignitium'
        )
        .itemOutputs(
            '2x gtceu:ignitium_wire_single_wire'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.EV])
        .duration(100)

    event.recipes.gtceu.circuit_assembler('d4fed35v43df5v43df5v4d3fv4d')
        .itemInputs(
            '2x gtceu:aluminium_frame',
            'gtceu:micro_processor_computer',
            '6x #gtceu:inductors',
            '12x #gtceu:capacitors',
            '12x gtceu:ram_chip',
            '12x gtceu:ignitium_wire_single_wire'
        )
        .itemOutputs(
            'gtceu:micro_processor_mainframe'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(700)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.circuit_assembler('d4fed35v43df5v43dvcghchgf5v4d3fv4d')
        .itemInputs(
            '2x gtceu:aluminium_frame',
            'gtceu:micro_processor_computer',
            'gtceu:advanced_smd_inductor',
            '2x gtceu:advanced_smd_capacitor',
            '12x gtceu:ram_chip',
            '12x gtceu:ignitium_wire_single_wire'
        )
        .itemOutputs(
            'gtceu:micro_processor_mainframe'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.chemical_reactor()
        .inputFluids(
            'gtceu:sulfuric_acid 1000',
            'gtceu:distilled_water 500'
        )
        .outputFluids(
            'gtceu:diluted_sulfuric_acid 1200'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)

    event.recipes.gtceu.sifter()
        .itemInputs(
            '16x minecraft:netherrack'
        )
        .itemOutputs(
            'kubejs:emptybattery'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(300)
        .dimension('cataclysm_dimension:cataclysm_souls_anvil')

    event.recipes.gtceu.chemical_reactor()
        .inputFluids(
            'gtceu:diluted_sulfuric_acid 750',
            'minecraft:lava 750'
        )
        .outputFluids(
            'gtceu:lava_battery_acid 500'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)

    event.recipes.gtceu.canner()
        .itemInputs(
            'kubejs:emptybattery'
        )
        .inputFluids(
            'gtceu:lava_battery_acid 1000'
        )
        .itemOutputs(
            'kubejs:imitationbattery'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(400)

    event.recipes.gtceu.circuit_assembler('fvgrdfgfdg453534v35f4ydss')
        .itemInputs(
            '2x gtceu:aluminium_frame',
            'gtceu:nano_processor_computer',
            '2x gtceu:advanced_smd_inductor',
            '4x gtceu:advanced_smd_capacitor',
            '8x gtceu:ram_chip',
            '8x #grege:powcell'
        )
        .itemOutputs(
            'gtceu:nano_processor_mainframe'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(700)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.circuit_assembler('fvgrdfgfdg453534v35f4gvvggvydss')
        .itemInputs(
            '2x gtceu:aluminium_frame',
            'gtceu:nano_processor_computer',
            '8x gtceu:smd_inductor',
            '16x gtceu:smd_capacitor',
            '8x gtceu:ram_chip',
            '12x #grege:powcell'
        )
        .itemOutputs(
            'gtceu:nano_processor_mainframe'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.gas_collector()
        .outputFluids(
            'gtceu:enderium_air 10000'
        )
        .circuit(10)
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(500)
        .dimension('cataclysm_dimension:cataclysm_bastion_lost')

    event.recipes.gtceu.autoclave()
        .inputFluids(
            'gtceu:enderium_air 2500'
        )
        .itemOutputs(
            'gtceu:dirty_enderium_dust'
        )
        .outputFluids(
            'gtceu:ender_air 500'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(300)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:dirty_enderium_dust'
        )
        .itemOutputs(
            'gtceu:enderium_imitation_dust',
            'gtceu:small_beryllium_dust'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)

    event.recipes.gtceu.electric_blast_furnace()
        .notConsumable(
            'cataclysm:gauntlet_of_guard'
        )
        .itemOutputs(
            'gtceu:enderium_ingot'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
        .blastFurnaceTemp(5000)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            '2x gtceu:enderium_imitation_dust'
        )
        .itemOutputs(
            'gtceu:enderium_imitation_ingot'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(700)
        .blastFurnaceTemp(5000)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            '#grege:enderium'
        )
        .itemOutputs(
            'gtceu:enderium_wire_single_wire'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.circuit_assembler('dsfvdfsv1vc521g5f1yxa1b51nj')
        .itemInputs(
            '2x gtceu:hssg_frame',
            'gtceu:quantum_processor_computer',
            '3x gtceu:advanced_smd_inductor',
            '6x gtceu:advanced_smd_capacitor',
            '12x gtceu:ram_chip',
            '24x gtceu:enderium_wire_single_wire'
        )
        .itemOutputs(
            'gtceu:quantum_processor_mainframe'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(700)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.circuit_assembler('dsfvdfsv1xfxfdxfvc521g5f1yxa1b51nj')
        .itemInputs(
            '2x gtceu:hssg_frame',
            'gtceu:quantum_processor_computer',
            '12x gtceu:smd_inductor',
            '24x gtceu:smd_capacitor',
            '12x gtceu:ram_chip',
            '24x gtceu:enderium_wire_single_wire'
        )
        .itemOutputs(
            'gtceu:quantum_processor_mainframe'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(300)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.gas_collector()
        .outputFluids(
            'gtceu:cursed_air 10000'
        )
        .circuit(11)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(300)
        .dimension('cataclysm_dimension:cataclysm_eternal_frosthold')

    event.recipes.gtceu.distillation_tower()
        .inputFluids(
            'gtceu:cursed_air 10000'
        )
        .outputFluids(
            'gtceu:argon 50',
            'gtceu:nitrogen 45',
            'gtceu:oxygen 100'
        )
        .itemOutputs(
            'gtceu:cursed_iron_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(150)
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.electrolyzer()
        .itemInputs(
            'gtceu:cursed_iron_dust'
        )
        .inputFluids(
            'gtceu:oxygen 100'
        )
        .itemOutputs(
            'gtceu:cursium_imitation_dust'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:cursium_imitation_dust'
        )
        .itemOutputs(
            'gtceu:cursium_imitation_ingot'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(600)
        .blastFurnaceTemp(6500)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            '#grege:cursium'
        )
        .itemOutputs(
            '2x gtceu:cursium_wire_single_wire'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.assembly_line('crystalbetter2222222')
        .itemInputs(
            '2x gtceu:hsse_frame',
            'gtceu:crystal_processor_computer',
            '16x gtceu:ram_chip',
            'gtceu:hpic_chip',
            '8x gtceu:cursium_wire_single_wire',
            '4x gtceu:advanced_smd_inductor',
            '8x gtceu:advanced_smd_capacitor',
            '4x gtceu:advanced_smd_diode'
        )
        .inputFluids(
            'gtceu:soldering_alloy 1000'
        )
        .itemOutputs('2x gtceu:crystal_processor_mainframe')
        .duration(700)
        .EUt(GTValues.VA[GTValues.LuV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:cursium_wire_single_wire')).EUt(GTValues.VA[GTValues.LuV]).CWUt(32))

    event.recipes.gtceu.gas_collector()
        .outputFluids(
            'gtceu:captured_lightning 10000'
        )
        .circuit(12)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(500)
        .dimension('cataclysm_dimension:cataclysm_sanctum_fallen')

    event.recipes.gtceu.canner()
        .itemInputs(
            'minecraft:glass_bottle'
        )
        .inputFluids(
            'gtceu:captured_lightning 5000'
        )
        .itemOutputs(
            'kubejs:lightninginabottle'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:lightninginabottle'
        )
        .itemOutputs(
            'gtceu:storm_imitation_dust',
            'gtceu:glass_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(150)
        .circuit(5)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:storm_imitation_dust'
        )
        .itemOutputs(
            'gtceu:storm_imitation_ingot'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(650)
        .blastFurnaceTemp(6500)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            '#grege:lightning'
        )
        .itemOutputs(
            '2x gtceu:storm_wire_single_wire'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(100)

    event.recipes.gtceu.assembly_line('getbettericircuit222265333322')
        .itemInputs(
            '2x gtceu:tritanium_frame',
            'gtceu:wetware_processor_computer',
            '4x kubejs:ultimatediode',
            '4x kubejs:ultimatetransistor',
            '64x gtceu:polybenzimidazole_foil',
            'gtceu:highly_advanced_soc',
            '64x gtceu:ram_chip',
            '32x gtceu:storm_wire_single_wire',
            '8x gtceu:europium_plate'
        )
        .inputFluids(
            'gtceu:soldering_alloy 3000',
            'gtceu:polybenzimidazole 1000'
        )
        .itemOutputs('2x gtceu:wetware_processor_mainframe')
        .duration(700)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b.researchStack(Item.of('gtceu:storm_wire_single_wire')).EUt(GTValues.VA[GTValues.UHV]).CWUt(64))
        

})