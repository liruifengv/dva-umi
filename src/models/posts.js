import { getPosts } from '../services/posts';
export default {

  namespace: 'posts',

  state: {
    list: [],
    total: 0
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({pathname}) => {
        if (pathname === '/posts') {
          dispatch({ type: 'fetchPosts', payload: 1 });
        }
      });
    },
  },

  effects: {
    *fetchPosts({ payload: page }, { call, put }) {
      const response = yield call(getPosts, page);
      console.log('response:', response)
      yield put({ type: 'savePosts', payload: response });
    },
  },

  reducers: {
    savePosts(state, action) {
      return {
        list: [...action.payload.formatData],
        total: action.payload.total
      }
    },
  },
};
