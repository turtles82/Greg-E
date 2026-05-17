ServerEvents.recipes((event) =>{

    event.shaped(
      Item.of('projecte:transmutation_tablet', 1),
      [
        'AAA',
        'ABA',
        'AAA'
      ],
      {
        B: '#gtceu:circuits/ulv',
        A: 'minecraft:iron_ingot',
    })

    event.remove('projectexpansion:transmutation_interface')
    event.shaped(
      Item.of('projectexpansion:transmutation_interface', 1),
      [
        'AAA',
        'ABA',
        'ACA'
      ],
      {
        B: '#gtceu:circuits/lv',
        A: 'gtceu:refined_fluix_ingot',
        C: 'gtceu:lv_machine_hull'
    })

    event.replaceInput(
        'projectexpansion:emc_link/basic',
        'projecte:condenser_mk1',
        '#gtceu:circuits/ulv'
    )

    event.replaceInput(
        'projectexpansion:emc_link/dark',
        'projecte:dark_matter',
        '#gtceu:circuits/lv'
    )

    event.replaceInput(
        'projectexpansion:emc_link/red',
        'projecte:red_matter',
        '#gtceu:circuits/mv'
    )

    event.replaceInput(
        'projectexpansion:emc_link/magenta',
        'projectexpansion:magenta_matter',
        '#gtceu:circuits/hv'
    )

    event.replaceInput(
        'projectexpansion:emc_link/pink',
        'projectexpansion:pink_matter',
        '#gtceu:circuits/ev'
    )

     event.replaceInput(
        'projectexpansion:emc_link/purple',
        'projectexpansion:purple_matter',
        '#gtceu:circuits/iv'
    )

    event.replaceInput(
        'projectexpansion:emc_link/violet',
        'projectexpansion:violet_matter',
        '#gtceu:circuits/luv'
    )

    event.replaceInput(
        'projectexpansion:emc_link/blue',
        'projectexpansion:blue_matter',
        '#gtceu:circuits/zpm'
    )

    event.replaceInput(
        'projectexpansion:emc_link/cyan',
        'projectexpansion:cyan_matter',
        '#gtceu:circuits/uv'
    )

    event.replaceInput(
        'projectexpansion:emc_link/green',
        'projectexpansion:green_matter',
        '#gtceu:circuits/uhv'
    )

    event.replaceInput(
        'projectexpansion:emc_link/lime',
        'projectexpansion:lime_matter',
        'kubejs:animated/draconicprocessor'
    )

    event.remove({ id: 'projectexpansion:emc_link/yellow'})

    event.remove({id: 'appliede:emc_module'})
    event.shaped(
        Item.of('appliede:emc_module', 1),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'gtceu:refined_fluix_ingot',
            B: '#gtceu:circuits/lv',
            C: 'gtceu:lv_machine_hull'
        }
    )

    event.remove({id: 'appliede:emc_interface'})
    event.shaped(
        Item.of('appliede:emc_interface', 1),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'gtceu:aluminium_ingot',
            B: '#gtceu:circuits/mv',
            C: 'gtceu:mv_machine_hull'
        }
    )

    event.replaceInput(
        'megacells:network/mega_emc_interface',
        'projecte:red_matter',
        '#gtceu:circuits/hv'
    )

    event.replaceInput(
        'appliede:emc_export_bus',
        'projecte:dark_matter',
        '#gtceu:circuits/mv'
    )

    event.replaceInput(
        'appliede:emc_import_bus',
        'projecte:dark_matter',
        '#gtceu:circuits/mv'
    )

    event.replaceInput(
        'appliede:transmutation_terminal',
        'projecte:red_matter_block',
        '#gtceu:circuits/hv'
    )

    event.replaceInput(
        'appliede:learning_card',
        'projecte:red_matter',
        '#gtceu:circuits/hv'
    )

    event.replaceInput(
        'expatternprovider:ex_emc_interface',
        'projecte:red_matter',
        '#gtceu:circuits/hv'
    )

    event.replaceInput(
        'expatternprovider:ex_emc_export_bus',
        'projecte:red_matter',
        '#gtceu:circuits/hv'
    )

    event.replaceInput(
        'expatternprovider:ex_emc_import_bus',
        'projecte:red_matter',
        '#gtceu:circuits/hv'
    )
   

})