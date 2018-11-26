import * as types from './mutation-types';


export const selectCity = ({ commit }, payload) => {
  commit(types.SELECT_CITY, payload);
}

export default {
  selectCity,
};
