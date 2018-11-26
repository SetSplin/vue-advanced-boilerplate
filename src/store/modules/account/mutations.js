import { 
  SELECT_CITY
} from './mutation-types';


/* eslint-disable no-param-reassign */
export default {
  [SELECT_CITY]: (state, payload) => {
    state.city = payload.city;
  },
};
