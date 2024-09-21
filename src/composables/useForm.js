import { ref } from 'vue';

const useForm = (buttonClickHandler) => {
	const input = ref('');

	const onInputChange = (newValue) => {
		input.value = newValue;
	};

	const onButtonClick = () => {
		if (typeof buttonClickHandler !== 'function') {
			throw Error('Button click handler must be a function');
		}

		buttonClickHandler(input.value);

		input.value = '';
	};

	return {
		input,
		onInputChange,
		onButtonClick,
	};
};

export default useForm;
