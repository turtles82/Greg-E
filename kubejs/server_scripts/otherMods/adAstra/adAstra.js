ServerEvents.recipes((event) => {

    //Remove unvanted recipes from Ad Astra
    
    event.remove({ id: 'ad_astra:compressing/iron_plate_from_compressing_iron_ingot' })
    event.remove({ id: 'ad_astra:compressing/iron_plate_from_compressing_iron_block' })
    event.remove({ id: 'ad_astra:compressing/steel_plate_from_compressing_steel_ingots' })
    event.remove({ id: 'ad_astra:compressing/steel_plate_from_compressing_steel_blocks' })
    event.remove({ id: 'ad_astra:iron_rod' })
    event.remove({ id: 'ad_astra:steel_rod' })
    event.remove({ id: 'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals' })
    event.remove({ id: 'ad_astra:coal_generator' }),
    event.remove({ id: 'ad_astra:compressor' }),

    event.remove({ id: 'ad_extendra:nasa_workbench/tier_5_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_6_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_7_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_8_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_9_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_10_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_11_rocket_from_nasa_workbench' })

    const tankReplaceAdAstra = [
        {output: 'steel'},
        {output: 'desh'},
        {output: 'ostrum'},
        {output: 'calorite'}
    ]

    tankReplaceAdAstra.forEach( item => {

        event.replaceInput(
            `ad_astra:${item.output}_tank`,
            'ad_astra:steel_rod',
            'gtceu:steel_rod'
        )

    })

    const tankReplaceAdExtendra = [
        {output: 'juperium'},
        {output: 'saturlyte'},
        {output: 'uranium'},
        {output: 'neptunium'},
        {output: 'radium'},
        {output: 'plutonium'},
        {output: 'electrolyte'},
    ]

    tankReplaceAdExtendra.forEach( item => {

        event.replaceInput(
            `ad_extendra:${item.output}_tank`,
            'ad_astra:steel_rod',
            'gtceu:steel_rod'
        )

    })

    const enigneReplaceAdAstra = [
        {output: 'steel'},
        {output: 'desh'},
        {output: 'ostrum'},
        {output: 'calorite'}
    ]

    enigneReplaceAdAstra.forEach( item => {

        event.replaceInput(
            `ad_astra:${item.output}_engine`,
            'ad_astra:fan',
            'gtceu:steel_rotor'
        )

    })

    const enigneReplaceAdExtendra = [
        {output: 'juperium'},
        {output: 'saturlyte'},
        {output: 'uranium'},
        {output: 'neptunium'},
        {output: 'radium'},
        {output: 'plutonium'},
        {output: 'electrolyte'},
    ]

    enigneReplaceAdExtendra.forEach( item => {

        event.replaceInput(
            `ad_extendra:${item.output}_engine`,
            'ad_astra:fan',
            'gtceu:steel_rotor'
        )

    })

    const plateblockReplaceAdExtendra = [
        {output: 'juperium'},
        {output: 'saturlyte'},
        {output: 'uranium'},
        {output: 'neptunium'},
        {output: 'radium'},
        {output: 'plutonium'},
        {output: 'electrolyte'}
    ]

    plateblockReplaceAdExtendra.forEach( item => {

        event.replaceInput(
            `ad_extendra:${item.output}_plateblock`,
            'ad_astra:steel_rod',
            'gtceu:steel_rod'
        )

    })

    const plateblockReplaceAdAstra = [
        {output: 'iron'},
        {output: 'steel'},
        {output: 'desh'},
        {output: 'ostrum'},
        {output: 'calorite'}
    ]

    plateblockReplaceAdAstra.forEach( item => {

        event.replaceInput(
            `ad_astra:${item.output}_plateblock`,
            'ad_astra:steel_rod',
            'gtceu:steel_rod'
        )

    })

    event.replaceInput(
        'ad_astra:gas_tank',
        'ad_astra:iron_rod',
        'gtceu:iron_rod'
    )

    event.replaceInput(
        'ad_astra:large_gas_tank',
        'ad_astra:steel_rod',
        'gtceu:steel_rod'
    )

    event.replaceInput(
        'ad_astra:oxygen_gear',
        'ad_astra:steel_rod',
        'gtceu:steel_rod'
    )

    event.replaceInput(
        'ad_astra:engine_frame',
        'ad_astra:steel_rod',
        'gtceu:steel_rod'
    )

    event.replaceInput(
        'ad_astra:fan',
        'ad_astra:steel_rod',
        'gtceu:steel_rod'
    )

    event.replaceInput(
        'ad_astra:nasa_workbench',
        'minecraft:crafting_table',
        '#gtceu:circuits/hv'
    )

    const uraniumFixes = [
        { recipe: 'ad_extendra:uranium_engine', from: '#forge:plates/uranium', to: 'ad_extendra:uranium_plate' },
        { recipe: 'ad_extendra:uranium_tank',   from: '#forge:plates/uranium', to: 'ad_extendra:uranium_plate' },
        { recipe: 'gtceu:shaped/plate_double_uranium', from: '#forge:plates/uranium', to: 'gtceu:uranium_plate' },
        { recipe: 'gtceu:bender/bend_uranium_to_plate', from: '#forge:ingots/uranium', to: 'gtceu:uranium_ingot' },
        { recipe: 'gtceu:bender/bend_uranium_plate_to_double_plate', from: '#forge:plates/uranium', to: 'gtceu:uranium_plate' },
        { recipe: 'gtceu:bender/bend_uranium_ingot_to_double_plate', from: '#forge:ingots/uranium', to: 'gtceu:uranium_ingot' },
    ]

    uraniumFixes.forEach(fix =>  event.replaceInput(fix.recipe, fix.from, fix.to))

    const plutoniumFixes = [
        { id: 'ad_extendra:plutonium_engine', from: '#forge:plates/plutonium', to: 'ad_extendra:plutonium_plate' },
        { id: 'ad_extendra:plutonium_tank',   from: '#forge:plates/plutonium', to: 'ad_extendra:plutonium_plate' },
        { id: 'gtceu:shaped/plate_double_plutonium', from: '#forge:plates/plutonium', to: 'gtceu:plutonium_plate' },
        { id: 'gtceu:bender/bend_plutonium_to_plate', from: '#forge:ingots/plutonium', to: 'gtceu:plutonium_ingot' },
        { id: 'gtceu:bender/bend_plutonium_plate_to_double_plate', from: '#forge:plates/plutonium', to: 'gtceu:plutonium_plate' },
        { id: 'gtceu:bender/bend_plutonium_ingot_to_double_plate', from: '#forge:ingots/plutonium', to: 'gtceu:plutonium_ingot' }
    ]

    plutoniumFixes.forEach(fix => event.replaceInput(fix.id, fix.from, fix.to))

    const doubleOres = [
        {out: '2x ad_astra:raw_desh', in: 'ad_astra:raw_desh'},
        {out: '2x ad_astra:raw_ostrum', in: 'ad_astra:raw_ostrum'},
        {out: '2x ad_astra:raw_calorite', in: 'ad_astra:raw_calorite'},
        {out: '2x ad_extendra:raw_juperium', in: 'ad_extendra:raw_juperium'},
        {out: '2x ad_extendra:raw_saturlyte', in: 'ad_extendra:raw_saturlyte'},
        {out: '2x ad_extendra:raw_uranium', in: 'ad_extendra:raw_uranium'},
        {out: '2x ad_extendra:raw_neptunium', in: 'ad_extendra:raw_neptunium'},
        {out: '2x ad_extendra:raw_radium', in: 'ad_extendra:raw_radium'},
        {out: '2x ad_extendra:raw_plutonium', in: 'ad_extendra:raw_plutonium'},
        {out: '2x ad_extendra:raw_electrolyte', in: 'ad_extendra:raw_electrolyte'}
    ]

    doubleOres.forEach(recipe => {

        event.recipes.botania.mana_infusion(recipe.out, recipe.in, 50000, 'botania:conjuration_catalyst')

    })

    event.remove({ id: "ad_astra:oxygen_loading/oxygen_from_oxygen_loading_water"})

    event.forEachRecipe({ type: 'ad_astra:compressing' }, recipe => {
        let json = recipe.json
        let input = json.get('ingredient')
        let output = json.get('result')

        let inputStr = Ingredient.of(input).toJson().toString()

        if (inputStr.includes('block')) {
            return
        }

        if (inputStr.includes('uranium') || inputStr.includes('plutonium')) {
            return
        }

        if (output && output.has('id')) {
            let outputItem = output.get('id').getAsString()
            let recipeId = recipe.getId().toString()

            event.recipes.gtceu.bender(recipeId + '_converted')
                .itemInputs(input)
                .itemOutputs(outputItem)
                .circuit(1)
                .duration(100)
                .EUt(GTValues.VA[GTValues.HV])
        }
    })

    const colors = [
        'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 
        'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
    ]

    colors.forEach(color => {
        event.replaceInput(
            `ad_astra:${color}_flag`,
            'ad_astra:steel_rod',
            'gtceu:steel_rod'
        )
    })

    event.recipes.gtceu.bender('plutonium_converted')
        .itemInputs(
            'ad_extendra:plutonium_ingot'
        )
        .itemOutputs(
            'ad_extendra:plutonium_plate'
        )
        .circuit(1)
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.bender('uranium_converted')
        .itemInputs(
            'ad_extendra:uranium_ingot'
        )
        .itemOutputs(
            'ad_extendra:uranium_plate'
        )
        .circuit(1)
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({ type: 'ad_astra:compressing' })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:juperium_block" },
        { "item": "ad_extendra:juperium_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:juperium_block" },
        { "item": "ad_extendra:juperium_block" },
        { "item": "ad_extendra:juperium_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:juperium_tank" },
        { "item": "ad_extendra:juperium_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:juperium_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_5_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:saturlyte_block" },
        { "item": "ad_extendra:saturlyte_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:saturlyte_block" },
        { "item": "ad_extendra:saturlyte_block" },
        { "item": "ad_extendra:saturlyte_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:saturlyte_tank" },
        { "item": "ad_extendra:saturlyte_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:saturlyte_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_6_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:uranium_block" },
        { "item": "ad_extendra:uranium_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:uranium_block" },
        { "item": "ad_extendra:uranium_block" },
        { "item": "ad_extendra:uranium_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:uranium_tank" },
        { "item": "ad_extendra:uranium_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:uranium_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_7_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:neptunium_block" },
        { "item": "ad_extendra:neptunium_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:neptunium_block" },
        { "item": "ad_extendra:neptunium_block" },
        { "item": "ad_extendra:neptunium_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:neptunium_tank" },
        { "item": "ad_extendra:neptunium_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:neptunium_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_8_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:radium_block" },
        { "item": "ad_extendra:radium_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:radium_block" },
        { "item": "ad_extendra:radium_block" },
        { "item": "ad_extendra:radium_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:radium_tank" },
        { "item": "ad_extendra:radium_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:radium_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_9_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:plutonium_block" },
        { "item": "ad_extendra:plutonium_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:plutonium_block" },
        { "item": "ad_extendra:plutonium_block" },
        { "item": "ad_extendra:plutonium_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:plutonium_tank" },
        { "item": "ad_extendra:plutonium_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:plutonium_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_10_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:electrolyte_block" },
        { "item": "ad_extendra:electrolyte_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:electrolyte_block" },
        { "item": "ad_extendra:electrolyte_block" },
        { "item": "ad_extendra:electrolyte_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:electrolyte_tank" },
        { "item": "ad_extendra:electrolyte_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:electrolyte_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_11_rocket"
        }
    })

});