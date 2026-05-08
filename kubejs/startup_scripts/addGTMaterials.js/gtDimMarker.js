GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {

    event.create("ad_astra:mars")
        .iconSupplier(() => Item.of("ad_astra:mars_globe").getItem())
        .tier(0)
        .overrideName("Mars")

    event.create("ad_extendra:sedna")
        .iconSupplier(() => Item.of("ad_extendra:sedna_globe").getItem())
        .tier(0)
        .overrideName("Sedna")

    event.create("twilightforest:twilight_forest")
        .iconSupplier(() => Item.of("twilightforest:twilight_portal_miniature_structure").getItem())
        .tier(0)
        .overrideName("Twilight Forest")

    event.create("bloodmagic:dungeon")
        .iconSupplier(() => Item.of("bloodmagic:inversion_pillar").getItem())
        .tier(0)
        .overrideName("Hidden Realm")

})