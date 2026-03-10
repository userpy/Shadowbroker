"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, AlertTriangle, Activity, Satellite, Cctv, ChevronDown, ChevronUp, Ship, Eye, Anchor, Settings, Sun, BookOpen, Radio, Languages } from "lucide-react";
import type { AppLanguage } from "@/lib/threatRegulations";

const WorldviewLeftPanel = React.memo(function WorldviewLeftPanel({
    data,
    activeLayers,
    setActiveLayers,
    onSettingsClick,
    onLegendClick,
    language,
    onSetLanguage
}: {
    data: any;
    activeLayers: any;
    setActiveLayers: any;
    onSettingsClick?: () => void;
    onLegendClick?: () => void;
    language?: AppLanguage;
    onSetLanguage?: (lang: AppLanguage) => void;
}) {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langMenuRef = useRef<HTMLDivElement>(null);
    const lang: AppLanguage = language || "ru";
    const tr = (ru: string, en: string) => (lang === "ru" ? ru : en);
    const LANGUAGE_LABELS: Record<AppLanguage, { flag: string; label: string }> = {
        ru: { flag: "🇷🇺", label: "Русский" },
        en: { flag: "🇺🇸", label: "English" },
    };
    const currentLangLabel = `${LANGUAGE_LABELS[lang].flag} ${LANGUAGE_LABELS[lang].label}`;

    useEffect(() => {
        if (!isLangOpen) return;
        const handleOutside = (event: MouseEvent | TouchEvent) => {
            const target = event.target as Node | null;
            if (!target || !langMenuRef.current) return;
            if (!langMenuRef.current.contains(target)) setIsLangOpen(false);
        };
        document.addEventListener("mousedown", handleOutside);
        document.addEventListener("touchstart", handleOutside);
        return () => {
            document.removeEventListener("mousedown", handleOutside);
            document.removeEventListener("touchstart", handleOutside);
        };
    }, [isLangOpen]);

    // Compute ship category counts
    const importantShipCount = data?.ships?.filter((s: any) => ['carrier', 'military_vessel', 'tanker', 'cargo'].includes(s.type))?.length || 0;
    const passengerShipCount = data?.ships?.filter((s: any) => s.type === 'passenger')?.length || 0;
    const civilianShipCount = data?.ships?.filter((s: any) => !['carrier', 'military_vessel', 'tanker', 'cargo', 'passenger'].includes(s.type))?.length || 0;

    const layers = [
        { id: "flights", name: tr("Коммерческие рейсы", "Commercial Flights"), source: "adsb.lol", count: data?.commercial_flights?.length || 0, icon: Plane },
        { id: "private", name: tr("Частные рейсы", "Private Flights"), source: "adsb.lol", count: data?.private_flights?.length || 0, icon: Plane },
        { id: "jets", name: tr("Бизнес-джеты", "Private Jets"), source: "adsb.lol", count: data?.private_jets?.length || 0, icon: Plane },
        { id: "military", name: tr("Военные рейсы", "Military Flights"), source: "adsb.lol", count: data?.military_flights?.length || 0, icon: AlertTriangle },
        { id: "tracked", name: tr("Отслеживаемые борта", "Tracked Aircraft"), source: "Plane-Alert DB", count: data?.tracked_flights?.length || 0, icon: Eye },
        { id: "earthquakes", name: tr("Землетрясения (24ч)", "Earthquakes (24h)"), source: "USGS", count: data?.earthquakes?.length || 0, icon: Activity },
        { id: "satellites", name: tr("Спутники", "Satellites"), source: "CelesTrak SGP4", count: data?.satellites?.length || 0, icon: Satellite },
        { id: "ships_important", name: tr("Авианосцы / Воен / Карго", "Carriers / Mil / Cargo"), source: "AIS Stream", count: importantShipCount, icon: Ship },
        { id: "ships_civilian", name: tr("Гражданские суда", "Civilian Vessels"), source: "AIS Stream", count: civilianShipCount, icon: Anchor },
        { id: "ships_passenger", name: tr("Круиз / Пассажирские", "Cruise / Passenger"), source: "AIS Stream", count: passengerShipCount, icon: Anchor },
        { id: "ukraine_frontline", name: tr("Фронт Украина", "Ukraine Frontline"), source: "DeepStateMap", count: data?.frontlines ? 1 : 0, icon: AlertTriangle },
        { id: "global_incidents", name: tr("Глобальные инциденты", "Global Incidents"), source: "GDELT", count: data?.gdelt?.length || 0, icon: Activity },
        { id: "cctv", name: "CCTV Mesh", source: "CCTV Mesh + Street View", count: data?.cctv?.length || 0, icon: Cctv },
        { id: "gps_jamming", name: tr("GPS-помехи", "GPS Jamming"), source: "ADS-B NACp", count: data?.gps_jamming?.length || 0, icon: Radio },
        { id: "day_night", name: tr("День / Ночь", "Day / Night Cycle"), source: "Solar Calc", count: null, icon: Sun },
    ];

    const shipIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" /><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" /></svg>;

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full flex-1 min-h-0 flex flex-col pointer-events-none"
        >
            {/* Header */}
            <div className="mb-6 pointer-events-auto">
                <div className="text-[10px] text-gray-400 font-mono tracking-widest mb-1">TOP SECRET // SI-TK // NOFORN</div>
                <div className="text-[10px] text-gray-500 font-mono tracking-widest mb-4">KH11-4094 OPS-4168</div>
                <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold tracking-[0.2em] text-cyan-50">FLIR</h1>
                    {onSettingsClick && (
                        <button
                            onClick={onSettingsClick}
                            className="w-7 h-7 rounded-lg border border-gray-700 hover:border-cyan-500/50 flex items-center justify-center text-gray-500 hover:text-cyan-400 transition-all hover:bg-cyan-950/20 group"
                            title={tr("Настройки системы", "System Settings")}
                        >
                            <Settings size={14} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                    )}
                    {onLegendClick && (
                            <button
                                onClick={onLegendClick}
                                className="h-7 px-2 rounded-lg border border-gray-700 hover:border-cyan-500/50 flex items-center justify-center gap-1 text-gray-500 hover:text-cyan-400 transition-all hover:bg-cyan-950/20"
                                title={tr("Легенда карты / Ключ иконок", "Map Legend / Icon Key")}
                            >
                                <BookOpen size={12} />
                                <span className="text-[8px] font-mono tracking-widest font-bold">{tr("МЕТКИ", "KEY")}</span>
                            </button>
                    )}
                    {onSetLanguage && (
                        <div className="relative" ref={langMenuRef}>
                            <button
                                onClick={() => setIsLangOpen(v => !v)}
                                className="h-7 px-2 rounded-lg border border-gray-700 hover:border-cyan-500/50 flex items-center justify-center gap-1 text-gray-500 hover:text-cyan-300 transition-all hover:bg-cyan-950/20"
                                title={tr("Выбор языка", "Choose language")}
                            >
                                <Languages size={12} />
                                <span className="text-[8px] font-mono tracking-wider font-bold">{currentLangLabel}</span>
                                <ChevronDown size={12} className={`transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
                            </button>
                            {isLangOpen && (
                                <div className="absolute right-0 mt-1 min-w-[120px] rounded-lg border border-gray-700 bg-black/90 backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,0.6)] z-50">
                            <button
                                onClick={() => { onSetLanguage("ru"); setIsLangOpen(false); }}
                                className={`w-full px-3 py-2 text-left text-[9px] font-mono tracking-wider transition-colors ${lang === "ru" ? "text-cyan-300" : "text-gray-400 hover:text-cyan-200"}`}
                            >
                                {LANGUAGE_LABELS.ru.flag} {LANGUAGE_LABELS.ru.label}
                            </button>
                            <button
                                onClick={() => { onSetLanguage("en"); setIsLangOpen(false); }}
                                className={`w-full px-3 py-2 text-left text-[9px] font-mono tracking-wider transition-colors ${lang === "en" ? "text-cyan-300" : "text-gray-400 hover:text-cyan-200"}`}
                            >
                                {LANGUAGE_LABELS.en.flag} {LANGUAGE_LABELS.en.label}
                            </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Data Layers Box */}
            <div className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-xl pointer-events-auto shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden max-h-full">

                {/* Header / Toggle */}
                <div
                    className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-900/50 transition-colors border-b border-gray-800/50"
                    onClick={() => setIsMinimized(!isMinimized)}
                >
                    <span className="text-[10px] text-gray-500 font-mono tracking-widest">{tr("СЛОИ ДАННЫХ", "DATA LAYERS")}</span>
                    <button className="text-gray-500 hover:text-white transition-colors">
                        {isMinimized ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                    </button>
                </div>

                <AnimatePresence>
                    {!isMinimized && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-y-auto styled-scrollbar"
                        >
                            <div className="flex flex-col gap-6 p-4 pt-2 pb-6">
                                {layers.map((layer, idx) => {
                                    const Icon = layer.icon;
                                    const active = activeLayers[layer.id as keyof typeof activeLayers] || false;

                                    return (
                                        <div
                                            key={idx}
                                            className="flex items-start justify-between group cursor-pointer"
                                            onClick={() => setActiveLayers((prev: any) => ({ ...prev, [layer.id]: !active }))}
                                        >
                                            <div className="flex gap-3">
                                                <div className={`mt-1 ${active ? 'text-cyan-400' : 'text-gray-600 group-hover:text-gray-400'} transition-colors`}>
                                                    {(['ships_important', 'ships_civilian', 'ships_passenger'].includes(layer.id)) ? shipIcon : <Icon size={16} strokeWidth={1.5} />}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className={`text-sm font-medium ${active ? 'text-white' : 'text-gray-400'} tracking-wide`}>{layer.name}</span>
                                                    <span className="text-[9px] text-gray-600 font-mono tracking-wider mt-0.5">{layer.source} · {active ? tr('АКТИВНО', 'LIVE') : tr('ВЫКЛ', 'OFF')}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                {active && layer.count > 0 && (
                                                    <span className="text-[10px] text-gray-300 font-mono">{layer.count.toLocaleString()}</span>
                                                )}
                                                <div className={`text-[9px] font-mono tracking-wider px-2 py-0.5 rounded-full border ${active
                                                    ? 'border-cyan-500/50 text-cyan-400 bg-cyan-950/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                                                    : 'border-gray-800 text-gray-600 bg-transparent'
                                                    }`}>
                                                    {active ? tr("ВКЛ", "ON") : tr("ВЫКЛ", "OFF")}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
});

export default WorldviewLeftPanel;
