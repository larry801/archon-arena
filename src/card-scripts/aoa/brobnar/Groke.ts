import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"
import {inactivePlayerState, modifyAmber} from "../../ScriptUtils"

const cardScript: CardScript = {
    power: () => 5,
    fight: {
        perform: (state: GameState) => {
            modifyAmber(inactivePlayerState(state), -1)
        }
    }
}

cardScripts.scripts.set("groke", cardScript)
