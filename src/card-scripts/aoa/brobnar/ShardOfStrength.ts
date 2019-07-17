import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../CardScripts"
import {amountOfShards, friendlyCreatures} from "../../ScriptUtils"

import {Creature} from "../../../shared/gamestate/Creature";

const cardScript: CardScript = {
    action: {
        validTargets: friendlyCreatures,
        numberOfTargets: amountOfShards,
        perform: (state, config) => {
            config.targets.forEach(creature => (creature as Creature).tokens.power += 1)
        }
    }
}

cardScripts.scripts.set("shard-of-strength", cardScript)