import { ref } from 'vue';

const useToDos = () => {
	const toDos = ref([]);

	const generateId = () => {
		return 'id-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
	};

	const addToDo = (newToDo) => {
		if (!newToDo) throw Error('New toDo must be valid');

		toDos.value.push({
			id: generateId(),
			value: newToDo,
		});
	};

	const deleteToDo = (id) => {
		const i = toDos.value.findIndex((t) => t.id === id);

		if (i === -1) throw Error("Such toDo doesn't exist");

		toDos.value.splice(i, 1);
	};

	return { toDos, addToDo, deleteToDo };
};

export default useToDos;
