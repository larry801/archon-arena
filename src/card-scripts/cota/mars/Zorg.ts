import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../CardScripts"

const cardScript: CardScript = {
    power: () => 7,
    fight: {
        perform: (state, config) => {
            //Add fight code here
        }
    },
    beforeFight: {
        perform: (state, config) => {
            //Add beforeFight code here
        }
    },

}

cardScripts.scripts.set("zorg", cardScript)