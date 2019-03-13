<template>
	<v-list-tile avatar>
		<v-list-tile-action>
			<v-checkbox v-if="!todo.isCompleted" v-model="todo.isCompleted"></v-checkbox>
		</v-list-tile-action>
		<v-list-tile-content>
			<v-list-tile-title :class="{completed: todo.isCompleted}" class="title">{{todo.title}}
			</v-list-tile-title>
		</v-list-tile-content>
		<v-btn icon ripple color="red" @click="remove()">
			<v-icon>close</v-icon>
		</v-btn>
	</v-list-tile>
</template>

<script>
	import {COMPLETE_ITEM, REMOVE_ITEM} from "../store/actions.type";

	export default {
		name: "todo-item",
		props: ['todo'],
		methods: {
			complete() {
				this.$store.dispatch(COMPLETE_ITEM, this.todo.id);
			},
			remove() {
				this.$store.dispatch(REMOVE_ITEM, this.todo.id);
			}
		},
	}
</script>

<style scoped>
	.completed {
		text-decoration: line-through;
	}
</style>
