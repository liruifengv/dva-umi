export default {
  namespace: 'products',
  state: [
    { name: 'react', id: 1, key: 1 },
    { name: 'umi', id: 2, key: 2 },
  ],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    'add'(state, { payload: item }) {
      return [...state, item];
    },
  },
};