<template>
  <div>
    <BaseListLayout v-if="$pagination"/>
    <Content v-else/>
    <SimpleNewsletter />

  </div>
</template>

<style src="prismjs/themes/prism-okaidia.css"></style>
