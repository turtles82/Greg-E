const SHOP_ITEMS = [
    { item: 'kubejs:universal/lv', price: 8, label: 'LV_Universal', unlock: 'ulv_chapter_completed', questName: 'ULV Chapter pentagon quest' },
    { item: 'kubejs:universal/mv', price: 9, label: 'MV_Universal', unlock: 'lv_chapter_completed', questName: 'LV Chapter pentagon quest' },
    { item: 'kubejs:universal/hv', price: 10, label: 'HV_Universal', unlock: 'mv_chapter_completed', questName: 'MV Chapter pentagon quest' },
    { item: 'kubejs:universal/ev', price: 12, label: 'EV_Universal', unlock: 'hv_chapter_completed', questName: 'HV Chapter pentagon quest' },
    { item: 'kubejs:universal/iv', price: 14, label: 'IV_Universal', unlock: 'ev_chapter_completed', questName: 'EV Chapter pentagon quest' },
    { item: 'kubejs:universal/luv', price: 16, label: 'LUV_Universal', unlock: 'iv_chapter_completed', questName: 'IV Chapter pentagon quest' },
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

    moneyLabel.setText("cu5tom Coins in inventory: " + getEmeraldCount());
    root.addWidgets(moneyLabel);

    let scrollableRoot = new DraggableScrollableWidgetGroup();
    scrollableRoot.setSelfPosition(10, 30);
    scrollableRoot.setSize(180, 110);
    scrollableRoot.setScrollable(true);
    scrollableRoot.setUseScissor(true);
    root.addWidgets(scrollableRoot);

    availableItems.forEach((shopItem, index) => {
        let col = index % 2; 
        let row = Math.floor(index / 2);

        let itemButton = new ButtonWidget();
        itemButton.setSelfPosition(10 + (col * 90), 10 + (row * 35));
        itemButton.setSize(24, 24);

        let itemTexture = new ItemStackTexture();
        itemTexture.setItems(Item.of(shopItem.item));
        
        let normalBg = ResourceBorderTexture.BUTTON_COMMON;
        let hoverBg = normalBg.copy().setColor(ColorPattern.CYAN.color);
        
        itemButton.setButtonTexture(normalBg, itemTexture);
        itemButton.setClickedTexture(hoverBg, itemTexture);

        itemButton.setOnPressCallback(clickData => {

            if (player.level.isClientSide()) return;
            if (shopItem.unlock && !player.persistentData.getBoolean(shopItem.unlock)) {
                player.tell(`You need to complete ${shopItem.questName} first!`);
                return;
            }

            let currentMoney = getEmeraldCount();
            if (currentMoney >= shopItem.price) {
                deductEmeralds(shopItem.price);
                player.give(shopItem.item);
                moneyLabel.setText("cu5tom Coins in inventory: " + getEmeraldCount());
            } else {
                moneyLabel.setText("Not enough coins!");
            }
        });

        itemButton.setHoverTooltips(
            Item.of(shopItem.item).getDisplayName()
        )

        let priceLabel = new LabelWidget();
        priceLabel.setSelfPosition(10 + (col * 90) + 28, 10 + (row * 35) + 8);
        priceLabel.setText(shopItem.price + " CC");

        scrollableRoot.addWidgets(itemButton, priceLabel);
    });

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 9; col++) {
            let posX = 10 + col * 18;
            let posY = 150 + row * 18;
            
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
        let posX = 10 + col * 18;
        let posY = 210;
        
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