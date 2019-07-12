import Phaser from "phaser"
import React from "react"
import { chatWidth } from "../matchmaking/ChatDrawer"
import Action from "../shared/Action"
import { gameHistoryStore } from "../stores/GameHistoryStore"
import { log, prettyJson } from "../Utils"
import { buildLogForAction } from "./ActionLogger"
import { exec } from "./Actions/Actions"
import GameScene from "./GameScene"
import lodash from "lodash"
import * as mobx from "mobx"

import { GameState } from "../shared/gamestate/GameState"

interface Props {
    state: GameState | undefined,
    playerId: string | undefined,
    setState: Function,
}

const width = window.innerWidth - chatWidth
const height = window.innerHeight - 70

const config: Phaser.Types.Core.GameConfig = {
    parent: "phaser",
    backgroundColor: "#eee",
    width,
    height,
    input: {
        mouse: true,
    },
}

class Game extends React.Component<Props> {

    game: Phaser.Game | undefined
    // Store a state object stripped of proxies defined by mobx
    _state: GameState | undefined

    dispatch = (action: Action) => {
        const state = this._state
        if (!state)
            throw new Error("Action dispatched before game state available")

        const logObj = buildLogForAction(action, state)
        log.info("Log is " + prettyJson(logObj))
        if (logObj != null) {
            // throws an error
            //gameHistoryStore.addAction(logObj)
        }

        exec(action, state)
        this.props.setState(state)
    }

    render() {
        return (
            <div id="phaser" />
        )
    }

    componentDidMount() {
        this.update()
    }

    componentDidUpdate() {
        this.update()
    }

    update() {
        if (this.props.state) {
            this._state = mobx.toJS(this.props.state)
            const state = this._state
            const {playerId} = this.props

            if (this.game) {
                const scene = this.game.scene.getScene("GameScene") as GameScene
                if (scene) {
                    scene.data.set("state", state)
                    scene.render()
                }
            } else {
                this.game = new Phaser.Game(config)
                this.game.events.once("ready", () => {
                    if (!this.game)
                        return

                    this.game.canvas.addEventListener("contextmenu", (e: MouseEvent) => {
                        e.preventDefault()
                        return false
                    });

                    const scene = new GameScene()
                    this.game.scene.add("GameScene", scene, true, {
                        state,
                    })
                    // @ts-ignore
                    scene.data.set({
                        state,
                        playerId,
                        dispatch: this.dispatch,
                        width,
                        height,
                    })
                })
            }
        }
    }
}

export default Game
