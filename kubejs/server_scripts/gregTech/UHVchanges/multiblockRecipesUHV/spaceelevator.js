ServerEvents.recipes((event) => {

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:commonearth'
        )
        .itemOutputs(
            '512x gtceu:sulfur_dust',
            '512x gtceu:nickel_dust',
            '512x gtceu:cobaltite_dust',
            '512x gtceu:tin_dust',
            '512x gtceu:silver_dust',
            '512x gtceu:bauxite_dust'
        )
        .duration(600)
        .addData('height_level', 80)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:commonearth'
        )
        .itemOutputs(
            '512x ae2:sky_dust',
            '512x minecraft:glowstone_dust',
            '512x minecraft:wheat_seeds',
            '512x gtceu:lead_dust',
            '512x powah:uraninite',
            '512x gtceu:nickel_dust'
        )
        .duration(600)
        .addData('height_level', 80)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(2)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:deepslateearth'
        )
        .itemOutputs(
            '512x gtceu:chromium_dust',
            '512x gtceu:ruby_gem',
            '512x gtceu:sapphire_gem',
            '512x gtceu:zinc_dust'
        )
        .duration(600)
        .addData('height_level', 120)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:deepslateearth'
        )
        .itemOutputs(
            '512x gtceu:phosphorus_dust',
            '512x gtceu:antimony_dust',
            '512x gtceu:manganese_dust',
            '512x gtceu:vanadium_dust',
        )
        .duration(600)
        .addData('height_level', 120)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(2)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:voiddust'
        )
        .itemOutputs(
            '512x gregecore:plutonium_hexafluoride_dust',
            '512x gtceu:gypsum_dust',
            '512x gtceu:calcite_dust',
            '512x minecraft:amethyst_shard',
            '512x fluxnetworks:flux_dust'
        )
        .duration(600)
        .addData('height_level', 160)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:earthlydust'
        )
        .itemOutputs(
            '512x gtceu:purified_pentlandite_ore',
            '512x gtceu:purified_sphalerite_ore',
            '512x gtceu:magnesium_dust',
            '512x gtceu:rutile_dust',
            '512x minecraft:echo_shard',
            '512x gtceu:molybdenum_dust'
        )
        .outputFluids(
            'gtceu:oil_medium 256000'
        )
        .duration(600)
        .addData('height_level', 200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:eidust'
        )
        .itemOutputs(
            '512x gtceu:purified_galena_ore',
            '512x gtceu:purified_sphalerite_ore',
            '512x gtceu:raw_cooperite',
            '512x gtceu:raw_scheelite',
            '512x gtceu:raw_pentlandite'
        )
        .duration(600)
        .addData('height_level', 240)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:gassydust'
        )
        .itemOutputs(
            '512x gtceu:chrono_percipitate_dust',
            '512x gtceu:raw_pandora',
            '512x gtceu:raw_insanium'
        )
        .duration(600)
        .addData('height_level', 280)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:activatedrune'
        )
        .itemOutputs(
            '512x gtceu:raw_naquadah',
            '512x gtceu:boron_dust',
            '512x gtceu:sturenium_35_dust'
        )
        .outputFluids(
            'gtceu:voidium 256000'
        )
        .duration(600)
        .addData('height_level', 320)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:dustwithbroom'
        )
        .itemOutputs(
            '1024x gtceu:collagen_dust',
            '1024x gtceu:meat_dust',
            '512x gtceu:vadricium_dust'
        )
        .duration(600)
        .addData('height_level', 360)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:neutroniuminfused'
        )
        .itemOutputs(
            '8x gtceu:raw_decursium'
        )
        .duration(600)
        .addData('height_level', 400)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:neutroniuminfused'
        )
        .itemOutputs(
            '8x gtceu:raw_dirty_vibranium'
        )
        .duration(600)
        .addData('height_level', 450)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(2)

    event.recipes.gtceu.send_up_the_mats()
        .outputFluids(
            'gtceu:astrophage_fuel 10000'
        )
        .duration(1000)
        .addData('height_level', 250)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)
        .dimension('ad_astra:venus')

})