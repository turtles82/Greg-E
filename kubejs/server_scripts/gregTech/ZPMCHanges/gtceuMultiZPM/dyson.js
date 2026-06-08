ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gregecore:dysonswarmlauncher', 1),
        [
            'FAF',
            'DCD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/zpm',
            C: 'gregecore:solar_sail',
            D: 'gtceu:zpm_electric_pump',
            E: 'gtceu:zpm_machine_hull',
            F: 'gtceu:eridium_block'
        }
    )

    event.shaped(
        Item.of('gregecore:dysonswarmenergycollector', 1),
        [
            'FAF',
            'DCD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/zpm',
            C: 'kubejs:kaptonmirror',
            D: 'gtceu:zpm_electric_pump',
            E: 'gtceu:zpm_machine_hull',
            F: 'gtceu:eridium_block'
        }
    )

    event.shaped(
        Item.of('gregecore:solar_sail', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'kubejs:kaptonmirror',
            B: 'minecraft:lightning_rod'
        }
    )

    event.shaped(
        Item.of('kubejs:kaptonmirror', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'gtceu:kapton_foil'
        }
    )

    event.recipes.gtceu
        .launch_sails('launchingsailsyaaay')
        .itemInputs(
            '10x gregecore:solar_sail'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(50)
        .addData("sailMultiplier", 0)
        .circuit(1)

    event.recipes.gtceu
        .launch_sails('launchingsailsyaaay1')
        .itemInputs(
            '40x gregecore:solar_sail'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(150)
        .addData("sailMultiplier", 1)
        .circuit(2)

    event.recipes.gtceu
        .launch_sails('launchingsailsyaaay2')
        .itemInputs(
            '125x gregecore:solar_sail'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)
        .addData("sailMultiplier", 2)
        .circuit(3)

    event.recipes.gtceu
        .get_solar_sail_energy('getthatexpensiveenergyyay')
        .itemInputs(
            'gregecore:solar_activator'
        )
        .duration(2000)
        .EUt(-2500000)
});