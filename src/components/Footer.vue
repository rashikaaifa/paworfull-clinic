<template>
	<footer class="bg-secondary py-4 text-white">
		<div class="container mx-auto grid grid-cols-1 items-center gap-8 px-6 md:grid-cols-3">
			<!-- logo -->
			<div class="flex justify-center md:justify-start">
				<img src="../assets/logo.svg" alt="Logo" class="h-12 w-auto" />
			</div>

			<!-- copyright -->
			<div class="text-center text-sm leading-relaxed">
				<p>&copy; 2025 Rashika. All rights reserved.</p>
			</div>

			<!-- sosmed -->
			<div class="flex justify-center gap-4 md:justify-end">
				<a href="https://instagram.com" target="_blank" rel="noopener">
					<Icon icon="mdi:instagram" class="h-6 w-6 transition-colors hover:text-pink-400" />
				</a>
				<a href="https://youtube.com" target="_blank" rel="noopener">
					<Icon icon="mdi:youtube" class="h-6 w-6 transition-colors hover:text-sky-400" />
				</a>
				<a href="https://whatsapp.com" target="_blank" rel="noopener">
					<Icon icon="mdi:whatsapp" class="h-6 w-6 transition-colors hover:text-blue-500" />
				</a>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>
