import type Reveal from "reveal.js";
import type { InjectionKey, Ref } from "vue";

export const deckRefKey = Symbol() as InjectionKey<Ref<Reveal.Api | undefined>>;
