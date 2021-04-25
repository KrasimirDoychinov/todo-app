import { configureStore, createSlice } from '@reduxjs/toolkit';

let itemSlice = createSlice({
  name: 'items',
  initialState: { items: [], totalCount: 0 },
  reducers: {
    addItem: (state, action) => {
      state.totalCount++;
      let newItem = {
        id: Math.random(),
        content: action.payload,
      };

      state.items.push(newItem);
    },
    removeItem: (state, action) => {
      let foundItem = state.items.find((x) => x.id == action.payload);

      if (foundItem) {
        state.totalCount--;
        state.items = state.items.filter((x) => x.id != foundItem.id);
        return;
      }

      return alert(`No item is found inside the arr`);
    },
    editItem: (state, action) => {
      let foundItem = state.items.find((x) => x.id == action.payload.id);

      if (foundItem) {
        foundItem.content = action.payload.content;
        return;
      }

      return alert(`No item is found inside the arr`);
    },
    setEditingMode: (state, action) => {
      let foundItem = state.items.find((x) => x.id == action.payload);

      if (foundItem) {
        foundItem.isEditing = true;
        return;
      }

      return alert(`No item is found inside the arr`);
    },
  },
});

let store = configureStore({
  reducer: itemSlice.reducer,
});

export let itemActions = itemSlice.actions;
export default store;
