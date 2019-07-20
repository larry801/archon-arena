import {CardScript} from "../../types/CardScript"
import {allNonFlankCreatures, stunCreatures} from "../../ScriptUtils"
import {cardScripts} from "../../CardScripts"

const cardScript: CardScript = {
    // Play: Stun each enemy creature not on a flank.
    amber: () => 1,
    onPlay: {
        perform: (state) => {
            stunCreatures(allNonFlankCreatures(state))
        }
    }
}
cardScripts.scripts.set("radiant-truth", cardScript)