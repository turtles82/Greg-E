ServerEvents.recipes((event) => {

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:commonearth'
        )
        .itemOutputs(
            '256x gtceu:sulfur_dust',
            '256x gtceu:nickel_dust',
            '256x gtceu:cobaltite_dust',
            '256x gtceu:tin_dust',
            '256x gtceu:silver_dust',
            '256x gtceu:bauxite_dust'
        )
        .duration(300)
        .addData('height_level', 80)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:commonearth'
        )
        .itemOutputs(
            '256x ae2:sky_dust',
            '256x minecraft:glowstone_dust',
            '256x minecraft:wheat_seeds',
            '256x gtceu:lead_dust',
            '256x powah:uraninite',
            '256x gtceu:nickel_dust'
        )
        .duration(300)
        .addData('height_level', 80)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(2)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:deepslateearth'
        )
        .itemOutputs(
            '256x gtceu:chromium_dust',
            '256x gtceu:ruby_gem',
            '256x gtceu:sapphire_gem',
            '256x gtceu:zinc_dust'
        )
        .duration(300)
        .addData('height_level', 120)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:deepslateearth'
        )
        .itemOutputs(
            '256x gtceu:phosphorus_dust',
            '256x gtceu:antimony_dust',
            '256x gtceu:manganese_dust',
            '256x gtceu:vanadium_dust',
        )
        .duration(300)
        .addData('height_level', 120)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(2)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:voiddust'
        )
        .itemOutputs(
            '256x gregecore:plutonium_hexafluoride_dust',
            '256x gtceu:gypsum_dust',
            '256x gtceu:calcite_dust',
            '256x minecraft:amethyst_shard',
            '256x fluxnetworks:flux_dust'
        )
        .duration(300)
        .addData('height_level', 160)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:earthlydust'
        )
        .itemOutputs(
            '256x gtceu:purified_pentlandite_ore',
            '256x gtceu:purified_sphalerite_ore',
            '256x gtceu:magnesium_dust',
            '256x gtceu:rutile_dust',
            '256x minecraft:echo_shard',
            '256x gtceu:molybdenum_dust'
        )
        .outputFluids(
            'gtceu:oil_medium 256000'
        )
        .duration(300)
        .addData('height_level', 200)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:eidust'
        )
        .itemOutputs(
            '256x gtceu:purified_galena_ore',
            '256x gtceu:purified_sphalerite_ore',
            '256x gtceu:raw_cooperite',
            '256x gtceu:raw_scheelite',
            '256x gtceu:raw_pentlandite'
        )
        .duration(300)
        .addData('height_level', 240)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:gassydust'
        )
        .itemOutputs(
            '256x gtceu:chrono_percipitate_dust',
            '256x gtceu:raw_pandora',
            '256x gtceu:raw_insanium'
        )
        .duration(300)
        .addData('height_level', 280)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:activatedrune'
        )
        .itemOutputs(
            '256x gtceu:raw_naquadah',
            '256x gtceu:boron_dust',
            '256x gtceu:sturenium_35_dust'
        )
        .outputFluids(
            'gtceu:voidium 256000'
        )
        .duration(300)
        .addData('height_level', 320)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

    event.recipes.gtceu.send_up_the_mats()
        .itemInputs(
            '16x kubejs:dustwithbroom'
        )
        .itemOutputs(
            '512x gtceu:collagen_dust',
            '512x gtceu:meat_dust',
            '256x gtceu:vadricium_dust'
        )
        .duration(300)
        .addData('height_level', 360)
        .EUt(GTValues.VA[GTValues.UHV])
        .circuit(1)

})