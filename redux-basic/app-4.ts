import { Store, createStore } from 'redux';
import { incrementAction } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';


const store: Store = createStore(contadorReducer);

store.subscribe(() => {

    console.log('Subs: ', store.getState());

});

store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);