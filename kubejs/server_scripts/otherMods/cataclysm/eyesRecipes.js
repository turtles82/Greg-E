ServerEvents.recipes((event) => {

    event.remove('cataclysm:mech_eye')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '#gtceu:circuits/lv',
            'minecraft:compass',
            '16x gtceu:steel_ingot'
        )
        .inputFluids(
            'gregecore:perditio_essentia 100',
            'gregecore:ordo_essentia 100'
        )
        .itemOutputs(
            'cataclysm:mech_eye'
        )
        .duration(600)
        .addData('essentia', "0,0,0,0,1,1")

    event.remove('cataclysm:abyss_eye')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '#gtceu:circuits/mv',
            'minecraft:compass',
            '16x #grege:witherite'
        )
        .inputFluids(
            'gregecore:aqua_essentia 500',
            'gregecore:terra_essentia 500'
        )
        .itemOutputs(
            'cataclysm:abyss_eye'
        )
        .duration(600)
        .addData('essentia', "1,1,0,0,0,0")

    event.remove('cataclysm:desert_eye')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '#gtceu:circuits/hv',
            'minecraft:compass',
            '16x gtceu:abyssal_wire_ingot'
        )
        .inputFluids(
            'gregecore:aer_essentia 1500',
            'gregecore:ignis_essentia 1500'
        )
        .itemOutputs(
            'cataclysm:desert_eye'
        )
        .duration(600)
        .addData('essentia', "0,0,1,1,0,0")

    event.remove('cataclysm:flame_eye')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '#gtceu:circuits/ev',
            'minecraft:compass',
            '16x #grege:ancientmetal'
        )
        .inputFluids(
            'gregecore:aqua_essentia 3000',
            'gregecore:ignis_essentia 3000'
        )
        .itemOutputs(
            'cataclysm:flame_eye'
        )
        .duration(600)
        .addData('essentia', "1,0,0,1,0,0")

    event.remove('cataclysm:monstrous_eye')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '#gtceu:circuits/iv',
            'minecraft:compass',
            '16x #grege:ignitium'
        )
        .inputFluids(
            'gregecore:perditio_essentia 5000',
            'gregecore:ignis_essentia 5000'
        )
        .itemOutputs(
            'cataclysm:monstrous_eye'
        )
        .duration(600)
        .addData('essentia', "0,0,0,1,1,0")

    event.remove('cataclysm:void_eye')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '#gtceu:circuits/luv',
            'minecraft:compass',
            '16x #grege:powcell'
        )
        .inputFluids(
            'gregecore:aer_essentia 7000',
            'gregecore:ordo_essentia 7000'
        )
        .itemOutputs(
            'cataclysm:void_eye'
        )
        .duration(600)
        .addData('essentia', "0,0,1,0,0,1")

    event.remove('cataclysm:cursed_eye')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '#gtceu:circuits/zpm',
            'minecraft:compass',
            '16x #grege:enderium'
        )
        .inputFluids(
            'gregecore:perditio_essentia 9000',
            'gregecore:ordo_essentia 9000',
            'gregecore:terra_essentia 9000'
        )
        .itemOutputs(
            'cataclysm:cursed_eye'
        )
        .duration(600)
        .addData('essentia', "0,1,0,0,1,1")

    event.remove('cataclysm:storm_eye')
    event.recipes.gtceu.infusion_altar_infusing()
        .itemInputs(
            '#gtceu:circuits/uv',
            'minecraft:compass',
            '16x #grege:cursium'
        )
        .inputFluids(
            'gregecore:perditio_essentia 10000',
            'gregecore:ordo_essentia 10000',
            'gregecore:aqua_essentia 10000',
            'gregecore:aer_essentia 10000',
            'gregecore:ignis_essentia 10000',
            'gregecore:terra_essentia 10000'
        )
        .itemOutputs(
            'cataclysm:storm_eye'
        )
        .duration(600)
        .addData('essentia', "1,1,1,1,1,1")

    //aqua, terra, aer, ignis, perditio, ordo

})