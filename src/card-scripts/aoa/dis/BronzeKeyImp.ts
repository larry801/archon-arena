import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../CardScripts"

const cardScript: CardScript = {
	power: () =>  2,
	elusive: () =>  true,
//TODO Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
Players cannot forge their first key.
	onPlay: {
		(state, config) => {
        //Add onPlay code here
}	},

}

cardScripts.scripts.set("bronze-key-imp", cardScript)