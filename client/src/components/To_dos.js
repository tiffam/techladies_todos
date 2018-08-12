import React, { Component } from 'react';
import { Button, Container, Collection, CollectionItem } from 'react-materialize';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class To_dos extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }

    render() {

        const { items } = this.props.item;
        return (
            <Container >
                <Collection className="black">
                    <TransitionGroup className='todos-list'>
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <CollectionItem className="item">
                                    <Button floating className="button red"
                                        onClick={this.onDeleteClick.bind(this, _id) }
                                    > &times;
                                    </Button>
                                    {name}
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

export default connect(mapStateToProps, { getItems, deleteItem })(To_dos);