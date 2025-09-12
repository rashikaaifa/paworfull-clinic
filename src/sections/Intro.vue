<template>
	<section class="w-full px-6 py-12 md:px-12 lg:px-12">
		<div class="flex flex-col items-center gap-12 md:flex-row">
			<!-- kiri -->
			<div class="flex-1 space-y-6 text-left">
				<h2 class="text-3xl font-bold md:text-4xl">About Us</h2>
				<p class="max-w-xl text-base text-gray-600 md:text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>

				<!-- data -->
				<div class="grid grid-cols-2 gap-6 md:gap-8">
					<BoxIntro v-for="(item, i) in intro" :key="i" :title="item.title" :desc="item.desc" />
				</div>
			</div>

			<!-- kanan -->
			<div class="flex-1">
				<img
					src="../assets/homepage/intro/mobile.jpg"
					alt="Team working"
					class="hidden aspect-square w-full rounded-xl object-cover shadow-lg md:block md:-ml-16 lg:-ml-12"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import BoxIntro from "../components/homepage/BoxIntro.vue";
import DataIntro from "../components/homepage/DataIntro.json";

const intro = DataIntro;
</script>
