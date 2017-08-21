import { createStore } from 'redux';
import treeState from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(
        treeState,
        initialState,
    );

    return store
}