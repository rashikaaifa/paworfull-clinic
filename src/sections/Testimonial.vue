<template>
	<section class="p-6 md:p-12">
		<h2 class="mb-8 text-center text-3xl font-bold">What Our Clients Say</h2>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<!-- kiri 1 panjang -->
			<BoxTestimonial v-if="testimonials[0]" v-bind="testimonials[0]" class="h-full" />

			<!-- 2 tengah -->
			<div class="flex flex-col gap-6">
				<BoxTestimonial v-for="(t, i) in testimonials.slice(1, 3)" :key="'col2-' + i" v-bind="t" />
			</div>

			<!-- 2 kanan -->
			<div class="flex flex-col gap-6">
				<BoxTestimonial v-for="(t, i) in testimonials.slice(3, 5)" :key="'col3-' + i" v-bind="t" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import BoxTestimonial from "../components/homepage/BoxTestimonial.vue";
import DataTestimonials from "../components/homepage/DataTestimonials.json"

const testimonials = DataTestimonials.map((t) => ({
	...t,
}));
</script>
