<template>
	<div class="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg">
		<!-- img -->
		<div class="h-48 w-full p-4">
			<div class="h-full w-full overflow-hidden rounded-xl">
				<img :src="image" :alt="title" class="h-full w-full object-cover" />
			</div>
		</div>

		<!-- contents -->
		<div class="flex flex-1 flex-col justify-between p-4">
			<div>
				<h3 class="mb-2 text-lg font-bold text-gray-800">
					{{ title }}
				</h3>
				<p class="text-sm text-gray-600">
					{{ desc }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	image: String,
	title: String,
	desc: String,
	link: String,
});
</script>

<style scoped></style>
