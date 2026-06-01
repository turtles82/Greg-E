ServerEvents.recipes((event) =>{

    function convertToRobotic(event, recipeID, circuit, duration, EUt) {
        let recipe = event.findRecipes({ id: recipeID })[0];
        if (!recipe) {
            return;
        }

        let rawIngredients = recipe.originalRecipeIngredients.filter(ing => !ing.isEmpty());
        let output = recipe.originalRecipeResult;

        let combined = {}

        rawIngredients.forEach(ing => {
            let id = ing.getFirst().getId()

            if (id.includes('wrench') || id.includes('screwdriver') || id.includes('hammer') || id.includes('cutter') || id.includes('mallet')) {
                return 
            }

            combined[id] = (combined[id] || 0) + 1
        })

        let finalInputs = []
        for (let id in combined) {
            finalInputs.push(Item.of(id, combined[id] * 12))
        }

        let finalOutput = Item.of(output.getId(), output.getCount() * 16)

        event.recipes.gtceu.adrobstat(recipeID.replace(':', '_') + '_manual_conv')
            .itemInputs(finalInputs)
            .itemOutputs(finalOutput)
            .circuit(circuit)
            .duration(duration)
            .EUt(EUt)
                
    }

    const tiers = ['lv', 'mv', 'hv', 'ev', 'iv'];

    const components = {
        'electric_motor':  { circuit: 1, duration: 100 },
        'robot_arm':       { circuit: 2, duration: 150 },
        'electric_piston': { circuit: 3, duration: 150 },
        'emitter':   { circuit: 5, duration: 200 },
        'field_generator':   { circuit: 6, duration: 200 },
        'sensor':   { circuit: 7, duration: 250 },
    };

    for (let tier of tiers) {
        for (let comp in components) {
            
            let recipeID = `gtceu:shaped/${comp}_${tier}`;
            let circ = components[comp].circuit;
            let time = components[comp].duration;
            
            convertToRobotic(event, recipeID, circ, time, GTValues.VA[GTValues.LuV]);
            
        }
    }

    convertToRobotic(event, 'gtceu:shaped/electric_motor_lv_iron', 1 , 100, GTValues.VA[GTValues.LuV]);
    convertToRobotic(event, 'gtceu:shaped/conveyor_module_iv_silicone_rubber', 4 , 100, GTValues.VA[GTValues.LuV]);
    convertToRobotic(event, 'gtceu:shaped/electric_pump_iv_silicone_rubber', 8 , 100, GTValues.VA[GTValues.LuV]);

    tiers.forEach(tier => {
        const specialRecipes = [
            { id: `gtceu:shaped/conveyor_module_${tier}_rubber`, circuit: 4 },
            { id: `gtceu:shaped/electric_pump_${tier}_rubber`, circuit: 8 }
        ];

        specialRecipes.forEach(recipe => {
            convertToRobotic(event, recipe.id, recipe.circuit, 100, GTValues.VA[GTValues.LuV]);
        });
    })

    const fluidRegulatorConfigs = [
        { tier: 'lv', pump: 'gtceu:lv_electric_pump', circuit: 9 },
        { tier: 'mv', pump: 'gtceu:mv_electric_pump', circuit: 9 },
        { tier: 'hv', pump: 'gtceu:hv_electric_pump', circuit: 9 },
        { tier: 'ev', pump: 'gtceu:ev_electric_pump', circuit: 9 },
        { tier: 'iv', pump: 'gtceu:iv_electric_pump', circuit: 9 },
        { tier: 'luv', pump: 'gtceu:luv_electric_pump', circuit: 9 },
        { tier: 'zpm', pump: 'gtceu:zpm_electric_pump', circuit: 9 },
        { tier: 'uv', pump: 'gtceu:uv_electric_pump', circuit: 9 },
        { tier: 'uhv', pump: 'gtceu:uhv_electric_pump', circuit: 9 },
    ];

    fluidRegulatorConfigs.forEach(cfg => {
        let recipeID = `gtceu:fluid_regulator_${cfg.tier}`;
        let newId = `${recipeID.replace(/:/g, '_')}_manual_conv`;
        

        event.recipes.gtceu.adrobstat(newId)
            .itemInputs([
                `12x ${cfg.pump}`, 
                `12x #gtceu:circuits/${cfg.tier}`
            ])
            .itemOutputs(`16x gtceu:${cfg.tier}_fluid_regulator`)
            .circuit(cfg.circuit)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LuV]);
    });

    const motorInputs = [
        { 
            longrodn: 12, 
            rod: 'gtceu:long_hsss_rod', rodn: 24, 
            round: 'gtceu:hsss_round', roundn: 48, 
            ring: 'gtceu:hsss_ring', ringn: 24, 
            wire: 'gtceu:fine_ruridit_wire', wiren: 520,
            cable: 'gtceu:niobium_titanium_single_cable', cablen: 24, 
            fluids: ['gtceu:soldering_alloy 1600', 'gtceu:lubricant 5000'], 
            eut: GTValues.VA[GTValues.LuV],
            output: '16x gtceu:luv_electric_motor',
            circuit: 1,
            duration: 100,
            permit: 'kubejs:luvpermit'
        },
        { 
            longrodn: 12, 
            rod: 'gtceu:long_osmiridium_rod', rodn: 24, 
            round: 'gtceu:osmiridium_round', roundn: 48, 
            ring: 'gtceu:osmiridium_ring', ringn: 24, 
            wire: 'gtceu:fine_europium_wire', wiren: 800,
            cable: 'gtceu:vanadium_gallium_single_cable', cablen: 24, 
            fluids: ['gtceu:soldering_alloy 1600', 'gtceu:lubricant 5000'], 
            eut: GTValues.VA[GTValues.ZPM],
            output: '16x gtceu:zpm_electric_motor',
            circuit: 1,
            duration: 100,
            permit: 'kubejs:zpmpermit'
        },
        { 
            longrodn: 12, 
            rod: 'gtceu:long_tritanium_rod', rodn: 24, 
            round: 'gtceu:tritanium_round', roundn: 48, 
            ring: 'gtceu:tritanium_ring', ringn: 24, 
            wire: 'gtceu:fine_americium_wire', wiren: 800,
            cable: 'gtceu:yttrium_barium_cuprate_single_cable', cablen: 24, 
            fluids: ['gtceu:soldering_alloy 3000', 'gtceu:lubricant 8000', 'gtceu:naquadria 3000'], 
            eut: GTValues.VA[GTValues.UV],
            output: '16x gtceu:uv_electric_motor',
            circuit: 1,
            duration: 100,
            permit: 'kubejs:uvpermit'
        },
        { 
            longrodn: 24, 
            rod: 'gtceu:long_nebulon_alpha_rod', rodn: 48, 
            round: 'gtceu:nebulon_alpha_round', roundn: 48, 
            ring: 'gtceu:nebulon_alpha_ring', ringn: 96, 
            wire: 'gtceu:fine_tritanium_wire', wiren: 800,
            cable: 'gregecore:draconium_cable_single_wire', cablen: 192, 
            fluids: ['gtceu:soldering_alloy 3000', 'gtceu:lubricant 8000', 'gtceu:naquadria 3000'], 
            eut: GTValues.VA[GTValues.UHV],
            output: '16x gtceu:uhv_electric_motor',
            circuit: 1,
            duration: 100,
            permit: 'kubejs:uhvpermit'
        },
    ]

    motorInputs.forEach(items => {
        event.recipes.gtceu.adrobstat()
            .itemInputs(
                `${items.longrodn}x gtceu:long_magnetic_samarium_rod`,
                `${items.rodn}x ${items.rod}`,
                `${items.ringn}x ${items.ring}`,
                `${items.roundn}x ${items.round}`,
                `${items.wiren}x ${items.wire}`,
                `${items.cablen}x ${items.cable}`
            )
            .inputFluids(
                items.fluids
            )
            .notConsumable(items.permit)
            .itemOutputs(items.output)
            .circuit(items.circuit)
            .duration(items.duration)
            .EUt(items.eut);
    })

    const conveyorInputs = [
        { 
            motor: 'gtceu:luv_electric_motor', motorn: 24, 
            plate: 'gtceu:hsss_plate', platen: 24, 
            round: 'gtceu:hsss_round', roundn: 192, 
            ring: 'gtceu:hsss_ring', ringn: 28, 
            screw: 'gtceu:hsss_screw', screwn: 28,
            cable: 'gtceu:niobium_titanium_single_cable', cablen: 28, 
            fluids: ['gtceu:soldering_alloy 1200', 'gtceu:lubricant 3000', 'gtceu:styrene_butadiene_rubber 10000'], 
            eut: GTValues.VA[GTValues.LuV],
            output: '16x gtceu:luv_conveyor_module',
            circuit: 4,
            duration: 100,
            permit: 'kubejs:luvpermit'
        },
        { 
            motor: 'gtceu:zpm_electric_motor', motorn: 24, 
            plate: 'gtceu:osmiridium_plate', platen: 24, 
            round: 'gtceu:osmiridium_round', roundn: 192, 
            ring: 'gtceu:osmiridium_ring', ringn: 28, 
            screw: 'gtceu:osmiridium_screw', screwn: 28,
            cable: 'gtceu:vanadium_gallium_single_cable', cablen: 28, 
            fluids: ['gtceu:soldering_alloy 2000', 'gtceu:lubricant 4000', 'gtceu:styrene_butadiene_rubber 18000'], 
            eut: GTValues.VA[GTValues.ZPM],
            output: '16x gtceu:zpm_conveyor_module',
            circuit: 4,
            duration: 100,
            permit: 'kubejs:zpmpermit'
        },
        { 
            motor: 'gtceu:uv_electric_motor', motorn: 24, 
            plate: 'gtceu:tritanium_plate', platen: 24, 
            round: 'gtceu:tritanium_round', roundn: 192, 
            ring: 'gtceu:tritanium_ring', ringn: 28, 
            screw: 'gtceu:tritanium_screw', screwn: 28,
            cable: 'gtceu:yttrium_barium_cuprate_single_cable', cablen: 28, 
            fluids: ['gtceu:soldering_alloy 3000', 'gtceu:lubricant 5000', 'gtceu:styrene_butadiene_rubber 25000', 'gtceu:naquadria 3000'], 
            eut: GTValues.VA[GTValues.UV],
            output: '16x gtceu:uv_conveyor_module',
            circuit: 4,
            duration: 100,
            permit: 'kubejs:uvpermit'
        },
        { 
            motor: 'gtceu:uhv_electric_motor', motorn: 24, 
            plate: 'gtceu:nebulon_alpha_plate', platen: 48, 
            round: 'gtceu:nebulon_alpha_round', roundn: 384, 
            ring: 'gtceu:nebulon_alpha_ring', ringn: 56, 
            screw: 'gtceu:nebulon_alpha_screw', screwn: 56,
            cable: 'gregecore:draconium_cable_single_wire', cablen: 56, 
            fluids: ['gtceu:soldering_alloy 4000', 'gtceu:lubricant 6000', 'gtceu:styrene_butadiene_rubber 25000', 'gtceu:naquadria 3000'], 
            eut: GTValues.VA[GTValues.UHV],
            output: '16x gtceu:uhv_conveyor_module',
            circuit: 4,
            duration: 100,
            permit: 'kubejs:uhvpermit'
        }
    ]

    conveyorInputs.forEach(items => {
        event.recipes.gtceu.adrobstat()
            .itemInputs(
                `${items.motorn}x ${items.motor}`,
                `${items.platen}x ${items.plate}`,
                `${items.ringn}x ${items.ring}`,
                `${items.roundn}x ${items.round}`,
                `${items.screwn}x ${items.screw}`,
                `${items.cablen}x ${items.cable}`
            )
            .inputFluids(
                items.fluids
            )
            .notConsumable(items.permit)
            .itemOutputs(items.output)
            .circuit(items.circuit)
            .duration(items.duration)
            .EUt(items.eut);
    })

    const pistonInputs = [
        { 
            motor: 'gtceu:luv_electric_motor', motorn: 12, 
            plate: 'gtceu:hsss_plate', platen: 48, 
            round: 'gtceu:hsss_round', roundn: 192, 
            ring: 'gtceu:hsss_ring', ringn: 48, 
            rod: 'gtceu:hsss_rod', rodn: 48,
            bigg: 'gtceu:hsss_gear', biggn: 12,
            smallg: 'gtceu:small_hsss_gear', smallgn: 24,
            cable: 'gtceu:niobium_titanium_single_cable', cablen: 28, 
            fluids: ['gtceu:soldering_alloy 1200', 'gtceu:lubricant 3000'], 
            eut: GTValues.VA[GTValues.LuV],
            output: '16x gtceu:luv_electric_piston',
            circuit: 3,
            duration: 150,
            permit: 'kubejs:luvpermit'
        },
        { 
            motor: 'gtceu:zpm_electric_motor', motorn: 12, 
            plate: 'gtceu:osmiridium_plate', platen: 48, 
            round: 'gtceu:osmiridium_round', roundn: 192, 
            ring: 'gtceu:osmiridium_ring', ringn: 48, 
            rod: 'gtceu:osmiridium_rod', rodn: 48,
            bigg: 'gtceu:osmiridium_gear', biggn: 12,
            smallg: 'gtceu:small_osmiridium_gear', smallgn: 24,
            cable: 'gtceu:vanadium_gallium_single_cable', cablen: 28, 
            fluids: ['gtceu:soldering_alloy 2500', 'gtceu:lubricant 4000'], 
            eut: GTValues.VA[GTValues.ZPM],
            output: '16x gtceu:zpm_electric_piston',
            circuit: 3,
            duration: 150,
            permit: 'kubejs:zpmpermit'
        },
        { 
            motor: 'gtceu:uv_electric_motor', motorn: 12, 
            plate: 'gtceu:tritanium_plate', platen: 48, 
            round: 'gtceu:tritanium_round', roundn: 192, 
            ring: 'gtceu:tritanium_ring', ringn: 48, 
            rod: 'gtceu:tritanium_rod', rodn: 48,
            bigg: 'gtceu:naquadah_alloy_gear', biggn: 12,
            smallg: 'gtceu:small_naquadah_alloy_gear', smallgn: 24,
            cable: 'gtceu:yttrium_barium_cuprate_single_cable', cablen: 28, 
            fluids: ['gtceu:soldering_alloy 3000', 'gtceu:lubricant 5000', 'gtceu:naquadria 3000'], 
            eut: GTValues.VA[GTValues.UV],
            output: '16x gtceu:uv_electric_piston',
            circuit: 3,
            duration: 150,
            permit: 'kubejs:uvpermit'
        },
        { 
            motor: 'gtceu:uhv_electric_motor', motorn: 12, 
            plate: 'gtceu:nebulon_alpha_plate', platen: 96, 
            round: 'gtceu:nebulon_alpha_round', roundn: 384, 
            ring: 'gtceu:nebulon_alpha_ring', ringn: 96, 
            rod: 'gtceu:nebulon_alpha_rod', rodn: 96,
            bigg: 'gtceu:naquadria_gear', biggn: 24,
            smallg: 'gtceu:small_naquadria_gear', smallgn: 48,
            cable: 'gregecore:draconium_cable_single_wire', cablen: 56, 
            fluids: ['gtceu:soldering_alloy 4000', 'gtceu:lubricant 6000', 'gtceu:naquadria 3000'], 
            eut: GTValues.VA[GTValues.UHV],
            output: '16x gtceu:uhv_electric_piston',
            circuit: 3,
            duration: 150,
            permit: 'kubejs:uhvpermit'
        }
    ]

    pistonInputs.forEach(items => {
        event.recipes.gtceu.adrobstat()
            .itemInputs(
                `${items.motorn}x ${items.motor}`,
                `${items.platen}x ${items.plate}`,
                `${items.ringn}x ${items.ring}`,
                `${items.roundn}x ${items.round}`,
                `${items.rodn}x ${items.rod}`,
                `${items.biggn}x ${items.bigg}`,
                `${items.smallgn}x ${items.smallg}`,
                `${items.cablen}x ${items.cable}`
            )
            .inputFluids(
                items.fluids
            )
            .notConsumable(items.permit)
            .itemOutputs(items.output)
            .circuit(items.circuit)
            .duration(items.duration)
            .EUt(items.eut);
    })

    const armsInputs = [
        { 
            rod: 'gtceu:long_hsss_rod', rodn: 48,
            bigg: 'gtceu:hsss_gear', biggn: 12,
            smallg: 'gtceu:small_hsss_gear', smallgn: 36,
            motor: 'gtceu:luv_electric_motor', motorn: 24, 
            piston: 'gtceu:luv_electric_piston', pistonn: 12, 
            circuit1: '#gtceu:circuits/luv', circuit1n: 12, 
            circuit2: '#gtceu:circuits/iv', circuit2n: 24, 
            circuit3:'#gtceu:circuits/ev', circuit3n: 36, 
            cable: 'gtceu:niobium_titanium_single_cable', cablen: 28, 
            fluids: ['gtceu:soldering_alloy 6000', 'gtceu:lubricant 3000'], 
            eut: GTValues.VA[GTValues.LuV],
            output: '16x gtceu:luv_robot_arm',
            circuit: 2,
            duration: 150,
            permit: 'kubejs:luvpermit'
        },
        { 
            rod: 'gtceu:long_osmiridium_rod', rodn: 48,
            bigg: 'gtceu:osmiridium_gear', biggn: 12,
            smallg: 'gtceu:small_osmiridium_gear', smallgn: 36,
            motor: 'gtceu:zpm_electric_motor', motorn: 24, 
            piston: 'gtceu:zpm_electric_piston', pistonn: 12, 
            circuit1: '#gtceu:circuits/zpm', circuit1n: 12, 
            circuit2: '#gtceu:circuits/luv', circuit2n: 24, 
            circuit3:'#gtceu:circuits/iv', circuit3n: 36, 
            cable: 'gtceu:vanadium_gallium_single_cable', cablen: 28, 
            fluids: ['gtceu:soldering_alloy 7000', 'gtceu:lubricant 4000'], 
            eut: GTValues.VA[GTValues.ZPM],
            output: '16x gtceu:zpm_robot_arm',
            circuit: 2,
            duration: 150,
            permit: 'kubejs:zpmpermit'
        },
        { 
            rod: 'gtceu:long_tritanium_rod', rodn: 48,
            bigg: 'gtceu:tritanium_gear', biggn: 12,
            smallg: 'gtceu:small_tritanium_gear', smallgn: 36,
            motor: 'gtceu:uv_electric_motor', motorn: 24, 
            piston: 'gtceu:uv_electric_piston', pistonn: 12, 
            circuit1: '#gtceu:circuits/uv', circuit1n: 12, 
            circuit2: '#gtceu:circuits/zpm', circuit2n: 24, 
            circuit3:'#gtceu:circuits/luv', circuit3n: 36, 
            cable: 'gtceu:yttrium_barium_cuprate_single_cable', cablen: 28, 
            fluids: ['gtceu:soldering_alloy 8000', 'gtceu:lubricant 5000', 'gtceu:naquadria 3000'], 
            eut: GTValues.VA[GTValues.UV],
            output: '16x gtceu:uv_robot_arm',
            circuit: 2,
            duration: 150,
            permit: 'kubejs:uvpermit'
        },
        { 
            rod: 'gtceu:long_nebulon_alpha_rod', rodn: 96,
            bigg: 'gtceu:nebulon_alpha_gear', biggn: 24,
            smallg: 'gtceu:small_nebulon_alpha_gear', smallgn: 72,
            motor: 'gtceu:uhv_electric_motor', motorn: 48, 
            piston: 'gtceu:uhv_electric_piston', pistonn: 24, 
            circuit1: '#gtceu:circuits/uhv', circuit1n: 24, 
            circuit2: '#gtceu:circuits/uv', circuit2n: 48, 
            circuit3:'#gtceu:circuits/zpm', circuit3n: 72, 
            cable: 'gregecore:draconium_cable_single_wire', cablen: 56, 
            fluids: ['gtceu:soldering_alloy 9000', 'gtceu:lubricant 6000', 'gtceu:naquadria 3000'], 
            eut: GTValues.VA[GTValues.UHV],
            output: '16x gtceu:uhv_robot_arm',
            circuit: 2,
            duration: 150,
            permit: 'kubejs:uhvpermit'
        },
    ]

    armsInputs.forEach(items => {
        event.recipes.gtceu.adrobstat()
            .itemInputs(
                `${items.rodn}x ${items.rod}`,
                `${items.biggn}x ${items.bigg}`,
                `${items.smallgn}x ${items.smallg}`,
                `${items.motorn}x ${items.motor}`,
                `${items.pistonn}x ${items.piston}`,
                `${items.circuit1n}x ${items.circuit1}`,
                `${items.circuit2n}x ${items.circuit2}`,
                `${items.circuit3n}x ${items.circuit3}`,
                `${items.cablen}x ${items.cable}`
            )
            .inputFluids(
                items.fluids
            )
            .notConsumable(items.permit)
            .itemOutputs(items.output)
            .circuit(items.circuit)
            .duration(items.duration)
            .EUt(items.eut);
    })

})