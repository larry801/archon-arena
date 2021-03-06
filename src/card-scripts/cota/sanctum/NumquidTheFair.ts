import { CardActionConfig, CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"
import { destroyCards, enemyCreatures, friendlyCreatures } from "../../ScriptUtils"

const cardScript: CardScript = {
    // Play: Destroy an enemy creature. Repeat this card’s effect if your opponent still controls more creatures than you.
    power: () => 3,
    onPlay: {
        validTargets: enemyCreatures,
        numberOfTargets: () => 1,
        perform: (state: GameState, config: CardActionConfig) => {
            destroyCards(state, config.targets)
            if (enemyCreatures(state).length > friendlyCreatures(state).length) {
                return cardScript.onPlay
            }
        }
    }
}

cardScripts.scripts.set("numquid-the-fair", cardScript)