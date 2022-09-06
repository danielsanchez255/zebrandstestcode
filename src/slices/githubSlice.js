import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api';

export const fetchGitUsers = createAsyncThunk(
  "github/fetchGitUsers",
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

export const fetchGitRepositories = createAsyncThunk(
  "github/fetchGitRepositories",
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
    loading: false,
    itemsGitUsers: [],
    itemsGitRepositories: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGitUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGitUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.itemsGitUsers = action.payload.items;
      state.itemsGitRepositories = [];
    });
    builder.addCase(fetchGitUsers.rejected, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGitRepositories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGitRepositories.fulfilled, (state, action) => {
      state.loading = false;
      state.itemsGitRepositories = action.payload.items;
      state.itemsGitUsers = [];
    });
    builder.addCase(fetchGitRepositories.rejected, (state, action) => {
      state.loading = true;
    });
  }
});

export const  { filteredGitUsers } = githubSlice.actions;
export default githubSlice.reducer;

