import ApiService from "../common/api.service";

import {
	SET_LIST
} from './mutations.type';

import {
	ADD_ITEM, COMPLETE_ITEM,
	GET_LIST, REMOVE_ITEM,
} from './actions.type';

const apiService = new ApiService();
apiService.init();

const state = {
	list: []
};

const getters = {
	list(state) {
		return state.list;
	}
};

const actions = {
	[GET_LIST]({commit}) {
		commit(SET_LIST, apiService.getList());
	},
	[ADD_ITEM]({dispatch}, title) {
		apiService.addItem(title);
		dispatch(GET_LIST);
	},
	[REMOVE_ITEM]({dispatch}, id) {
		apiService.removeItem(id);
		dispatch(GET_LIST);
	},
	[COMPLETE_ITEM]({dispatch}, id) {
		apiService.completeItem(id);
		dispatch(GET_LIST);
	},
};

const mutations = {
	[SET_LIST](state, list) {
		state.list = list;
	}
};

export default {
	state,
	getters,
	actions,
	mutations,
}
