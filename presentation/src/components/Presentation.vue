<script setup lang="ts">
// Import any necessary components here
</script>

<template>
  <!-- Slajd 1: Tytuł prezentacji -->
  <section
    data-background-image="path/to/your/image.jpg"
    data-notes="Witam Państwa. Dzisiejsza prezentacja poświęcona jest środowiskom interaktywnym - systemom reagującym na działania użytkownika w czasie rzeczywistym, wykorzystywanym w najróżniejszych zastosowaniach od desktopowych GUI po interfejsy mózg-komputer (BCI)."
  >
    <h1>Środowiska interaktywne</h1>
    <p>Krystian Ogonowski, Illia Martusenko</p>
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
    data-notes="Środowiska interaktywne to systemy lub aplikacje umożliwiające dwustronną wymianę informacji między człowiekiem a komputerem. Komunikacja człowiek-komputer (HCI) to proces, w którym użytkownicy operują systemami komputerowymi za pomocą interfejsów(en.wikipedia.org). W praktyce środowisko interaktywne definiujemy jako „technologiczne środowisko reagujące na działania użytkownika” - może to być aplikacja internetowa z multimediami, środowisko VR lub system sterowania wyposażony w sensory, które umożliwiają dynamiczną reakcję na zachowanie użytkownika. Ich rola w HCI polega na ułatwieniu komunikacji i obustronnej wymiany informacji: środowiska interaktywne projektuje się tak, aby interakcja była naturalna, efektywna i dostosowana do potrzeb użytkownika."
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
    data-notes="Główne cechy to: szybkość reakcji (low latency), adaptacyjność do kontekstu użytkownika, multimodalność wejścia/wyjścia oraz sprzężenie zwrotne - wizualne, dźwiękowe, haptyczne czy nawet neuronalne."
  >
    <h2>Charakterystyka</h2>
    <h3>Główne cechy to:</h3> 
    <ul>
      <li>szybkość reakcji</li>
      <li>adaptacyjność do kontekstu użytkownika</li>
      <li>multimodalność wejścia/wyjścia</li> 
      <li>sprzężenie zwrotne - wizualne, dźwiękowe, haptyczne czy nawet neuronalne</li>
    </ul>
  </section>

  <!-- Slajd 5: Historia i ewolucja -->
  <section
    data-notes="    Lata 40. i 50.: Komputery były ogromne, kosztowne i dostępne jedynie dla wąskiej grupy specjalistów. Interakcja odbywała się przez karty perforowane, a odpowiedzi przychodziły z dużym opóźnieniem.
    Lata 60.: Pojawiły się pierwsze koncepcje interfejsów interaktywnych. Douglas Engelbart zaprezentował pierwszą mysz komputerową i pokazał, że użytkownik może wchodzić w dynamiczną interakcję z maszyną.
    Ivan Sutherland stworzył Sketchpad - jeden z pierwszych graficznych interfejsów użytkownika.
2. Era interfejsów tekstowych (lata 70.-80.)
    Konsola tekstowa (CLI) stała się standardem w środowiskach komputerowych. Użytkownik musiał znać komendy systemowe.
    UNIX i MS-DOS dominowały jako środowiska tekstowe.
    Interaktywność była ograniczona do wpisywania poleceń i oczekiwania na odpowiedź - nadal wymagała specjalistycznej wiedzy.
3. Graficzne interfejsy użytkownika (GUI) i komputery osobiste (lata 80.-90.)
    Przełom nastąpił wraz z rozwojem GUI - graficznych interfejsów użytkownika.
    Apple Macintosh (1984) wprowadził GUI na rynek masowy.
    Microsoft Windows upowszechnił środowiska z ikonami, oknami i kursorem myszy.
    Rozpoczęła się era desktopowych środowisk interaktywnych, dostępnych dla przeciętnego użytkownika.
4. Internet i środowiska sieciowe (lata 90.-2000)
    Dynamiczny rozwój Internetu stworzył nową kategorię - interaktywne środowiska webowe.
    Pojawiły się strony internetowe z elementami interaktywnymi, później uzupełnione o JavaScript, Flash, i AJAX.
    Aplikacje webowe zaczęły zastępować programy desktopowe, umożliwiając interakcję na odległość.
5. Era urządzeń mobilnych i aplikacji (2007-obecnie)
    Pojawienie się iPhone’a (2007) rozpoczęło erę środowisk interaktywnych opartych na dotyku.
    Interakcja stała się bardziej naturalna i intuicyjna - gesty, przesuwanie, zbliżanie, mowa.
    Rozwinęły się natychmiastowe powiadomienia, lokalizacja, rozpoznawanie twarzy, komendy głosowe (np. Siri, Google Assistant).
    Powstały środowiska mobilne, ubieralne (wearable) oraz rozproszone (ambient).
6. Nowoczesne i przyszłościowe środowiska (2020-)
    Środowiska rozszerzonej (AR) i wirtualnej rzeczywistości (VR) umożliwiają pełne zanurzenie użytkownika.
    Coraz większą rolę odgrywa multimodalność - łączenie głosu, gestów, mimiki, dotyku.
    Powstają środowiska współdzielone, gdzie wiele osób wchodzi w interakcję z systemem jednocześnie (np. VR Meeting Rooms).
    Rozwijają się neuronalne interfejsy (BCI - Brain-Computer Interfaces), które pozwalają na sterowanie systemami za pomocą fal mózgowych.
    Środowiska interaktywne stają się adaptacyjne, inteligentne i kontekstowe - dostosowujące się do zachowań użytkownika w czasie rzeczywistym."
  >
    <h2>Od tekstu do immersji</h2>
    <ul>
      <li>Lata 40.-50.: Ogromne komputery i karty perforowane</li>
      <li>Lata 60.: Douglas Engelbart zaprezentował pierwszą mysz komputerową</li>
      <li>Lata 70.-80.: Era interfejsów tekstowych</li> 
      <li>Lata 80.-90.: Rozwój GUI, Macintosh, Microsoft</li>
      <li>Lata 90.-2000: Interaktywne środowiska webowe</li>
      <li>2007-obecnie: Era urządzeń mobilnych i aplikacji</li>
      <li>2020-?: AR, VR, multimodalność, </li>
    </ul>
  </section>

  <!-- Slajd 6: GUI -->
  <section
    data-notes="Tradycyjne okienka, przyciski, menu i ikony na ekranie komputera czy urządzenia mobilnego. Użytkownicy komunikują się z systemem poprzez urządzenia wskazujące (mysz, touchpad) i widzą efekty w postaci elementów graficznych na ekranie."
  >
    <h2>Graficzne interfejsy użytkownika</h2>
    <p>
      GUI to pionier środowisk interaktywnych, gdzie użytkownik reaguje na
      ikony, menu i przyciski za pomocą myszy lub dotyku - przykład: Windows,
      macOS, aplikacje webowe.
    </p>
  </section>

  <!-- Slajd 7: Interfejsy dotykowe i haptyczne -->
  <section
    data-notes="Ekrany dotykowe (smartfony, tablety) oraz powierzchnie reagujące na dotyk (tablety graficzne, stoły dotykowe). Dotyk pozwala na intuicyjną kontrolę – przyciskanie, gesty (np. szczypnięcie, przesuwanie). Interfejsy haptyczne dostarczają także sprzężenia zwrotnego: np. wibracje w kontrolerach VR czy siły oporu w joystickach."
  >
    <h2>Dotyk fizyczny</h2>
    <p>
      Dotyk pozwala na bezpośrednią manipulację obiektami na ekranie. Haptyka
      (wibracje, siła oporu) dostarcza fizyczne sprzężenie zwrotne - kluczowe w
      smartfonach, tabletach i kontrolerach VR.
    </p>
  </section>

  <!-- Slajd 8: Interfejsy głosowe -->
  <section
    data-notes="Systemy rozpoznawania mowy i syntezy głosowej (np. asystenci wirtualni typu Siri, Alexa). Umożliwiają sterowanie urządzeniami i uzyskiwanie informacji poprzez naturalne polecenia słowne. Głosowe interfejsy czerpią korzyści z AI – system interpretuje mowę użytkownika i generuje odpowiedź w języku naturalnym."
  >
    <h2>Komendy słowne</h2>
    <p>
      Rozpoznawanie mowy i synteza głosu pozwalają na sterowanie i dialog z
      systemem bez użycia rąk - przykłady: Siri, Alexa, Asystent Google.
    </p>
  </section>

  <!-- Slajd 9: Interfejsy gestów -->
  <section
    data-notes="Kamery śledzą ruch ciała i dłoni, tłumacząc gesty na polecenia. Przykłady to Microsoft Kinect czy Leap Motion - zastosowania od gier po kontrolę prezentacji bez dotyku."
  >
    <h2>Sterowanie ruchem</h2>
    <p>
      Kamery śledzą ruch ciała i dłoni, tłumacząc gesty na polecenia. Przykłady
      to Microsoft Kinect, Leap Motion lub Apple Vision Pro.
    </p>
  </section>

  <!-- Slajd 10: Virtual Reality (VR) -->
  <section
    data-notes="Środowiska immersyjne zanurzające użytkownika w wirtualnym świecie generowanym komputerowo. Użytkownik doświadcza iluzji „bycia wewnątrz” symulowanego otoczenia, korzystając z gogli VR i kontrolerów ruchu. VR znajduje zastosowanie w grach, szkoleniach i wizualizacjach – tworzy realistyczne symulacje całkowicie cyfrowego świata."
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
    data-notes="Nakładanie warstw wirtualnych na obraz rzeczywisty. Użytkownik widzi rzeczywisty świat w smartfonie lub przez okulary AR, a system dodaje do niego cyfrowe informacje (np. wskazówki, modele 3D). AR ułatwia wspomaganie pracy i nauki – np. instrukcje montażu nakładane na prawdziwy sprzęt czy objaśnienia podczas zwiedzania muzeum."
  >
    <h2>Rozszerzona rzeczywistość</h2>
    <p>
      AR nakłada warstwy informacji na obraz rzeczywisty - od filtrów w Snapchat
      po instrukcje montażu w smartfonie czy okulary HoloLens.
    </p>
  </section>

  <!-- Slajd 12: Mixed Reality (MR) -->
  <section
    data-notes="Zaawansowane połączenie świata rzeczywistego i wirtualnego. MR łączy elementy AR i VR, akcentując percepcję otoczenia. Urządzenia MR (np. Microsoft HoloLens lub Apple Vision Pro) wykorzystują czujniki czasu przelotu (ToF), akcelerometry i algorytmy mapowania przestrzeni, by integrować grafikę z fizycznym światem. Dzięki temu obiekty wirtualne mogą być przytwierdzane do rzeczywistych miejsc i współdziałać z prawdziwym otoczeniem."
  >
    <h2>Mieszana rzeczywistość</h2>
    <p>
      MR integruje obiekty wirtualne z otoczeniem fizycznym, wykorzystując
      czujniki ToF i mapowanie 3D, co pozwala na stałą obecność i interakcję w
      obu światach jednocześnie. Przykłady to Microsoft HoloLens lub Apple Vision Pro.
    </p>
  </section>

  <!-- Slajd 13: Interfejsy wielomodalne -->
  <section
    data-notes="Połączenie kilku trybów wejścia/wyjścia (np. głosu + dotyku + gestów). Dzięki multimodalności system może rozumieć bardziej złożone komendy i lepiej dostosować reakcję. Przykładowo smartfon może przyjmować jednocześnie komendy głosowe i dotykowe, a jego SI łączy te dane, by właściwie zareagować. Interfejsy wielomodalne zapewniają bardziej naturalną komunikację – np. użytkownik może mówić i wskazywać ekranem jednocześnie"
  >
    <h2>Połączenie modalności</h2>
    <p>
      Wielomodalność łączy dotyk, głos, gesty i inne źródła danych wejściowych,
      co zwiększa naturalność i precyzję sterowania, przykładowo w
      zaawansowanych systemach konferencyjnych lub asystentach cyfrowych.
    </p>
  </section>

  <!-- Slajd 14: Brain-Computer Interfaces (BCI) -->
  <section
    data-notes="Nowatorska technologia pozwalająca na komunikację bezpośrednio z mózgiem, np. poprzez elektrody EEG lub implanty. BCI odczytują sygnały mózgowe i konwertują je na polecenia komputerowe. Takie rozwiązania, choć wciąż eksperymentalne, zapowiadają możliwość sterowania urządzeniami za pomocą myśli"
  >
    <h2>Interfejsy mózg-komputer</h2>
    <p>
      BCI odczytują sygnały EEG lub ECoG, konwertując intencje użytkownika na
      komendy komputerowe - obiecujące narzędzie dla osób z
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

  <!-- Slajd 25: Przyszłość - AI i adaptacyjne interfejsy -->
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

  <!-- Slajd 26: Przyszłość - XR, BCI i wnioski -->
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
</template>

<style scoped>
body {
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
}

section {
    padding: 40px 20px;
    margin-bottom: 30px;
    background-color: rgb(234, 235, 230);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

h1, h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    color: #2c3e50;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

p {
    line-height: 1.6;
    font-size: 18px;
    margin-bottom: 15px;
}

ul {
    margin-left: 20px;
    font-size: 16px;
}

a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

</style>
