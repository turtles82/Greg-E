BlockEvents.rightClicked('kubejs:vending_machine', event => { 
    BlockUIFactory.INSTANCE.openUI(event.player, event.block.pos, "custom_shop_ui");
});