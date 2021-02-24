import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import TopJumbo from '../TopJumbo'
import BottomJumbo from '../BottomJumbo'
import Images from '../../imgImport'
import './style.css'

class Game extends Component {

    state ={
        newGame: false,
        turn: 1,
        roundOver: true
    }

    componentDidMount() {
    }

    startRound = () => {
        if (!this.state.newGame) {
            this.setState({
                newGame: true,
                roundOver: false
            })
        }
        else {
            this.setState({
                roundOver: false
            })
        }
    }

    updateTurn = () => {
        let turn = this.state.turn

        if (turn === 3) {
            this.setState({
                turn: 1,
                roundOver: true
            })
        }
        else {
            turn++
            this.setState({
                turn: turn
            })
        }
    }

    render() {
        return (
            <div>
                <TopJumbo 
                images={Images}
                newGame={this.state.newGame}
                startRound={this.startRound}
                updateTurn={this.updateTurn}
                turn={this.state.turn}
                roundOver={this.state.roundOver}
                />
                <BottomJumbo />
            </div>
        )
    }

}

export default Game