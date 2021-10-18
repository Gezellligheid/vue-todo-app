<script lang="ts">
import { defineComponent, PropType } from 'vue';

type HeaderButton = {
	callback: Function;
	text: string;
};

export default defineComponent({
	setup() {},
	props: {
		leftButton: {
			type: Object as PropType<HeaderButton>,
			required: false
		},
		title: {
			type: String,
			required: true
		},
		rightButton: {
			type: Object as PropType<HeaderButton>,
			required: false
		}
	}
});
</script>

<template>
	<header class="grid grid-cols-3 mt-12 mb-6 px-6">
		<button
			class="
				text-gray-700
				hover:bg-gray-200
				px-2
				py-1
				rounded
				transition-colors
				place-self-start
			"
			v-if="leftButton"
			@click="leftButton.callback"
		>
			{{ leftButton.text }}
		</button>
		<div v-else></div>
		<h1 class="font-bold text-xl place-self-center">{{ title }}</h1>
		<button
			class="
				text-gray-700
				hover:bg-gray-200
				px-2
				py-1
				rounded
				transition-colors
				place-self-end
			"
			v-if="rightButton"
			@click="rightButton.callback"
		>
			{{ rightButton.text }}
		</button>
		<div v-else></div>
	</header>
</template>
