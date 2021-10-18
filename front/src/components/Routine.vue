<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	setup(props) {
		const deleteRoutine = () => {
			console.log(`Routine ${props.routineId} is being deleted`);
		};
		return {
			deleteRoutine
		};
	},
	props: {
		routineId: {
			type: String,
			required: true
		},
		routineName: {
			type: String,
			required: true
		},
		totalItems: {
			type: Number,
			required: true
		}
	}
});
</script>

<template>
	<div class="relative rounded-lg border-2 border-gray-200">
		<button
			@click="deleteRoutine"
			class="
				absolute
				top-2
				right-2
				hover:bg-gray-200
				text-gray-200
				hover:text-gray-400
				rounded
				transition-colors
			"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		<router-link :to="'/routine/' + routineId" class="relative p-4">
			<div class="mx-auto flex items-center flex-col pt-4">
				<h1 class="font-semibold capitalize">{{ routineName }}</h1>
				<p>{{ totalItems }} items</p>
			</div>
		</router-link>
	</div>
</template>
