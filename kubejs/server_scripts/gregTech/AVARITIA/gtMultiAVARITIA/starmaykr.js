ServerEvents.recipes((event) => {

    event.recipes.gtceu.star_maykr_singularities("starmaykr1")
        .itemInputs(
            '350x #gtceu:circuits/lv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:lvcircuitsingularity"}')
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 50)

    event.recipes.gtceu.star_maykr_singularities("starmaykr2")
        .itemInputs(
            '300x #gtceu:circuits/mv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:mvcircuitsingularity"}')
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 50)

    event.recipes.gtceu.star_maykr_singularities("starmaykr3")
        .itemInputs(
            '250x #gtceu:circuits/hv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:hvcircuitsingularity"}')
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 50)

    event.recipes.gtceu.star_maykr_singularities("starmaykr4")
        .itemInputs(
            '200x #gtceu:circuits/ev'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:evcircuitsingularity"}')
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 50)

    event.recipes.gtceu.star_maykr_singularities("starmaykr5")
        .itemInputs(
            '150x #gtceu:circuits/iv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:ivcircuitsingularity"}')
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 50)

    event.recipes.gtceu.star_maykr_singularities("starmaykr6")
        .itemInputs(
            '100x #gtceu:circuits/luv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:luvcircuitsingularity"}')
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 50)

    event.recipes.gtceu.star_maykr_singularities("starmaykr7")
        .itemInputs(
            '75x #gtceu:circuits/zpm'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:zpmcircuitsingularity"}')
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 50)

    event.recipes.gtceu.star_maykr_singularities("starmaykr8")
        .itemInputs(
            '50x #gtceu:circuits/uv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:uvcircuitsingularity"}')
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 50)

    event.recipes.gtceu.star_maykr_singularities("starmaykr9")
        .itemInputs(
            '25x #gtceu:circuits/uhv'
        )
        .itemOutputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:uhvcircuitsingularity"}')
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 50)

    event.remove('avaritia:record_fragment')
    event.recipes.gtceu.star_maykr_singularities("starmaykr10")
        .itemInputs(
            'botania:terrasteel_ingot',
            'kubejs:twilightingots',
            'ad_astra:calorite_ingot',
            'botanicalextramachinery:crimson_ingot',
            'undergarden:forgotten_ingot',
            'kubejs:iceshard',
            'bloodmagic:etherealslate',
            'enchanted:mystic_unguent',
            'draconicevolution:awakened_draconium_ingot'
        )
        .itemOutputs(
            'avaritia:record_fragment'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 400)

    event.remove('avaritia:eternal_singularity')
    event.recipes.gtceu.star_maykr_singularities("starmaykr11")
        .itemInputs(
            Item.of('avaritia:singularity', {Id: "avaritia:lvcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id: "avaritia:mvcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:hvcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:evcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:ivcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:luvcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:zpmcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:uvcircuitsingularity"}).weakNBT(),
            Item.of('avaritia:singularity', {Id:"avaritia:uhvcircuitsingularity"}).weakNBT(),
        )
        .itemOutputs(
            'avaritia:eternal_singularity'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 440)

    event.recipes.gtceu.star_maykr_singularities("starmaykr12")
        .itemInputs(
            '64x botanicalextramachinery:crimson_dragonstone_block',
            '64x draconicevolution:awakened_draconium_block',
            '8x ad_extendra:electrolyte_block',
            '4x twilightforest:arctic_fur_block',
            '16x bloodmagic:dungeon_metal',
            '64x avaritia:crystal_matrix',
            '16x avaritia:infinity'
        )
        .itemOutputs(
            'gregecore:tome4'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 250)

    event.recipes.gtceu.star_maykr_singularities("starmaykr13")
        .itemInputs(
            'ad_extendra:tier_11_rocket',
            'mythicbotany:andwari_ring',
            '64x advanced_ae:quantum_alloy_plate',
            '16x enchanted:spirit_of_otherwhere',
            'botania:thor_ring',
            '64x kubejs:animated/draconicprocessor'
        )
        .itemOutputs(
            'gregecore:tome5'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 250)

    event.recipes.gtceu.star_maykr_singularities("starmaykr14")
        .itemInputs(
            '16x avaritia:diamond_lattice'
        )
        .itemOutputs(
            '16x gtceu:diamond_lattice_cable_ingot'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .addData('weight', 5)

});
