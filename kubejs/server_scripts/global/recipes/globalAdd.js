ServerEvents.recipes((event) => {

     event.recipes.gtceu.compressor('getthemnetherriteblock')
        .itemInputs(
            '9x minecraft:netherite_ingot'
        )
        .itemOutputs(
            'minecraft:netherite_block'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(1000)

    event.recipes.gtceu.compressor('getcryiojngfobsidian')
        .itemInputs(
            '9x minecraft:obsidian'
        )
        .itemOutputs(
            'minecraft:crying_obsidian'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(1000)

    event.replaceInput(
        'minecraft:beacon',
        'minecraft:nether_star',
        'botania:spark'
    )

    const circuitsToAdd = [
        {item: 'kubejs:universal/lv', tag: '#gtceu:circuits/lv', tier: GTValues.VA[GTValues.LV]},
        {item: 'kubejs:universal/mv', tag: '#gtceu:circuits/mv', tier: GTValues.VA[GTValues.MV]},
        {item: 'kubejs:universal/hv', tag: '#gtceu:circuits/hv', tier: GTValues.VA[GTValues.HV]},
        {item: 'kubejs:universal/ev', tag: '#gtceu:circuits/ev', tier: GTValues.VA[GTValues.EV]},
        {item: 'kubejs:universal/iv', tag: '#gtceu:circuits/iv', tier: GTValues.VA[GTValues.IV]},
        {item: 'kubejs:universal/luv', tag: '#gtceu:circuits/luv', tier: GTValues.VA[GTValues.LuV]},
        {item: 'kubejs:universal/zpm', tag: '#gtceu:circuits/zpm', tier: GTValues.VA[GTValues.ZPM]},
        {item: 'kubejs:universal/uv', tag: '#gtceu:circuits/uv', tier: GTValues.VA[GTValues.UV]},
        {item: 'kubejs:universal/uhv', tag: '#gtceu:circuits/uhv', tier: GTValues.VA[GTValues.UHV]}
    ]

    circuitsToAdd.forEach(add => {
        event.recipes.gtceu.assembler()
            .itemInputs(
                add.tag
            )
            .itemOutputs(
                add.item
            )
            .EUt(add.tier)
            .duration(1)
            .circuit(24)
    })

    const circuitsToAlloys = [
        {item: '360x #gtceu:circuits/lv', output: 'kubejs:lvalloy', tier: GTValues.VA[GTValues.LV]},
        {item: '360x #gtceu:circuits/mv', output: 'kubejs:mvalloy', tier: GTValues.VA[GTValues.MV]},
        {item: '360x #gtceu:circuits/hv', output: 'kubejs:hvalloy', tier: GTValues.VA[GTValues.HV]},
        {item: '360x #gtceu:circuits/ev', output: 'kubejs:evalloy', tier: GTValues.VA[GTValues.EV]},
        {item: '360x #gtceu:circuits/iv', output: 'kubejs:ivalloy', tier: GTValues.VA[GTValues.IV]},
        {item: '360x #gtceu:circuits/luv', output: 'kubejs:luvalloy', tier: GTValues.VA[GTValues.LuV]},
        {item: '360x #gtceu:circuits/zpm', output: 'kubejs:animated/zpmalloy', tier: GTValues.VA[GTValues.ZPM]},
        {item: '360x #gtceu:circuits/uv', output: 'kubejs:animated/uvalloy', tier: GTValues.VA[GTValues.UV]},
        {item: '360x #gtceu:circuits/uhv', output: 'kubejs:animated/uhvalloy', tier: GTValues.VA[GTValues.UHV]}
    ]

    circuitsToAlloys.forEach(add => {

        event.recipes.gtceu.forming_press()
            .itemInputs(
                add.item
            )
            .itemOutputs(
                add.output
            )
            .EUt(add.tier)
            .duration(2000)
            .circuit(24)

    })

    event.forEachRecipe({ input: 'minecraft:leather' }, recipe => {
        recipe.replaceInput('minecraft:leather', '#forge:leather')
    })

    event.recipes.gtceu.compressor('gettowerboreressenceggggg')
        .itemInputs(
            '8x twilightforest:towerwood'
        )
        .itemOutputs(
            'twilightforest:borer_essence'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.compressor('armorshardddsfdfdf')
        .itemInputs(
            '64x twilightforest:mossy_underbrick'
        )
        .itemOutputs(
            'twilightforest:armor_shard'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    event.remove({id: 'gtceu:shaped/basic_terminal'})
    event.recipes.gtceu.assembler()
        .itemInputs(
            '#gtceu:circuits/lv',
            'minecraft:book'
        )
        .itemOutputs(
            'gtceu:terminal'
        )
        .duration(100)
        .circuit(24)
        .EUt(GTValues.VA[GTValues.LV])

    event.replaceInput(
        'pccard:item/card_programmed_circuit',
        'gtceu:programmed_circuit',
        '#gtceu:circuits/lv'
    )


})