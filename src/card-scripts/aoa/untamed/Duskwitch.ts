import {CardScript} from "../../types/CardScript"
import {cardScripts} from "../../CardScripts"

const cardScript: CardScript = {
    power: () => 1,
    elusive: () => true,
    omega: () => true,

}

cardScripts.scripts.set("duskwitch", cardScript)