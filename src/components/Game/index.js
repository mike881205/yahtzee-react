import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import TopJumbo from '../TopJumbo'
import BottomJumbo from '../BottomJumbo'
import Images from '../../imgImport'
import './style.css'

class Game extends Component {

    state ={
        newGame: false,
        turn: 1
    }

    componentDidMount() {
    }

    startGame = () => {
        this.setState({
            newGame: true,
            turn: 1
        })
    }

    updateTurn = () => {
        let turn = this.state.turn

        if (turn < 4) {
            turn++
            this.setState({
                turn: turn
            })
        }
        else {
            this.setState({
                turn: 1
            })
        }

    }

    render() {
        return (
            <div>
                <TopJumbo 
                images={Images}
                newGame={this.state.newGame}
                startGame={this.startGame}
                updateTurn={this.updateTurn}
                turn={this.state.turn}
                />
                <BottomJumbo />
            </div>
        )
    }

}

export default Game