ServerEvents.recipes((event) => {

  event.replaceInput(
    { id: 'bloodmagic:blood_altar' },
    'minecraft:furnace',
    '#gtceu:circuits/zpm'
  )

  event.custom({
      type: 'bloodmagic:altar',
      altarSyphon: 50000,
      consumptionRate: 10000,
      drainRate: 10000,
      input: {
        item: 'bloodmagic:basemonstersoul',
      },
      output: {
        item: 'kubejs:evilsoul',
      },
      upgradeLevel: 4,
    });

    event.custom({
      type: 'bloodmagic:altar',
      altarSyphon: 200000,
      consumptionRate: 10000,
      drainRate: 10000,
      input: {
        item: 'minecraft:stone_button',
      },
      output: {
        item: 'gregecore:solar_activator',
      },
      upgradeLevel: 4,
    });

    event.custom({
      type: 'bloodmagic:altar',
      altarSyphon: 5000,
      consumptionRate: 250,
      drainRate: 250,
      input: {
        item: 'kubejs:runeingot',
      },
      output: {
        item: 'kubejs:bloodinfused',
      },
      upgradeLevel: 2,
    });

    event.custom({
      type: 'bloodmagic:altar',
      altarSyphon: 5000,
      consumptionRate: 250,
      drainRate: 250,
      input: {
        item: 'minecraft:iron_ingot',
      },
      output: {
        item: 'kubejs:runeingot',
      },
      upgradeLevel: 2,
    });

    event.custom({
      type: 'bloodmagic:altar',
      altarSyphon: 3000,
      consumptionRate: 600,
      drainRate: 600,
      input: {
        item: 'kubejs:seniron',
      },
      output: {
        item: 'bloodmagic:basemonstersoul',
      },
      upgradeLevel: 3,
    });

});