ServerEvents.recipes((event) => {  

    event.recipes.gtceu.electric_blast_furnace('manacoilget')
        .itemInputs(
            '8x kubejs:manasteelfoil',
            '8x gregecore:manasteel_cable_double_wire'
        )
        .itemOutputs(
            'gregecore:manasteel_coil'
        )
        .duration(200)
        .EUt(60)
        .blastFurnaceTemp(1800)

    event.recipes.gtceu.electric_blast_furnace('alumnugget')
        .itemInputs(
            'kubejs:commonearth'
        )
        .itemOutputs(
            '3x gtceu:aluminium_nugget'
        )
        .duration(400)
        .EUt(60)
        .blastFurnaceTemp(1800)

    event.recipes.gtceu.electric_blast_furnace('twilightcoilget')
        .itemInputs(
            '8x kubejs:twilightfoil',
            '8x gregecore:twilight_alloy_cable_double_wire'
        )
        .itemOutputs(
            'gregecore:twilight_coil'
        )
        .duration(200)
        .EUt(120)
        .blastFurnaceTemp(2700)

    event.recipes.gtceu.electric_blast_furnace('deshcoilget')
        .itemInputs(
            '8x kubejs:deshfoil',
            '8x gregecore:desh_cable_double_wire'
        )
        .itemOutputs(
            'gregecore:desh_coil'
        )
        .duration(200)
        .EUt(480)
        .blastFurnaceTemp(3400)

    event.recipes.gtceu.electric_blast_furnace('malachitecoilget')
        .itemInputs(
            '8x kubejs:malachitefoil',
            '8x gregecore:malachite_cable_double_wire'
        )
        .itemOutputs(
            'gregecore:malachite_coil'
        )
        .duration(200)
        .EUt(1680)
        .blastFurnaceTemp(3400)

    event.recipes.gtceu.electric_blast_furnace('forgottencoilget')
        .itemInputs(
            '8x kubejs:forgfoil',
            '8x gregecore:forgotten_ingot_cable_double_wire'
        )
        .itemOutputs(
            'gregecore:forgotten_coil'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .blastFurnaceTemp(4000)

    event.recipes.gtceu.electric_blast_furnace('superelementcoilget')
        .itemInputs(
            '8x gregecore:superelement27_foil',
            '8x gregecore:superelement27_double_wire'
        )
        .itemOutputs(
            'gregecore:superelement_coil'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV])
        .blastFurnaceTemp(4000)

    event.recipes.gtceu.electric_blast_furnace('awcoilget')
        .itemInputs(
            '8x gregecore:awakened_draconium_cable_foil',
            '8x gregecore:awakened_draconium_cable_double_wire'
        )
        .itemOutputs(
            'gregecore:awakened_draconium_coil'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .blastFurnaceTemp(6000)

    event.recipes.gtceu.electric_blast_furnace('meltedirtgeeeet')
        .itemInputs(
            'minecraft:dirt',
        )
        .outputFluids(
            'kubejs:meltedirt 1000'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])
        .blastFurnaceTemp(2500)

    event.recipes.gtceu.electric_blast_furnace('reifroceddddcobblblbee')
        .itemInputs(
            '4x gtceu:steel_ingot',
            'kubejs:cobbletwo'
        )
        .itemOutputs(
            'gtceu:reinforced_cobblestone_ingot'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])
        .blastFurnaceTemp(5000)

});