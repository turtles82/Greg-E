FTBQuestsEvents.completed('0CEC51F03B40A107', event => {
    event.player.persistentData.putBoolean('ulv_chapter_completed', true)
})

FTBQuestsEvents.completed('4D6885EFA4EE272F', event => {
    event.player.persistentData.putBoolean('lv_chapter_completed', true)
})

FTBQuestsEvents.completed('2C28217E1131A63A', event => {
    event.player.persistentData.putBoolean('mv_chapter_completed', true)
})

FTBQuestsEvents.completed('0DB4226BA23A5C09', event => {
    event.player.persistentData.putBoolean('hv_chapter_completed', true)
})

FTBQuestsEvents.completed('2E47C92E3E8D826A', event => {
    event.player.persistentData.putBoolean('ev_chapter_completed', true)
})

FTBQuestsEvents.completed('2ACB94B77EF072EB', event => {
    event.player.persistentData.putBoolean('iv_chapter_completed', true)
})

PlayerEvents.loggedIn((event) => {

    let data = FTBQuests.getServerDataFromPlayer(event.player)

    if(data.isCompleted('0CEC51F03B40A107')){
        event.player.persistentData.putBoolean('ulv_chapter_completed', true)
    }

    if(data.isCompleted('4D6885EFA4EE272F')){
        event.player.persistentData.putBoolean('lv_chapter_completed', true)
    }

    if(data.isCompleted('2C28217E1131A63A')){
        event.player.persistentData.putBoolean('mv_chapter_completed', true)
    }

    if(data.isCompleted('0DB4226BA23A5C09')){
        event.player.persistentData.putBoolean('hv_chapter_completed', true)
    }

    if(data.isCompleted('2E47C92E3E8D826A')){
        event.player.persistentData.putBoolean('ev_chapter_completed', true)
    }

    if(data.isCompleted('2ACB94B77EF072EB')){
        event.player.persistentData.putBoolean('iv_chapter_completed', true)
    }

})