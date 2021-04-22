import { useContext, createContext } from 'react';

export const useStore = () => {
    const storeContext = createContext();
    const { state, actions } = useContext(storeContext);

    return {
        state,
        actions
    };
}