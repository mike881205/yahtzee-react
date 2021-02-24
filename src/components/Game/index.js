import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import TopJumbo from '../TopJumbo'
import BottomJumbo from '../BottomJumbo'
import Images from '../../imgImport'
import './style.css'

class Game extends Component {

    state ={
        newGame: false
    }

    componentDidMount() {
    }

    startGame = () => {
        this.setState({
            newGame: true
        })
    }

    render() {
        return (
            <div>
                <TopJumbo 
                images={Images}
                newGame={this.state.newGame}
                startGame={this.startGame}
                />
                <BottomJumbo />
            </div>
        )
    }

}

export default Game