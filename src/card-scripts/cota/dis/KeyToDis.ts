import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../CardScripts"

const cardScript: CardScript = {
    omni: {
        perform: (state, config) => {
            //Add omni code here
        }
    },

}

cardScripts.scripts.set("key-to-dis", cardScript)