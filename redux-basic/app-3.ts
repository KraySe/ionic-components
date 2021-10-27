import { Action, Reducer } from './ngrx-fake/ngrx';
import { contadorReducer } from './contador/contador.reducer';
import { incrementAction, multiplyAction } from './contador/contador.actions';

class Store<T> {

    // private state: T;

    constructor(
        private reducer: Reducer<T>,
        private state: T
    ) {
        // this.state = state;
    }

    public getState() {
        return this.state;
    }

    public dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}


const store = new Store(contadorReducer, 10)
console.log(store.getState());

store.dispatch(incrementAction);
store.dispatch(incrementAction);
console.log(store.getState()); // 12

store.dispatch(multiplyAction);
console.log(store.getState()); // 24