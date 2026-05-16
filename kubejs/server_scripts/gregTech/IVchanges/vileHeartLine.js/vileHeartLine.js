ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:specialpress', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/ev',
            B: 'incision:eyebulb',
            C: 'gtceu:fine_titanium_wire',
            D: 'gtceu:steel_frame',
            E: 'gtceu:ev_machine_hull'
        }
    )

    event.recipes.botania.mana_infusion(
        '2x kubejs:vileheart',
        'kubejs:vileheart',
        1000,
        'botania:conjuration_catalyst'
    )

    event.recipes.gtceu.giant_squeezer('squuuueeeze')
        .itemInputs(
            'kubejs:vileheart'
        )
        .itemOutputs(
            'gtceu:vileheart_plate_plate'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(400)

    event.recipes.gtceu.bender('bentityyyyaayyygooooo')
        .itemInputs(
            'gtceu:vileheart_plate_plate'
        )
        .itemOutputs(
            'gtceu:pure_vileheart_plate_plate'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(400)

    event.recipes.gtceu.forming_press('formpressityayayayay')
        .itemInputs(
            'gtceu:pure_vileheart_plate_plate'
        )
        .itemOutputs(
            'gtceu:proto_vileheart_plate_plate'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(400)

    event.recipes.gtceu.compressor('pressspressitypress')
        .itemInputs(
            'gtceu:proto_vileheart_plate_plate'
        )
        .itemOutputs(
            'gtceu:primal_vileheart_plate_plate'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(400)

    event.recipes.gtceu.specialpress('lastpressing')
        .itemInputs(
            'gtceu:primal_vileheart_plate_plate'
        )
        .itemOutputs(
            'gtceu:pristine_vileheart_plate_plate'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(400)

    event.recipes.gtceu.wiremill('lastoneydusgdchbdcdhcdc')
        .itemInputs(
            'gtceu:pristine_vileheart_plate_plate'
        )
        .itemOutputs(
            '8x gtceu:fine_pristine_vileheart_plate_wire'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
        .circuit(3)

    event.recipes.gtceu.large_chemical_reactor('betteryaaayyyyyyayadfrf')
        .itemInputs(
            'gtceu:epoxy_circuit_board',
            '4x gtceu:fine_pristine_vileheart_plate_wire'
        )
        .inputFluids(
            'gtceu:iron_iii_chloride 250'
        )
        .itemOutputs(
            '4x gtceu:epoxy_printed_circuit_board'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(600)
        .circuit(24)
})