<template>
	<section class="space-y-6 p-6">
		<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
			<!-- title + desc -->
			<div>
				<h2 class="mb-4 text-3xl font-bold">Our Services</h2>
				<p class="leading-relaxed text-gray-600">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>

			<!-- 2 box -->
			<div class="grid grid-cols-2 gap-6">
				<BoxService
					v-for="(service, index) in services.slice(0, 2)"
					:key="'top-' + index"
					:image="service.image"
					:title="service.title"
					:desc="service.desc"
					:link="service.link"
				/>
			</div>
		</div>

		<!-- 4 box -->
		<div class="grid grid-cols-2 gap-6 md:grid-cols-4">
			<BoxService
				v-for="(service, index) in services.slice(2)"
				:key="'bottom-' + index"
				:image="service.image"
				:title="service.title"
				:desc="service.desc"
				:link="service.link"
			/>
		</div>
	</section>
</template>

<script setup>
import BoxService from "../components/homepage/BoxService.vue";
import DataServices from "../components/homepage/DataServices.json";

const services = DataServices.map((s) => ({
	...s,
	image: new URL(`../assets/homepage/services/${s.image}`, import.meta.url).href,
}));
</script>

<style scoped></style>
