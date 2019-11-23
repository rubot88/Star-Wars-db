import React, { Component } from 'react';
import Loader from '../loader';
import ErrorIndicator from '../error-indicator';

const withDataList = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false
        };
        onError = () => {
            this.setState({
                loading: false,
                error: true
            });
        };
        update() {
            this.setState({
                loading: true,
                error: false
            });
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false,
                    });
                })
                .catch(this.onError);
        }
        componentDidMount() {
            this.update();
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) this.update();
        }


        render() {
            const { data, loading, error } = this.state;
            if (loading)
                return <Loader />;
            if (error)
                return <ErrorIndicator />;
            return <View {...this.props} data={data} />;
        }
    };
};

export default withDataList;
