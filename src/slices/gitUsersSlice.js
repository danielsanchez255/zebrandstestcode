import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api';

export const gettingGitUsers = createAsyncThunk(
  "github/gettingGitUsers",
  async () => {
    const res = api.fetchGitHub();

    console.log("Res: ", res)
    /*const data = res.then((response) => {
      return response.data;
    }).catch((error) => {
      return console.log("Error: ", error);
    })  
    
    return data;*/
  }
);

const gitUsersSlice = createSlice({
  name: "github",
  initialState: [],
  reducers : {}
});

export default gitUsersSlice.reducer;

