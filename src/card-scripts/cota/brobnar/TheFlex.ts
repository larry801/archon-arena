import { CardActionConfig, CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"
import { activePlayerState, exhaustCard, friendlyCreatures } from "../../ScriptUtils"
import { House } from "../../../shared/keyforge/house/House"
import { Creature } from "../../../shared/gamestate/Creature"

const cardScript: CardScript = {
    onPlay: {
        validTargets: (state: GameState) => {
            return friendlyCreatures(state).filter(creature => creature.backingCard.house === House.Brobnar
                && creature.ready)
        },
        numberOfTargets: () => 1,
        perform: (state: GameState, config: CardActionConfig) => {
            const target = config.targets![0] as Creature
            exhaustCard(target)
            activePlayerState(state).amber += Math.floor(target.power / 2)
        }
    }
}

cardScripts.scripts.set("the-flex", cardScript)