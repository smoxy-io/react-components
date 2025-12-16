import Context from './context';
import {Config} from '@smoxy-io/js-utils/classes/config';
import {plain} from '@smoxy-io/js-utils/lib/object';

const defaultConfigState = new Config();

class ConfigStateCtx extends Context {
    constructor(initialValue) {
        super(plain(initialValue));

        this._configClass = initialValue.constructor;
    }

    useContext() {
        const [config, setConfig] = super.useContext();

        return [new this._configClass(config), (u) => {
            setConfig(plain(u));

            this._configClass = u.constructor;
        }];
    }
}

const ConfigState = new ConfigStateCtx(defaultConfigState);

export default ConfigState;
