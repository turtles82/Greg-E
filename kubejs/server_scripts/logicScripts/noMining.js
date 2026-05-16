//No mining ores !!!! >:(
BlockEvents.leftClicked(event => {

    const block = event.block
    const id = block.id.toString()

    if (id.startsWith('ad_astra:') || id.startsWith('ad_extendra:')) {
        return; 
    }

    if (id.startsWith('undergarden:')) {
        return; 
    }

    if (block.hasTag('forge:ores')) {
        block.set('minecraft:air')
        event.player.tell({
            text: "The ancient skyblock gods say that ore mining is forbidden...",
            color: "gray",
            italic: true
        })
        event.cancel()
    }

})

