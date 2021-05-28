import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_TOURNAMENTS_URL, API_REQUEST_STATUS } from '../constants/api';
import axios from 'axios';

const namespace = 'tournaments';

export const fetchTournaments = createAsyncThunk(
  `${namespace}/fetchTournaments`,
  async () => {
    const { data } = await axios.get(API_TOURNAMENTS_URL);
    return data;
  }
);

export const searchTournaments = createAsyncThunk(
  `${namespace}/searchTournaments`,
  async payload => {
    const { data } = await axios.get(
      `${API_TOURNAMENTS_URL}?q=${payload.name}`
    );
    return data;
  }
);

export const addTournament = createAsyncThunk(
  `${namespace}/addTournament`,
  async payload => {
    const { data } = await axios.post(API_TOURNAMENTS_URL, {
      name: payload.name
    });
    return data;
  }
);

export const updateTournament = createAsyncThunk(
  `${namespace}/updateTournament`,
  async payload => {
    const { data } = await axios.patch(API_TOURNAMENTS_URL + `/${payload.id}`, {
      name: payload.name
    });
    return data;
  }
);

export const deleteTournament = createAsyncThunk(
  `${namespace}/deleteTournament`,
  async payload => {
    await axios.delete(API_TOURNAMENTS_URL + `/${payload.id}`);
    return payload.id;
  }
);

const tournamentsSlice = createSlice({
  name: namespace,
  initialState: {
    loading: false,
    data: []
  },
  reducers: {},
  extraReducers: {
    [fetchTournaments.pending]: state => {
      state.loading = API_REQUEST_STATUS.PENDING;
    },
    [fetchTournaments.fulfilled]: (state, { payload }) => {
      state.loading = API_REQUEST_STATUS.FULFILLED;
      state.data = payload;
    },
    [fetchTournaments.rejected]: state => {
      state.loading = API_REQUEST_STATUS.REJECTED;
    },
    [searchTournaments.pending]: state => {
      state.loading = API_REQUEST_STATUS.PENDING;
    },
    [searchTournaments.rejected]: state => {
      state.loading = API_REQUEST_STATUS.REJECTED;
    },
    [searchTournaments.fulfilled]: (state, { payload }) => {
      state.loading = API_REQUEST_STATUS.FULFILLED;
      state.data = payload;
    },
    [addTournament.fulfilled]: (state, { payload }) => {
      state.data.push(payload);
    },
    [updateTournament.fulfilled]: (state, { payload }) => {
      const index = state.data.findIndex(
        tournament => tournament.id === payload.id
      );
      state.data[index].name = payload.name;
    },
    [deleteTournament.fulfilled]: (state, { payload }) => {
      state.data = state.data.filter(tournament => tournament.id !== payload);
    }
  }
});

export default tournamentsSlice.reducer;
