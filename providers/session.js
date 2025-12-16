import Context from './context';
import {Session} from '@smoxy-io/js-utils/classes/session';
import {plain} from '@smoxy-io/js-utils/lib/object';

const defaultSessionState = new Session();

class SessionStateCtx extends Context {
    constructor(initialValue) {
        super(plain(initialValue));

        this._sessionClass = initialValue.constructor;
    }

    useContext() {
        const [session, setSession] = super.useContext();

        return [new this._sessionClass(session), (u) => {
            setSession(plain(u));

            this._sessionClass = u.constructor;
        }];
    }
}

const SessionState = new SessionStateCtx(defaultSessionState);

export default SessionState;
