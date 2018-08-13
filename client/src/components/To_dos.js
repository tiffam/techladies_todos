import React, { Component } from 'react';
import { Button, Container, Input, Collection, CollectionItem, Row } from 'react-materialize';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, updateItem, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class To_dos extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);

    }

    onUpdateClick = id => {
        this.props.updateItem(id);
        window.location.reload(true);
    }

    render() {

        const { items } = this.props.item;
        return (
            <Container >
                <Collection className="black">
                    <TransitionGroup className='todos-list'>
                        {items.map(({ _id, name, date, completed }) => (
                            <CSSTransition key={_id + completed} timeout={500} classNames="fade">
                                <CollectionItem className="item">
                                    <Button floating className="button red"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    > &times;
                                    </Button>
                                    <Button floating className={completed ? "invisible" : "button"}
                                        onClick={this.onUpdateClick.bind(this, _id)}
                                    >  &#10003;
                                    </Button>

                                    <span className="bold title">Item:</span> <span className={completed ? "completed" : "uncompleted"}>{name}</span>
                                    <span className="date"><span className="bold">Date Added:</span>{date.slice(0, 10)}</span>
                                </CollectionItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </Collection>
            </Container>

        );
    }
}

To_dos.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, updateItem, deleteItem })(To_dos);