import React, { Component } from 'react';
import {
    Button,
    Modal,
    Input
} from 'react-materialize';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import uuid from 'uuid';

class ItemModal extends Component {
    state = {
        name: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: uuid(),
            name: this.state.name
        }

        this.props.addItem(newItem);

    }

    render() {
        return (
            <div>
                <Modal
                    header='Add To To Do List'
                    trigger={<Button>Add To To Do List</Button>}
                    className="blackfont">
                    <form onSubmit={this.onSubmit}>
                    <Input
                        type="text"
                        name="name"
                        id="item"
                        placeholder="Add a To Do"
                        onChange={this.onChange}
                    />
                    <Button
                    color="dark"
                    style={{marginTop: '2rem'}}
                    
                    className="modal-close"
                    >
                        Add Item
                    </Button>
                    </form>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);