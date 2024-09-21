<script setup>
	import { inject } from 'vue';
	import Input from './Input.vue';
	import useForm from '@/composables/useForm';

	const toDosContext = inject('toDosContext');

	if (!toDosContext) throw Error('toDosContext must exist');

	const form = useForm(toDosContext.addToDo);
</script>

<template>
	<div class="form">
		<Input :value="form.input" @input-change="form.onInputChange" />

		<button class="button" @click="form.onButtonClick">Add new</button>
	</div>
</template>

<style scoped>
	.form {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.button {
		padding: 0.5rem 1rem;
		border: 1px solid black;
		border-radius: 1rem;
	}
</style>
