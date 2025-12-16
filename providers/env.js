import Context from './context';
import {plain} from '@smoxy-io/js-utils/lib/object';
import {Env} from '@smoxy-io/js-utils/classes/env';

const defaultEnvState = new Env();

class EnvStateCtx extends Context {
  constructor(initialValue) {
    super(plain(initialValue));

    this._envClass = initialValue.constructor;
  }

  useContext() {
    const [env, setEnv] = super.useContext();

    return [new this._envClass(env), (u) => {
      setEnv(plain(u));

      this._envClass = u.constructor;
    }];
  }
}

const EnvState = new EnvStateCtx(defaultEnvState);

export default EnvState;
