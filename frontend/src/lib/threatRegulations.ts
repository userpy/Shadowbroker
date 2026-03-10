export type ThreatLevelIndex = 0 | 1 | 2 | 3;
export type AppLanguage = "ru" | "en";
export type LocalizedText = {
  ru: string;
  en: string;
};
export type MapSegment = {
  id: string;
  label: LocalizedText;
  multiplier: number;
};

export const THREAT_WEIGHTS = {
  incident: 1,
  emergencySquawk: 35,
  gpsJamming: 2,
  earthquake: 1,
  militaryFlight: 0.4,
} as const;

export const THREAT_THRESHOLDS = {
  normal: 60,
  bad: 140,
  emergency: 240,
} as const;

export const THREAT_LEVELS = [
  {
    label: { ru: "Хорошо", en: "Good" },
    color: "text-emerald-300 border-emerald-500/30 bg-emerald-950/30"
  },
  {
    label: { ru: "Нормально", en: "Normal" },
    color: "text-yellow-300 border-yellow-500/30 bg-yellow-950/30"
  },
  {
    label: { ru: "Плохо", en: "Bad" },
    color: "text-orange-300 border-orange-500/30 bg-orange-950/30"
  },
  {
    label: { ru: "Рекомендуется объявить чрезвычайное положение", en: "Recommend Declaring Emergency" },
    color: "text-red-300 border-red-500/40 bg-red-950/30"
  },
] as const;

export const LEVEL_REGULATIONS: Record<ThreatLevelIndex, {
  code: string;
  objective: LocalizedText;
  cadence: LocalizedText;
  escalation: LocalizedText;
}> = {
  0: {
    code: "REG-01/GREEN",
    objective: {
      ru: "Поддержание базового мониторинга и профилактика пропуска сигналов.",
      en: "Maintain baseline monitoring and prevent missed signals."
    },
    cadence: {
      ru: "Обновление сводки: каждые 15 минут.",
      en: "Briefing cadence: every 15 minutes."
    },
    escalation: {
      ru: "Эскалация не требуется, только журналирование.",
      en: "No escalation required, logging only."
    },
  },
  1: {
    code: "REG-02/YELLOW",
    objective: {
      ru: "Усиленное наблюдение по ключевым регионам и объектам.",
      en: "Enhanced monitoring of key regions and targets."
    },
    cadence: {
      ru: "Обновление сводки: каждые 10 минут.",
      en: "Briefing cadence: every 10 minutes."
    },
    escalation: {
      ru: "Уведомить дежурного аналитика и подтвердить источники.",
      en: "Notify duty analyst and validate sources."
    },
  },
  2: {
    code: "REG-03/ORANGE",
    objective: {
      ru: "Оперативная стабилизация обстановки и приоритизация критичных событий.",
      en: "Rapid stabilization and prioritization of critical events."
    },
    cadence: {
      ru: "Обновление сводки: каждые 5 минут.",
      en: "Briefing cadence: every 5 minutes."
    },
    escalation: {
      ru: "Передать оперативный дайджест ответственному руководителю смены.",
      en: "Send operational digest to shift lead."
    },
  },
  3: {
    code: "REG-04/RED",
    objective: {
      ru: "Немедленное реагирование и координация по аварийному контуру.",
      en: "Immediate response and emergency coordination."
    },
    cadence: {
      ru: "Непрерывный мониторинг + сводка каждые 2 минуты.",
      en: "Continuous monitoring + briefing every 2 minutes."
    },
    escalation: {
      ru: "Запуск протокола ЧП, уведомление всех ответственных каналов.",
      en: "Trigger emergency protocol and notify all responsible channels."
    },
  },
};

export const INDICATOR_REGULATIONS = {
  emergencySquawk: {
    code: "AIR-7700",
    indicator: { ru: "Аварийные squawk 7700", en: "Emergency squawk 7700" },
    highThreshold: 1,
    lowAction: {
      ru: "Срочных сигналов не обнаружено. Оставить базовый контроль.",
      en: "No urgent signals detected. Keep baseline control."
    },
    highAction: {
      ru: "Проверить каждый борт и закрепить в приоритетном трекинге.",
      en: "Check each aircraft and pin to priority tracking."
    },
  },
  gpsJamming: {
    code: "NAV-201",
    indicator: { ru: "GPS-помехи", en: "GPS jamming" },
    highThreshold: 20,
    lowAction: {
      ru: "Держать включенным слой GPS-помех для фонового мониторинга.",
      en: "Keep GPS jamming layer enabled for background monitoring."
    },
    highAction: {
      ru: "Проверить зоны помех и корреляцию с авиационным трафиком.",
      en: "Check jamming zones and correlate with air traffic."
    },
  },
  globalIncidents: {
    code: "INT-310",
    indicator: { ru: "Глобальные инциденты", en: "Global incidents" },
    highThreshold: 100,
    lowAction: {
      ru: "Проводить плановый обзор динамики ленты инцидентов.",
      en: "Run planned trend reviews of incident feed."
    },
    highAction: {
      ru: "Сформировать короткий TOP-10 по регионам и типам событий.",
      en: "Build a short TOP-10 by regions and event types."
    },
  },
  militaryFlights: {
    code: "MIL-415",
    indicator: { ru: "Военные рейсы", en: "Military flights" },
    highThreshold: 60,
    lowAction: {
      ru: "Поддерживать стандартный контроль военного трафика.",
      en: "Keep standard military traffic control."
    },
    highAction: {
      ru: "Включить дополнительный контроль маршрутов и приграничных зон.",
      en: "Enable extra route and border-zone monitoring."
    },
  },
} as const;

const MAP_SEGMENT_RULES: Array<{
  id: string;
  label: LocalizedText;
  multiplier: number;
  latMin: number;
  latMax: number;
  lngMin: number;
  lngMax: number;
}> = [
  {
    id: "mena",
    label: { ru: "MENA", en: "MENA" },
    multiplier: 1.3,
    latMin: 12,
    latMax: 40,
    lngMin: 30,
    lngMax: 65
  },
  {
    id: "europe",
    label: { ru: "Европа", en: "Europe" },
    multiplier: 1.2,
    latMin: 35,
    latMax: 72,
    lngMin: -25,
    lngMax: 45
  },
  {
    id: "east_asia",
    label: { ru: "Восточная Азия", en: "East Asia" },
    multiplier: 1.15,
    latMin: 5,
    latMax: 55,
    lngMin: 95,
    lngMax: 150
  },
  {
    id: "south_asia",
    label: { ru: "Южная Азия", en: "South Asia" },
    multiplier: 1.1,
    latMin: 5,
    latMax: 35,
    lngMin: 60,
    lngMax: 95
  },
  {
    id: "north_america",
    label: { ru: "Северная Америка", en: "North America" },
    multiplier: 1.05,
    latMin: 10,
    latMax: 75,
    lngMin: -170,
    lngMax: -50
  },
];

export function resolveMapSegment(latitude: number, longitude: number): MapSegment {
  for (const rule of MAP_SEGMENT_RULES) {
    if (
      latitude >= rule.latMin
      && latitude <= rule.latMax
      && longitude >= rule.lngMin
      && longitude <= rule.lngMax
    ) {
      return { id: rule.id, label: rule.label, multiplier: rule.multiplier };
    }
  }

  return { id: "global", label: { ru: "Глобально", en: "Global" }, multiplier: 1.0 };
}

export function getZoomThreatMultiplier(zoom: number): number {
  if (zoom >= 8) return 1.25;
  if (zoom >= 5) return 1.15;
  if (zoom >= 3) return 1.05;
  return 1.0;
}
