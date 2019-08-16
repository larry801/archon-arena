import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"
import { activePlayerState, allArtifacts, allCreatures, allUpgrades, modifyAmber } from "../../ScriptUtils"
import { CardInGame } from "../../../shared/gamestate/CardInGame"
import { uniq } from "lodash"
import { House } from "../../../shared/keyforge/house/House"

const cardScript: CardScript = {
    // Play: Gain 1A (to a maximum of 6) for each house represented among cards in play, except for Sanctum.
    onPlay: {
        perform: (state: GameState) => {
            const creatures = allCreatures(state) as CardInGame[]
            const artifacts = allArtifacts(state) as CardInGame[]
            const upgrades = allUpgrades(state) as CardInGame[]
            const allCardsInGame = (creatures).concat(artifacts).concat(upgrades)
            const houses = uniq(allCardsInGame.map(x => x.house)).filter(x => x !== House.Sanctum).length
            modifyAmber(activePlayerState(state), houses)
        }
    }
}

cardScripts.scripts.set("free-markets", cardScript)