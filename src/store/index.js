import Vue from 'vue';
import Vuex from 'vuex';

import ListModule from './list.module';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		ListModule,
	}
});
