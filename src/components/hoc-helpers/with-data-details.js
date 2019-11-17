import React, { Component, Fragment } from 'react';
import Loader from '../loader';

const withDataDetails = (Item, getData, getImageUrl) => {
    return class extends Component {
        state = {
            item: null,
            loading: true,
            image: null
        };
        componentDidMount() {
            this.updateItem();
        }
        componentDidUpdate(prevProps) {
            if (this.props.itemId !== prevProps.itemId) {
                this.setState({
                    loading: true
                })
                this.updateItem();
            }
        }
        updateItem() {
            const { itemId } = this.props;
            if (!itemId) return;
            getData(itemId)
                .then((item) => {
                    this.setState({
                        item,
                        loading: false,
                        image: getImageUrl(item)
                    })
                });
        };
        render() {
            if (!this.state.item) {
                return <span>Select a item from a list</span>
            }
            const { item, loading, image } = this.state;
            const { children } = this.props;
            const content = loading ? <Loader /> : <Item item={item} image={image} records={children} />;
            return (
                <Fragment>
                    {content}
                </Fragment>
            );

        }
    };
};

export default withDataDetails;