ServerEvents.recipes(event => {

    const cubeRecipes = [
        { id: 'cube_wiremill', block: 'twilightforest:steeleaf_block' },
        { id: 'cube_extruder', block: 'twilightforest:carminite_block' },
        { id: 'cube_assembler', block: 'botania:terrasteel_block' },
        { id: 'cube_extractor', block: 'twilightforest:knightmetal_block' },
        { id: 'cube_ore', block: 'ad_astra:desh_block' },
        { id: 'cube_mixer', block: 'botania:manasteel_block' },
        { id: 'cube_oreprocesser', block: 'ad_astra:ostrum_block' }
    ]

    cubeRecipes.forEach(cube => {
        event.shaped(
            `gtceu:${cube.id}`,
            [
                " A ",
                "DBD",
                "DCD"
            ],
            {
                A: 'gtceu:hv_robot_arm',
                B: '#gtceu:circuits/hv',
                C: cube.block,
                D: 'ad_astra:mars_sand'
            }
        )
    })

})