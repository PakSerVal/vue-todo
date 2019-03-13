<template>
	<v-app>
		<todo-list></todo-list>
	</v-app>
</template>

<script>
	import TodoList from './components/todo-list';

	export default {
		name:       'App',
		components: {
			TodoList,
		},
		data() {
			return {
				//
			}
		}
	}
</script>

