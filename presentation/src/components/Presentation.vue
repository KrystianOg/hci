<script setup lang="ts">
import BibliographyItem from "../components/bibliography/Item.vue";
import { bibliography } from "./bibliography/content";
</script>

<template>
  <!-- Slajd 1: Tytuł prezentacji -->
  <section
    data-background-image="path/to/your/image.jpg"
    data-notes="Witam Państwa. Dzisiejsza prezentacja poświęcona jest środowiskom interaktywnym – systemom reagującym na działania użytkownika w czasie rzeczywistym, wykorzystywanym w najróżniejszych zastosowaniach od desktopowych GUI po interfejsy mózg–komputer (BCI)."
  >
    <h1>Środowiska interaktywne – pogłębiona analiza</h1>
    <p>Twoje imię i data</p>
  </section>

  <!-- Slajd 2: Agenda -->
  <section
    data-notes="Omówię: 1) definicję i cechy środowisk interaktywnych, 2) ich ewolucję, 3) szczegółową klasyfikację, 4) technologie, 5) wyzwania projektowe, 6) przykłady zastosowań, 7) kierunki rozwoju przyszłości."
  >
    <h2>Plan wystąpienia</h2>
    <ul>
      <li>Definicja i cechy środowisk interaktywnych</li>
      <li>Ewolucja</li>
      <li>Szczegółowa klasyfikacja</li>
      <li>Technologie</li>
      <li>Wyzwania projektowe</li>
      <li>Przykłady zastosowań</li>
      <li>Kierunki rozwoju przyszłości</li>
    </ul>
  </section>

  <!-- Slajd 3: Definicja środowisk interaktywnych -->
  <section
    data-notes="Środowisko interaktywne to każda platforma lub system umożliwiający dwukierunkową wymianę informacji między użytkownikiem a komputerem, gdzie reakcja systemu następuje w czasie rzeczywistym."
  >
    <h2>Co to są środowiska interaktywne?</h2>
    <p>
      Środowisko interaktywne to każda platforma lub system umożliwiający
      dwukierunkową wymianę informacji między użytkownikiem a komputerem, gdzie
      reakcja systemu następuje w czasie rzeczywistym.
    </p>
  </section>

  <!-- Slajd 4: Kluczowe cechy -->
  <section
    data-notes="Główne cechy to: szybkość reakcji (low latency), adaptacyjność do kontekstu użytkownika, multimodalność wejścia/wyjścia oraz sprzężenie zwrotne – wizualne, dźwiękowe, haptyczne czy nawet neuronalne."
  >
    <h2>Charakterystyka</h2>
    <p>
      Główne cechy to: szybkość reakcji (low latency), adaptacyjność do
      kontekstu użytkownika, multimodalność wejścia/wyjścia oraz sprzężenie
      zwrotne – wizualne, dźwiękowe, haptyczne czy nawet neuronalne.
    </p>
  </section>

  <!-- Slajd 5: Historia i ewolucja -->
  <section
    data-notes="Początki sięgają terminali tekstowych lat 60. i 70., przez graficzne pulpity (GUI) lat 80., aż do dziś, gdy mówimy o VR, AR i interakcjach neuronalnych – każde nowe medium rozszerza zakres możliwości interakcji."
  >
    <h2>Od tekstu do immersji</h2>
    <p>
      Początki sięgają terminali tekstowych lat 60. i 70., przez graficzne
      pulpity (GUI) lat 80., aż do dziś, gdy mówimy o VR, AR i interakcjach
      neuronalnych – każde nowe medium rozszerza zakres możliwości interakcji.
    </p>
  </section>

  <!-- Slajd 6: GUI -->
  <section
    data-notes="GUI to pionier środowisk interaktywnych, gdzie użytkownik reaguje na ikony, menu i przyciski za pomocą myszy lub dotyku – przykład: Windows, macOS, aplikacje webowe."
  >
    <h2>Graficzne interfejsy użytkownika</h2>
    <p>
      GUI to pionier środowisk interaktywnych, gdzie użytkownik reaguje na
      ikony, menu i przyciski za pomocą myszy lub dotyku – przykład: Windows,
      macOS, aplikacje webowe.
    </p>
  </section>

  <!-- Slajd 7: Interfejsy dotykowe i haptyczne -->
  <section
    data-notes="Dotyk pozwala na bezpośrednią manipulację obiektami na ekranie. Haptyka (wibracje, siła oporu) dostarcza fizyczne sprzężenie zwrotne – kluczowe w smartfonach, tabletach i kontrolerach VR."
  >
    <h2>Dotyk fizyczny</h2>
    <p>
      Dotyk pozwala na bezpośrednią manipulację obiektami na ekranie. Haptyka
      (wibracje, siła oporu) dostarcza fizyczne sprzężenie zwrotne – kluczowe w
      smartfonach, tabletach i kontrolerach VR.
    </p>
  </section>

  <!-- Slajd 8: Interfejsy głosowe -->
  <section
    data-notes="Rozpoznawanie mowy i synteza głosu pozwalają na sterowanie i dialog z systemem bez użycia rąk – przykłady: Siri, Alexa, Asystent Google."
  >
    <h2>Komendy słowne</h2>
    <p>
      Rozpoznawanie mowy i synteza głosu pozwalają na sterowanie i dialog z
      systemem bez użycia rąk – przykłady: Siri, Alexa, Asystent Google.
    </p>
  </section>

  <!-- Slajd 9: Interfejsy gestów -->
  <section
    data-notes="Kamery śledzą ruch ciała i dłoni, tłumacząc gesty na polecenia. Przykłady to Microsoft Kinect czy Leap Motion – zastosowania od gier po kontrolę prezentacji bez dotyku."
  >
    <h2>Sterowanie ruchem</h2>
    <p>
      Kamery śledzą ruch ciała i dłoni, tłumacząc gesty na polecenia. Przykłady
      to Microsoft Kinect czy Leap Motion – zastosowania od gier po kontrolę
      prezentacji bez dotyku.
    </p>
  </section>

  <!-- Slajd 10: Virtual Reality (VR) -->
  <section
    data-notes="VR tworzy całkowicie cyfrowe środowisko immersyjne za pomocą gogli i kontrolerów ruchu, stosowane w grach, szkoleniach symulacyjnych i wizualizacjach architektonicznych."
  >
    <h2>Wirtualna rzeczywistość</h2>
    <p>
      VR tworzy całkowicie cyfrowe środowisko immersyjne za pomocą gogli i
      kontrolerów ruchu, stosowane w grach, szkoleniach symulacyjnych i
      wizualizacjach architektonicznych.
    </p>
  </section>

  <!-- Slajd 11: Augmented Reality (AR) -->
  <section
    data-notes="AR nakłada warstwy informacji na obraz rzeczywisty – od filtrów w Snapchat po instrukcje montażu w smartfonie czy okulary HoloLens."
  >
    <h2>Rozszerzona rzeczywistość</h2>
    <p>
      AR nakłada warstwy informacji na obraz rzeczywisty – od filtrów w Snapchat
      po instrukcje montażu w smartfonie czy okulary HoloLens.
    </p>
  </section>

  <!-- Slajd 12: Mixed Reality (MR) -->
  <section
    data-notes="MR integruje obiekty wirtualne z otoczeniem fizycznym, wykorzystując czujniki ToF i mapowanie 3D, co pozwala na stałą obecność i interakcję w obu światach jednocześnie."
  >
    <h2>Mieszana rzeczywistość</h2>
    <p>
      MR integruje obiekty wirtualne z otoczeniem fizycznym, wykorzystując
      czujniki ToF i mapowanie 3D, co pozwala na stałą obecność i interakcję w
      obu światach jednocześnie.
    </p>
  </section>

  <!-- Slajd 13: Interfejsy wielomodalne -->
  <section
    data-notes="Wielomodalność łączy dotyk, głos, gesty i inne źródła danych wejściowych, co zwiększa naturalność i precyzję sterowania, przykładowo w zaawansowanych systemach konferencyjnych lub asystentach cyfrowych."
  >
    <h2>Połączenie modalności</h2>
    <p>
      Wielomodalność łączy dotyk, głos, gesty i inne źródła danych wejściowych,
      co zwiększa naturalność i precyzję sterowania, przykładowo w
      zaawansowanych systemach konferencyjnych lub asystentach cyfrowych.
    </p>
  </section>

  <!-- Slajd 14: Brain–Computer Interfaces (BCI) -->
  <section
    data-notes="BCI odczytują sygnały EEG lub ECoG, konwertując intencje użytkownika na komendy komputerowe – obiecujące narzędzie dla osób z niepełnosprawnościami oraz nowych form sterowania myślami."
  >
    <h2>Interfejsy mózg–komputer</h2>
    <p>
      BCI odczytują sygnały EEG lub ECoG, konwertując intencje użytkownika na
      komendy komputerowe – obiecujące narzędzie dla osób z
      niepełnosprawnościami oraz nowych form sterowania myślami.
    </p>
  </section>

  <!-- Slajd 15: Technologie sensorów -->
  <section
    data-notes="Kluczowe sensory to kamery, mikrofony, akcelerometry, żyroskopy, ToF, a także sensory biologiczne (tętno, EEG). Dzięki miniaturyzacji i niskim kosztom są wszechobecne w urządzeniach mobilnych i IoT."
  >
    <h2>Czujniki w interakcjach</h2>
    <p>
      Kluczowe sensory to kamery, mikrofony, akcelerometry, żyroskopy, ToF, a
      także sensory biologiczne (tętno, EEG). Dzięki miniaturyzacji i niskim
      kosztom są wszechobecne w urządzeniach mobilnych i IoT.
    </p>
  </section>

  <!-- Slajd 16: Silniki i oprogramowanie -->
  <section
    data-notes="Środowiska interaktywne często buduje się na silnikach Unity, Unreal Engine czy WebGL. Rozpoznawanie mowy/obrazu i AI (ML/DL) analizują dane w czasie rzeczywistym, dostosowując interakcję do użytkownika."
  >
    <h2>Platformy i algorytmy</h2>
    <p>
      Środowiska interaktywne często buduje się na silnikach Unity, Unreal
      Engine czy WebGL. Rozpoznawanie mowy/obrazu i AI (ML/DL) analizują dane w
      czasie rzeczywistym, dostosowując interakcję do użytkownika.
    </p>
  </section>

  <!-- Slajd 17: Architektura systemów -->
  <section
    data-notes="Współczesne systemy wykorzystują streaming danych, edge computing i chmurę do synchronizacji stanów użytkownika pomiędzy wieloma urządzeniami, zapewniając spójne środowisko interaktywne."
  >
    <h2>Strumienie danych i chmura</h2>
    <p>
      Współczesne systemy wykorzystują streaming danych, edge computing i chmurę
      do synchronizacji stanów użytkownika pomiędzy wieloma urządzeniami,
      zapewniając spójne środowisko interaktywne.
    </p>
  </section>

  <!-- Slajd 18: Ergonomia -->
  <section
    data-notes="Projektowanie musi uwzględniać masę sprzętu (gogle, kontrolery), kąt widzenia i łatwość obsługi, by uniknąć zmęczenia mięśni, bólu karku czy oczu przy długotrwałej pracy."
  >
    <h2>Fizyczny komfort</h2>
    <p>
      Projektowanie musi uwzględniać masę sprzętu (gogle, kontrolery), kąt
      widzenia i łatwość obsługi, by uniknąć zmęczenia mięśni, bólu karku czy
      oczu przy długotrwałej pracy.
    </p>
  </section>

  <!-- Slajd 19: Użyteczność -->
  <section
    data-notes="Interfejsy powinny być proste i przewidywalne. Testy z użytkownikami (cognitive walkthrough, usability testing) pomagają wykryć błędy na etapie prototypów."
  >
    <h2>Intuicyjność i spójność</h2>
    <p>
      Interfejsy powinny być proste i przewidywalne. Testy z użytkownikami
      (cognitive walkthrough, usability testing) pomagają wykryć błędy na etapie
      prototypów.
    </p>
  </section>

  <!-- Slajd 20: Dostępność -->
  <section
    data-notes="Uwzględniamy potrzeby osób z niepełnosprawnościami: napisy, alternatywne sterowanie, kontrast, skalowanie czcionek zgodnie z wytycznymi WCAG."
  >
    <h2>Dla wszystkich użytkowników</h2>
    <p>
      Uwzględniamy potrzeby osób z niepełnosprawnościami: napisy, alternatywne
      sterowanie, kontrast, skalowanie czcionek zgodnie z wytycznymi WCAG.
    </p>
  </section>

  <!-- Slajd 21: Prywatność i bezpieczeństwo -->
  <section
    data-notes="Interakcje generują dane biometryczne i gramatyczne. Konieczne są mechanizmy anonimizacji, szyfrowanie i jasne polityki prywatności dla użytkowników."
  >
    <h2>Ochrona danych użytkownika</h2>
    <p>
      Interakcje generują dane biometryczne i gramatyczne. Konieczne są
      mechanizmy anonimizacji, szyfrowanie i jasne polityki prywatności dla
      użytkowników.
    </p>
  </section>

  <!-- Slajd 22: Zastosowania edukacyjne -->
  <section
    data-notes="Wirtualne laboratoria i modele 3D w AR wspierają zrozumienie trudnych konceptów, zwiększają motywację uczniów i redukują zagrożenia związane z eksperymentami."
  >
    <h2>Nauka w VR/AR</h2>
    <p>
      Wirtualne laboratoria i modele 3D w AR wspierają zrozumienie trudnych
      konceptów, zwiększają motywację uczniów i redukują zagrożenia związane z
      eksperymentami.
    </p>
  </section>

  <!-- Slajd 23: Zastosowania medyczne i symulatory -->
  <section
    data-notes="Symulatory VR trenują pilotów i chirurgów w realistycznych warunkach. AR wspiera rehabilitację, dostarczając instrukcji wizualnych i haptycznych w czasie rzeczywistym."
  >
    <h2>Szkolenia i rehabilitacja</h2>
    <p>
      Symulatory VR trenują pilotów i chirurgów w realistycznych warunkach. AR
      wspiera rehabilitację, dostarczając instrukcji wizualnych i haptycznych w
      czasie rzeczywistym.
    </p>
  </section>

  <!-- Slajd 24: Zastosowania przemysł i IoT -->
  <section
    data-notes="Interaktywne pulpity operatorskie i aplikacje AR w serwisie maszyn pozwalają na zdalne wsparcie i diagnostykę. IoT reaguje na obecność pracowników, optymalizując procesy produkcyjne."
  >
    <h2>Przemysł 4.0</h2>
    <p>
      Interaktywne pulpity operatorskie i aplikacje AR w serwisie maszyn
      pozwalają na zdalne wsparcie i diagnostykę. IoT reaguje na obecność
      pracowników, optymalizując procesy produkcyjne.
    </p>
  </section>

  <!-- Slajd 25: Przyszłość – AI i adaptacyjne interfejsy -->
  <section
    data-notes="AI pozwala na dynamiczne dostosowywanie układu i treści interfejsu do zachowań użytkownika, a modele generatywne mogą prowadzić kontekstowy dialog w multimodalnych środowiskach."
  >
    <h2>Sztuczna inteligencja</h2>
    <p>
      AI pozwala na dynamiczne dostosowywanie układu i treści interfejsu do
      zachowań użytkownika, a modele generatywne mogą prowadzić kontekstowy
      dialog w multimodalnych środowiskach.
    </p>
  </section>

  <!-- Slajd 26: Przyszłość – XR, BCI i wnioski -->
  <section
    data-notes="XR i metaverse rozszerzą skalę immersji, a BCI wprowadzą sterowanie myślami. Łączność 5G i edge computing zredukują opóźnienia, otwierając nowe możliwości dla środowisk interaktywnych."
  >
    <h2>Nowe horyzonty</h2>
    <p>
      XR i metaverse rozszerzą skalę immersji, a BCI wprowadzą sterowanie
      myślami. Łączność 5G i edge computing zredukują opóźnienia, otwierając
      nowe możliwości dla środowisk interaktywnych.
    </p>
  </section>
  <section>
    <section class="bibliography">
      <h2 class="bibliography__title">Bibliografia</h2>
      <ul class="bibliography__list">
        <BibliographyItem
          v-for="(entry, id) in bibliography.slice(0, 7)"
          :key="entry.title ?? id.toString()"
          :entry="entry"
        />
      </ul>
    </section>
    <section class="bibliography">
      <h2 class="bibliography__title">Bibliografia</h2>
      <ul class="bibliography__list">
        <BibliographyItem
          v-for="(entry, id) in bibliography.slice(8, 15)"
          :key="entry.title ?? id.toString()"
          :entry="entry"
        />
      </ul>
    </section>
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
  color: #000;
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
