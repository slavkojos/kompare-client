import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const initialState = {
//   value: [],
// };
export const fetchUsers = createAsyncThunk('users/fetchAll', async thunkAPI => {
  try {
    const response = await fetch('http://localhost:5000/api/users');
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
});

export const postNewUser = createAsyncThunk(
  'users/postNewUser',
  async payload => {
    try {
      const response = await fetch(`http://localhost:5000/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          surname: payload.surname,
          email: payload.email,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteUserById = createAsyncThunk(
  'users/deleteById',
  async userId => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${userId}`,
        {
          method: 'DELETE',
        }
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = 'loaded';
      state.entities = action.payload;
    },
    [fetchUsers.pending]: (state, action) => {
      state.loading = 'loading';
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = 'failed';
    },
    [postNewUser.fulfilled]: (state, action) => {
      state.loading = 'loaded';
      state.entities.push(action.payload);
    },
    [postNewUser.pending]: (state, action) => {
      console.log('post pending');
      state.loading = 'loading';
    },
    [postNewUser.rejected]: (state, action) => {
      console.log('post rejected');
      state.loading = 'failed';
    },
    [deleteUserById.fulfilled]: (state, action) => {
      state.loading = 'loaded';
      const updated = state.entities.filter(
        user => user._id !== action.payload.id
      );
      console.log(updated);
      state.entities = updated;
    },
    [deleteUserById.pending]: (state, action) => {
      state.loading = 'loading';
    },
    [deleteUserById.rejected]: (state, action) => {
      state.loading = 'failed';
    },
  },
});

export default usersSlice.reducer;
