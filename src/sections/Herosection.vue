<template>
	<section class="relative h-screen w-full">
		<!-- bg mobile -->
		<img
			src="../assets/homepage/herosection/mobile.jpg"
			alt="Herosection Mobile"
			class="absolute inset-0 h-full w-full object-cover sm:hidden"
		/>

		<!-- bg desktop -->
		<img
			src="../assets/homepage/herosection/desktop.jpg"
			alt="Herosection Desktop"
			class="absolute inset-0 hidden h-full w-full object-cover sm:block"
		/>

		<!-- overlay -->
		<div class="absolute inset-0 bg-black/30"></div>

		<!-- desc -->
		<div
			class="absolute inset-0 ml-6 flex flex-col justify-center space-y-6 text-left text-white md:ml-16 lg:ml-16"
		>
			<h1 class="text-5xl font-bold leading-tight">Gentle Hands, Healthy Paws</h1>
			<p class="max-w-xl text-xl">
				From playful pups to curious cats, we offer personalized care that treats each animal like
				family.
			</p>
			<button class="h-16 w-60 rounded-full bg-secondary px-6 py-3 font-semibold text-white">
				Make an Appointment
			</button>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
