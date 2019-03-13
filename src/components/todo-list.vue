<template>
	<v-card dark>
		<v-list>
			<div class="todo-list">
				<h1 class="todo-list__title">Список дел</h1>
				<v-text-field clearable color="white" v-model="inputItem" label="Ввести новое задание" @keyup.enter="addItem"></v-text-field>
				<h1 v-for="item in list" v-bind:key="item.id">
					<todo-item v-bind:todo="item"></todo-item>
				</h1>
			</div>
		</v-list>
	</v-card>
</template>

<script>
	import {ADD_ITEM, GET_LIST} from '../store/actions.type';
	import {mapGetters} from 'vuex';
	import TodoItem from './todo-item.vue';

	export default {
		name:       'todo-list',
		computed:   {
			...mapGetters(['list'])
		},
		components: {
			TodoItem,
		},
		data:       function() {
			return {
				inputItem: '',
			};
		},
		mounted() {
			this.getList();
		},
		methods:    {
			getList() {
				this.$store.dispatch(GET_LIST);
			},
			addItem() {
				this.$store.dispatch(ADD_ITEM, this.inputItem);
				this.inputItem = '';
			}
		}
	}
</script>

<style lang="css" scoped>
	.todo-list {
		width:  500px;
		margin: auto;
	}

	.todo-list__title {
		text-align: center;
	}
</style>
