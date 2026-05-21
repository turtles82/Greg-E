ServerEvents.recipes((event) => {

    event.remove('avaritia:infinity_catalyst')
    event.remove('avaritia:infinity_catalyst_eternal')
    event.recipes.gtceu.fornax_universi_acceleration("fornax1")
        .itemInputs(
            'avaritia:eternal_singularity',
            '16x avaritia:record_fragment',
            '16x avaritia:endest_pearl',
            '16x avaritia:ultimate_stew',
            '16x avaritia:cosmic_meatballs',
            '64x avaritia:crystal_matrix',
            '4x gtceu:neutronium_block',
            '16x gtceu:tritanium_block',
            '16x gtceu:decursium_block'
        )
        .itemOutputs(
            'avaritia:infinity_catalyst'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.remove('avaritia:infinity_ingot')
    event.recipes.gtceu.fornax_universi_acceleration("fornax2")
        .itemInputs(
            '4x avaritia:infinity_catalyst',
            '64x gtceu:neutronium_block',
            '64x avaritia:crystal_matrix'
        )
        .itemOutputs(
            'avaritia:infinity_ingot'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.remove('avaritia:blaze_cube')    
    event.recipes.gtceu.fornax_universi_acceleration("fornax3")
        .itemInputs(
            '9x minecraft:blaze_rod'
        )
        .itemOutputs(
            'avaritia:blaze_cube'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.fornax_universi_acceleration("fornax4")
        .itemInputs(
            'kubejs:tomes/withertoken',
            'kubejs:tomes/gaiatoken',
            'kubejs:tomes/chaostoken',
            'kubejs:tomes/enderdragontoken'
        )
        .itemOutputs(
            'gregecore:tome2'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

});