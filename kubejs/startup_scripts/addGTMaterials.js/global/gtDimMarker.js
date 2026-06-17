GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {

    event.create("ad_astra:mars")
        .iconSupplier(() => Item.of("ad_astra:mars_globe").getItem())
        .tier(0)
        .overrideName("Mars")

    event.create("ad_astra:venus")
        .iconSupplier(() => Item.of("ad_astra:venus_globe").getItem())
        .tier(0)
        .overrideName("Venus")

    event.create("ad_extendra:sedna")
        .iconSupplier(() => Item.of("ad_extendra:sedna_globe").getItem())
        .tier(0)
        .overrideName("Sedna")

    event.create("ad_extendra:jupiter")
        .iconSupplier(() => Item.of("ad_extendra:jupiter_globe").getItem())
        .tier(0)
        .overrideName("Jupiter")

    event.create("twilightforest:twilight_forest")
        .iconSupplier(() => Item.of("twilightforest:twilight_portal_miniature_structure").getItem())
        .tier(0)
        .overrideName("Twilight Forest")

    event.create("bloodmagic:dungeon")
        .iconSupplier(() => Item.of("bloodmagic:inversion_pillar").getItem())
        .tier(0)
        .overrideName("Hidden Realm")

    event.create("gregecore:fracture_dimension")
        .iconSupplier(() => Item.of("gtceu:nan_certificate").getItem())
        .tier(0)
        .overrideName("Fractured Lands")


    //Orbits
    event.create("ad_astra:mercury_orbit")
        .iconSupplier(() => Item.of("kubejs:orbit/mercury").getItem())
        .tier(0)
        .overrideName("Mercury Orbit")

    event.create("ad_astra:venus_orbit")
        .iconSupplier(() => Item.of("kubejs:orbit/venus").getItem())
        .tier(0)
        .overrideName("Venus Orbit")

    event.create("ad_astra:earth_orbit")
        .iconSupplier(() => Item.of("kubejs:orbit/earth").getItem())
        .tier(0)
        .overrideName("Earth Orbit")

    event.create("ad_astra:mars_orbit")
        .iconSupplier(() => Item.of("kubejs:orbit/mars").getItem())
        .tier(0)
        .overrideName("Mars Orbit")

    event.create("ad_extendra:jupiter_orbit")
        .iconSupplier(() => Item.of("kubejs:orbit/jupiter").getItem())
        .tier(0)
        .overrideName("Jupiter Orbit")

    event.create("ad_extendra:saturn_orbit")
        .iconSupplier(() => Item.of("kubejs:orbit/saturn").getItem())
        .tier(0)
        .overrideName("Saturn Orbit")

    event.create("ad_extendra:uranus_orbit")
        .iconSupplier(() => Item.of("kubejs:orbit/uranus").getItem())
        .tier(0)
        .overrideName("Uranus Orbit")

    event.create("ad_extendra:neptune_orbit")
        .iconSupplier(() => Item.of("kubejs:orbit/neptune").getItem())
        .tier(0)
        .overrideName("Neptune Orbit")

    //cataclysm dims

    event.create('cataclysm_dimension:cataclysm_forge_of_aeons')
        .iconSupplier(() => Item.of('cataclysm:mech_eye').getItem())
        .tier(0)
        .overrideName("Ancient Factory")

    event.create('cataclysm_dimension:cataclysm_abyssal_depths')
        .iconSupplier(() => Item.of("cataclysm:abyss_eye").getItem())
        .tier(0)
        .overrideName("Sunken City")

    event.create('cataclysm_dimension:cataclysm_pharaohs_bane')
        .iconSupplier(() => Item.of('cataclysm:desert_eye').getItem())
        .tier(0)
        .overrideName("Curse Pyramid")

    event.create('cataclysm_dimension:cataclysm_infernos_maw')
        .iconSupplier(() => Item.of('cataclysm:flame_eye').getItem())
        .tier(0)
        .overrideName("Burning Arena")

    event.create('cataclysm_dimension:cataclysm_souls_anvil')
        .iconSupplier(() => Item.of('cataclysm:monstrous_eye').getItem())
        .tier(0)
        .overrideName("Soul Forge")

    event.create('cataclysm_dimension:cataclysm_bastion_lost')
        .iconSupplier(() => Item.of('cataclysm:void_eye').getItem())
        .tier(0)
        .overrideName("Ruined Citadel")

    event.create('cataclysm_dimension:cataclysm_eternal_frosthold')
        .iconSupplier(() => Item.of('cataclysm:cursed_eye').getItem())
        .tier(0)
        .overrideName("Frosted Prison")

    event.create('cataclysm_dimension:cataclysm_sanctum_fallen')
        .iconSupplier(() => Item.of('cataclysm:storm_eye').getItem())
        .tier(0)
        .overrideName("Fallen Sanctum")



})