import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../CardScripts"

const cardScript: CardScript = {
    power: () => 6,
    armor: () => 1,

}

cardScripts.scripts.set("tunk", cardScript)