<p align="center">
  <h1 align="center">🛰️ S H A D O W B R O K E R</h1>
  <p align="center"><strong>Global Threat Intercept — Real-Time Geospatial Intelligence Platform</strong></p>
  <p align="center">

  </p>
</p>

---

> 📙 📘 Этот README содержит версии на русском и английском языках. Русская версия идет первой, английская — ниже.
> 📘 📙 This README contains both Russian and English versions of the same content so you can read whichever language you prefer. Russian is listed first; the English translation follows later in the document.

## Русская версия



https://github.com/user-attachments/assets/248208ec-62f7-49d1-831d-4bd0a1fa6852



**ShadowBroker** — это многодоменная панель OSINT в режиме реального времени, которая собирает живые данные из десятков открытых источников и отображает их на едином тёмном интерфейсе карты для операций. Она отслеживает самолёты, корабли, спутники, землетрясения, зоны конфликтов, сети видеонаблюдения, GPS-глушение и разворачивающиеся геополитические события — всё обновляется мгновенно.

Построена на **Next.js**, **MapLibre GL**, **FastAPI** и **Python**; создана для аналитиков, исследователей и энтузиастов, которые хотят видеть глобальную активность в одном окне.

---
## Интересные сценарии

* Отслеживать частные джеты миллиардеров
* Наблюдать за спутниками, пролетающими над головой, и видеть спутниковые снимки высокого разрешения
* Подслушивать местные аварийные сканеры
* Следить за морским трафиком по всему миру
* Обнаруживать зоны GPS-глушения
* Отслеживать землетрясения и стихийные бедствия в реальном времени

---
## Локализация

Интерфейс включает полноценную русскую локализацию: кнопки, метки и описания переключаются между английским и русским языками в зависимости от выбранной локали пользователя.
Чтобы сменить язык, откройте левую панель (`Worldview Left Panel`), нажмите кнопку с текущим языком (🇷🇺/🇺🇸) в заголовке и выберите нужную локаль — все поля обновятся мгновенно.

---
## ⚡ Быстрый старт (Docker или Podman)

Репозиторий включает `docker-compose.yml`, который собирает оба образа локально.

```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git
cd Shadowbroker
./compose.sh up -d
```

Откройте `http://localhost:3000`, чтобы увидеть панель! *(Требуется Docker или Podman)*

`compose.sh` автоматически определяет `docker compose`, `docker-compose`, `podman compose` и `podman-compose`.
Если оба рантайма установлены, можно принудительно использовать Podman через `./compose.sh --engine podman up -d`.
Не добавляйте точку в конце команды — Compose воспримет её как имя сервиса.

---
## ✨ Возможности

### 🛩️ Авиационный мониторинг

* **Коммерческие рейсы** — позиции в реальном времени через OpenSky Network (~5 000+ самолётов)
* **Частная авиация** — лёгкие GA, турбовинтовые и бизнес-джеты отслеживаются отдельно
* **Частные джеты** — самолёты самых состоятельных людей с идентификацией владельцев
* **Военные рейсы** — заправщики, разведчики, истребители и транспортники через военный endpoint adsb.lol
* **Накопление трасс полётов** — устойчивые «хлебные крошки» для всех отслеживаемых воздушных судов
* **Обнаружение кругов ожидания** — автоматически отмечает самолёты, совершающие круговые развороты (>300° суммарного поворота)
* **Классификация самолётов** — SVG-иконки точной формы для авиалайнеров, турбовинтовых, бизнес-джетов и вертолётов
* **Обнаружение на земле** — самолёты ниже 100 футов AGL отображаются серыми иконками

### 🚢 Морской мониторинг

* **AIS-поток судов** — 25 000+ судов через WebSocket aisstream.io (в реальном времени)
* **Классификация судов** — грузовые, танкеры, пассажирские, яхты и военные корабли отображаются разными цветами
* **Трекер ударных групп авианосцев** — 11 действующих авианосцев ВМС США с оценочными позициями OSINT
  * Автоматический парсер новостей GDELT для данных о перемещении авианосцев
  * Более 50 соответствий регионов координатам
  * Позиции кэшируются на диске, обновления в 00:00 и 12:00 UTC
* **Круизные и пассажирские суда** — отдельный слой для лайнеров и паромов
* **Кластерный режим** — суда группируются на малом масштабе с метками количества и раскладываются при приближении

### 🛰️ Космос и спутники

* **Орбитальное слежение** — позиции спутников в реальном времени через TLE-данные CelesTrak + распространение SGP4 (2 000+ активных спутников, без ключа API)
* **Классификация по типу миссии** — цветовое кодирование: военная разведка (красный), SAR (глянцевый), SIGINT (белый), навигация (синий), раннее предупреждение (магента), коммерческая съёмка (зелёный), космическая станция (золото)

### 🌍 Геополитика и конфликты

* **Глобальные инциденты** — агрегатор конфликтных событий GDELT (последние 8 часов, около 1 000 записей)
* **Линия фронта Украины** — живой GeoJSON фронта от DeepState Map
* **Лента новостей SIGINT/RISINT** — RSS-агрегация в реальном времени с нескольких ресурсов, ориентированных на разведку
* **Досье региона** — правый клик в любом месте карты открывает:
  * Профиль страны (население, столица, языки, валюты, площадь)
  * Главу государства и форму правления (Wikidata SPARQL)
  * Местный обзор в Википедии с миниатюрой

### 🛰️ Спутниковая съёмка

* **NASA GIBS (MODIS Terra)** — ежедневные истинно-цветные снимки с полосой времени за 30 дней, анимацией воспроизведения/паузы и управлением прозрачностью (~250 м/пиксель)
* **Высокое разрешение (Esri)** — субметровая съёмка Esri World Imagery — приближайтесь к зданиям и рельефу (масштаб 18+)
* **Intel-карта Sentinel-2** — правый клик открывает плавающую карточку с последним снимком Sentinel-2, датой съёмки, облачностью в % и ссылкой на изображение в полном разрешении (10 м, обновляется примерно каждые 5 дней)
* **Пресет SATELLITE** — быстрый переключатель высокоразрешённой съёмки через кнопку STYLE (DEFAULT → SATELLITE → FLIR → NVG → CRT)

### 📻 Программно-определяемое радио (SDR)

* **Приёмники KiwiSDR** — 500+ публичных SDR-приёмников по всему миру отмечены янтарными маркерами
* **Живой радиотюнер** — клик по любой ноде KiwiSDR открывает встроенный тюнер прямо в панели SIGINT
* **Отображение метаданных** — название ноды, местоположение, тип антенны, частотные диапазоны и активные пользователи

### 📷 Видеонаблюдение

* **Сеть CCTV** — 2 000+ камер дорожного движения от:
  * 🇬🇧 Transport for London JamCams
  * 🇺🇸 Austin, TX TxDOT
  * 🇺🇸 NYC DOT
  * 🇸🇬 Singapore LTA
  * Пользовательские URL
* **Рендеринг потоков** — автоматическое определение и отображение видео, MJPEG, HLS, embed, спутниковых тайлов и изображений
* **Кластерная карта** — зелёные точки группируются с метками количества и распадаются при приближении

### 📡 Радиоразведка

* **Обнаружение GPS-глушения** — анализ значений NAC-P (Navigation Accuracy Category) самолётов в реальном времени
  * Гридовое агрегирование выявляет зоны помех
  * Красные квадраты с метками степени «GPS JAM XX%»
* **Панель радио перехвата** — интерфейс в стиле сканера для мониторинга радиосвязи

### 🌐 Дополнительные слои

* **Землетрясения (24 ч)** — лента USGS с маркерами по магнитуде
* **Цикл день/ночь** — наложение терминатора показывает зоны дневного и ночного освещения
* **Тикер мировых рынков** — индексы глобальных финансов (сворачиваемый)
* **Инструмент измерения** — расстояние и направление между точками на карте
* **Поле LOCATE** — поиск по координатам (31.8, 34.8) или названию (Тегеран, Ормузский пролив) с геокодированием через OpenStreetMap Nominatim

![Gaza](https://github.com/user-attachments/assets/f2c953b2-3528-4360-af5a-7ea34ff28489)

---
## 🏗️ Архитектура

Диаграмма показывает, как фронтенд на Next.js общается с FastAPI-бэкендом и сборщиками данных для получения различных источников.

```
┌────────────────────────────────────────────────────────┐
│                   FRONTEND (Next.js)                   │
│                                                        │
│  ┌─────────────┐    ┌──────────┐    ┌───────────────┐  │
│  │ MapLibre GL │    │ NewsFeed │    │ Control Panels│  │
│  │  2D WebGL   │    │  SIGINT  │    │ Layers/Filters│  │
│  │ Map Render  │    │  Intel   │    │ Markets/Radio │  │
│  └──────┬──────┘    └────┬─────┘    └───────┬───────┘  │
│         └────────────────┼──────────────────┘          │
│                          │ REST API (60s / 120s)       │
├──────────────────────────┼─────────────────────────────┤
│                    BACKEND (FastAPI)                   │
│                          │                             │
│  ┌───────────────────────┼──────────────────────────┐  │
│  │               Data Fetcher (Scheduler)           │  │
│  │                                                  │  │
│  │  ┌──────────┬──────────┬──────────┬───────────┐  │  │
│  │  │ OpenSky  │ adsb.lol │CelesTrak │   USGS    │  │  │
│  │  │ Flights  │ Military │   Sats   │  Quakes   │  │  │
│  │  ├──────────┼──────────┼──────────┼───────────┤  │  │
│  │  │  AIS WS  │ Carrier  │  GDELT   │   CCTV    │  │  │
│  │  │  Ships   │ Tracker  │ Conflict │  Cameras  │  │  │
│  │  ├──────────┼──────────┼──────────┼───────────┤  │  │
│  │  │ DeepState│   RSS    │  Region  │    GPS    │  │  │
│  │  │ Frontline│  Intel   │ Dossier  │  Jamming  │  │  │
│  │  └──────────┴──────────┴──────────┴───────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

---
## 📊 Источники данных и API

| Источник | Данные | Частота обновления | Требуется ключ API |
|---|---|---|---|
| [OpenSky Network](https://opensky-network.org) | Коммерческие и частные рейсы | ~60 с | Необязательно (анонимный доступ с ограничением) |
| [adsb.lol](https://adsb.lol) | Военные самолёты | ~60 с | Нет |
| [aisstream.io](https://aisstream.io) | Позиции судов AIS | WebSocket в реальном времени | Да |
| [CelesTrak](https://celestrak.org) | Орбитальные позиции спутников (TLE + SGP4) | ~60 с | Нет |
| [USGS Earthquake](https://earthquake.usgs.gov) | Глобальные сейсмические события | ~60 с | Нет |
| [GDELT Project](https://www.gdeltproject.org) | Глобальные события конфликтов | ~6 ч | Нет |
| [DeepState Map](https://deepstatemap.live) | Линия фронта Украины | ~30 мин | Нет |
| [Transport for London](https://api.tfl.gov.uk) | Камеры JamCams TfL | ~5 мин | Нет |
| [TxDOT](https://its.txdot.gov) | Кадры дорожного движения Остина, Техас | ~5 мин | Нет |
| [NYC DOT](https://webcams.nyctmc.org) | Камеры Нью-Йорка | ~5 мин | Нет |
| [Singapore LTA](https://datamall.lta.gov.sg) | Камеры дорожного движения Сингапура | ~5 мин | Да |
| [RestCountries](https://restcountries.com) | Данные профилей стран | По запросу (кэш 24 ч) | Нет |
| [Wikidata SPARQL](https://query.wikidata.org) | Данные о главе государства | По запросу (кэш 24 ч) | Нет |
| [Wikipedia API](https://en.wikipedia.org/api) | Сводки по локациям и изображения самолётов | По запросу (кэш) | Нет |
| [NASA GIBS](https://gibs.earthdata.nasa.gov) | Ежедневные спутниковые снимки MODIS Terra | Ежедневно (задержка 24–48 ч) | Нет |
| [Esri World Imagery](https://www.arcgis.com) | Базовая карта высокого разрешения | Статическая (периодические обновления) | Нет |
| [MS Planetary Computer](https://planetarycomputer.microsoft.com) | Снимки Sentinel-2 L2A (по правому клику) | По запросу | Нет |
| [KiwiSDR](https://kiwisdr.com) | Публичные SDR-приёмники | ~30 мин | Нет |
| [OSM Nominatim](https://nominatim.openstreetmap.org) | Геокодирование названий мест (поле LOCATE) | По запросу | Нет |
| [CARTO Basemaps](https://carto.com) | Тёмные тайлы карты | Постоянно | Нет |

---
## 🚀 Начало работы

### 🐳 Подготовка Docker / Podman (рекомендуется для собственного хостинга)

Репозиторий содержит `docker-compose.yml`, который собирает оба образа локально.

```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git
cd Shadowbroker
./compose.sh up -d
```

Откройте `http://localhost:3000`, чтобы посмотреть панель. *(Требуется Docker или Podman)*

> **Разворачиваете публично или в локальной сети?** Фронтенд автоматически определяет бэкенд: он использует имя хоста браузера с портом `8000` (например, если вы открываете `http://192.168.1.50:3000`, API-запросы идут на `http://192.168.1.50:8000`). **Для большинства сетей никакая дополнительная настройка не нужна.**
>
> Если бэкенд работает на **другом порту или хосте** (reverse proxy, кастомный маппинг Docker, отдельный сервер), задайте `NEXT_PUBLIC_API_URL`:
>
> ```bash
> # Linux / macOS
> NEXT_PUBLIC_API_URL=http://myserver.com:9096 docker-compose up -d --build
>
> # Podman (через обёртку compose.sh)
> NEXT_PUBLIC_API_URL=http://192.168.1.50:9096 ./compose.sh up -d --build
>
> # Windows (PowerShell)
> $env:NEXT_PUBLIC_API_URL="http://myserver.com:9096"; docker-compose up -d --build
>
> # Или добавьте в .env рядом с docker-compose.yml:
> # NEXT_PUBLIC_API_URL=http://myserver.com:9096
> ```
>
> Это переменная времени сборки (ограничение Next.js) — она внедряется в фронтенд во время `npm run build`. После изменения нужны повторная сборка и перезапуск.

Если вы предпочитаете напрямую вызывать движок контейнеров, Podman можно запустить командой `podman compose up -d`, или принудительно использовать Podman через обёртку `./compose.sh --engine podman up -d`.
В зависимости от локальной конфигурации Podman, `podman compose` может всё ещё делегировать вызовы внешнему провайдеру compose при работе с сокетом Podman.

---

### 📦 Быстрый старт (без кода)

Если хотите запустить панель без работы в терминале:

1. Перейдите на вкладку **Releases** справа на этой странице GitHub.
2. Скачайте последний `.zip` из релиза.
3. Распакуйте папку на компьютере.
4. **Windows:** дважды кликните `start.bat`.
   **macOS/Linux:** откройте терминал, выполните `chmod +x start.sh`, затем `./start.sh`.
5. Скрипт автоматически установит всё необходимое и запустит дашборд!

---

### 💻 Настройка для разработчиков

#### Требования

* **Node.js** 18+ и **npm** — [nodejs.org](https://nodejs.org/)
* **Python** 3.10, 3.11 или 3.12 с `pip` — [python.org](https://www.python.org/downloads/) (**обязательно отметьте "Add to PATH"**)
  * ⚠️ Python 3.13+ может быть несовместим с некоторыми зависимостями. **Рекомендуется 3.11 или 3.12.**
* API-ключи для: `aisstream.io` (обязательно), а также опционально `opensky-network.org` (OAuth2) и `lta.gov.sg`

### Установка

```bash
# Клонируйте репозиторий
git clone https://github.com/your-username/shadowbroker.git
cd shadowbroker/live-risk-dashboard

# Бэкенд
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux
pip install -r requirements.txt   # включает pystac-client для Sentinel-2

# Создайте .env с API-ключами
echo "AIS_API_KEY=your_aisstream_key" >> .env
echo "OPENSKY_CLIENT_ID=your_opensky_client_id" >> .env
echo "OPENSKY_CLIENT_SECRET=your_opensky_secret" >> .env

# Фронтенд
cd ../frontend
npm install
```

### Запуск

```bash
# Из директории frontend — запускает фронтенд и бэкенд одновременно
npm run dev
```

Это запускает:

* **Next.js** фронтенд на `http://localhost:3000`
* **FastAPI** бэкенд на `http://localhost:8000`

---
## 🎛️ Слои данных

| Слой | По умолчанию | Описание |
|---|---|---|
| Коммерческие рейсы | ✅ ВКЛ | Авиалинии, грузовые и GA самолёты |
| Частные рейсы | ✅ ВКЛ | Некоммерческие частные воздушные суда |
| Частные джеты | ✅ ВКЛ | Высокобюджетные бизнес-джеты с данными владельцев |
| Военные рейсы | ✅ ВКЛ | Военные и правительственные воздушные судна |
| Отслеживаемые самолёты | ✅ ВКЛ | Список наблюдения особого интереса |
| Спутники | ✅ ВКЛ | Орбитальные активы по типу миссии |
| Авианосцы / Военные / Грузовые | ✅ ВКЛ | Авианосцы ВМС, грузовые суда и танкеры |
| Гражданские суда | ❌ ВЫКЛ | Яхты, рыболовные и развлекательные суда |
| Круизные / Пассажирские | ✅ ВКЛ | Круизные лайнеры и паромы |
| Землетрясения (24 ч) | ✅ ВКЛ | События USGS |
| Сеть CCTV | ❌ ВЫКЛ | Сеть камер видеонаблюдения |
| Линия фронта Украины | ✅ ВКЛ | Живые позиции фронта |
| Глобальные события | ✅ ВКЛ | Конфликтные события по GDELT |
| GPS-глушение | ✅ ВКЛ | Зоны деградации NAC-P |
| MODIS Terra (ежедневно) | ❌ ВЫКЛ | Ежедневные спутниковые снимки NASA GIBS |
| Спутники высокого разрешения | ❌ ВЫКЛ | Субметровая съёмка Esri |
| Приёмники KiwiSDR | ❌ ВЫКЛ | Публичные SDR-приёмники |
| День / Ночь | ✅ ВКЛ | Наложение терминатора, показывающее дневные и ночные зоны |

---
## 🔧 Производительность

* **Gzip-сжатие** — API-пакеты сжимаются примерно на 92% (11,6 МБ → 915 КБ)
* **Кэширование ETag** — ответы `304 Not Modified` пропускают повторный анализ JSON
* **Обрезка по видимому окну** — рендерятся только объекты внутри текущего фрагмента карты (+20% запас)
* **Кластеризация отображения** — суда, CCTV и землетрясения сгруппированы MapLibre-в кластеры, чтобы уменьшить количество объектов
* **Дебаунс обновлений карты** — задержка 300 мс предотвращает тряску GeoJSON при панорамировании/масштабировании
* **Интерполяция позиционирования** — плавная анимация между обновлениями с шагом 10 секунд
* **React.memo** — тяжёлые компоненты обёрнуты, чтобы избежать ненужных повторных рендеров
* **Точность координат** — широта/долгота округляются до 5 знаков (~1 м) для уменьшения размера JSON

---
## 📁 Структура проекта

```
live-risk-dashboard/
├── backend/
│   ├── main.py                     # FastAPI-приложение, middleware и маршруты API
│   ├── carrier_cache.json          # Сохранённые позиции авианосцев (OSINT)
│   ├── cctv.db                     # SQLite-база камер видеонаблюдения
│   └── services/
│       ├── data_fetcher.py         # Ядро-планировщик — собирает данные со всех источников
│       ├── ais_stream.py           # WebSocket-клиент AIS (25К+ судов)
│       ├── carrier_tracker.py      # Трекер позиций авианосцев OSINT
│       ├── cctv_pipeline.py        # Многопоточный импорт CCTV-камер
│       ├── geopolitics.py          # Сборщик GDELT + линия фронта Украины
│       ├── region_dossier.py       # Разведка по правому клику на страну/город
│       ├── radio_intercept.py      # Интеграция радиоперехвата в стиле сканера
│       ├── kiwisdr_fetcher.py      # Скрапер приёмников KiwiSDR
│       ├── sentinel_search.py      # Поиск снимков Sentinel-2 STAC
│       ├── network_utils.py        # HTTP-клиент с fallback на curl
│       └── api_settings.py         # Управление API-ключами
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   └── page.tsx            # Главная панель — состояние, опрос, раскладка
│   │   └── components/
│   │       ├── MaplibreViewer.tsx   # Основная карта — 2000+ строк, все GeoJSON-слои
│   │       ├── NewsFeed.tsx         # Лента SIGINT + панели деталей объектов
│   │       ├── WorldviewLeftPanel.tsx   # Переключатели слоёв данных
│   │       ├── WorldviewRightPanel.tsx  # Боковая панель поиска и фильтров
│   │       ├── FilterPanel.tsx     # Базовые фильтры слоёв
│   │       ├── AdvancedFilterModal.tsx  # Фильтрация по аэропорту/стране/владельцу
│   │       ├── MapLegend.tsx       # Динамическая легенда со всеми иконками
│   │       ├── MarketsPanel.tsx    # Тикер мировых финансовых рынков
│   │       ├── RadioInterceptPanel.tsx # Панель радио в стиле сканера
│   │       ├── FindLocateBar.tsx   # Поле поиска/локации
│   │       ├── ChangelogModal.tsx  # Всплывающее окно с журналом версий
│   │       ├── SettingsPanel.tsx   # Настройки приложения
│   │       ├── ScaleBar.tsx        # Индикатор масштаба карты
│   │       ├── WikiImage.tsx       # Получение изображений из Википедии
│   │       └── ErrorBoundary.tsx   # Обёртка для восстановления после сбоев
│   └── package.json
```

---
## 🔑 Переменные окружения

### Backend (`backend/.env`)

```env
# Обязательно
AIS_API_KEY=your_aisstream_key                # Отслеживание морских судов (aisstream.io)

# Необязательно (улучшает качество данных)
OPENSKY_CLIENT_ID=your_opensky_client_id      # OAuth2 — более высокие лимиты по flight data
OPENSKY_CLIENT_SECRET=your_opensky_secret     # OAuth2 — парная пара вместе с Client ID
LTA_ACCOUNT_KEY=your_lta_key                  # Камеры дорожного движения Сингапура
```

### Frontend (опционально)

| Переменная | Где задать | Назначение |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `.env` рядом с `docker-compose.yml` или переменная окружения | Переопределяет URL бэкенда при публичном развёртывании или обратном прокси. Оставьте пустой для автоопределения. |

**Как работает автоопределение:** Когда `NEXT_PUBLIC_API_URL` не задан, фронтенд читает `window.location.hostname` в браузере и обращается к `{protocol}//{hostname}:8000`.
Это значит, что дашборд работает на `localhost`, локальной сети и публичных доменах без настройки — при условии, что бэкенд доступен на порту 8000 того же хоста.

---
## ⚠️ Отказ от ответственности

Это **образовательный и исследовательский инструмент**, построенный исключительно на общедоступных данных открытой разведки (OSINT). Не используются классифицированные, ограниченные или непубличные источники. Позиции авианосцев оцениваются на основе общедоступной информации. Военно-тематический интерфейс носит исключительно эстетический характер.

**Не используйте этот инструмент для оперативной, военной или разведывательной деятельности.**

---

## 📜 Лицензия

Проект предназначен для образовательного и личного исследовательского использования. Смотрите условия использования каждого API-провайдера для ограничений на данные.

---
## English version

**ShadowBroker** is a real-time, multi-domain OSINT dashboard that aggregates live data from dozens of open-source intelligence feeds and renders them on a unified dark-ops map interface. It tracks aircraft, ships, satellites, earthquakes, conflict zones, CCTV networks, GPS jamming, and breaking geopolitical events — all updating in real time.

Built with **Next.js**, **MapLibre GL**, **FastAPI**, and **Python**, it's designed for analysts, researchers, and enthusiasts who want a single-pane-of-glass view of global activity.

---

## Interesting Use Cases

* Track everything from Air Force One to the private jets of billionaires, dictators, and corporations
* Monitor satellites passing overhead and see high-resolution satellite imagery
* Nose around local emergency scanners
* Watch naval traffic worldwide
* Detect GPS jamming zones
* Follow earthquakes and disasters in real time

---

## Localization

The interface includes a full Russian localization: buttons, labels, and descriptions switch between English and Russian based on the user's selected language.
To change the language, open the left panel (`Worldview Left Panel`), tap the language button (🇷🇺/🇺🇸) in the header, and choose the desired locale — all fields adapt instantly.

---

## ⚡ Quick Start (Docker or Podman)

```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git
cd Shadowbroker
./compose.sh up -d
```

Open `http://localhost:3000` to view the dashboard! *(Requires Docker or Podman)*

`compose.sh` auto-detects `docker compose`, `docker-compose`, `podman compose`, and `podman-compose`.
If both runtimes are installed, you can force Podman with `./compose.sh --engine podman up -d`.
Do not append a trailing `.` to that command; Compose treats it as a service name.

---

## ✨ Features

### 🛩️ Aviation Tracking

* **Commercial Flights** — Real-time positions via OpenSky Network (~5,000+ aircraft)
* **Private Aircraft** — Light GA, turboprops, bizjets tracked separately
* **Private Jets** — High-net-worth individual aircraft with owner identification
* **Military Flights** — Tankers, ISR, fighters, transports via adsb.lol military endpoint
* **Flight Trail Accumulation** — Persistent breadcrumb trails for all tracked aircraft
* **Holding Pattern Detection** — Automatically flags aircraft circling (>300° total turn)
* **Aircraft Classification** — Shape-accurate SVG icons: airliners, turboprops, bizjets, helicopters
* **Grounded Detection** — Aircraft below 100ft AGL rendered with grey icons

### 🚢 Maritime Tracking

* **AIS Vessel Stream** — 25,000+ vessels via aisstream.io WebSocket (real-time)
* **Ship Classification** — Cargo, tanker, passenger, yacht, military vessel types with color-coded icons
* **Carrier Strike Group Tracker** — All 11 active US Navy aircraft carriers with OSINT-estimated positions
  * Automated GDELT news scraping for carrier movement intelligence
  * 50+ geographic region-to-coordinate mappings
  * Disk-cached positions, auto-updates at 00:00 & 12:00 UTC
* **Cruise & Passenger Ships** — Dedicated layer for cruise liners and ferries
* **Clustered Display** — Ships cluster at low zoom with count labels, decluster on zoom-in

### 🛰️ Space & Satellites

* **Orbital Tracking** — Real-time satellite positions via CelesTrak TLE data + SGP4 propagation (2,000+ active satellites, no API key required)
* **Mission-Type Classification** — Color-coded by mission: military recon (red), SAR (cyan), SIGINT (white), navigation (blue), early warning (magenta), commercial imaging (green), space station (gold)

### 🌍 Geopolitics & Conflict

* **Global Incidents** — GDELT-powered conflict event aggregation (last 8 hours, ~1,000 events)
* **Ukraine Frontline** — Live warfront GeoJSON from DeepState Map
* **SIGINT/RISINT News Feed** — Real-time RSS aggregation from multiple intelligence-focused sources with user-customizable feeds (up to 20 sources, configurable priority weights 1-5)
* **Region Dossier** — Right-click anywhere on the map for:
  * Country profile (population, capital, languages, currencies, area)
  * Head of state & government type (Wikidata SPARQL)
  * Local Wikipedia summary with thumbnail

### 🛰️ Satellite Imagery

* **NASA GIBS (MODIS Terra)** — Daily true-color satellite imagery overlay with 30-day time slider, play/pause animation, and opacity control (~250m/pixel)
* **High-Res Satellite (Esri)** — Sub-meter resolution imagery via Esri World Imagery — zoom into buildings and terrain detail (zoom 18+)
* **Sentinel-2 Intel Card** — Right-click anywhere on the map for a floating intel card showing the latest Sentinel-2 satellite photo with capture date, cloud cover %, and clickable full-resolution image (10m resolution, updated every ~5 days)
* **SATELLITE Style Preset** — Quick-toggle high-res imagery via the STYLE button (DEFAULT → SATELLITE → FLIR → NVG → CRT)

### 📻 Software-Defined Radio (SDR)

* **KiwiSDR Receivers** — 500+ public SDR receivers plotted worldwide with clustered amber markers
* **Live Radio Tuner** — Click any KiwiSDR node to open an embedded SDR tuner directly in the SIGINT panel
* **Metadata Display** — Node name, location, antenna type, frequency bands, active users

### 📷 Surveillance

* **CCTV Mesh** — 2,000+ live traffic cameras from:
  * 🇬🇧 Transport for London JamCams
  * 🇺🇸 Austin, TX TxDOT
  * 🇺🇸 NYC DOT
  * 🇸🇬 Singapore LTA
  * Custom URL ingestion
* **Feed Rendering** — Automatic detection & rendering of video, MJPEG, HLS, embed, satellite tile, and image feeds
* **Clustered Map Display** — Green dots cluster with count labels, decluster on zoom

### 📡 Signal Intelligence

* **GPS Jamming Detection** — Real-time analysis of aircraft NAC-P (Navigation Accuracy Category) values
  * Grid-based aggregation identifies interference zones
  * Red overlay squares with "GPS JAM XX%" severity labels
* **Radio Intercept Panel** — Scanner-style UI for monitoring communications

### 🔥 Environmental & Infrastructure Monitoring

* **NASA FIRMS Fire Hotspots (24h)** — 5,000+ global thermal anomalies from NOAA-20 VIIRS satellite, updated every cycle. Flame-shaped icons color-coded by fire radiative power (FRP): yellow (low), orange, red, dark red (intense). Clustered at low zoom with fire-shaped cluster markers.
* **Space Weather Badge** — Live NOAA geomagnetic storm indicator in the bottom status bar. Color-coded Kp index: green (quiet), yellow (active), red (storm G1–G5). Data from SWPC planetary K-index 1-minute feed.
* **Internet Outage Monitoring** — Regional internet connectivity alerts from Georgia Tech IODA. Grey markers at affected regions with severity percentage. Uses only reliable datasources (BGP routing tables, active ping probing) — no telescope or interpolated data.
* **Data Center Mapping** — 2,000+ global data centers plotted from a curated dataset. Clustered purple markers with server-rack icons. Click for operator, location, and automatic internet outage cross-referencing by country.

### 🌐 Additional Layers

* **Earthquakes (24h)** — USGS real-time earthquake feed with magnitude-scaled markers
* **Day/Night Cycle** — Solar terminator overlay showing global daylight/darkness
* **Global Markets Ticker** — Live financial market indices (minimizable)
* **Measurement Tool** — Point-to-point distance & bearing measurement on the map
* **LOCATE Bar** — Search by coordinates (31.8, 34.8) or place name (Tehran, Strait of Hormuz) to fly directly to any location — geocoded via OpenStreetMap Nominatim

![Gaza](https://github.com/user-attachments/assets/f2c953b2-3528-4360-af5a-7ea34ff28489)

---

## 🏗️ Architecture

```
┌────────────────────────────────────────────────────────┐
│                   FRONTEND (Next.js)                   │
│                                                        │
│  ┌─────────────┐    ┌──────────┐    ┌───────────────┐  │
│  │ MapLibre GL │    │ NewsFeed │    │ Control Panels│  │
│  │  2D WebGL   │    │  SIGINT  │    │ Layers/Filters│  │
│  │ Map Render  │    │  Intel   │    │ Markets/Radio │  │
│  └──────┬──────┘    └────┬─────┘    └───────┬───────┘  │
│         └────────────────┼──────────────────┘          │
│                          │ REST API (60s / 120s)       │
├──────────────────────────┼─────────────────────────────┤
│                    BACKEND (FastAPI)                   │
│                          │                             │
│  ┌───────────────────────┼──────────────────────────┐  │
│  │               Data Fetcher (Scheduler)           │  │
│  │                                                  │  │
│  │  ┌──────────┬──────────┬──────────┬───────────┐  │  │
│  │  │ OpenSky  │ adsb.lol │CelesTrak │   USGS    │  │  │
│  │  │ Flights  │ Military │   Sats   │  Quakes   │  │  │
│  │  ├──────────┼──────────┼──────────┼───────────┤  │  │
│  │  │  AIS WS  │ Carrier  │  GDELT   │   CCTV    │  │  │
│  │  │  Ships   │ Tracker  │ Conflict │  Cameras  │  │  │
│  │  ├──────────┼──────────┼──────────┼───────────┤  │  │
│  │  │ DeepState│   RSS    │  Region  │    GPS    │  │  │
│  │  │ Frontline│  Intel   │ Dossier  │  Jamming  │  │  │
│  │  ├──────────┼──────────┼──────────┼───────────┤  │  │
│  │  │  NASA    │  NOAA    │  IODA    │  KiwiSDR  │  │  │
│  │  │  FIRMS   │  Space Wx│ Outages  │  Radios   │  │  │
│  │  └──────────┴──────────┴──────────┴───────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

---

## 📊 Data Sources & APIs

| Source | Data | Update Frequency | API Key Required |
|---|---|---|---|
| [OpenSky Network](https://opensky-network.org) | Commercial & private flights | ~60s | Optional (anonymous limited) |
| [adsb.lol](https://adsb.lol) | Military aircraft | ~60s | No |
| [aisstream.io](https://aisstream.io) | AIS vessel positions | Real-time WebSocket | **Yes** |
| [CelesTrak](https://celestrak.org) | Satellite orbital positions (TLE + SGP4) | ~60s | No |
| [USGS Earthquake](https://earthquake.usgs.gov) | Global seismic events | ~60s | No |
| [GDELT Project](https://www.gdeltproject.org) | Global conflict events | ~6h | No |
| [DeepState Map](https://deepstatemap.live) | Ukraine frontline | ~30min | No |
| [Transport for London](https://api.tfl.gov.uk) | London CCTV JamCams | ~5min | No |
| [TxDOT](https://its.txdot.gov) | Austin TX traffic cameras | ~5min | No |
| [NYC DOT](https://webcams.nyctmc.org) | NYC traffic cameras | ~5min | No |
| [Singapore LTA](https://datamall.lta.gov.sg) | Singapore traffic cameras | ~5min | **Yes** |
| [RestCountries](https://restcountries.com) | Country profile data | On-demand (cached 24h) | No |
| [Wikidata SPARQL](https://query.wikidata.org) | Head of state data | On-demand (cached 24h) | No |
| [Wikipedia API](https://en.wikipedia.org/api) | Location summaries & aircraft images | On-demand (cached) | No |
| [NASA GIBS](https://gibs.earthdata.nasa.gov) | MODIS Terra daily satellite imagery | Daily (24-48h delay) | No |
| [Esri World Imagery](https://www.arcgis.com) | High-res satellite basemap | Static (periodically updated) | No |
| [MS Planetary Computer](https://planetarycomputer.microsoft.com) | Sentinel-2 L2A scenes (right-click) | On-demand | No |
| [KiwiSDR](https://kiwisdr.com) | Public SDR receiver locations | ~30min | No |
| [OSM Nominatim](https://nominatim.openstreetmap.org) | Place name geocoding (LOCATE bar) | On-demand | No |
| [NASA FIRMS](https://firms.modaps.eosdis.nasa.gov) | NOAA-20 VIIRS fire/thermal hotspots | ~120s | No |
| [NOAA SWPC](https://services.swpc.noaa.gov) | Space weather Kp index & solar events | ~120s | No |
| [IODA (Georgia Tech)](https://ioda.inetintel.cc.gatech.edu) | Regional internet outage alerts | ~120s | No |
| [DC Map (GitHub)](https://github.com/Ringmast4r/Data-Center-Map---Global) | Global data center locations | Static (cached 7d) | No |
| [CARTO Basemaps](https://carto.com) | Dark map tiles | Continuous | No |

---

## 🚀 Getting Started

### 🐳 Docker / Podman Setup (Recommended for Self-Hosting)

The repo includes a `docker-compose.yml` that builds both images locally.

```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git
cd Shadowbroker
# Add your API keys in a repo-root .env file (optional — see Environment Variables below)
./compose.sh up -d
```

Open `http://localhost:3000` to view the dashboard.

> **Deploying publicly or on a LAN?** No configuration needed for most setups.
> The frontend proxies all API calls through the Next.js server to `BACKEND_URL`,
> which defaults to `http://backend:8000` (Docker internal networking).
> Port 8000 does not need to be exposed externally.
>
> If your backend runs on a **different host or port**, set `BACKEND_URL` at runtime — no rebuild required:
>
> ```bash
> # Linux / macOS
> BACKEND_URL=http://myserver.com:9096 docker-compose up -d
>
> # Podman (via compose.sh wrapper)
> BACKEND_URL=http://192.168.1.50:9096 ./compose.sh up -d
>
> # Windows (PowerShell)
> $env:BACKEND_URL="http://myserver.com:9096"; docker-compose up -d
>
> # Or add to a .env file next to docker-compose.yml:
> # BACKEND_URL=http://myserver.com:9096
> ```

If you prefer to call the container engine directly, Podman users can run `podman compose up -d`, or force the wrapper to use Podman with `./compose.sh --engine podman up -d`.
Depending on your local Podman configuration, `podman compose` may still delegate to an external compose provider while talking to the Podman socket.

---

### 🐋 Standalone Deploy (Portainer, Uncloud, NAS, etc.)

No need to clone the repo. Use the pre-built images published to the GitHub Container Registry.

Create a `docker-compose.yml` with the following content and deploy it directly — paste it into Portainer's stack editor, `uncloud deploy`, or any Docker host:

```yaml
services:
  backend:
    image: ghcr.io/bigbodycobain/shadowbroker-backend:latest
    container_name: shadowbroker-backend
    ports:
      - "8000:8000"
    environment:
      - AIS_API_KEY=your_aisstream_key          # Required — get one free at aisstream.io
      - OPENSKY_CLIENT_ID=                       # Optional — higher flight data rate limits
      - OPENSKY_CLIENT_SECRET=                   # Optional — paired with Client ID above
      - LTA_ACCOUNT_KEY=                         # Optional — Singapore CCTV cameras
      - CORS_ORIGINS=                            # Optional — comma-separated allowed origins
    volumes:
      - backend_data:/app/data
    restart: unless-stopped

  frontend:
    image: ghcr.io/bigbodycobain/shadowbroker-frontend:latest
    container_name: shadowbroker-frontend
    ports:
      - "3000:3000"
    environment:
      - BACKEND_URL=http://backend:8000   # Docker internal networking — no rebuild needed
    depends_on:
      - backend
    restart: unless-stopped

volumes:
  backend_data:
```

> **How it works:** The frontend container proxies all `/api/*` requests through the Next.js server to `BACKEND_URL` using Docker's internal networking. The browser only ever talks to port 3000 — port 8000 does not need to be exposed externally.
>
> `BACKEND_URL` is a plain runtime environment variable (not a build-time `NEXT_PUBLIC_*`), so you can change it in Portainer, Uncloud, or any compose editor without rebuilding the image. Set it to the address where your backend is reachable from inside the Docker network (e.g. `http://backend:8000`, `http://192.168.1.50:8000`).

---

### 📦 Quick Start (No Code Required)

If you just want to run the dashboard without dealing with terminal commands:

1. Go to the **[Releases](../../releases)** tab on the right side of this GitHub page.
2. Download the latest `.zip` file from the release.
3. Extract the folder to your computer.
4. **Windows:** Double-click `start.bat`.
   **Mac/Linux:** Open terminal, type `chmod +x start.sh`, and run `./start.sh`.
5. It will automatically install everything and launch the dashboard!

---

### 💻 Developer Setup

If you want to modify the code or run from source:

#### Prerequisites

* **Node.js** 18+ and **npm** — [nodejs.org](https://nodejs.org/)
* **Python** 3.10, 3.11, or 3.12 with `pip` — [python.org](https://www.python.org/downloads/) (**check "Add to PATH"** during install)
  * ⚠️ Python 3.13+ may have compatibility issues with some dependencies. **3.11 or 3.12 is recommended.**
* API keys for: `aisstream.io` (required), and optionally `opensky-network.org` (OAuth2), `lta.gov.sg`

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/shadowbroker.git
cd shadowbroker/live-risk-dashboard

# Backend setup
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux
pip install -r requirements.txt   # includes pystac-client for Sentinel-2

# Create .env with your API keys
echo "AIS_API_KEY=your_aisstream_key" >> .env
echo "OPENSKY_CLIENT_ID=your_opensky_client_id" >> .env
echo "OPENSKY_CLIENT_SECRET=your_opensky_secret" >> .env

# Frontend setup
cd ../frontend
npm install
```

### Running

```bash
# From the frontend directory — starts both frontend & backend concurrently
npm run dev
```

This starts:

* **Next.js** frontend on `http://localhost:3000`
* **FastAPI** backend on `http://localhost:8000`

---

## 🎛️ Data Layers

All layers are independently toggleable from the left panel:

| Layer | Default | Description |
|---|---|---|
| Commercial Flights | ✅ ON | Airlines, cargo, GA aircraft |
| Private Flights | ✅ ON | Non-commercial private aircraft |
| Private Jets | ✅ ON | High-value bizjets with owner data |
| Military Flights | ✅ ON | Military & government aircraft |
| Tracked Aircraft | ✅ ON | Special interest watch list |
| Satellites | ✅ ON | Orbital assets by mission type |
| Carriers / Mil / Cargo | ✅ ON | Navy carriers, cargo ships, tankers |
| Civilian Vessels | ❌ OFF | Yachts, fishing, recreational |
| Cruise / Passenger | ✅ ON | Cruise ships and ferries |
| Earthquakes (24h) | ✅ ON | USGS seismic events |
| CCTV Mesh | ❌ OFF | Surveillance camera network |
| Ukraine Frontline | ✅ ON | Live warfront positions |
| Global Incidents | ✅ ON | GDELT conflict events |
| GPS Jamming | ✅ ON | NAC-P degradation zones |
| MODIS Terra (Daily) | ❌ OFF | NASA GIBS daily satellite imagery |
| High-Res Satellite | ❌ OFF | Esri sub-meter satellite imagery |
| KiwiSDR Receivers | ❌ OFF | Public SDR radio receivers |
| Fire Hotspots (24h) | ❌ OFF | NASA FIRMS VIIRS thermal anomalies |
| Internet Outages | ❌ OFF | IODA regional connectivity alerts |
| Data Centers | ❌ OFF | Global data center locations (2,000+) |
| Day / Night Cycle | ✅ ON | Solar terminator overlay |

---

## 🔧 Performance

The platform is optimized for handling massive real-time datasets:

* **Gzip Compression** — API payloads compressed ~92% (11.6 MB → 915 KB)
* **ETag Caching** — `304 Not Modified` responses skip redundant JSON parsing
* **Viewport Culling** — Only features within the visible map bounds (+20% buffer) are rendered
* **Imperative Map Updates** — High-volume layers (flights, satellites, fires) bypass React reconciliation via direct `setData()` calls
* **Clustered Rendering** — Ships, CCTV, earthquakes, and data centers use MapLibre clustering to reduce feature count
* **Debounced Viewport Updates** — 300ms debounce prevents GeoJSON rebuild thrash during pan/zoom; 2s debounce on dense layers (satellites, fires)
* **Position Interpolation** — Smooth 10s tick animation between data refreshes
* **React.memo** — Heavy components wrapped to prevent unnecessary re-renders
* **Coordinate Precision** — Lat/lng rounded to 5 decimals (~1m) to reduce JSON size

---

## 📁 Project Structure

```
live-risk-dashboard/
├── backend/
│   ├── main.py                     # FastAPI app, middleware, API routes
│   ├── carrier_cache.json          # Persisted carrier OSINT positions
│   ├── cctv.db                     # SQLite CCTV camera database
│   ├── config/
│   │   └── news_feeds.json         # User-customizable RSS feed list (persists across restarts)
│   └── services/
│       ├── data_fetcher.py         # Core scheduler — fetches all data sources
│       ├── ais_stream.py           # AIS WebSocket client (25K+ vessels)
│       ├── carrier_tracker.py      # OSINT carrier position tracker
│       ├── cctv_pipeline.py        # Multi-source CCTV camera ingestion
│       ├── geopolitics.py          # GDELT + Ukraine frontline fetcher
│       ├── region_dossier.py       # Right-click country/city intelligence
│       ├── radio_intercept.py      # Scanner radio feed integration
│       ├── kiwisdr_fetcher.py      # KiwiSDR receiver scraper
│       ├── sentinel_search.py      # Sentinel-2 STAC imagery search
│       ├── network_utils.py        # HTTP client with curl fallback
│       ├── api_settings.py         # API key management
│       └── news_feed_config.py     # RSS feed config manager (add/remove/weight feeds)
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   └── page.tsx            # Main dashboard — state, polling, layout
│   │   └── components/
│   │       ├── MaplibreViewer.tsx   # Core map — 2,000+ lines, all GeoJSON layers
│   │       ├── NewsFeed.tsx         # SIGINT feed + entity detail panels
│   │       ├── WorldviewLeftPanel.tsx   # Data layer toggles
│   │       ├── WorldviewRightPanel.tsx  # Search + filter sidebar
│   │       ├── FilterPanel.tsx     # Basic layer filters
│   │       ├── AdvancedFilterModal.tsx  # Airport/country/owner filtering
│   │       ├── MapLegend.tsx       # Dynamic legend with all icons
│   │       ├── MarketsPanel.tsx    # Global financial markets ticker
│   │       ├── RadioInterceptPanel.tsx # Scanner-style radio panel
│   │       ├── FindLocateBar.tsx   # Search/locate bar
│   │       ├── ChangelogModal.tsx  # Version changelog popup
│   │       ├── SettingsPanel.tsx   # App settings (API Keys + News Feed manager)
│   │       ├── ScaleBar.tsx        # Map scale indicator
│   │       ├── WikiImage.tsx       # Wikipedia image fetcher
│   │       └── ErrorBoundary.tsx   # Crash recovery wrapper
│   └── package.json
```

---

## 🔑 Environment Variables

### Backend (`backend/.env`)

```env
# Required
AIS_API_KEY=your_aisstream_key                # Maritime vessel tracking (aisstream.io)

# Optional (enhances data quality)
OPENSKY_CLIENT_ID=your_opensky_client_id      # OAuth2 — higher rate limits for flight data
OPENSKY_CLIENT_SECRET=your_opensky_secret     # OAuth2 — paired with Client ID above
LTA_ACCOUNT_KEY=your_lta_key                  # Singapore CCTV cameras
```

### Frontend

| Variable | Where to set | Purpose |
|---|---|---|
| `BACKEND_URL` | `environment` in `docker-compose.yml`, or shell env | URL the Next.js server uses to proxy API calls to the backend. Defaults to `http://backend:8000`. **Runtime variable — no rebuild needed.** |

**How it works:** The frontend proxies all `/api/*` requests through the Next.js server to `BACKEND_URL` using Docker's internal networking. Browsers only talk to port 3000; port 8000 never needs to be exposed externally. For local dev without Docker, `BACKEND_URL` defaults to `http://localhost:8000`.

---

## ⚠️ Disclaimer

This is an **educational and research tool** built entirely on publicly available, open-source intelligence (OSINT) data. No classified, restricted, or non-public data sources are used. Carrier positions are estimates based on public reporting. The military-themed UI is purely aesthetic.

**Do not use this tool for any operational, military, or intelligence purpose.**

---

## 📜 License

This project is for educational and personal research purposes. See individual API provider terms of service for data usage restrictions.

---

<p align="center">
  <sub>Built with ☕ and too many API calls / Сделано на ☕ и слишком многих API-вызовах</sub>
</p>
