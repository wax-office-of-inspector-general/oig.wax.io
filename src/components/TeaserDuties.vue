<script setup>
const title = 'OIG Initiatives';

const duties = [
  {
    title: 'Network Guidelines',
    description:
      'Establishing the standards and foundations for an efficient and reliable network infrastructure through a unique heuristic approach.',
    href: '#'
  },
  {
    title: 'Auditing WAX Guilds',
    description:
      'Thorough evaluations of Guilds to ensure adherence to standards and positive contributions to the ecosystem.',
    href: '#'
  },
  {
    title: 'WAX Labs Reviews',
    description:
      "Assessment of WAX Labs projects for viability, impact, and alignment with the network's goals.",
    href: '#'
  },
  {
    title: 'Guild Advisory',
    description:
      'Sharing experience and offering guidance and expertise on specific domains, helping WAX Guilds make informed and strategic decisions.',
    href: '#'
  },
  {
    title: 'Token Economy Model Design',
    description:
      'Designing and maintaining the economic incentives and mechanisms within the blockchain network to ensure sustainability and fairness.',
    href: '#'
  },
  {
    title: 'Education and Awareness',
    description:
      'Continuously create educational resources and raise awareness around governance on WAX. Encouraging  an inclusive and open ground for collaboration.',
    href: '#'
  }
];
</script>

<template>
  <div class="container mx-auto py-12 lg:py-20">
    <div class="">
      <div class="mx-auto w-full">
        <h2 class="text-xl font-serif tracking-tight text-font">
          {{ title }}
        </h2>
        <div class="mt-6 flex flex-col gap-x-20 gap-y-20 lg:flex-row">
          <div class="w-full">
            <p class="mt-4 max-w-xl text-base leading-7">
              At the core of the WAX Network lies the OIG, a self-reliant entity
              dedicated to upholding the values of transparency, integrity, and
              perpetual growth within this thriving ecosystem. We operate on our
              own, offering fair and unbiased opinions in our assessments and
              advice. With a range of projects, we're here to make governance in
              the WAX Network even better, starting from the basics.
            </p>
          </div>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <dl
            v-for="duty in duties"
            :key="duty.title"
            class="flex flex-col gap-y-4 justify-start"
          >
            <dd class="text-base font-serif font-bold">
              <a href="{{ duty.href }}" class="text-font">
                {{ duty.title }}
              </a>
            </dd>
            <dt class="text-sm leading-7">
              {{ duty.description }}
            </dt>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
