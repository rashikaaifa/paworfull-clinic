<template>
	<section id="poster">
		<div class="p-6 md:p-12">
			<div class="relative aspect-[8/3] w-full overflow-hidden rounded-2xl shadow-xl">
				<!-- wrap -->
				<div
					class="flex h-full w-full transition-transform duration-700 ease-in-out"
					:style="{ transform: `translateX(-${currentPoster * 100}%)` }"
				>
					<div
						v-for="poster in posters"
						:key="poster.id"
						class="relative h-full w-full flex-shrink-0"
					>
						<img
							:src="poster.image"
							:alt="poster.alt"
							class="absolute inset-0 h-full w-full object-cover object-center"
						/>
					</div>
				</div>

				<!-- button previous -->
				<button
					@click="prevSlide"
					class="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-gray-100"
				>
					‹
				</button>

				<!-- button next -->
				<button
					@click="nextSlide"
					class="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-gray-100"
				>
					›
				</button>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";

const posters = ref([
	{
		id: 1,
		image: new URL("../assets/homepage/poster/poster1.jpg", import.meta.url).href,
		alt: "Poster 1",
	},
	{
		id: 2,
		image: new URL("../assets/homepage/poster/poster2.jpg", import.meta.url).href,
		alt: "Poster 2",
	},
	{
		id: 3,
		image: new URL("../assets/homepage/poster/poster3.jpg", import.meta.url).href,
		alt: "Poster 3",
	},
]);

const currentPoster = ref(0);

function nextSlide() {
	currentPoster.value = (currentPoster.value + 1) % posters.value.length;
}

function prevSlide() {
	currentPoster.value = (currentPoster.value - 1 + posters.value.length) % posters.value.length;
}
</script>
