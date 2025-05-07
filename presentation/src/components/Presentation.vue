<script setup lang="ts">
import BibliographyItem from "../components/bibliography/Item.vue";
import { bibliography } from "./bibliography/content";
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
      <li>
        sprzężenie zwrotne - wizualne, dźwiękowe, haptyczne czy nawet neuronalne
      </li>
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
      <li>
        Lata 60.: Douglas Engelbart zaprezentował pierwszą mysz komputerową
      </li>
      <li>Lata 70.-80.: Era interfejsów tekstowych</li>
      <li>Lata 80.-90.: Rozwój GUI, Macintosh, Microsoft</li>
      <li>Lata 90.-2000: Interaktywne środowiska webowe</li>
      <li>2007-obecnie: Era urządzeń mobilnych i aplikacji</li>
      <li>2020-?: AR, VR, multimodalność,</li>
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
      obu światach jednocześnie. Przykłady to Microsoft HoloLens lub Apple
      Vision Pro.
    </p>
  </section>

  <!-- Slajd 13: Interfejsy wielomodalne -->
  <section>
    <h2>Połączenie modalności</h2>
    <p>
      Wielomodalność łączy dotyk, głos, gesty i inne źródła danych wejściowych,
      co zwiększa naturalność i precyzję sterowania, przykładowo w
      zaawansowanych systemach konferencyjnych lub asystentach cyfrowych.
    </p>
    <aside class="notes">
      Połączenie kilku trybów wejścia/wyjścia (np. głosu + dotyku + gestów).
      Dzięki multimodalności system może rozumieć bardziej złożone komendy i
      lepiej dostosować reakcję. Przykładowo smartfon może przyjmować
      jednocześnie komendy głosowe i dotykowe, a jego SI łączy te dane, by
      właściwie zareagować. Interfejsy wielomodalne zapewniają bardziej
      naturalną komunikację – np. użytkownik może mówić i wskazywać ekranem
      jednocześnie
    </aside>
  </section>

  <!-- Slajd 14: Brain-Computer Interfaces (BCI) -->
  <section>
    <h2>Interfejsy mózg-komputer</h2>
    <p>
      BCI odczytują sygnały EEG lub ECoG, konwertując intencje użytkownika na
      komendy komputerowe - obiecujące narzędzie dla osób z
      niepełnosprawnościami oraz nowych form sterowania myślami.
    </p>
    <aside class="notes">
      Zacznijmy od podstawowego pytania: czym właściwie jest interfejs
      mózg–komputer? W najprostszym ujęciu BCI to system umożliwiający
      bezpośrednią komunikację między ośrodkowym układem nerwowym a maszyną,
      pomijając tradycyjne urządzenia wejścia, takie jak klawiatura czy mysz. W
      praktyce oznacza to, że myśli lub intencje użytkownika są odczytywane z
      sygnałów neuronalnych i tłumaczone na konkretne komendy komputerowe,
      pozwalając na sterowanie kursorem, protezą czy nawet wirtualnym obiektem
      za pomocą samego umysłu Wikipedia .

      <p>
        Technicznie wyróżniamy dwie główne kategorie BCI: Nieinwazyjne, oparte
        na elektroencefalografii (EEG). Elektrody umieszczone na skórze czaszki
        rejestrują zmiany potencjałów elektrycznych wywołanych aktywnością
        neuronalną.
      </p>
      <p>
        Inwazyjne, wykorzystujące elektrody ECoG (electrocorticography) lub
        implanty głęboko mózgowe. Elektrody te są osadzone bezpośrednio na korze
        mózgowej lub w jej tkance, co znacząco poprawia jakość sygnału i
        precyzję odczytu, ale wymaga ingerencji chirurgicznej.
      </p>
      <p>
        Przetwarzanie sygnałów, filtrowanie zakłóceń, wyodrębnienie
        charakterystycznych wzorców (np. fala alfa, potencjał P300 czy wzorce
        związane z wyobrażeniem ruchu). Potem algorytmy uczenia maszynowego
        klasyfikują te wzorce by przypisać im znaczenie ("użytkownik chce
        przesunąć kursor w lewo"). Na końcu interfejs wykonuje komendę w
        systemie docelowym
      </p>
      <p>
        Przykładowe zastosowania BCI już dziś otwierają zupełnie nowe
        możliwości: Rehabilitacja i wsparcie osób z niepełnosprawnościami:
        Pacjenci po udarze lub z porażeniem czterokończynowym uczą się
        kontrolować wózki inwalidzkie, protezy czy kursory na ekranie za pomocą
        samej wyobraźni ruchu. Badania pokazują, że nieinwazyjne EEG–BCI mogą
        poprawiać funkcje motoryczne w terapii post-udarowej Wikipedia .
      </p>
      <p>
        Zaawansowane prototypy inwazyjne: Stentrody („stentrode”), czyli
        ultracienkie elektrody wszczepiane do naczyń krwionośnych mózgu,
        pozwoliły wstępnie przywrócić pacjentom z ALS (stwardnienie zanikowe
        boczne) kontrolę nad komputerem bez konieczności otwartej operacji 
      </p>

      <p>
        pominąć Interfejsy rozrywkowe i badania naukowe: Choć na razie bardziej
        jako ciekawostka, komercyjne systemy EEG do gier („g.MOBIlab”) pokazują,
        że sterowanie myślami staje się coraz bardziej dostępne także poza
        laboratoriami WIRED .
      </p>
      <p>
        Wyzwania: przed BCI są jednak spore: Jakość sygnału i artefakty: EEG
        łatwo zakłócić ruchem czy mruganiem, a ECoG wymaga bezpiecznego
        umieszczenia elektrod na mózgu. Trening użytkownika: Wiele systemów
        wymaga, żeby użytkownik uczył się generować wyraźne wzorce fal mózgowych
        – proces ten może trwać tygodnie. Prywatność i etyka: Bezpośredni odczyt
        aktywności mózgowej rodzi pytania o ochronę najbardziej intymnych danych
        użytkownika.
      </p>
    </aside>
  </section>

  <!-- Slajd 15: Technologie sensorów -->
  <section>
    <h2>Czujniki w interakcjach</h2>
    <p>
      Kluczowe sensory to kamery, mikrofony, akcelerometry, żyroskopy, ToF, a
      także sensory biologiczne (tętno, EEG). Dzięki miniaturyzacji i niskim
      kosztom są wszechobecne w urządzeniach mobilnych i IoT.
    </p>
    <aside class="notes">
      <p>
        Zacznijmy od ogólnego spojrzenia na sensory jako „zmysły” urządzeń
        interaktywnych. Czujniki zbierają informacje z otoczenia lub samego
        użytkownika i przekształcają je na sygnały cyfrowe, które system może
        interpretować. Ich miniaturyzacja i spadek cen sprawiły, że dziś
        praktycznie każdy smartfon, tablet czy zegarek fitness to zaawansowana
        platforma interaktywna – wszechobecne kamery, mikrofony, akcelerometry
        czy żyroskopy to „wyposażenie standardowe” urządzeń mobilnych i
        Internetu Rzeczy .
      </p>
      <p>
        Kamery i mikrofony to podstawowe sensory multimodalne. Kamery rejestrują
        obraz i ruch, umożliwiając śledzenie gestów (np. Microsoft Kinect) oraz
        analizę twarzy i mimiki w aplikacjach AR/VR. Mikrofony pozwalają na
        rozpoznawanie dźwięku i mowy, stanowiąc bazę dla asystentów głosowych
        typu Siri czy Alexa.
      </p>
      <p>
        Inercyjne czujniki ruchu – akcelerometry i żyroskopy – mierzą
        przyspieszenie i obrót urządzenia w trzech osiach. Ich połączenie w
        jednej jednostce IMU (Inertial Measurement Unit) daje sześć stopni
        swobody (6DOF), co pozwala m.in. na precyzyjne śledzenie ruchów
        smartfona czy kontrolera VR w przestrzeni . Dzięki temu wykonujemy gesty
        szczypania, obracania czy machnięcia, a system natychmiast reaguje,
        przekładając je na akcje na ekranie.
      </p>
      <p>
        Czujniki czasu przelotu (ToF) to kamery głębokościowe, które mierzą czas
        powrotu odbitego światła, tworząc trójwymiarową mapę otoczenia. To
        kluczowe w zaawansowanych aplikacjach AR i MR – pozwalają
        „przytwierdzić” wirtualne obiekty do rzeczywistych powierzchni i
        utrzymać je stabilnie w przestrzeni .
      </p>
      <p>
        Coraz częściej spotykamy także sensory biologiczne: czujniki tętna w
        smartwatchach monitorują puls użytkownika, a elektrody EEG w prototypach
        BCI rejestrują aktywność mózgu. Te ostatnie mogą zasilać adaptacyjne
        systemy, które na podstawie stanu fizjologicznego dobierają odpowiednie
        treści lub poziom trudności zadania.
      </p>
      <p>
        [Optional] Dlaczego to ważne? Naturalność interakcji: Dzięki
        multimodalnym sensorom systemy reagują na ruch, dotyk, głos i stan
        fizjologiczny, co przybliża je do naturalnego, ludzkiego sposobu
        komunikacji. Dostępność: Tanie, wbudowane czujniki umożliwiają tworzenie
        interaktywnych rozwiązań nawet w małych urządzeniach IoT. Skalowalność:
        Jedna platforma może być rozbudowana o kolejne sensory – od prostej
        kamery po zaawansowany zestaw EMG czy EEG – dostosowując się do potrzeb
        aplikacji, od rozrywki po medycynę.
      </p>
    </aside>
  </section>

  <!-- Slajd 16: Silniki i oprogramowanie -->
  <section>
    <h2>Platformy i algorytmy</h2>
    <p>
      Środowiska interaktywne często buduje się na silnikach Unity, Unreal
      Engine czy WebGL. Rozpoznawanie mowy/obrazu i AI (ML/DL) analizują dane w
      czasie rzeczywistym, dostosowując interakcję do użytkownika.
    </p>
    <aside class="notes">
      <p>
        Wprowadzenie: Środowiska interaktywne to w dużej mierze oprogramowanie,
        a dokładniej — silniki i biblioteki, które „napędzają” interakcję. W tej
        części przyjrzymy się trzem filarom: silnikom 3D (Unity, Unreal Engine),
        WebGL jako technologii przeglądarkowej oraz algorytmom AI/ML stosowanym
        w czasie rzeczywistym do analizy mowy, obrazu i zachowań użytkownika.
      </p>
      <p>
        1. Silniki 3D: Unity i Unreal Engine Unity to najpopularniejszy silnik
        wykorzystywany nie tylko w grach, ale także w aplikacjach AR/VR oraz
        symulacjach przemysłowych. Według danych z 2020 roku, Unity napędza
        około 60 % treści AR i VR na rynku, a 90 % aplikacji na platformie
        HoloLens czy Samsung Gear VR Wikipedia . Unreal Engine słynie z
        zaawansowanej grafiki i realistycznego oświetlenia (system Lumen).
        Umożliwia tworzenie immersyjnych doświadczeń w wysokiej rozdzielczości,
        wykorzystywanych w produkcjach AAA, wizualizacjach architektonicznych i
        symulatorach szkoleniowych Unreal Engine .
      </p>
      <p>
        2. WebGL: interaktywność w przeglądarce WebGL to API JavaScript
        pozwalające na renderowanie grafiki 3D bezpośrednio w przeglądarce, bez
        wtyczek. Umożliwia budowę prostszych środowisk interaktywnych dostępnych
        na dowolnym urządzeniu z przeglądarką. Przykłady: interaktywne
        wizualizacje danych, małe gry edukacyjne czy konfiguratory produktów
        online (samochody, buty - nike)
      </p>
      <p>
        3. Algorytmy AI/ML w czasie rzeczywistym Rozpoznawanie mowy: silniki
        takie jak Google Speech-to-Text lub otwarte biblioteki (DeepSpeech)
        przetwarzają strumień audio na tekst w locie, co umożliwia interakcję
        głosową w aplikacjach Unity/Unreal czy WebGL. Rozpoznawanie obrazu:
        modele konwolucyjnych sieci neuronowych (CNN) np. MobileNet, uruchamiane
        lokalnie na GPU/CPU lub w chmurze, potrafią identyfikować obiekty, gesty
        lub twarze użytkownika.
      </p>
      <p>
        Unity ML-Agents: zestaw narzędzi do trenowania agentów w środowiskach
        Unity przy użyciu uczenia ze wzmocnieniem i uczenia Imitacyjnego.
        Pozwala na automatyczne dostrajanie zachowań NPC
      </p>
    </aside>
  </section>

  <!-- Slajd 17: Architektura systemów -->
  <section>
    <h2>Strumienie danych i chmura</h2>
    <p>
      Współczesne systemy wykorzystują streaming danych, edge computing i chmurę
      do synchronizacji stanów użytkownika pomiędzy wieloma urządzeniami,
      zapewniając spójne środowisko interaktywne.
    </p>
    <aside class="notes">
      <p>
        1. Streaming danych – W rozwiązaniach real-time, takich jak
        współdzielone sesje VR lub interaktywne prezentacje 3D, każda zmiana
        pozycji użytkownika lub obiektu musi być niezwłocznie wysłana do
        pozostałych uczestników lub serwera. pewnie spotkaliście się lub
        używaliście protokołów websocket lub mqtt
      </p>
      <p>
        2. Edge computing – Przesyłanie wszystkich danych do odległego centrum
        danych może generować zbyt duże opóźnienia. Dlatego część obliczeń i
        przetwarzania strumieni jest przenoszona bliżej użytkownika – na serwery
        brzegowe czy even cloudlety (small-scale datacenters umieszczone tuż
        przy krawędzi sieci) Wikipedia . Dzięki temu mamy: Niższe opóźnienia.
      </p>

      <p>
        Odciążenie końcowego urządzenia – smartfon czy gogle VR wysyłają tylko
        strumienie surowych danych (np. wideo, czujniki ruchu), a gotowy obraz
        3D lub wyniki analizy płyną z powrotem.
      </p>
      <p>Jak w innych systemach: synchronizacja</p>
    </aside>
  </section>

  <!-- Slajd 18: Ergonomia -->
  <!-- <section>
    <h2>Fizyczny komfort</h2>
    <p>
      Projektowanie musi uwzględniać masę sprzętu (gogle, kontrolery), kąt
      widzenia i łatwość obsługi, by uniknąć zmęczenia mięśni, bólu karku czy
      oczu przy długotrwałej pracy.
    </p>
    <aside class="notes">
      <p>

      </p>
      Wprowadzenie: Gdy mówimy o interaktywnych interfejsach, ergonomia to coś
      więcej niż tylko „wygoda” – to kompleksowe podejście do tego, jak
      projektowane elementy wpływają na ciało użytkownika podczas całej sesji
      pracy czy rozrywki. Źle dobrany headset VR, niewłaściwa waga kontrolera
      lub nieoptymalne rozmieszczenie elementów sterujących może skutkować bólem
      karku, zmęczeniem mięśni i oczu, a w skrajnych przypadkach – długofalowymi
      urazami Frontiers . 1. Waga i balans sprzętu – Gogle VR/AR (HMD) zwykle
      ważą od 300 do 600 gramów. Wielogodzinne noszenie ich bez przerwy obciąża
      mięśnie szyi i barków. Dlatego projektanci sprzętu dążą do lekkich
      materiałów (np. włókna węglowego) oraz równomiernego rozłożenia ciężaru –
      front-back balance, by zmniejszyć moment siły działający na szyję
      SpringerLink . – Zalecenie do projektu interfejsu: Minimalizuj czas, w
      którym użytkownik musi patrzeć w górę lub w dół – projektuj UI tak, aby
      najważniejsze elementy znajdowały się w strefie „centralnego widzenia”
      (±15° od osi wzroku). 2. Kąt widzenia (Field of View) – Zbyt wąski field
      of view (FOV) wymusza na użytkowniku ciągłe obracanie głowy, co zwiększa
      zmęczenie. Rozszerzony FOV (minimum 100° poziomo) pozwala na naturalne
      ruchy oczu zamiast kręcenia całym ciałem The Interaction Design Foundation
      . – Zalecenie: Unikaj rozmieszczania przycisków czy wskaźników poza 30° od
      centralnej osi; jeśli musisz tam umieścić interaktywny element, przemyśl
      dodanie delikatnego wskaźnika wskazującego kierunek. 3. Kontrolery i
      uchwyty – Kształt i rozmiar kontrolerów wpływają na to, jak długo
      użytkownik może je trzymać bez odczuwania bólu dłoni czy nadgarstków.
      Ergonomiczne uchwyty dostosowane do różnych rozmiarów dłoni oraz lekkie
      materiały obniżają ryzyko przeciążeń mięśniowych ResearchGate . –
      Zalecenie: Projektuj układy przycisków tak, by klucze funkcyjne były
      dostępne kciukiem lub palcem wskazującym bez konieczności zmiany uścisku.
      4. Czas trwania i przerwy – Standardowe wytyczne zalecają przerwy co 20–30
      minut intensywnej sesji VR/AR, by zredukować zarówno cybersickness, jak i
      zmęczenie mięśniowe PMC . – Zalecenie dla interfejsu: Wdrażaj subtelne
      przypomnienia lub automatyczne pauzy co 25 minut, pozwalające
      użytkownikowi odpocząć bez konieczności pilnowania czasu samodzielnie. 5.
      Soft ergonomics w interfejsach – Soft ergonomics skupia się na
      psychofizycznym komforcie użytkownika w wirtualnych interfejsach:
      minimalizacji obciążenia poznawczego, spójności designu, ergonomii
      wizualnej – dobór kontrastu, odstępów i czcionek dla łatwego czytania
      Wikipedia . – Zalecenie: Konsystencja – utrzymaj spójną nawigację i
      terminologię w całym interfejsie. Czytelność – tekst i ikony powinny być
      wystarczająco duże, by czytać je z odległości typowej dla ustawienia
      sprzętu. Kontrast – zadbaj o odpowiedni kontrast elementów UI w zmiennym
      oświetleniu otoczenia.
    </aside>
  </section> -->

  <!-- Slajd 19: Użyteczność -->
  <section>
    <h2>Intuicyjność i spójność</h2>
    <p>
      Interfejsy powinny być proste i przewidywalne. Testy z użytkownikami
      (cognitive walkthrough, usability testing) pomagają wykryć błędy na etapie
      prototypów.
    </p>
    <aside class="notes">
      <p>
        Dobrze, przejdźmy do kolejnego aspektu projektowania interaktywnych
        interfejsów – intuicyjności.
      </p>
      <p>
        Intuicyjny interfejs to taki, w którym nowy użytkownik niemal od razu
        wie, co robić, bez studiowania instrukcji. Drugim filarem jest spójność:
        podobne elementy zachowują się tak samo w całym systemie, co buduje
        zaufanie i ułatwia naukę obsługi.
      </p>
      <p>
        1. Zasady intuicyjnego designu • Prostota: usuń zbędne elementy,
        pozostaw tylko te, które wspierają cel użytkownika. Mniej opcji
        zmniejsza obciążenie poznawcze i przyspiesza działania. • Konwencje:
        wykorzystuj znane wzorce UI (np. ikona kosza = usuń, hamburger menu =
        nawigacja). Dzięki temu użytkownicy wykorzystują istniejącą znajomość
        interfejsów, zamiast uczyć się od zera uxdesigninstitute.com . •
        Sprzężenie zwrotne: każde działanie (klik, gest, komenda głosowa)
        powinno wywoływać natychmiastową, jasną odpowiedź systemu – np. animację
        wciśnięcia elementu lub komunikat potwierdzający.
      </p>
      <p>
        2. Spójność wewnętrzna i zewnętrzna • Wewnętrzna: projektując np.
        przyciski, zawsze umieszczaj je w tych samych miejscach, w tych samych
        kolorach i z tymi samymi efektami hover/click. To pomaga „zaprogramować”
        oczekiwania użytkownika. • Zewnętrzna: trzymaj się ogólnych wytycznych
        platform (iOS, Android, web), aby użytkownicy przenieśli swoje nawyki z
        innych aplikacji. Spójność z ekosystemem minimalizuje krzywą uczenia się
        Nielsen Norman Group . 3. Testy na etapie prototypu Aby zweryfikować,
        czy
      </p>
    </aside>
  </section>

  <!-- Slajd 20: Dostępność -->
  <section>
    <h2>Dostępność dla wszystkich użytkowników</h2>
    <p>
      Uwzględniamy potrzeby osób z niepełnosprawnościami: napisy, alternatywne
      sterowanie, kontrast, skalowanie czcionek zgodnie z wytycznymi WCAG.
    </p>
    <aside class="notes">
      <p>
        Wprowadzenie: Gdy projektujemy interaktywne interfejsy, pamiętajmy, że w
        naszym odbiorze nie ograniczamy się do „standardowego” użytkownika.
      </p>
      <p>
        Dostępność (accessibility) to tworzenie takich systemów, które może
        efektywnie obsługiwać każdy – w tym osoby z różnymi
        niepełnosprawnościami. Obejmuje to nie tylko tradycyjne aplikacje
        desktopowe, ale też środowiska VR/AR, systemy głosowe i wielomodalne.
      </p>
      <p>
        1. Napisy i transkrypcje • Napisy wideo i dialogach: W środowiskach VR
        często pojawiają się filmy instruktażowe lub scenariusze szkoleniowe.
        Dodanie czytelnych napisów jest obowiązkowe dla osób z ubytkiem słuchu.
        Tekst powinien być czytelny, w stałej pozycji ekranu i synchronizowany z
        dźwiękiem . • Transkrypcje audio: Jeśli interakcja polega na poleceniach
        głosowych lub dialogu z asystentem, oferuj pełną transkrypcję lub
        możliwość czytania historii rozmowy w tekście.
      </p>
      <p>
        2. Alternatywne metody sterowania • Sterowanie gestami i głosem: Osoba,
        która z powodu ograniczeń motorycznych nie może obsłużyć kontrolera VR,
        powinna mieć możliwość wydawania poleceń głosem lub korzystania z
        przycisków w interfejsie dotykowym. • Sterowanie wzrokiem (gaze-based):
        W VR/AR stosujemy mechanizm „gaze and dwell” – użytkownik skupia wzrok
        na elemencie przez określony czas, co wyzwala akcję. To pozwala na
        nawigację bez użycia rąk, przydatne dla osób z dużymi ograniczeniami
        ruchowymi .
      </p>
      <p>
        3. Kontrast i czytelność • Wytyczne WCAG 2.1 zalecają minimalny kontrast
        4.5:1 dla tekstu normalnej wielkości i 3:1 dla tekstu dużego (18 pt lub
        14 pt pogrubionego)
      </p>

      <p>
        5. Praktyczny guide dla projektanta Przeprowadź audyt WCAG – skorzystaj
        z narzędzi automatycznych (axe, Lighthouse) i testów manualnych, by
        upewnić się, że elementy interfejsu spełniają wymagania. Zaangażuj
        użytkowników z niepełnosprawnościami – zaproś do testów osoby niewidome,
        niedosłyszące i z ograniczeniami ruchowymi.
      </p>
    </aside>
  </section>

  <!-- Slajd 21: Prywatność i bezpieczeństwo -->
  <section>
    <h2>Ochrona danych użytkownika</h2>
    <p>
      Interakcje generują dane biometryczne i gramatyczne. Konieczne są
      mechanizmy anonimizacji, szyfrowanie i jasne polityki prywatności dla
      użytkowników.
    </p>
    <aside class="notes">
      <p>
        W interaktywnych interfejsach – zwłaszcza tych opartych na biometrii
        (np. rozpoznawanie twarzy, śledzenie oka czy EEG) – generujemy ogromne
        ilości danych osobistych i biometrycznych. Te informacje są wyjątkowo
        wrażliwe, bo dotyczą unikalnych cech użytkownika. Aby chronić
        prywatność, nie wystarczy jedynie hasło czy login – potrzebne są
        kompleksowe mechanizmy ochronne: anonimizacja, szyfrowanie i jasne
        polityki prywatności dla użytkowników ResearchGate .
      </p>
      <p>
        1. Anonimizacja i pseudonimizacja – Anonimizacja usuwa wszelkie
        powiązania między zebranymi danymi a konkretną osobą. W kontekście
        interaktywnych interfejsów oznacza to np. przechowywanie tylko
        uogólnionych wzorców (cechy twarzy, ruchy) bez przypisywania ich do
        imienia i nazwiska. – Pseudonimizacja (np. zastąpienie identyfikatora
        użytkownika losowym tokenem) pozwala na odtworzenie powiązania tylko w
        systemie, gdy jest to niezbędne (np. serwis supportowy) CMU School of
        Computer Science .
      </p>
      <p>
        3. Transparentne polityki prywatności – Użytkownik interaktywnego
        środowiska powinien od samego początku wiedzieć, jakie dane są zbierane,
        w jakim celu i jak długo będą przechowywane. Polityka prywatności musi
        być napisana prostym językiem, z możliwością łatwego wyrażenia zgody lub
        jej cofnięcia.
      </p>
      <p>2. Szyfrowanie end-to-end</p>
    </aside>
  </section>

  <!-- Slajd 22: Zastosowania edukacyjne -->
  <section>
    <h2>Nauka w VR/AR</h2>
    <p>
      Wirtualne laboratoria i modele 3D w AR wspierają zrozumienie trudnych
      konceptów, zwiększają motywację uczniów i redukują zagrożenia związane z
      eksperymentami.
    </p>
    <aside class="notes">
      <p>
        Wprowadzenie: Interaktywne interfejsy w VR i AR otwierają zupełnie nowe
        możliwości edukacji, szkoleń i rehabilitacji. Dzięki nim uczniowie,
        studenci czy pacjenci nie tylko obserwują treści, ale wchodzą w nie,
        manipulują wirtualnymi obiektami i ćwiczą w bezpiecznym, kontrolowanym
        otoczeniu.
      </p>
      <p>
        1. Wirtualne laboratoria – Zamiast tradycyjnych laboratoriów chemicznych
        czy fizycznych, uczniowie pracują w wirtualnym środowisku, gdzie mogą
        manipulować reagentami, obserwować reakcje i wykonywać pomiary – bez
        ryzyka poparzeń czy wybuchów. Badania pokazują, że wirtualne laboratoria
        poprawiają zrozumienie trudnych pojęć i podnoszą motywację do nauki.
      </p>
      <p>
        2. Modele 3D w AR – Wbudowane w aplikację AR modele molekuł, struktur
        anatomicznych czy mechanizmów fizycznych wyświetlane są na podręcznikach
        lub stole, co pozwala uczniom na interaktywną eksplorację tych obiektów
        z każdej strony. Dzięki temu abstrakcyjne zagadnienia stają się
        namacalne i łatwiejsze do przyswojenia
      </p>
    </aside>
  </section>

  <!-- Slajd 23: Zastosowania medyczne i symulatory -->
  <section>
    <h2>Szkolenia i rehabilitacja</h2>
    <p>
      Symulatory VR trenują pilotów i chirurgów w realistycznych warunkach. AR
      wspiera rehabilitację, dostarczając instrukcji wizualnych i haptycznych w
      czasie rzeczywistym.
    </p>
    <aside class="notes">
      <p>
        1. Symulatory VR dla profesjonalistów – Piloci ćwiczą starty, lądowania
        i awaryjne procedury w pełnych symulatorach VR. Badania potwierdzają, że
        efektywność szkolenia w VR jest porównywalna z tradycyjnymi symulatorami
        na bazie komputerów stacjonarnych, a przy tym koszty operacyjne są
        niższe
      </p>
      <p>
        2. Rehabilitacja z użyciem AR/VR i haptyki – Pacjenci po udarach i z
        urazami kończyn górnych wykonują ćwiczenia w wirtualnym środowisku,
        które dostarcza wizualnych wskazówek i haptycznego sprzężenia zwrotnego
        (np. lekkiego oporu), co zwiększa precyzję ruchu i zaangażowanie.
        Wstępne badania pokazują, że takie podejście przyspiesza powrót do
        sprawności i zmniejsza odczuwalny ból podczas terapii
      </p>
    </aside>
  </section>

  <!-- Slajd 24: Zastosowania przemysł i IoT -->
  <section>
    <h2>Przemysł 4.0</h2>
    <p>
      Interaktywne pulpity operatorskie i aplikacje AR w serwisie maszyn
      pozwalają na zdalne wsparcie i diagnostykę. IoT reaguje na obecność
      pracowników, optymalizując procesy produkcyjne.
    </p>
    <aside class="notes">
      <p>
        Wprowadzenie: W erze Przemysłu 4.0 interaktywne interfejsy stają się
        rdzeniem zaawansowanych zakładów produkcyjnych. Już nie wystarczy
        statyczna tablica wskaźników – operatorzy, serwisanci i menedżerowie
        potrzebują pulpitu, który aktualizuje się w czasie rzeczywistym,
        prezentuje dane z czujników IoT, a w razie potrzeby natychmiast
        udostępnia instrukcje w Augmented Reality (AR) dla zdalnego wsparcia.
      </p>
      1. Interaktywne pulpity operatorskie – Definicja: To konfigurowalne
      kokpity, które w jednym widoku łączą wykresy przebiegów temperatury,
      ciśnienia czy zużycia energii oraz alerty o przekroczeniach progów. –
      <p>
        Przykład: Platforma Bridgera oferuje pulpity IIoT (Industrial Internet
        of Things), gdzie dzięki streamingowi danych z urządzeń produkcyjnych
        można monitorować stan maszyn w czasie rzeczywistym i przewidywać awarie
        dzięki analizie predykcyjnej - Główna zaleta to monitorowanie całej
        linii produkcyjnej na jednym ekranie
      </p>
      <p>
        AR wyświetlają instrukcje serwisowe, schematy kabli czy dane
        diagnostyczne bezpośrednio na widoku kamery smartfona lub okularów AR,
        np. HoloLens. – Przykład: InspectAR umożliwia technikom zdalny dostęp do
        dokumentacji oraz nakładanie interaktywnych wizualizacji na rzeczywiste
        maszyny – wystarczy smartfon lub tablet, by ekspert w biurze prowadził
        kroki naprawy na żywo InspectAR . – Zaleta: Skrócenie czasu naprawy,
        redukcja błędów i zmniejszenie kosztów dojazdów serwisantów.
      </p>
    </aside>
  </section>

  <!-- Slajd 25: Przyszłość - AI i adaptacyjne interfejsy -->
  <section>
    <h2>Sztuczna inteligencja</h2>
    <p>
      AI pozwala na dynamiczne dostosowywanie układu i treści interfejsu do
      zachowań użytkownika, a modele generatywne mogą prowadzić kontekstowy
      dialog w multimodalnych środowiskach.
    </p>
    <aside class="notes">
      statycznych, choć interaktywnych paneli i AR, do dynamicznych interfejsów
      napędzanych AI, które personalizują się w locie w oparciu o zachowanie i
      kontekst użytkownika.
      <p>
        1. Dynamiczne dostosowywanie i generatywne UI – Generative UI (GenUIn):
        Interfejs sam tworzy i przestawia elementy w oparciu o analizę zachowań
        – nawigacja, widżety i układ pulpitu dostosowują się do preferencji
        użytkownika. [Opcjonalnie] Badania pokazują, że AI-generowane UI
        zwiększają efektywność wykonywanych zadań nawet o 20 %
        blog.iosb.fraunhofer.de .
      </p>
      <p>
        [Opcjonalnie] Zbieraj telemetrię o interakcjach (kliknięcia, czas
        spędzony, gesty). Trenuj model na danych użytkowników, by sugerował
        najczęściej używane funkcje w łatwym dostępie. Wdrażaj stopniowe zmiany,
        monitorując wskaźniki zadowolenia i produktywności.
      </p>
      <p>
        2. Multimodalne dialogi wspierane przez LLM – Opis: Modele generatywne
        (np. multimodalne LLM) potrafią reagować na zapytania głosowe, tekstowe
        i wizualne jednocześnie, prowadząc spójny kontekstowy dialog.
      </p>
      <p>
        Wyobraźmy sobie panel IoT, gdzie pytasz: “Pokaż mi ostatni alert z
        czujnika 42 i zaznacz na wykresie moment, gdy temperatura wzrosła
        powyżej 80 °C”, a interfejs od razu to robi
      </p>
    </aside>
  </section>

  <!-- Slajd 26: Przyszłość - XR, BCI i wnioski -->
  <section>
    <h2>Przyszłość</h2>
    <p>
      XR i metaverse rozszerzą skalę immersji, a BCI wprowadzą sterowanie
      myślami. Łączność 5G i edge computing zredukują opóźnienia, otwierając
      nowe możliwości dla środowisk interaktywnych.
    </p>
    <aside class="notes">
      <p>
        Zbliżamy się do punktu, w którym interfejsy interaktywne przestają być
        „okienkami” na ekranie – stają się całkowicie immersyjnymi środowiskami,
        w których użytkownik wchodzi fizycznie i mentalnie. Łączność 5G, edge
        computing oraz rozwój XR i BCI otwierają przed nami zupełnie nowe
        możliwości. XR i metaverse – XR (rozszerzona i mieszana rzeczywistość)
        pozwala na łączenie świata (metaverse), w których spotykamy się jako
        awatary. Platformy takie jak Horizon Worlds czy Microsoft Mesh już dziś
        umożliwiają współpracę zespołową w wirtualnych biurach i fabrykach.
        Kluczowe będzie zapewnienie niskich opóźnień ( ponizej 20 ms) za pomocą
        5G i edge computing, by interakcje były płynne i nie wywoływały nudności
        .
      </p>

      <p>
        Interfejsy neuronowe (BCI) – BCI idą dalej niż VR/AR – oferują
        sterowanie myślami. W połączeniu z XR użytkownik będzie mógł przenosić
        się wirtualnie, klikając wyłącznie myślami Edge computing i 5G –
        Przetwarzanie krytycznych danych na cloudletach blisko użytkownika oraz
        5G o niskim opóźnieniu gwarantują, że nawet najbardziej zaawansowane
        analizy ML/DL i rendering XR mogą odbywać się w czasie rzeczywistym. To
        fundament prawdziwie interaktywnych środowisk, gdzie każda akcja
        użytkownika — gest, myśl czy komenda głosowa — skutkuje natychmiastową
        reakcją świata wirtualnego. Kluczowy wniosek: Środowiska interaktywne
        ewoluują od
      </p>
      <p>
        [Opcjonalnie] prostych GUI, przez VR/AR, po zaawansowane multimodalne
        przestrzenie i interfejsy neuronowe. Ich przyszłość zależy od integracji
        AI, technologii XR, BCI i ultra-szybkiej sieci, co pozwoli nam stworzyć
        prawdziwie immersyjne, personalizowane i natychmiastowe interakcje
        między człowiekiem a maszyną.
      </p>
    </aside>
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

h1,
h2 {
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
