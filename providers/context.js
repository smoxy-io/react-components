import { atom, useAtom } from 'jotai';

class Context {
    constructor(initialValue) {
        this.ctx = atom(initialValue);
        this._initVal = initialValue;
    }

    useContext() {
        // useHydrateAtoms([[this.ctx, this._initVal]]);
        return useAtom(this.ctx);
    }

    useContextReadOnly() {
        return atom((get) => { get(this.ctx) });
    }

    useContextWriteOnly() {
        return atom(null, (get, set, _arg) => { set(this.ctx, _arg) });
    }

    reset() {
        this.ctx = atom(this._initVal);
    };
}

export default Context;
