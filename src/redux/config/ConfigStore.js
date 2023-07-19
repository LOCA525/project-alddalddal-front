import AddLoungeContent from "../modules/ProjectADD";
import LoungeserverData from "../modules/LoungeData";
import { configureStore } from "@reduxjs/toolkit";
import setUser from "../modules/user";

const store = configureStore({
  reducer: {
    AddLoungeContent,
    setUser,
  },
});

export default store;
