ServerEvents.recipes((event) => {
    event.remove({ id: 'ae2:network/blocks/io_condenser' })

    //Remove Inscriber recipes to move them to Giant Squeezer and Assembler
    event.remove({ id: 'ae2:inscriber/calculation_processor_print' })
    event.remove({ id: 'expatternprovider:cutter/calculation' })
    event.remove({ id: 'ae2:inscriber/engineering_processor_print' })
    event.remove({ id: 'expatternprovider:cutter/engineering' })
    event.remove({ id: 'ae2:inscriber/logic_processor_print' })
    event.remove({ id: 'expatternprovider:cutter/logic' })
    event.remove({ id: 'ae2:inscriber/silicon_print' })
    event.remove({ id: 'expatternprovider:cutter/silicon' })
    event.remove({ id: 'megacells:inscriber/accumulation_processor_print' })
    event.remove({ id: 'expatternprovider:cutter/accumulation' })
    event.remove({ id: 'advanced_ae:quantum_processor_print'})
    event.remove({ id: 'advanced_ae:quantum_processor_print_eae'})
    event.remove({ id: 'advanced_ae:quartzcrystal'})

    event.remove({ id: 'ae2:inscriber/logic_processor'})
    event.remove({ id: 'advanced_ae:logic_processor_chamber'})

    event.remove({ id: 'ae2:inscriber/calculation_processor'})
    event.remove({ id: 'advanced_ae:calculation_processor_chamber'})
    event.remove({ id: 'ae2:inscriber/engineering_processor'})
    event.remove({ id: 'advanced_ae:engineering_processor_chamber'})
    event.remove({ id: 'advanced_ae:quantum_processor'})
    event.remove({ id: 'advanced_ae:quantum_processor_chamber'})
    event.remove({ id: 'megacells:inscriber/accumulation_processor'})
    event.remove({ id: 'advanced_ae:accumulation_processor_chamber'})

    event.remove({ id: 'ae2:network/cells/item_storage_components_cell_1k_part'})
    event.remove({ id: 'ae2:network/cells/item_storage_components_cell_4k_part'})
    event.remove({ id: 'ae2:network/cells/item_storage_components_cell_16k_part'})
    event.remove({ id: 'ae2:network/cells/item_storage_components_cell_64k_part'})
    event.remove({ id: 'ae2:network/cells/item_storage_components_cell_256k_part'})
    event.remove({ id: 'megacells:cells/cell_component_1m'})
    event.remove({ id: 'megacells:cells/cell_component_4m'})
    event.remove({ id: 'megacells:cells/cell_component_16m'})
    event.remove({ id: 'megacells:cells/cell_component_64m'})
    event.remove({ id: 'megacells:cells/cell_component_256m'})
    event.remove({ id: 'megacells:crafting/mega_crafting_unit'})
    event.remove({ id: 'expatternprovider:cobblestone_cell'})
    event.remove({ id: 'expatternprovider:water_cell'})

    event.remove({ id: 'ae2:misc/tiny_tnt'})

});