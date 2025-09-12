<template>
	<section class="p-6 md:p-12">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<!-- title -->
			<div>
				<h2 class="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
			</div>

			<!-- contents -->
			<div class="space-y-4">
				<div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-200 pb-4">
					<!-- question -->
					<button
						@click="toggleFAQ(index)"
						class="flex w-full justify-between text-left text-lg font-medium text-gray-800 hover:text-primary focus:outline-none"
					>
						<span>{{ faq.question }}</span>
						<span>
							{{ openIndex === index ? "-" : "+" }}
						</span>
					</button>

					<!-- answer -->
					<transition name="fade">
						<p v-if="openIndex === index" class="mt-2 text-sm text-gray-600">
							{{ faq.answer }}
						</p>
					</transition>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";
import DataFaq from "../components/homepage/DataFaq.json";

const faqs = DataFaq;

const openIndex = ref(null);

function toggleFAQ(index) {
	openIndex.value = openIndex.value === index ? null : index;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
