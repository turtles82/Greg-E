const SHOP_ITEMS = [
    { item: '4x gtceu:steel_ingot', price: 2, label: 'LV_Universalsteel', unlock: '0CEC51F03B40A107', questName: 'ULV Chapter pentagon quest' },
    { item: 'kubejs:universal/lv', price: 4, label: 'LV_Universal', unlock: '0CEC51F03B40A107', questName: 'ULV Chapter pentagon quest' },
    { item: '4x gtceu:aluminium_ingot', price: 2, label: 'MV_Universalalumi', unlock: '4D6885EFA4EE272F', questName: 'LV Chapter pentagon quest' },
    { item: 'kubejs:universal/mv', price: 5, label: 'MV_Universal', unlock: '4D6885EFA4EE272F', questName: 'LV Chapter pentagon quest' },
    { item: '4x gtceu:stainless_steel_ingot', price: 3, label: 'HV_Universalstainless', unlock: '2C28217E1131A63A', questName: 'MV Chapter pentagon quest' },
    { item: 'kubejs:universal/hv', price: 6, label: 'HV_Universal', unlock: '2C28217E1131A63A', questName: 'MV Chapter pentagon quest' },
    { item: '4x gtceu:titanium_ingot', price: 4, label: 'EV_Universaltitanium', unlock: '0DB4226BA23A5C09', questName: 'HV Chapter pentagon quest' },
    { item: 'kubejs:universal/ev', price: 8, label: 'EV_Universal', unlock: '0DB4226BA23A5C09', questName: 'HV Chapter pentagon quest' },
    { item: '4x gtceu:tungsten_steel_ingot', price: 10, label: 'IV_Universaltungtungtung', unlock: '2E47C92E3E8D826A', questName: 'EV Chapter pentagon quest' },
    { item: 'kubejs:universal/iv', price: 10, label: 'IV_Universal', unlock: '2E47C92E3E8D826A', questName: 'EV Chapter pentagon quest' },
    { item: '4x gtceu:rhodium_plated_palladium_ingot', price: 6, label: 'LUV_Universalrhodium', unlock: '2ACB94B77EF072EB', questName: 'IV Chapter pentagon quest' },
    { item: 'kubejs:universal/luv', price: 12, label: 'LUV_Universal', unlock: '2ACB94B77EF072EB', questName: 'IV Chapter pentagon quest' },
    { item: 'tiab:time_in_a_bottle', price: 100, label: 'LUV_Universaltimeinabootl', unlock: '2ACB94B77EF072EB', questName: 'IV Chapter pentagon quest' },
    { item: '16x gtceu:duct_tape', price: 2, label: 'MV_Universalductape', unlock: '4D6885EFA4EE272F', questName: 'LV Chapter pentagon quest' },
    { item: 'kubejs:legwepcore', price: 30, label: 'LegWepCore', unlock: '4D6885EFA4EE272F', questName: 'LV Chapter pentagon quest' },
];

const CURRENCY_ITEM = 'kubejs:cc';

function createShopUI(e) {
    let player = e.player;
    let root = new WidgetGroup();
    root.setSize(200, 250);
    root.setBackground(ResourceBorderTexture.BORDERED_BACKGROUND);

    let availableItems = SHOP_ITEMS;

    let moneyLabel = new LabelWidget();
    moneyLabel.setSelfPosition(10, 10);

    function getEmeraldCount() {
        let count = 0;
        for(let i = 0; i < 36; i++) {
            let stack = player.inventory.getItem(i);
            if(stack != null && !stack.isEmpty() && stack.getId() === CURRENCY_ITEM) {
                count += stack.getCount();
            }
        }
        return count;
    }

    function deductEmeralds(amount) {
        let leftToRemove = amount;
        for(let i = 0; i < 36; i++) {
            let stack = player.inventory.getItem(i);
            if(stack != null && !stack.isEmpty() && stack.getId() === CURRENCY_ITEM) {
                let c = stack.getCount();
                if (c >= leftToRemove) {
                    stack.setCount(c - leftToRemove);
                    player.inventory.setItem(i, stack);
                    break;
                } else {
                    stack.setCount(0);
                    player.inventory.setItem(i, stack);
                    leftToRemove -= c;
                }
            }
        }
    }

    moneyLabel.setText("cu5tm Coins in inventory: " + getEmeraldCount());
    root.addWidgets(moneyLabel);

    let rootUpper = new WidgetGroup();
    rootUpper.setSelfPosition(10, 30);
    rootUpper.setSize(180, 110);
    rootUpper.setBackground(GuiTextures.BACKGROUND)
    let scrollableRoot = new DraggableScrollableWidgetGroup();
    scrollableRoot.setSelfPosition(3, 3); 
    scrollableRoot.setSize(177, 104);
    scrollableRoot.setYScrollBarWidth(6);
    scrollableRoot.setYBarStyle(GuiTextures.BACKGROUND, ResourceBorderTexture.BUTTON_COMMON);
    scrollableRoot.setScrollable(true);
    scrollableRoot.setUseScissor(true);
    rootUpper.addWidgets(scrollableRoot);
    root.addWidgets(rootUpper);

    availableItems.forEach((shopItem, index) => {
        let col = index % 2; 
        let row = Math.floor(index / 2);

        let itemButton = new ButtonWidget();
        itemButton.setSelfPosition(10 + (col * 90), 4 + (row * 35));
        itemButton.setSize(24, 24);

        let itemTexture = new ItemStackTexture();
        itemTexture.setItems(Item.of(shopItem.item));
        itemTexture.scale(0.6)
        
        let normalBg = ResourceBorderTexture.BUTTON_COMMON;
        let hoverBg = normalBg.copy().setColor(ColorPattern.CYAN.color);
        
        itemButton.setButtonTexture(normalBg, itemTexture);
        itemButton.setClickedTexture(hoverBg, itemTexture);

        itemButton.setOnPressCallback(clickData => {

            if (player.level.isClientSide()) return;
            if (!FTBQuests.getServerDataFromPlayer(player).isCompleted(shopItem.unlock)) {
                player.tell(`You need to complete ${shopItem.questName} first!`);
                return;
            }

            let currentMoney = getEmeraldCount();
            if (currentMoney >= shopItem.price) {
                deductEmeralds(shopItem.price);
                player.give(shopItem.item);
                moneyLabel.setText("cu5tm Coins in inventory: " + getEmeraldCount());
            } else {
                moneyLabel.setText("Not enough coins!");
            }
        });

        itemButton.setHoverTooltips(
            Item.of(shopItem.item).getDisplayName()
        )

        let priceLabel = new LabelWidget();
        priceLabel.setSelfPosition(10 + (col * 90) + 28, 4 + (row * 35) + 8);
        priceLabel.setText(shopItem.price + " cC");

        scrollableRoot.addWidgets(itemButton, priceLabel);
    });

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 9; col++) {
            let posX = 10 + col * 20;
            let posY = 150 + row * 20;
            
            let bg = new ButtonWidget();
            bg.setSelfPosition(posX - 1, posY - 1);
            bg.setSize(20, 20);
            bg.setButtonTexture(ResourceBorderTexture.BUTTON_COMMON, new TextTexture(""));
            root.addWidgets(bg);

            let invSlot = new SlotWidget();
            invSlot.setSelfPosition(posX, posY);
            invSlot.setContainerSlot(player.getInventory(), col + (row + 1) * 9);
            invSlot.setCanPutItems(true);
            invSlot.setCanTakeItems(true);
            invSlot.setLocationInfo(true, false);
            root.addWidgets(invSlot);
        }
    }

    for (let col = 0; col < 9; col++) {
        let posX = 10 + col * 20;
        let posY = 220;
        
        let bg = new ButtonWidget();
        bg.setSelfPosition(posX - 1, posY - 1);
        bg.setSize(20, 20);
        bg.setButtonTexture(ResourceBorderTexture.BUTTON_COMMON, new TextTexture(""));
        root.addWidgets(bg);

        let hotbarSlot = new SlotWidget();
        hotbarSlot.setSelfPosition(posX, posY);
        hotbarSlot.setContainerSlot(player.getInventory(), col);
        hotbarSlot.setCanPutItems(true);
        hotbarSlot.setCanTakeItems(true);
        hotbarSlot.setLocationInfo(true, true);
        root.addWidgets(hotbarSlot);
    }

    return root;
}

LDLibUI.block("custom_shop_ui", e => { 
    var ui = createShopUI(e);
    e.success(ui);
});