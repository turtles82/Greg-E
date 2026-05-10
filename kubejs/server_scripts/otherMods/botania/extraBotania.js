ServerEvents.recipes((event) => {

    event.remove( {id: 'botanicalextramachinery:greenhouse'})
    event.recipes.gtceu.assembler()
        .itemInputs(
            'kubejs:magicalseed',
            '4x kubejs:vanaheimingotblock',
            '4x #gtceu:circuits/ev',
            '4x botania:terrasteel_ingot',
            '2x gtceu:ev_robot_arm',
            '8x gtceu:ev_electric_motor'
        )
        .itemOutputs(
            'botanicalextramachinery:greenhouse'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
        .circuit(5)

    event.replaceInput(
        {id: 'botanicalextramachinery:upgrade_pattern'},
        'minecraft:netherite_ingot',
        'gtceu:titanium_ingot'
    )

    event.remove( {id: 'botanicalextramachinery:catalyst_mana_infinity'})

    let convertToAssembler = (recipeID, circuit, duration) => {
        let recipe = event.findRecipes({ id: recipeID })[0]
        if (!recipe) return

        let rawIngredients = recipe.getOriginalRecipeIngredients().filter(ing => !ing.empty)
        let output = recipe.getOriginalRecipeResult()

        let combined = {}
        
        rawIngredients.forEach(ing => {
            let id = ing.getFirst().getId()
            combined[id] = (combined[id] || 0) + 1
        })

        let finalInputs = []
        for (let id in combined) {
            finalInputs.push(Item.of(id, combined[id]))
        }

        let assemblerRecipe = event.recipes.gtceu.assembler(recipeID.replace(':', '_') + '_manual_conv')
            .itemInputs(finalInputs)
            .itemOutputs(output)
            .EUt(GTValues.VA[GTValues.EV])
            .duration(duration)
            .circuit(circuit)
        
        event.remove({ id: recipeID })
    }

    convertToAssembler('botanicalextramachinery:upgrade_flower_4x', 8, 600)
    convertToAssembler('botanicalextramachinery:upgrade_flower_16x', 8, 600)
    convertToAssembler('botanicalextramachinery:upgrade_flower_32x', 8, 600)
    convertToAssembler('botanicalextramachinery:upgrade_flower_64x', 8, 600)

    convertToAssembler('botanicalextramachinery:upgrade_cost_energy', 8, 200)
    convertToAssembler('botanicalextramachinery:upgrade_gen_mana', 8, 200)
    convertToAssembler('botanicalextramachinery:upgrade_heat_greenhouse', 8, 200)
    convertToAssembler('botanicalextramachinery:upgrade_slot_add', 8, 200)
    convertToAssembler('botanicalextramachinery:upgrade_tick_gen_mana_1', 8, 200)
    convertToAssembler('botanicalextramachinery:upgrade_tick_gen_mana_2', 8, 200)
    convertToAssembler('botanicalextramachinery:upgrade_storage_mana_1', 8, 200)
    convertToAssembler('botanicalextramachinery:upgrade_storage_mana_2', 8, 200)
    convertToAssembler('botanicalextramachinery:upgrade_storage_mana_3', 8, 200)
    convertToAssembler('botanicalextramachinery:upgrade_storage_energy_1', 8, 200)
    convertToAssembler('botanicalextramachinery:upgrade_storage_energy_2', 8, 200)
    convertToAssembler('botanicalextramachinery:upgrade_storage_energy_3', 8, 200)

    convertToAssembler('botanicalextramachinery:catalyst_living_rock_infinity', 8, 200)
    convertToAssembler('botanicalextramachinery:catalyst_water_infinity', 8, 200)
    convertToAssembler('botanicalextramachinery:catalyst_seed_infinity', 8, 200)
    convertToAssembler('botanicalextramachinery:catalyst_speed', 8, 200)
    convertToAssembler('botanicalextramachinery:catalyst_stone_infinity', 8, 200)
    convertToAssembler('botanicalextramachinery:catalyst_wood_infinity', 8, 200)
    convertToAssembler('botanicalextramachinery:catalyst_petal', 8, 200)
    convertToAssembler('botanicalextramachinery:catalyst_petal_block', 8, 200)

    convertToAssembler('botanicalextramachinery:jaded_amaranthus', 8, 200)

    convertToAssembler('botanicalextramachinery:jaded_amaranthus', 8, 200)

    let convertAllTiersExtra = (itemName, circuit, duration) => {
        let tiers = ['base', 'upgraded', 'advanced', 'ultimate']
        
        tiers.forEach(tier => {
            let fullID = `botanicalextramachinery:${tier}_${itemName}`
            convertToAssembler(fullID, circuit, duration)
        })
    }

    convertAllTiersExtra('mana_pool', 8, 600)
    convertAllTiersExtra('runic_altar', 8, 600)
    convertAllTiersExtra('apothecary', 8, 600)
    convertAllTiersExtra('industrial_agglomeration_factory', 8, 600)
    convertAllTiersExtra('alfheim_market', 8, 600)
    convertAllTiersExtra('orechid', 8, 600)
    convertAllTiersExtra('mana_infuser', 8, 600)
    convertAllTiersExtra('daisy', 8, 600)

    event.replaceInput(
        {id: 'botanicalextramachinery:cells/mana_storage_cell_1m_storage'},
        'botanicalextramachinery:cell_component_1m',
        'megacells:cell_component_1m'
    )

    event.replaceInput(
        {id: 'botanicalextramachinery:cells/mana_storage_cell_4m_storage'},
        'botanicalextramachinery:cell_component_4m',
        'megacells:cell_component_4m'
    )

    event.replaceInput(
        {id: 'botanicalextramachinery:cells/mana_storage_cell_16m_storage'},
        'botanicalextramachinery:cell_component_16m',
        'megacells:cell_component_16m'
    )

    event.replaceInput(
        {id: 'botanicalextramachinery:cells/mana_storage_cell_64m_storage'},
        'botanicalextramachinery:cell_component_64m',
        'megacells:cell_component_64m'
    )

    event.replaceInput(
        {id: 'botanicalextramachinery:cells/mana_storage_cell_256m_storage'},
        'botanicalextramachinery:cell_component_256m',
        'megacells:cell_component_256m'
    )

    event.remove({id: 'botanicalextramachinery:cells/mana_storage_cell_1m'})
    event.remove({id: 'botanicalextramachinery:cells/mana_storage_cell_4m'})
    event.remove({id: 'botanicalextramachinery:cells/mana_storage_cell_16m'})
    event.remove({id: 'botanicalextramachinery:cells/mana_storage_cell_64m'})
    event.remove({id: 'botanicalextramachinery:cells/mana_storage_cell_256m'})

})