import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../CardScripts"

const cardScript: CardScript = {
	amber: () =>  1,
//TODO Play: Choose a house. Stun each creature of that house.
	onPlay: {
		perform: (state, config) => {
        //Add onPlay code here
}	},

}

cardScripts.scripts.set("blinding-light", cardScript)