import {Component} from 'react';
import {isArray, isFunction, merge} from 'lodash';

class Base extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    async mergeState(delta, callback = null) {
        return new Promise((resolve, reject) => {
            this.setState(merge({}, this.state, delta), () => {
                if (callback && isFunction(callback)) {
                    setTimeout(callback, 0);
                }

                resolve();
            });
        });
    }

    async mergeStateAt(key, delta, callback = null) {
        return new Promise((resolve, reject) => {
            const stateDelta = {};

            if (isArray(key)) {
                let sd = stateDelta;

                for (let i = 0; i < key.length - 1; i++) {
                    sd[key[i]] = {};
                    sd = sd[key[i]];
                }

                sd[key[key.length - 1]] = delta;
            } else {
                stateDelta[key] = delta;
            }

            this.setState(merge({}, this.state, stateDelta), () => {
                if (callback && isFunction(callback)) {
                    setTimeout(callback, 0);
                }

                resolve();
            });
        });
    }

    async setStateAt(key, state, callback = null) {
        return new Promise((resolve, reject) => {
            const newState = merge({}, this.state);

            if (isArray(key)) {
                let ns = newState;

                for (let i = 0; i < key.length - 1; i++) {
                    ns = ns[key[i]];
                }

                ns[key[key.length - 1]] = state;
            } else {
                newState[key] = state;
            }

            this.setState(newState, () => {
                if (callback && isFunction(callback)) {
                    setTimeout(callback, 0);
                }

                resolve();
            });
        });
    }

    render() {
        return (
            <h1>MUST Override Base render() method</h1>
        );
    }
}

export default Base;
