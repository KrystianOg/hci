<script setup lang="ts">
// Import any necessary components here
</script>

<template>
  <!-- Sekcja 1: Wprowadzenie i entry survey (10 min) -->
  <section
    data-background-gradient="linear-gradient(to bottom right, #002147, #000000)"
    data-notes="Wprowadzenie do tematu prezentacji. Powitanie uczestników."
  >
    <h1 class="fragment fade-up">Środowiska Interaktywne</h1>
    <h3 class="fragment fade-up">Wprowadzenie</h3>
    <p class="fragment fade-up">
      Dzień dobry! Witam wszystkich na prezentacji o środowiskach
      interaktywnych.
    </p>
    <p class="fragment fade-up">
      Przez najbliższe 60–70 minut przejdziemy przez siedem kluczowych tematów.
    </p>
  </section>

  <section
    data-background-image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
    data-background-opacity="0.2"
    data-notes="Zadanie pytania o środowisko interaktywne."
  >
    <h2 class="fragment">Entry Survey</h2>
    <p class="fragment fade-up">
      Które środowisko interaktywne wykorzystujesz najczęściej?
    </p>
    <!-- TODO: Add interactive survey component -->
  </section>

  <!-- Sekcja 2: Wprowadzenie i definicje (12 min) -->
  <section
    data-background-gradient="linear-gradient(to bottom right, #1a237e, #000000)"
    data-notes="Wprowadzenie do definicji HCI."
  >
    <h2 class="fragment">Wprowadzenie</h2>
    <p class="fragment fade-up">Zacznijmy od pojęć...</p>
    <ul>
      <li class="fragment fade-up">
        Cel: zrozumienie pojęcia środowiska interaktywnego
      </li>
      <li class="fragment fade-up">
        Definicja HCI i rola relacji człowiek–komputer
      </li>
    </ul>
  </section>

  <section
    data-background-image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
    data-background-opacity="0.2"
    data-notes="Zadanie pytania o definicje środowiska interaktywnego."
  >
    <h2 class="fragment">Definicje</h2>
    <p class="fragment fade-up">
      Co najbardziej definiuje środowisko interaktywne?
    </p>
    <!-- TODO: Add quiz component -->
  </section>

  <section
    data-background-gradient="linear-gradient(to bottom right, #1a237e, #000000)"
    data-notes="Omówienie kontekstu HCI."
  >
    <h2 class="fragment">Kontekst HCI</h2>
    <ul>
      <li class="fragment fade-up">Znaczenie HCI w projektowaniu</li>
      <li class="fragment fade-up">
        Środowiska interaktywne jako narzędzie HCI
      </li>
      <li class="fragment fade-up">Krótka ewolucja GUI (desktop)</li>
    </ul>
  </section>

  <!-- Sekcja 3: Klasyfikacja środowisk (19:00–35:00) -->
  <section
    data-background-gradient="linear-gradient(to bottom right, #004d40, #000000)"
    data-notes="Wprowadzenie do klasyfikacji środowisk."
  >
    <h2 class="fragment">Klasyfikacja środowisk</h2>
    <ul>
      <li class="fragment fade-up">Graficzne interfejsy użytkownika (GUI)</li>
      <li class="fragment fade-up">Wirtualna rzeczywistość (VR)</li>
      <li class="fragment fade-up">Rozszerzona rzeczywistość (AR)</li>
      <li class="fragment fade-up">Mieszana rzeczywistość (MR)</li>
      <li class="fragment fade-up">Interfejsy dotykowe i haptyczne</li>
      <li class="fragment fade-up">Interfejsy głosowe</li>
      <li class="fragment fade-up">Interfejsy gestów</li>
      <li class="fragment fade-up">Interfejsy wielomodalne</li>
      <li class="fragment fade-up">Interfejsy neuronowe (BCI)</li>
    </ul>
  </section>

  <section
    data-background-image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
    data-background-opacity="0.2"
    data-notes="Zadanie pytania o skojarzenia z różnymi środowiskami."
  >
    <h2 class="fragment">Word Cloud</h2>
    <p class="fragment fade-up">
      Kreatywna przerwa: wpiszcie jedno słowo, które od razu kojarzy Wam się z:
    </p>
    <ul>
      <li class="fragment fade-up">Desktop</li>
      <li class="fragment fade-up">Web</li>
      <li class="fragment fade-up">Mobile</li>
    </ul>
    <!-- TODO: Add word cloud component -->
  </section>

  <section
    data-background-gradient="linear-gradient(to bottom right, #004d40, #000000)"
    data-notes="Omówienie środowisk desktopowych."
  >
    <h2 class="fragment">Desktopowe</h2>
    <ul>
      <li class="fragment fade-up">GUI oparte na oknach, menu, ikonach</li>
      <li class="fragment fade-up">Wejście klawiatura + myszka</li>
      <li class="fragment fade-up">
        Wyzwania: responsywność, dostępność, wielozadaniowość
      </li>
    </ul>
  </section>

  <section
    data-background-image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
    data-background-opacity="0.2"
    data-notes="Omówienie środowisk webowych."
  >
    <h2 class="fragment">Webowe</h2>
    <ul>
      <li class="fragment fade-up">
        Działają w przeglądarce – dowolny system operacyjny
      </li>
      <li class="fragment fade-up">Wysoka dostępność i łatwość dystrybucji</li>
      <li class="fragment fade-up">
        Mechanizmy: AJAX, Single-Page Applications w JS
      </li>
    </ul>
  </section>

  <section
    data-background-gradient="linear-gradient(to bottom right, #004d40, #000000)"
    data-notes="Omówienie środowisk mobilnych."
  >
    <h2 class="fragment">Mobilne</h2>
    <ul>
      <li class="fragment fade-up">Ekran dotykowy, gesty, wibracje</li>
      <li class="fragment fade-up">
        Małe ekrany → potrzeba uproszczonych interfejsów
      </li>
      <li class="fragment fade-up">
        Czujniki: GPS, akcelerometr – pozwalają na kontekstowe usługi
      </li>
    </ul>
  </section>

  <!-- Sekcja 4: Ubioralne i ambientowe (35:00–42:00) -->
  <section
    data-background-gradient="linear-gradient(to bottom right, #880e4f, #000000)"
    data-notes="Wprowadzenie do środowisk ubioralnych i ambientowych."
  >
    <h2 class="fragment">Ubioralne i ambientowe</h2>
    <p class="fragment fade-up">
      Przechodzimy teraz do środowisk ubioralnych i ambientowych – tam, gdzie
      technologia wnika jeszcze głębiej w nasze codzienne otoczenie.
    </p>
  </section>

  <section
    data-background-image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
    data-background-opacity="0.2"
    data-notes="Omówienie Ambient Intelligence."
  >
    <h2 class="fragment">Ambient Intelligence</h2>
    <ul>
      <li class="fragment fade-up">
        Inteligentne otoczenie reagujące na obecność użytkownika
      </li>
      <li class="fragment fade-up">
        Systemy wykorzystują czujniki, by dostosować oświetlenie, dźwięk czy
        temperaturę
      </li>
      <li class="fragment fade-up">
        Celem jest dyskretna, niemal niewidoczna interakcja
      </li>
    </ul>
  </section>

  <section
    data-background-gradient="linear-gradient(to bottom right, #880e4f, #000000)"
    data-notes="Omówienie kluczowych technologii."
  >
    <h2 class="fragment">Kluczowe technologie</h2>
    <ul>
      <li class="fragment fade-up">IoT – urządzenia połączone w sieć</li>
      <li class="fragment fade-up">
        Czujniki kontekstowe – ruchu, otoczenia, biometria
      </li>
      <li class="fragment fade-up">
        AI i uczenie maszynowe – analiza danych w czasie rzeczywistym
      </li>
    </ul>
  </section>

  <section
    data-background-image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
    data-background-opacity="0.2"
    data-notes="Omówienie wearables."
  >
    <h2 class="fragment">Wearables</h2>
    <ul>
      <li class="fragment fade-up">
        Smartwatche, opaski fitness, inteligentne ubrania
      </li>
      <li class="fragment fade-up">
        Przykład: monitorowanie tętna i adaptacja treningu
      </li>
      <li class="fragment fade-up">
        Wyzwanie: responsywność i integracja z pozostałymi systemami
      </li>
    </ul>
  </section>

  <!-- Sekcja 5: Środowiska współdzielone i kooperacyjne (42:00–50:00) -->
  <section
    data-background-gradient="linear-gradient(to bottom right, #bf360c, #000000)"
    data-notes="Wprowadzenie do środowisk współdzielonych."
  >
    <h2 class="fragment">Środowiska współdzielone i kooperacyjne</h2>
    <p class="fragment fade-up">
      Przejdźmy do środowisk współdzielonych – to przestrzenie, w których
      pracujemy razem, niezależnie od lokalizacji.
    </p>
  </section>

  <section
    data-background-image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
    data-background-opacity="0.2"
    data-notes="Omówienie synchroniczności i asynchroniczności."
  >
    <h2 class="fragment">Synchroniczność vs asynchroniczność</h2>
    <ul>
      <li class="fragment fade-up">
        Synchroniczna – wszyscy działamy w tym samym czasie (wideokonferencje,
        edycja live)
      </li>
      <li class="fragment fade-up">
        Asynchroniczna – dokumenty czy zadania, na które wracamy w różnym czasie
      </li>
    </ul>
  </section>

  <section
    data-background-gradient="linear-gradient(to bottom right, #bf360c, #000000)"
    data-notes="Omówienie przykładów narzędzi."
  >
    <h2 class="fragment">Przykłady narzędzi</h2>
    <ul>
      <li class="fragment fade-up">Dokumenty Google – wspólna edycja tekstu</li>
      <li class="fragment fade-up">
        Tablice online (Miro, FigJam) – burza mózgów na wspólnym canvasie
      </li>
      <li class="fragment fade-up">
        CVE – Collaborative Virtual Environments, np. przestrzenie VR do spotkań
      </li>
    </ul>
  </section>

  <section
    data-background-image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
    data-background-opacity="0.2"
    data-notes="Zadanie pytania do publiczności."
  >
    <h2 class="fragment">Pytanie do publiczności</h2>
    <p class="fragment fade-up">
      Z jakich narzędzi współpracy korzystacie na co dzień?
    </p>
    <!-- TODO: Add interactive component -->
  </section>

  <!-- Sekcja 6: Zasady projektowania interaktywnych środowisk (50:00–56:00) -->
  <section
    data-background-gradient="linear-gradient(to bottom right, #1b5e20, #000000)"
    data-notes="Wprowadzenie do zasad projektowania."
  >
    <h2 class="fragment">Zasady projektowania interaktywnych środowisk</h2>
    <p class="fragment fade-up">
      Przejdźmy do zasad projektowania, które stoją za każdą udaną interakcją.
    </p>
  </section>

  <section
    data-background-image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
    data-background-opacity="0.2"
    data-notes="Omówienie zasad ISO 9241-110."
  >
    <h2 class="fragment">ISO 9241-110: zasady dialogu</h2>
    <ul>
      <li class="fragment fade-up">
        Klarowność – interfejs mówi wprost, co robi i co można zrobić dalej
      </li>
      <li class="fragment fade-up">
        Przewidywalność – użytkownik wie, jak system zareaguje na jego działania
      </li>
      <li class="fragment fade-up">
        Możliwość odzyskiwania – łatwe cofanie błędów i anulowanie akcji
      </li>
    </ul>
  </section>

  <section
    data-background-gradient="linear-gradient(to bottom right, #1b5e20, #000000)"
    data-notes="Omówienie adaptacyjności i personalizacji."
  >
    <h2 class="fragment">Adaptacyjność i personalizacja</h2>
    <ul>
      <li class="fragment fade-up">
        Zmiana układu interfejsu w zależności od zadania
      </li>
      <li class="fragment fade-up">
        Rekomendacje, profile użytkowników, automatyczne tryby
      </li>
    </ul>
  </section>

  <section
    data-background-image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
    data-background-opacity="0.2"
    data-notes="Zadanie pytania do publiczności."
  >
    <h2 class="fragment">Dyskusja</h2>
    <p class="fragment fade-up">
      Która z tych zasad wydaje się Wam najtrudniejsza do wdrożenia i dlaczego?
    </p>
    <!-- TODO: Add interactive component -->
  </section>

  <!-- Sekcja 7: Podsumowanie i Exit Survey (56:00–65:00) -->
  <section
    data-background-gradient="linear-gradient(to bottom right, #4a148c, #000000)"
    data-notes="Podsumowanie prezentacji."
  >
    <h2 class="fragment">Podsumowanie</h2>
    <p class="fragment fade-up">
      Przypomnijmy: omówiliśmy siedem sekcji od definicji, przez klasyfikację,
      aż po zasady projektowania.
    </p>
  </section>

  <section
    data-background-image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
    data-background-opacity="0.2"
    data-notes="Omówienie kluczowych wniosków."
  >
    <h2 class="fragment">Kluczowe wnioski</h2>
    <ul>
      <li class="fragment fade-up">
        Każde środowisko ma unikalne wyzwania i technologie
      </li>
      <li class="fragment fade-up">
        Projektowanie musi uwzględniać kontekst i użytkownika
      </li>
      <li class="fragment fade-up">
        Interaktywność to proces ciągły, a nie jednorazowy wysiłek
      </li>
    </ul>
  </section>

  <section
    data-background-gradient="linear-gradient(to bottom right, #4a148c, #000000)"
    data-notes="Zadanie pytania o exit survey."
  >
    <h2 class="fragment">Exit Survey</h2>
    <p class="fragment fade-up">
      Które środowisko teraz wygląda dla Was najciekawiej?
    </p>
    <!-- TODO: Add interactive survey component -->
  </section>

  <section
    data-background-image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
    data-background-opacity="0.2"
    data-notes="Zakończenie prezentacji."
  >
    <h2 class="fragment">Pytania i zamknięcie</h2>
    <p class="fragment fade-up">
      Dziękuję za uwagę! Teraz czas na Wasze pytania i dyskusję.
    </p>
    <p class="fragment fade-up">
      Co Was najbardziej zainteresowało lub zaskoczyło?
    </p>
  </section>

  <section
    data-visibility="uncounted"
    data-background-gradient="linear-gradient(to bottom right, #263238, #000000)"
    data-notes="Bibliografia do prezentacji."
  >
    <h2 class="fragment">Bibliografia</h2>
    <ul>
      <li class="fragment fade-up"></li>
      <li class="fragment fade-up"></li>
      <li class="fragment fade-up"></li>
      <li class="fragment fade-up"></li>
    </ul>
  </section>
</template>

<style scoped>
/* Add some basic styling for fragments */
.fragment {
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease;
}

.fragment.visible {
  opacity: 1;
  visibility: visible;
}

/* Style for headings */
h1,
h2,
h3 {
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Style for lists */
ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin: 1em 0;
  padding: 0.5em;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  backdrop-filter: blur(5px);
}

/* Style for paragraphs */
p {
  font-size: 1.2em;
  line-height: 1.6;
  margin: 1em 0;
}
</style>
