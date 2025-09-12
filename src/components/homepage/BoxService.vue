<template>
	<div
		class="group relative h-48 overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:scale-105"
	>
		<!-- img -->
		<img :src="image" :alt="title" class="h-64 w-full object-cover" />

		<!-- overlay -->
		<div
			class="absolute inset-0 flex flex-col justify-end bg-black/0 p-4 transition duration-300 group-hover:bg-black/50"
		>
			<!-- title -->
			<h3 class="text-lg font-bold text-white transition-all duration-300 group-hover:mb-8">
				{{ title }}
			</h3>

			<!-- hover:button -->
			<div class="mt-2 opacity-0 transition duration-300 group-hover:opacity-100">
				<!-- desc -->
				<h3 class="text-lg font-bold text-white transition-all duration-300 group-hover:mb-8">
					{{ desc }}
				</h3>
				<RouterLink
					:to="link"
					class="inline-block rounded-lg bg-white px-3 py-1 text-sm font-medium text-black hover:bg-white"
				>
					Selengkapnya
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	image: string;
	title: string;
	desc: string;
	link: string;
}>();
</script>

<style scoped></style>
