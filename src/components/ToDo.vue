<script setup>
	const props = defineProps(['toDo', 'onDeleteToDo']);
</script>

<template>
	<div class="to-do-box">
		<p class="message">{{ props.toDo.value }}</p>

		<button class="button" @click="props.onDeleteToDo(props.toDo.id)">
			Remove
		</button>
	</div>
</template>

<style scoped>
	.to-do-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.message {
	}

	.button {
		padding: 0.5rem 1rem;
		border: 1px solid black;
		border-radius: 1rem;
		transition: all 0.1s ease;
	}

	.button:hover {
		color: white;
		border-color: rgb(232, 75, 75);
		background-color: rgb(232, 75, 75);
	}
</style>
