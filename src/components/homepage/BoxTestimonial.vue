<template>
	<div class="rounded-xl border p-4 shadow-sm">
		<p class="text-gray-600">{{ messages }}</p>
		<h3 class="font-semibold">{{ name }}</h3>
		<h3 class="font-semibold">{{ status }}</h3>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	name: string;
	status: string;
	messages: string;
}>();
</script>
