<script setup>
	import { provide } from 'vue';
	import MyHeader from '@/components/MyHeader.vue';
	import Main from './components/Main.vue';
	import MyFooter from './components/MyFooter.vue';
	import useToDos from './composables/useToDos';

	const toDosContext = useToDos();

	provide('toDosContext', toDosContext);
</script>

<template>
	<div id="app">
		<MyHeader />

		<div class="main-wrapper">
			<Main />
		</div>

		<MyFooter />
	</div>
</template>

<style scoped>
	.main-wrapper {
		display: flex;
		justify-content: center;
	}
</style>
