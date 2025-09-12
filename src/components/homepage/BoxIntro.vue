<template>
	<div class="p-4 text-center">
		<h3 class="text-2xl font-bold text-gray-900">{{ title }}</h3>
		<h3 class="text-sm text-gray-600">{{ desc }}</h3>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	desc: string;
}>();
</script>
