import React, { Component } from "react";
import { FormGroup, Input, Label, Small, FormBtn } from "../../components/Form";
import TopJumbo from '../TopJumbo'
import BottomJumbo from '../BottomJumbo'
import Images from '../../imgImport'

class Game extends Component {

    state ={
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <TopJumbo 
                images={Images}
                />
                <BottomJumbo />
            </div>
        )
    }

}

export default Game