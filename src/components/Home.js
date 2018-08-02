import React, { Component, Fragment } from 'react';
import Header from './Header'
import RoomController from './RoomController'
import HooverController from './HooverController'
import Room from './Room'


export default class Home extends Component {
    state = {
        column: 0,
        row: 0,
        disabled: false,
        room: [],
        dirtPosition: 0,
        hooverPosition: 0,
        display: false,
    }

    handleColumn = event => {
        const column = parseInt(Math.abs(event.target.value), 10)
        this.setState({
            column: column
        })
    }
    handleRow = event => {
        const row = parseInt(Math.abs(event.target.value), 10)
        this.setState({
            row: row,
            hooverPosition: row
        })
    }

    roomCreator = () => {
        const row = this.state.row
        const column = this.state.column
        this.setState({
            disabled: true
        })
        let room = []
        for (let i = 0; i < row * column; i++) {
            room.push(i)
        }
        this.setState({
            room: room,
            display: true
        })
    }
    getDirtPosition = event => {
        let dirt = parseInt(Math.abs(event.target.value), 10)
        const row = this.state.row

        if (dirt === row) {
            alert('please select another cell')

        }
        this.setState({
            dirtPosition: dirt
        })
    }
    goLeft = () => {
        const hoover = this.state.hooverPosition
        this.setState({
            hooverPosition: hoover - 1
        })
        this.cleaning()
    }
    goDown = () => {
        const hoover = this.state.hooverPosition
        const row = this.state.row
        this.setState({
            hooverPosition: hoover + row
        })
        this.cleaning()
    }
    goRight = () => {
        const hoover = this.state.hooverPosition
        this.setState({
            hooverPosition: hoover + 1
        })
        this.cleaning()
    }
    goUp = () => {
        const hoover = this.state.hooverPosition
        const row = this.state.row

        this.setState({
            hooverPosition: hoover - row
        })
        this.cleaning()
    }

    cleaning = () => {
        const hoover = this.state.hooverPosition
        const dirt = this.state.dirtPosition
        if (hoover === dirt) {
            this.setState({
                dirtPosition: 0,
                hooverPosition: this.state.row
            })
        }

    }

    render() {
        return (
            <Fragment >
                <Header headerTitle='Hoover app' />
                {/* with this component I will create the room*/}
                <RoomController
                    createRoom={this.roomCreator}
                    getRow={this.handleRow}
                    getColumn={this.handleColumn}
                    disabled={this.state.disabled}
                    display={this.state.display}
                    maxNumber={this.state.row * this.state.column}
                    getDirt={this.getDirtPosition}
                    dirt={this.state.dirtPosition}
                />

                <hr />
                {/* when the room creator button clicked the room and the hover controller will be appear*/}
                {this.state.display ?
                    <div className='container' >
                        {/* this is the actual room*/}
                        <Room grid={this.state.room}
                            width={this.state.row}
                            dirt={this.state.dirtPosition}
                            hoover={this.state.hooverPosition}
                        />
                        {/* this is the hoover controller*/}
                        <HooverController
                            goLeft={this.goLeft}
                            goDown={this.goDown}
                            goRight={this.goRight}
                            goUp={this.goUp}
                        />
                    </div>
                    : null}
            </Fragment>
        )
    };
}