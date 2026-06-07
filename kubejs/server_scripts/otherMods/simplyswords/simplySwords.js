ServerEvents.recipes((event) => {

    event.remove({ output: /simplyswords:runic.*/ });
    event.remove('simplyswords:unique_melting')
    event.remove('simplyswords:contained_remnant')
    event.remove('simplyswords:runefused_gem_reroll')
    event.remove('simplyswords:runefused_gem')
    event.remove('simplyswords:netherfused_gem')
    event.remove('simplyswords:sunfire')
    event.remove('simplyswords:harbinger')

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'botania:mana_powder'
        )
        .itemOutputs(
            '4x kubejs:magicdust'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])



    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'minecraft:netherite_ingot'
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
            'kubejs:legwepcore'
        )
        .duration(600)
        .addData('essentia', "1,1,1,1,1,1")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:legwepcore',
            '16x minecraft:fire_charge',
            '64x kubejs:magicdust',
            Item.of('simplyswords:diamond_claymore', '{Damage:0}'),
            'botania:lava_pendant'
        )
        .inputFluids(
            'gregecore:ignis_essentia 1000',
        )
        .itemOutputs(
            Item.of('simplyswords:brimstone_claymore', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "0,0,0,1,0,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:legwepcore',
            '16x minecraft:ender_pearl',
            '64x kubejs:magicdust',
            Item.of('simplyswords:diamond_claymore', '{Damage:0}'),
            'botania:third_eye'
        )
        .inputFluids(
            'gregecore:perditio_essentia 1000',
        )
        .itemOutputs(
            Item.of('simplyswords:watcher_claymore', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "0,0,0,0,1,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:legwepcore',
            '16x minecraft:ender_pearl',
            '64x kubejs:magicdust',
            Item.of('simplyswords:diamond_warglaive', '{Damage:0}'),
            'botania:third_eye'
        )
        .inputFluids(
            'gregecore:perditio_essentia 1000',
        )
        .itemOutputs(
            Item.of('simplyswords:watching_warglaive', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "0,0,0,0,1,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:legwepcore',
            '16x minecraft:fire_charge',
            '64x kubejs:magicdust',
            Item.of('simplyswords:diamond_longsword', '{Damage:0}'),
            'botania:lava_pendant'
        )
        .inputFluids(
            'gregecore:ignis_essentia 1000',
        )
        .itemOutputs(
            Item.of('simplyswords:emberblade', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "0,0,0,1,0,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:legwepcore',
            'botania:blood_pendant',
            '64x kubejs:magicdust',
            Item.of('simplyswords:diamond_claymore', '{Damage:0}'),
            Item.of('botania:ender_dagger', '{Damage:0}')
        )
        .inputFluids(
            'gregecore:aer_essentia 500',
            'gregecore:perditio_essentia 500',
        )
        .itemOutputs(
            Item.of('simplyswords:twisted_blade', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "0,0,1,0,1,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:legwepcore',
            'enderio:filled_soul_vial',
            '64x kubejs:magicdust',
            Item.of('simplyswords:diamond_scythe', '{Damage:0}'),
            Item.of('botania:ender_dagger', '{Damage:0}')
        )
        .inputFluids(
            'gregecore:ignis_essentia 500',
            'gregecore:perditio_essentia 500',
        )
        .itemOutputs(
            Item.of('simplyswords:soulrender', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "0,0,0,1,1,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:legwepcore',
            '16x minecraft:fire_charge',
            '64x kubejs:magicdust',
            Item.of('simplyswords:diamond_greataxe', '{Damage:0}'),
            'botania:lava_pendant'
        )
        .inputFluids(
            'gregecore:ignis_essentia 1000',
        )
        .itemOutputs(
            Item.of('simplyswords:molten_edge', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "0,0,0,1,0,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:legwepcore',
            '16x minecraft:lightning_rod',
            '64x kubejs:magicdust',
            Item.of('simplyswords:diamond_halberd', '{Damage:0}'),
            'minecraft:daylight_detector'
        )
        .inputFluids(
            'gregecore:aer_essentia 1000',
        )
        .itemOutputs(
            Item.of('simplyswords:thunderbrand', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "0,0,1,0,0,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '16x minecraft:fire_charge',
            '64x kubejs:magicdust',
            'simplyswords:brimstone_claymore',
            'botania:lava_pendant'
        )
        .inputFluids(
            'gregecore:ignis_essentia 3000',
        )
        .itemOutputs(
            Item.of('simplyswords:sunfire', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "0,0,0,1,0,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:legwepcore',
            'botania:unholy_cloak',
            '64x kubejs:magicdust',
            Item.of('simplyswords:diamond_claymore', '{Damage:0}'),
            '16x minecraft:obsidian'
        )
        .inputFluids(
            'gregecore:perditio_essentia 500',
            'gregecore:terra_essentia 500'
        )
        .itemOutputs(
            Item.of('simplyswords:harbinger', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "0,1,0,0,1,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:legwepcore',
            '4x botania:rune_air',
            '64x kubejs:magicdust',
            Item.of('simplyswords:diamond_katana', '{Damage:0}'),
            'ironfurnaces:augment_speed'
        )
        .inputFluids(
            'gregecore:aer_essentia 1000',
        )
        .itemOutputs(
            Item.of('simplyswords:whisperwind', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "0,0,1,0,0,0")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:legwepcore',
            '16x botania:mana_powder',
            '64x kubejs:magicdust',
            Item.of('simplyswords:diamond_twinblade', '{Damage:0}'),
            'botania:spark'
        )
        .inputFluids(
            'gregecore:aqua_essentia 500',
            'gregecore:ordo_essentia 500',
        )
        .itemOutputs(
            Item.of('simplyswords:stars_edge', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "1,0,0,0,0,1")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:legwepcore',
            '16x gtceu:steel_block',
            '64x kubejs:magicdust',
            Item.of('simplyswords:diamond_claymore', '{Damage:0}'),
            '16x botania:red_petal'
        )
        .inputFluids(
            'gregecore:ordo_essentia 2000'
        )
        .itemOutputs(
            Item.of('simplyswords:ribboncleaver', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "0,0,0,0,0,1")

    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            'kubejs:legwepcore',
            '16x botania:mana_powder',
            '64x kubejs:magicdust',
            Item.of('simplyswords:diamond_scythe', '{Damage:0}'),
            '16x botania:mana_string'
        )
        .inputFluids(
            'gregecore:terra_essentia 1000'
        )
        .itemOutputs(
            Item.of('simplyswords:magiscythe', '{Damage:0,nether_power:"no_socket",runic_power:"no_socket"}')
        )
        .duration(600)
        .addData('essentia', "0,1,0,0,0,0")


    //aqua, terra, aer, ignis, perditio, ordo

})