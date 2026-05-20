ServerEvents.recipes((event) => {

  event.replaceInput(
    'sanguine_networks:virtual_sacrificer',
    'minecraft:obsidian',
    '#gtceu:circuits/zpm'
  )


  event.custom({
    type: 'sanguine_networks:catalyst',
    catalyst: {
      item: 'kubejs:animated/zpmalloy',
    },
    multiplier: 25,
    uses: -1,
  });

  const tiers = {
      tier1: {
        blood: [0, 10, 22, 45, 70],
        energy: 10000,
        entities: [
          'minecraft:chicken',
          'minecraft:blaze'
        ],
      },
      tier2: {
        blood: [0, 25, 65, 95, 130],
        energy: 15000,
        entities: [
          'twilightforest:alpha_yeti',
          'twilightforest:minoshroom'
        ],
      },
      tier3: {
        blood: [0, 40, 95, 145, 300],
        energy: 75000,
        entities: [
          'botania:doppleganger',
          'twilightforest:snow_queen'
        ],
      },
      tier4: {
        blood: [0, 100, 150, 300, 450],
        energy: 1500000,
        entities: [
          'incision:seer',
          'minecraft:wither'
        ],
      },
      tier5: {
        blood: [0, 100, 150, 500, 750],
        energy: 2500000,
        entities: [
          'draconicevolution:draconic_guardian'
        ],
      },
    };

    event.remove({type: 'sanguine_networks:blood'})
    for (const [tierName, tierData] of Object.entries(tiers)) {
      tierData.entities.forEach((entity) => {
        event
          .custom({
            type: 'sanguine_networks:blood',
            blood: tierData.blood,
            energy: tierData.energy,
            entity: entity,
          })
          .id(
            `kubejs:sanguine_networks/blood/${entity.replace(':', '_')}_${tierName}`
          );
      });
    }

  event.remove({ id:'sanguine_networks:virtual_sacrificer'})
    event.recipes.gtceu.assembler('virtualsacrificeererer')
        .itemInputs(
            '#gtceu:circuits/zpm',
            'bloodmagic:daggerofsacrifice',
            '2x bloodmagic:infusedslate',
            '2x bloodmagic:reagentbinding',
            'gtceu:inert_machine_casing'
        )
        .inputFluids(
            'gtceu:soldering_alloy 144'
        )
        .itemOutputs(
            'sanguine_networks:virtual_sacrificer'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

});


//remove annoying log errors
ServerEvents.recipes(event => {
    
    event.remove({id: 'sanguine_networks:blood/creeper'})
    event.remove({id: 'sanguine_networks:blood/witch'})
    event.remove({id: 'sanguine_networks:blood/blaze'})
    event.remove({id: 'sanguine_networks:blood/polar_bear'})
    event.remove({id: 'sanguine_networks:blood/hoglin'})
    event.remove({id: 'sanguine_networks:blood/sheep'})
    event.remove({id: 'sanguine_networks:blood/skeleton'})
    event.remove({id: 'sanguine_networks:blood/zombie'})
    event.remove({id: 'sanguine_networks:blood/rabbit'})
    event.remove({id: 'sanguine_networks:blood/iron_golem'})
    event.remove({id: 'sanguine_networks:blood/squid'})
    event.remove({id: 'sanguine_networks:blood/shulker'})
    event.remove({id: 'sanguine_networks:blood/magma_cube'})
    event.remove({id: 'sanguine_networks:blood/enderman'})
    event.remove({id: 'sanguine_networks:blood/pig'})
    event.remove({id: 'sanguine_networks:blood/ender_dragon'})
    event.remove({id: 'sanguine_networks:blood/zombified_piglin'})
    event.remove({id: 'sanguine_networks:blood/cow'})
    event.remove({id: 'sanguine_networks:blood/mooshroom'})
    event.remove({id: 'sanguine_networks:blood/evoker'})
    event.remove({id: 'sanguine_networks:blood/vindicator'})
    event.remove({id: 'sanguine_networks:blood/slime'})
    event.remove({id: 'sanguine_networks:blood/warden'})
    event.remove({id: 'sanguine_networks:blood/ghast'})
    event.remove({id: 'sanguine_networks:blood/glow_squid'})
    event.remove({id: 'sanguine_networks:blood/snow_golem'})
    event.remove({id: 'sanguine_networks:blood/guardian'})
    event.remove({id: 'sanguine_networks:blood/cod'})
    event.remove({id: 'sanguine_networks:blood/spider'})
    event.remove({id: 'sanguine_networks:blood/drowned'})
    event.remove({id: 'sanguine_networks:blood/phantom'})
    event.remove({id: 'sanguine_networks:blood/elder_guardian'})
    
})