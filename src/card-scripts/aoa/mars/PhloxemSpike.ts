import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"
import { destroyCards, enemyNonFlankCreatures, friendlyCreatures } from "../../ScriptUtils"

const cardScript: CardScript = {
    // Play: If there are no friendly creatures in play, destroy each creature not on a flank.
    amber: () => 1,
    onPlay: {
        perform: (state: GameState) => {
            if (0 >= friendlyCreatures(state).length) destroyCards(state, enemyNonFlankCreatures(state))
        }
    }
}

cardScripts.scripts.set("phloxem-spike", cardScript)