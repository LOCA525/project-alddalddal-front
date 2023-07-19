import AddLoungeContent from '../modules/ProjectADD';
import LoungeserverData from '../modules/LoungeData';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        AddLoungeContent,
        // LoungeserverData
    }
});

export default store;