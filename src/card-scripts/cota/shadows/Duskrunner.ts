import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../CardScripts"

const cardScript: CardScript = {
    reap: {
        perform: (state, config) => {
            //Add reap code here
        }
    },

}

cardScripts.scripts.set("duskrunner", cardScript)