import { CardScript, CardActionConfig } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"

const cardScript: CardScript = {
    // Marmo Swarm gets +1 power for each A in your pool.
    power: () => 2,
}
cardScripts.scripts.set("marmo-swarm", cardScript)