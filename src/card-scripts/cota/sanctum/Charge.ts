import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"
import { GameState } from "../../../shared/gamestate/GameState"

const cardScript: CardScript = {
    // Play: For the remainder of the turn, each creature you play gains, “Play: Deal 2<D> to an enemy creature.”
    amber: () => 1,
    staticEffect: (state: GameState) => {
        //TODO Creatures played
        // if (creaturePlayed(state)) {
        //TODO target a new creature
        //     const targetedCreature = targetCreature()
        //     dealDamage(targetedCreature, 2)
        //  }
    }
}

cardScripts.scripts.set("charge", cardScript)