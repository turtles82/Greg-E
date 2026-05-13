ServerEvents.recipes((event) => {

    //Remove recipe of power flowers
    event.remove({ id: /projectexpansion:power_flower\/.*/ })
    event.remove({ id: /projectexpansion:relay\/.*/ })
    event.remove({ id: /projectexpansion:collector\/.*/ })
    event.remove({ id: /projectexpansion:advanced_alchemical_chest\/.*/ })

    event.remove({ id: 'projecte:collector_mk1'})
    event.remove({ id: 'projecte:relay_mk1'})
    event.remove({ id: 'projecte:transmutation_tablet'})
    event.remove({ id: 'projecte:alchemical_chest'})
    event.remove({ id: 'projecte:condenser_mk1'})
    event.remove({ id: 'projecte:condenser_mk2'})

    event.remove({ id: 'gtceu:shaped/steam_miner_bronze' })
    event.remove({ id: 'gtceu:shaped/steam_miner_steel' })
    event.remove({ id: 'gtceu:shaped/lv_miner' })
    event.remove({ id: 'gtceu:shaped/mv_miner' })
    event.remove({ id: 'gtceu:shaped/hv_miner' })
    event.remove({ id: 'gtceu:assembler/ev_large_miner' })
    event.remove({ id: 'gtceu:assembler/iv_large_miner' })
    event.remove({ id: 'gtceu:assembler/luv_large_miner' })
    event.remove({ id: 'gtceu:assembler/mv_fluid_drilling_rig' })
    event.remove({ id: 'gtceu:assembler/hv_fluid_drilling_rig' })
    event.remove({ id: 'gtceu:assembler/ev_fluid_drilling_rig' })

    event.remove({ id: 'projecte:philosophers_stone'})
    event.remove({ id: 'projecte:philosophers_stone_alt'})

    event.remove({ id: 'gtceu:electrolyzer/bauxite_electrolysis'})

    event.remove({ id: 'expatternprovider:silicon_block'})

    event.remove({ id: 'gtceu:assembler/converter_64_a_uev'})
    event.remove({ id: 'gtceu:assembler/converter_64_a_uiv'})
    event.remove({ id: 'gtceu:assembler/converter_64_a_uxv'})
    event.remove({ id: 'gtceu:assembler/converter_64_a_op_v'})
    event.remove({ id: 'gtceu:assembler/converter_64_a_max'})
    
});

MoreJSEvents.playerStartTrading((event) => {
    if (!event.player.stages.has('allow_trading')) {
        event.forEachOffers((o, i) => {
        o.disabled = true;
    });
    }
});

MoreJSEvents.villagerTrades((event) => {
    event.removeVanillaTrades();
    event.removeModdedTrades();
});

ServerEvents.loaded((event) => {
  if (event.server.persistentData.gameRules) return;

  event.server.gameRules.set('doTraderSpawning', false);
  event.server.gameRules.set('doWeatherCycle', false)
  event.server.persistentData.gameRules = true;
});