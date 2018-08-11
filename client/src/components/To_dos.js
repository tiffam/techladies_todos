import React, { Component } from 'react';
import { Button, Input, Row, Col } from 'react-materialize';

class to_dos extends Component {

    addHandler() {
        alert("clicked")
    }

    render() {
        return (
            <div >
                <br />
                <h5>To Dos</h5>
                <Input className="input" type="text" />
                <Button className="button" onClick={this.addHandler}>+</Button>
            </div>)
    }
}


    export default to_dos;