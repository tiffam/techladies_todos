import React, { Component } from 'react';
import { Button, Input, Container, Collection, CollectionItem } from 'react-materialize';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class To_dos extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Eggs' },

            { id: uuid(), name: 'Fish' },

            { id: uuid(), name: 'Cake' },
        ]
    }

    render() {
        const { items } = this.state;
        return (
            <Container >
                <Button
                    color="dark"
                    style={{ marginButton: '2rem' }}
                    onClick={() => {
                        const name = prompt("Enter Item");
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }));
                        }
                    }}
                >Add Item</Button>
                <Collection className="black">
                    <TransitionGroup className='todos-list'>
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <CollectionItem className="item">
                                    <Button floating className="button red"
                                    onClick={() => {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }))
                                    }}
                                    >
                                        &times;
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


export default To_dos;