ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gtceu:cleanfarmland', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/mv',
            B: 'minecraft:water_bucket',
            C: 'minecraft:iron_block',
            D: 'gtceu:mv_electric_pump',
            E: 'gtceu:mv_machine_hull'
        }
    )

    function addGrainRecipe(name, crop, seed, seedOutputCount) {
        const tiers = [
            { suffix: 'slow',   mult: 1,   fluid: false, fert: false, dur: 1000, circ: 1 },
            { suffix: 'medium', mult: 4,   fluid: true,  fert: false, dur: 500,  circ: 2 },
            { suffix: 'fast',   mult: 16,  fluid: true,  fert: true,  dur: 250,  circ: 3 }
        ];

        tiers.forEach(t => {
            let r = event.recipes.gtceu.cleanfarmland(`${name}${t.suffix}`)
                .notConsumable(seed)
                .itemOutputs(`${16 * t.mult}x ${crop}`, `${seedOutputCount * t.mult}x ${seed}`)
                .duration(t.dur)
                .EUt(120)
                .circuit(t.circ);
            
            if (t.fluid) r.inputFluids('minecraft:water 500');
            if (t.fert) r.chancedInput('gtceu:fertilizer', 1000, -100);
        });
    }

    function addVeggieRecipe(name, item) {
        const tiers = [
            { suffix: 'slow',   mult: 1,   fluid: false, fert: false, dur: 1000, circ: 1 },
            { suffix: 'medium', mult: 4,   fluid: true,  fert: false, dur: 500,  circ: 2 },
            { suffix: 'fast',   mult: 16,  fluid: true,  fert: true,  dur: 250,  circ: 3 }
        ];

        tiers.forEach(t => {
            let r = event.recipes.gtceu.cleanfarmland(`${name}${t.suffix}`)
                .notConsumable(item)
                .itemOutputs(`${16 * t.mult}x ${item}`)
                .chancedOutput(`${16 * t.mult}x ${item}`, 1000, 1000)
                .duration(t.dur)
                .EUt(120)
                .circuit(t.circ);
            
            if (t.fluid) r.inputFluids('minecraft:water 500');
            if (t.fert) r.chancedInput('gtceu:fertilizer', 1000, -100);
        });
    }

    addGrainRecipe('wheat', 'minecraft:wheat', 'minecraft:wheat_seeds', 8);
    addGrainRecipe('melon', 'minecraft:melon_slice', 'minecraft:melon_seeds', 8);
    addGrainRecipe('pumpkin', 'minecraft:pumpkin', 'minecraft:pumpkin_seeds', 8);
    addGrainRecipe('beetroot', 'minecraft:beetroot', 'minecraft:beetroot_seeds', 8);

    addVeggieRecipe('carrot', 'minecraft:carrot');
    addVeggieRecipe('gloomgourd', 'undergarden:gloomgourd');
    addVeggieRecipe('ink_mushroom', 'undergarden:ink_mushroom');
    addVeggieRecipe('potato', 'minecraft:potato');
    addVeggieRecipe('sweet_berries', 'minecraft:sweet_berries');
    addVeggieRecipe('glow_berries', 'minecraft:glow_berries');

});