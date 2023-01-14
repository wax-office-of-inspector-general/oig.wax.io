<script setup>
const faqs = [
  {
    question: "Can you answer a question a thousand times?",
    answer:
      "Why you shouldn't do it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. At vero eos et accusam et justo duo dolores et ea rebum."
  },
  {
    question: "Can you answer a question a thousand times?",
    answer:
      "Why you shouldn't do it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. At vero eos et accusam et justo duo dolores et ea rebum."
  },
  {
    question: "Can you answer a question a thousand times?",
    answer:
      "Why you shouldn't do it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. At vero eos et accusam et justo duo dolores et ea rebum."
  },
];
</script>
<template>
  <div class="bg-primary">
    <div class="mx-auto max-w-7xl py-16 px-6 lg:py-20 lg:px-8">
      <div class="lg:grid lg:grid-cols-3 gap-10 lg:gap-14">
        <div>
          <h2 class="text-lg font-bold font-serif tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <p class="mt-4 text-sm">
            Can’t find the answer you’re looking for? Reach out to our
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
              >Telegram Channel</a
            >
            team.
          </p>
        </div>
        <div class="mt-12 lg:col-span-2 lg:mt-0">
          <dl class="space-y-12">
            <div v-for="faq in faqs" :key="faq.question">
              <dt class="text-base font-serif font-bold leading-6 text-font">
                {{ faq.question }}
              </dt>
              <dd class="mt-2 text-sm text-font">{{ faq.answer }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
