<script setup lang="ts">
import Reveal from "reveal.js";
import { onMounted, onUnmounted, ref } from "vue";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "../assets/reveal.css";

const deckDivRef = ref<HTMLDivElement>();
const deckRef = ref<Reveal.Api>();

onMounted(() => {
  if (deckRef.value) return;

  deckRef.value = new Reveal(deckDivRef.value!, {
    transition: "slide",
  });

  deckRef.value.initialize();
});

onUnmounted(() => {
  try {
    if (deckRef.value) {
      deckRef.value.destroy();
      deckRef.value = undefined;
    }
  } catch {
    console.warn("Reveal.js destroy call failed.");
  }
});
</script>
<template>
  <div class="reveal" ref="deckDivRef">
    <div class="slides">
      <slot />
    </div>
  </div>
</template>
