<template>
	<section class="p-6">
		<h2 class="mb-6 text-2xl font-bold">Doctors</h2>

		<div class="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-6">
			<BoxDoctor
				v-for="(service, index) in services"
				:key="index"
				:image="service.image"
				:title="service.title"
				:desc="service.desc"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import BoxDoctor from '../components/homepage/BoxDoctor.vue';
import DataDoctors from '../components/homepage/DataDoctors.json';

const services = DataDoctors.map((s) => ({
	...s,
	image: new URL(`../assets/homepage/doctors/${s.image}`, import.meta.url).href,
}));
</script>

<style scoped></style>
