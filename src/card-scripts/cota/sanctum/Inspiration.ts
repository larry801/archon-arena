import { CardActionConfig, CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"
import { friendlyCreatures, readyCreatures, useCreatures } from "../../ScriptUtils"
import { Creature } from "../../../shared/gamestate/Creature"

const cardScript: CardScript = {
    // Play: Ready and use a friendly creature.
    onPlay: {
        validTargets: friendlyCreatures,
        numberOfTargets: () => 1,
        perform: (state: GameState, config: CardActionConfig) => {
            readyCreatures(config.targets as Creature[])
            useCreatures(config.targets as Creature[])
        }
    }
}

cardScripts.scripts.set("inspiration", cardScript)