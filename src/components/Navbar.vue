<template>
	<header
		class="text-primary fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white px-8 py-4"
	>
		<!-- logo -->
		<router-link to="/" class="flex items-center"
			><img src="../assets/logo.svg" alt="Logo" class="w-18 mr-2 h-12"
		/></router-link>

		<!-- menu desktop -->
		<nav class="hidden flex-1 justify-center md:flex">
			<ul class="flex gap-6">
				<li v-for="link in navLinks" :key="link.path">
					<router-link
						:to="link.path"
						class="hover:border-primary inline-block border-b-2 border-transparent px-3 py-1 font-semibold transition duration-300"
						active-class="font-bold underline"
					>
						{{ link.name }}
					</router-link>
				</li>
			</ul>
		</nav>

		<!-- button masuk (desktop) -->
		<div class="hidden md:block">
			<a href="/login">
				<button
					class="bg-secondary rounded-full border-2 border-transparent px-6 py-2 font-semibold text-white"
				>
					Masuk
				</button>
			</a>
		</div>

		<!-- hamburger (mobile) -->
		<button @click="isOpen = !isOpen" class="focus:outline-none md:hidden">
			<Icon :icon="isOpen ? 'mdi:close' : 'mdi:menu'" width="32" height="32" />
		</button>
	</header>

	<!-- mobile menu -->
	<div v-if="isOpen" class="px-8 py-4 md:hidden">
		<ul class="flex flex-col gap-4">
			<li v-for="link in navLinks" :key="link.path">
				<router-link :to="link.path" class="block hover:underline" @click="isOpen = false">
					{{ link.name }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const navLinks = [
	{ name: "Appointments", path: "/appointments" },
	{ name: "Our Services", path: "/services" },
	{ name: "Gallery", path: "/gallery" },
	{ name: "Contact Us", path: "/contact" },
];

const isOpen = ref(false);
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
	transition: all 0.2s ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
