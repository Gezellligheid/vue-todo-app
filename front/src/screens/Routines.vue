<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '../components/AppHeader.vue';
import Routine from '../components/Routine.vue';

export default defineComponent({
	components: { AppHeader, Routine },
	setup() {
		const handleLeftButton = () => {
			console.log('boe');
		};
		const handleRightButton = () => {
			console.log('ba');
		};

		return {
			handleLeftButton,
			handleRightButton
		};
	}
});
</script>

<template>
	<app-header
		title="Routines"
		:rightButton="{
			callback: handleRightButton,
			text: 'Add'
		}"
		:leftButton="{
			callback: handleLeftButton,
			text: 'Allo'
		}"
	/>
	<div class="grid grid-cols-2 gap-4">
		<routine routineId="1" routineName="routine one" :totalItems="5" />
		<routine routineId="2" routineName="routine two" :totalItems="5" />

		<routine routineId="3" routineName="routine three" :totalItems="5" />

		<routine routineId="4" routineName="routine four" :totalItems="5" />

		<routine routineId="5" routineName="routine five" :totalItems="5" />

		<routine routineId="6" routineName="routine six" :totalItems="5" />
	</div>
</template>
