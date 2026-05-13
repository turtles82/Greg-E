ServerEvents.recipes((event) => {

    event.recipes.gtceu.chemical_reactor()
        .inputFluids(
            'gtceu:dead_ether 550',
            'gtceu:chrono_percipitate 250',
            'gtceu:fluoroantimonic_acid 350',
            'gtceu:lead 1000'
        )
        .outputFluids(
            'gtceu:grau_aqua 250'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(350)
        .circuit(4)
    
    event.recipes.gtceu.extractor()
        .itemInputs(
            'gtceu:chrono_percipitate_dust'
        )
        .outputFluids(
            'gtceu:chrono_percipitate 144'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'kubejs:gassydust'
        )
        .itemOutputs(
            '2x gtceu:chrono_percipitate_dust'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(150)
        .circuit(2)

    event.recipes.gtceu.chemical_reactor()
        .itemInputs(
            "gtceu:beryllium_dust"
        )
        .inputFluids(
            'gtceu:ethyl_tertbutyl_ether 750',
            'gtceu:radon 300'
        )
        .outputFluids(
            'gtceu:dead_ether 350'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(175)
        .circuit(4)

    event.recipes.gtceu.macerator()
        .itemInputs(
            'gtceu:raw_fractalium'
        )
        .itemOutputs(
            'gtceu:dirtied_fractalium_dust'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)

    event.recipes.gtceu.chemical_bath()
        .itemInputs(
            'gtceu:dirtied_fractalium_dust'
        )
        .inputFluids(
            'gtceu:grau_aqua 250'
        )
        .itemOutputs(
            'gtceu:muddied_fractalium_dust'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(400)

    event.recipes.gtceu.centrifuge()
        .itemInputs(
            'gtceu:muddied_fractalium_dust'
        )
        .inputFluids(
            'gtceu:grau_aqua 50'
        )
        .outputFluids(
            'gtceu:fluoroantimonic_acid 150',
            'gtceu:chrono_percipitate 50'
        )
        .itemOutputs(
            'gtceu:fractalium_dust'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(150)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:fractalium_dust'
        )
        .inputFluids(
            'gtceu:helium 350'
        )
        .itemOutputs(
            'gtceu:hot_fractalium_ingot'
        )
        .blastFurnaceTemp(5000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(600)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_fractalium_ingot'
        )
        .itemOutputs(
            'gtceu:fractalium_ingot'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(100)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:fractalium_ingot'
        )
        .itemOutputs(
            'gtceu:fractalium_block'
        )
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(400)
        
})