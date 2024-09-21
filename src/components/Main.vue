<script setup>
	import { inject } from 'vue';
	import Form from '@components/Form.vue';
	import ToDos from '@components/ToDos.vue';

	const toDosContext = inject('toDosContext');
</script>

<template>
	<main>
		<Form />

		<ToDos
			:to-dos="toDosContext.toDos"
			@delete-to-do="toDosContext.deleteToDo"
		/>
	</main>
</template>

<style scoped>
	main {
		margin-block-start: 3rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
