import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../CardScripts"
import {Creature} from "../../../shared/gamestate/Creature"
import {allCreatures, dealDamage, friendlyCreatures} from "../../ScriptUtils"


const cardScript: CardScript = {
    onPlay: {
        validTargets: allCreatures,
        numberOfTargets: () => friendlyCreatures.length,
        perform: (state, config) => {
            config.targets.forEach(target => dealDamage(target as Creature, 1))
        }
    }
}

cardScripts.scripts.set("cooperative-hunting", cardScript)