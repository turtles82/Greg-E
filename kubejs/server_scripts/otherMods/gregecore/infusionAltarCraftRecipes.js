ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gregecore:infusion_altar', 1),
        [
            'CDC',
            'CEC',
            'BAB'
        ],
        {
            A: 'gtceu:lv_machine_hull',
            B: '#gtceu:circuits/lv',
            C: 'gtceu:solid_machine_casing',
            D: 'botania:manasteel_block',
            E: 'ae2:fluix_pearl'
        }
    )

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:ulv_machine_hull',
            'gtceu:lv_super_tank'
        )
        .inputFluids(
            'gregecore:perditio_essentia 100'
        )
        .itemOutputs(
            'gregecore:perditio_input_machine'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(500)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:ulv_machine_hull',
            'gtceu:lv_super_tank'
        )
        .inputFluids(
            'gregecore:aer_essentia 100'
        )
        .itemOutputs(
            'gregecore:aer_input_machine'
        )
        .circuit(2)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(500)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:ulv_machine_hull',
            'gtceu:lv_super_tank'
        )
        .inputFluids(
            'gregecore:terra_essentia 100'
        )
        .itemOutputs(
            'gregecore:terra_input_machine'
        )
        .circuit(3)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(500)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:ulv_machine_hull',
            'gtceu:lv_super_tank'
        )
        .inputFluids(
            'gregecore:aqua_essentia 100'
        )
        .itemOutputs(
            'gregecore:aqua_input_machine'
        )
        .circuit(4)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(500)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:ulv_machine_hull',
            'gtceu:lv_super_tank'
        )
        .inputFluids(
            'gregecore:ordo_essentia 100'
        )
        .itemOutputs(
            'gregecore:ordo_input_machine'
        )
        .circuit(5)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(500)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:ulv_machine_hull',
            'gtceu:lv_super_tank'
        )
        .inputFluids(
            'gregecore:ignis_essentia 100'
        )
        .itemOutputs(
            'gregecore:ignis_input_machine'
        )
        .circuit(6)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(500)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:ulv_machine_hull',
            'avaritia:compressed_chest'
        )
        .inputFluids(
            'gtceu:rubber 100'
        )
        .itemOutputs(
            'gregecore:pedestal_inf_machine'
        )
        .circuit(7)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(500)

    event.recipes.gtceu.assembler()
        .itemInputs(
            'gtceu:item_filter',
            '4x gtceu:magical_certus_quartz2_ingot'
        )
        .inputFluids(
            'gtceu:rubber 100'
        )
        .itemOutputs(
            'kubejs:essentia_filter'
        )
        .circuit(8)
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(500)

    event.shaped(
        Item.of('gtceu:lv_essentia_smelter', 1),
        [
            'DAD',
            'DBD',
            'DCD'
        ],
        {
            A: 'gtceu:item_filter',
            B: 'gtceu:lv_machine_hull',
            C: '#gtceu:circuits/lv',
            D: 'gtceu:steel_ingot'
        }
    )

    event.shaped(
        Item.of('gtceu:mv_essentia_smelter', 1),
        [
            'DAD',
            'DBD',
            'DCD'
        ],
        {
            A: 'gtceu:item_filter',
            B: 'gtceu:mv_machine_hull',
            C: '#gtceu:circuits/mv',
            D: 'gtceu:aluminium_ingot'
        }
    )

    event.shaped(
        Item.of('gtceu:hv_essentia_smelter', 1),
        [
            'DAD',
            'DBD',
            'DCD'
        ],
        {
            A: 'gtceu:item_filter',
            B: 'gtceu:hv_machine_hull',
            C: '#gtceu:circuits/hv',
            D: 'gtceu:stainless_steel_ingot'
        }
    )

    event.shaped(
        Item.of('gtceu:ev_essentia_smelter', 1),
        [
            'DAD',
            'DBD',
            'DCD'
        ],
        {
            A: 'gtceu:item_filter',
            B: 'gtceu:ev_machine_hull',
            C: '#gtceu:circuits/ev',
            D: 'gtceu:titanium_ingot'
        }
    )

    event.shaped(
        Item.of('gtceu:iv_essentia_smelter', 1),
        [
            'DAD',
            'DBD',
            'DCD'
        ],
        {
            A: 'gtceu:item_filter',
            B: 'gtceu:iv_machine_hull',
            C: '#gtceu:circuits/iv',
            D: 'gtceu:tungsten_steel_ingot'
        }
    )

})