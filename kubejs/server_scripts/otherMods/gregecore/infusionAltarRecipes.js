ServerEvents.recipes((event) => {

    event.remove('botania:alfheim_portal')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '6x botania:livingwood',
            '3x botania:terrasteel_nugget',
            '4x botania:mana_diamond',
            '4x kubejs:lvalloy',
            '4x botania:manasteel_ingot'
        )
        .inputFluids(
            'gregecore:terra_essentia 300',
            'gregecore:aqua_essentia 500',
        )
        .itemOutputs(
            'botania:alfheim_portal'
        )
        .duration(600)
        .addData('essentia', "1,1,0,0,0,0")

    event.remove('undergarden:catalyst')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '4x #gtceu:circuits/iv',
            '4x minecraft:diamond',
            '4x minecraft:gold_ingot',
            '4x minecraft:iron_ingot',
            '2x botanicalextramachinery:malachite_ingot',
            '2x ad_astra:ostrum_ingot',
            '6x gtceu:tungsten_steel_ingot'
        )
        .inputFluids(
            'gregecore:ignis_essentia 3000',
            'gregecore:perditio_essentia 4000',
            'gregecore:terra_essentia 6000',
        )
        .itemOutputs(
            'undergarden:catalyst'
        )
        .duration(600)
        .addData('essentia', "0,1,0,1,1,0")

    event.remove('mythicbotany:gjallar_horn_empty_mana_infusion')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'botania:horn_grass',
            '64x botania:manasteel_ingot',
            Item.of('botania:mana_tablet', '{mana:500000}').weakNBT(),
            '#gtceu:circuits/ev',
            '6x gtceu:nichrome_ingot'
        )
        .inputFluids(
            'gregecore:aqua_essentia 1000',
            'gregecore:terra_essentia 2000',
            'gregecore:aer_essentia 1000',
        )
        .itemOutputs(
            'mythicbotany:gjallar_horn_empty'
        )
        .duration(600)
        .addData('essentia', "1,1,1,0,0,0")

    event.remove( {id: 'botanicalextramachinery:greenhouse'})
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:magicalseed',
            '4x kubejs:vanaheimingotblock',
            '4x #gtceu:circuits/ev',
            '4x botania:terrasteel_ingot',
            '2x gtceu:ev_robot_arm',
            '8x gtceu:ev_electric_motor',
            '6x gtceu:nichrome_ingot'
        )
        .inputFluids(
            'gregecore:aqua_essentia 1500',
            'gregecore:terra_essentia 2500',
            'gregecore:aer_essentia 500',
            'gregecore:perditio_essentia 2000',
        )
        .itemOutputs(
            'botanicalextramachinery:greenhouse'
        )
        .duration(600)
        .addData('essentia', "1,1,1,0,1,0")

    event.remove('bloodmagic:blood_altar')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '4x #gtceu:circuits/zpm',
            '8x gtceu:trinium_ingot',
            '4x gtceu:titanium_huge_fluid_pipe',
            '4x gtceu:luv_field_generator',
            '4x gtceu:naquadah_ingot'
        )
        .inputFluids(
            'gregecore:aqua_essentia 3000',
            'gregecore:aer_essentia 5000',
            'gregecore:perditio_essentia 7000',
            'gregecore:ignis_essentia 9000',
            'gregecore:ordo_essentia 6000',
        )
        .itemOutputs(
            'bloodmagic:altar'
        )
        .duration(600)
        .addData('essentia', "1,0,1,1,1,1")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '4x #gtceu:circuits/uv',
            '8x gtceu:darmstadtium_ingot',
            '4x gtceu:naquadah_huge_fluid_pipe',
            '4x gtceu:zpm_field_generator',
            '4x gtceu:tritanium_ingot',
            '4x gtceu:naquadria_ingot',
        )
        .inputFluids(
            'gregecore:aqua_essentia 6000',
            'gregecore:aer_essentia 10000',
            'gregecore:terra_essentia 10000',
            'gregecore:perditio_essentia 14000',
            'gregecore:ignis_essentia 20000',
            'gregecore:ordo_essentia 12000',
        )
        .itemOutputs(
            'enchanted:witch_cauldron'
        )
        .duration(600)
        .addData('essentia', "1,1,1,1,1,1")

    event.remove('better_angel_ring:angel_ring')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'minecraft:elytra',
            '64x minecraft:gold_ingot',
            '4x #gtceu:circuits/ev',
            '16x minecraft:glass',
            'better_angel_ring:ring',
            '64x gtceu:titanium_ingot'
        )
        .inputFluids(
            'gregecore:aer_essentia 10000',
        )
        .itemOutputs(
            'better_angel_ring:angel_ring'
        )
        .duration(600)
        .addData('essentia', "0,0,1,0,0,0")

    event.remove('advanced_ae:flight_card')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'minecraft:elytra',
            '4x advanced_ae:quantum_alloy_plate',
            '4x #gtceu:circuits/ev',
            'advanced_ae:quantum_upgrade_base',
            '4x gtceu:titanium_ingot'
        )
        .inputFluids(
            'gregecore:aer_essentia 10000',
        )
        .itemOutputs(
            'advanced_ae:flight_card'
        )
        .duration(600)
        .addData('essentia', "0,0,1,0,0,0")

    event.remove({id: 'draconicevolution:tools/advanced_dislocator'})
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'draconicevolution:dislocator',
            '4x gtceu:stainless_steel_ingot',
            '4x #gtceu:circuits/hv'
        )
        .inputFluids(
            'gregecore:ordo_essentia 1000',
            'gregecore:perditio_essentia 1000'
        )
        .itemOutputs(
            'draconicevolution:advanced_dislocator'
        )
        .duration(600)
        .addData('essentia', "0,0,0,0,1,1")

    event.remove('gardenofglass:end_portal_frame')
    event.remove('minecraft:end_portal_frame')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '8x ad_astra:moon_stone',
            'gtceu:stainless_steel_ingot'
        )
        .inputFluids(
            'gregecore:terra_essentia 100',
        )
        .itemOutputs(
            'minecraft:end_portal_frame'
        )
        .duration(600)
        .addData('essentia', "0,1,0,0,0,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'avaritia:record_fragment',
            '6x avaritia:eternal_singularity'
        )
        .inputFluids(
            'gregecore:aqua_essentia 99000',
            'gregecore:aer_essentia 99000',
            'gregecore:terra_essentia 99000',
            'gregecore:perditio_essentia 99000',
            'gregecore:ignis_essentia 99000',
            'gregecore:ordo_essentia 99000',
        )
        .itemOutputs(
            Item.of('hostilenetworks:data_model', '{data_model:{data:1,id:"hostilenetworks:draconicevolution/draconic_guardian",iterations:1}}')
        )
        .duration(600)
        .addData('essentia', "1,1,1,1,1,1")

    event.remove('projecte:repair_talisman')
    event.remove('projecte:repair_talisman_alt')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '6x projecte:low_covalence_dust',
            '6x projecte:medium_covalence_dust',
            '6x projecte:high_covalence_dust',
            'minecraft:paper',
            '2x minecraft:string'
        )
        .inputFluids(
            'gregecore:aqua_essentia 100',
            'gregecore:aer_essentia 100',
            'gregecore:terra_essentia 100',
            'gregecore:perditio_essentia 100',
            'gregecore:ignis_essentia 100',
            'gregecore:ordo_essentia 100',
        )
        .itemOutputs(
            'projecte:repair_talisman'
        )
        .duration(600)
        .addData('essentia', "1,1,1,1,1,1")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'minecraft:fire_charge',
            '#gtceu:circuits/mv',
            'minecraft:coal',
            'gtceu:sintercoke_ingot',
            'gtceu:coke_gem'
        )
        .inputFluids(
            'gregecore:ignis_essentia 100'
        )
        .itemOutputs(
            'kubejs:twilight_flame'
        )
        .duration(600)
        .addData('essentia', "0,0,0,1,0,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '4x gtceu:clean_machine_casing',
            '4x gtceu:nonconducting_casing',
            '4x gtceu:stainless_steel_gearbox',
            '4x gregecore:ptfe_firebox_casing',
            '4x gtceu:rtm_alloy_coil_block',
            '4x gtceu:tempered_glass', 
            '4x gregecore:ptfe_engine_intake',
            '8x #gtceu:circuits/luv',
            '2x kubejs:essentia_filter'
        )
        .inputFluids(
            'gregecore:ordo_essentia 3000',
            'gregecore:perditio_essentia 4000',
            'gregecore:ignis_essentia 2000',
        )
        .itemOutputs(
            'gtceu:giantesssmelter'
        )
        .duration(600)
        .addData('essentia', "0,0,0,1,1,1")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '4x #gtceu:circuits/ev',
            'megacells:mega_fluid_cell_housing'
        )
        .inputFluids(
            'gregecore:ignis_essentia 30000',
        )
        .itemOutputs(
            'kubejs:infinity_lava_cell'
        )
        .duration(600)
        .addData('essentia', "0,0,0,1,0,0")

    event.remove('ad_astra:nasa_workbench')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '#gtceu:circuits/hv',
            '2x gtceu:iron_rod',
            'gtceu:steel_block',
            '4x gtceu:steel_plate',
            'minecraft:redstone_torch'
        )
        .inputFluids(
            'gregecore:ignis_essentia 1000',
            'gregecore:aer_essentia 500',
            'gregecore:perditio_essentia 800'
        )
        .itemOutputs(
            'ad_astra:nasa_workbench'
        )
        .duration(600)
        .addData('essentia', "0,0,1,1,1,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '#gtceu:circuits/lv',
            '4x gtceu:iron_plate',
            'minecraft:iron_block',
            '2x gtceu:steel_plate',
            'minecraft:redstone_torch',
            '2x minecraft:glass_pane',
            'minecraft:repeater'
        )
        .inputFluids(
            'gregecore:perditio_essentia 10'
        )
        .itemOutputs(
            'kubejs:vending_machine'
        )
        .duration(600)
        .addData('essentia', "0,0,0,0,1,0")

    //aqua, terra, aer, ignis, perditio, ordo

})