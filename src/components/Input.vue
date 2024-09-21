<script setup>
	const props = defineProps(['value']);
	const emit = defineEmits(['input-change']);
</script>

<template>
	<input
		type="text"
		:value="props.value.value"
		class="input"
		@input="emit('input-change', $event.target.value)"
	/>
</template>

<style scoped>
	.input {
		padding: 0.2rem 0.5rem;
		font-size: 1rem;
	}
</style>
