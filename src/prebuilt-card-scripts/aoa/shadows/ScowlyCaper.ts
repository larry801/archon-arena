import { CardScript, CardActionConfig } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"

const cardScript: CardScript = {
    // Skirmish. Scowly Caper enters play under your opponent’s control and can be used as if it belonged to any house. At the end of your turn, destroy one of Scowly Caper’s neighbors.
    power: () => 2,
    skirmish: () => true,
}
cardScripts.scripts.set("scowly-caper", cardScript)