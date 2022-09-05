import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api';

export const gettingGitUsers = createAsyncThunk(
  "github/gettingGitUsers",
  async ( searchUsers ) => {
    const res = api.fetchGitHubUsers(searchUsers);

    const data = res.then((response) => {
      return response.data;
    }).catch((error) => {
      return console.log("Error: ", error);
    })  
    
    return data;
  }
);

export const gettingGitRepositories = createAsyncThunk(
  "github/gettingGitRepositories",
  async ( searchRepository ) => {
    const res = api.fetchGitHubRepositories(searchRepository);

    const data = res.then((response) => {
      return response.data;
    }).catch((error) => {
      return console.log("Error: ", error);
    })  
    
    return data;
  }
);

const githubSlice = createSlice({
  name: "github",
  initialState: {
    loadingUsers: false,
    loadingRepositories: false,
    itemsGitUsers: [],
    itemsGitRepositories: []
  },
  reducers: {
    filteredGitUsers: (state, action) => {

    }
  },
  extraReducers: (builder) => {
    builder.addCase(gettingGitUsers.pending, (state, action) => {
      state.loadingUsers = true;
    });
    builder.addCase(gettingGitUsers.fulfilled, (state, action) => {
      state.loadingUsers = false;
      console.log("Git users: ", action.payload.items);
      //state.itemsGitUsers.push(action.payload.items);
    });
    builder.addCase(gettingGitRepositories.pending, (state, action) => {
      state.loadingRepositories = true;
    });
    builder.addCase(gettingGitRepositories.fulfilled, (state, action) => {
      state.loadingRepositories = false;
      console.log("Git repositories: ", action.payload);
    });
  }
});

export const  { filteredGitUsers } = githubSlice.actions;
export default githubSlice.reducer;

