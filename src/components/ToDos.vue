<script setup>
	import ToDo from '@components/ToDo.vue';

	const props = defineProps(['toDos', 'onDeleteToDo']);
</script>

<template>
	<div class="to-dos">
		<template v-for="t in props.toDos.value">
			<ToDo :to-do="t" @delete-to-do="props.onDeleteToDo" />
		</template>
	</div>
</template>

<style scoped>
	.to-dos {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
</style>
