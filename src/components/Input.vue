<script setup>
	const props = defineProps(['value']);
	const emit = defineEmits(['input-change']);
</script>

<template>
	<input
		type="text"
		:value="props.value.value"
		@input="emit('input-change', $event.target.value)"
	/>
</template>
