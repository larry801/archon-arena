import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../CardScripts"

const cardScript: CardScript = {
	power: () =>  6,
	armor: () =>  1,
//TODO After you discard a Sanctum card from your hand, Baron Mengevin captures 1A.

}

cardScripts.scripts.set("baron-mengevin", cardScript)