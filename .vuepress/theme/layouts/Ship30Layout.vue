<template>
  <div>
    <div>
        <h1>Ship30for30 Atomic Essays</h1>
        <p style="font-size: 20px;"> I onboarded the online writing voyage <a href="http://ship30for30.com/" target="_blank">Ship30for30</a> in August'21 to get better at writing.
            Although I got shipwrecked after Day 22, it was a great experience. I learned a lot of new stuff,
            met some new people and explored the world of online writing up-close.

            This page contains all my atomic essays from that journey in both image and text version.
        </p>

    </div>
    <BaseListLayout v-if="$pagination" />
    <Content v-else />
    <SimpleNewsletter />
  </div>
</template>

<style src="prismjs/themes/prism-okaidia.css"></style>
