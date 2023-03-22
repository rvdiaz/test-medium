import {configureStore} from '@reduxjs/toolkit';
import disabledComponents from './DisabledComponents/DisabledComponents';

const store= configureStore({
    reducer:{
        uiDisabled: disabledComponents.reducer
    }
})

export default store;