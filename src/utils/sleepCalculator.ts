// src/utils/sleepCalculator.ts

/**
 * SLEEP CALCULATOR - Core Algorithm
 * Based on 90-minute sleep cycles (Nathaniel Kleitman, 1963)
 * 
 * @author L'Éveil Mental
 * @version 1.0.0
 */

// ============================================
// CONFIGURATION
// ============================================

export const CONFIG = {
    BASE_CYCLE_MINUTES: 90,
    SLEEP_ONSET_MINUTES: 14,

    AGE_ADJUSTMENTS: {
        TEEN: { range: [13, 17] as const, adjust: +10, recommendedHours: [8, 10] as const },
        YOUNG: { range: [18, 29] as const, adjust: 0, recommendedHours: [7, 9] as const },
        ADULT: { range: [30, 49] as const, adjust: -5, recommendedHours: [7, 9] as const },
        MATURE: { range: [50, 64] as const, adjust: -8, recommendedHours: [7, 8] as const },
        SENIOR: { range: [65, 100] as const, adjust: -10, recommendedHours: [6, 8] as const }
    }
} as const;

// ============================================
// TYPES
// ============================================

export interface SleepCalculation {
    bedtime: string;              // Format HH:MM (ex: "22:30")
    bedtimeWindow: string;        // Ex: "22:16 - 22:44"
    actualHours: number;          // Ex: 7.5
    numCycles: number;            // Ex: 5
    cycleDuration: number;        // Ex: 90 ou 85 (avec ajustement âge)
    alternatives: {
        short: { bedtime: string; hours: number; cycles: number };
        optimal: { bedtime: string; hours: number; cycles: number };
        long: { bedtime: string; hours: number; cycles: number };
    };
    ageGroup: string;             // Ex: "ADULT"
    recommendedHours: [number, number]; // Ex: [7, 9]
}

export interface ValidationResult {
    valid: boolean;
    error?: string;
    warning?: string;
}

// ============================================
// CORE ALGORITHM
// ============================================

/**
 * Calculate optimal bedtime based on wake time and desired sleep duration
 */
export function calculateBedtime(
    wakeTime: string,
    desiredHours: number,
    age: number = 30
): SleepCalculation {
    // 1. Convert wake time to minutes since midnight
    const [h, m] = wakeTime.split(':').map(Number);
    const wakeMinutes = h * 60 + m;

    // 2. Get adjusted cycle duration for age
    const cycleDuration = getCycleDuration(age);
    const ageGroup = getAgeGroup(age);
    const recommendedHours = getRecommendedHours(age);

    // 3. Calculate complete cycles
    const desiredMinutes = desiredHours * 60;
    const numCycles = Math.floor(desiredMinutes / cycleDuration);

    // 4. Calculate total time in bed
    const actualSleep = numCycles * cycleDuration;
    const totalMinutes = actualSleep + CONFIG.SLEEP_ONSET_MINUTES;

    // 5. Calculate bedtime
    let bedtimeMinutes = wakeMinutes - totalMinutes;
    if (bedtimeMinutes < 0) bedtimeMinutes += 1440; // 24h = 1440 minutes

    // 6. Calculate bedtime window (±14 minutes OK)
    const windowStart = minutesToTime(bedtimeMinutes - 14);
    const windowEnd = minutesToTime(bedtimeMinutes + 14);

    // 7. Calculate alternatives
    const alternatives = calculateAlternatives(wakeMinutes, cycleDuration, numCycles);

    return {
        bedtime: minutesToTime(bedtimeMinutes),
        bedtimeWindow: `${windowStart} - ${windowEnd}`,
        actualHours: +(actualSleep / 60).toFixed(1),
        numCycles,
        cycleDuration,
        alternatives,
        ageGroup,
        recommendedHours
    };
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get cycle duration adjusted for age
 */
export function getCycleDuration(age: number): number {
    for (const [key, config] of Object.entries(CONFIG.AGE_ADJUSTMENTS)) {
        if (age >= config.range[0] && age <= config.range[1]) {
            return CONFIG.BASE_CYCLE_MINUTES + config.adjust;
        }
    }
    return CONFIG.BASE_CYCLE_MINUTES; // default
}

/**
 * Get age group label
 */
export function getAgeGroup(age: number): string {
    for (const [key, config] of Object.entries(CONFIG.AGE_ADJUSTMENTS)) {
        if (age >= config.range[0] && age <= config.range[1]) {
            return key;
        }
    }
    return 'ADULT';
}

/**
 * Get recommended sleep hours for age
 */
export function getRecommendedHours(age: number): [number, number] {
    for (const [key, config] of Object.entries(CONFIG.AGE_ADJUSTMENTS)) {
        if (age >= config.range[0] && age <= config.range[1]) {
            return config.recommendedHours;
        }
    }
    return [7, 9];
}

/**
 * Convert minutes since midnight to HH:MM format
 */
export function minutesToTime(min: number): string {
    // Handle negative and >24h values
    while (min < 0) min += 1440;
    while (min >= 1440) min -= 1440;

    const h = Math.floor(min / 60);
    const m = min % 60;

    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/**
 * Convert HH:MM to minutes since midnight
 */
export function timeToMinutes(time: string): number {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
}

/**
 * Calculate alternative bedtimes (short, optimal, long)
 */
function calculateAlternatives(
    wakeMinutes: number,
    cycleDuration: number,
    baseCycles: number
) {
    // Short sleep: -1 cycle
    const shortCycles = Math.max(4, baseCycles - 1);
    const shortSleep = shortCycles * cycleDuration;
    const shortBedtime = wakeMinutes - shortSleep - CONFIG.SLEEP_ONSET_MINUTES;

    // Optimal: 5 cycles (7.5h typical)
    const optimalCycles = 5;
    const optimalSleep = optimalCycles * cycleDuration;
    const optimalBedtime = wakeMinutes - optimalSleep - CONFIG.SLEEP_ONSET_MINUTES;

    // Long sleep: +1 cycle
    const longCycles = baseCycles + 1;
    const longSleep = longCycles * cycleDuration;
    const longBedtime = wakeMinutes - longSleep - CONFIG.SLEEP_ONSET_MINUTES;

    return {
        short: {
            bedtime: minutesToTime(shortBedtime),
            hours: +(shortSleep / 60).toFixed(1),
            cycles: shortCycles
        },
        optimal: {
            bedtime: minutesToTime(optimalBedtime),
            hours: +(optimalSleep / 60).toFixed(1),
            cycles: optimalCycles
        },
        long: {
            bedtime: minutesToTime(longBedtime),
            hours: +(longSleep / 60).toFixed(1),
            cycles: longCycles
        }
    };
}

// ============================================
// VALIDATION
// ============================================

/**
 * Validate wake time format
 */
export function validateWakeTime(time: string): ValidationResult {
    const regex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;

    if (!regex.test(time)) {
        return {
            valid: false,
            error: 'Format invalide. Utilise HH:MM (ex: 07:00)'
        };
    }

    return { valid: true };
}

/**
 * Validate age
 */
export function validateAge(age: number): ValidationResult {
    if (age < 13) {
        return {
            valid: false,
            error: 'Cet outil est pour 13 ans et +'
        };
    }

    if (age > 100) {
        return {
            valid: false,
            error: 'Vérifie ton âge 😉'
        };
    }

    return { valid: true };
}

/**
 * Validate sleep duration
 */
export function validateSleepDuration(hours: number): ValidationResult {
    if (hours < 4) {
        return {
            valid: true,
            warning: '⚠️ Moins de 4h peut être dangereux pour ta santé'
        };
    }

    if (hours > 12) {
        return {
            valid: true,
            warning: '⚠️ Plus de 12h : consulte un médecin si c\'est récurrent'
        };
    }

    return { valid: true };
}

/**
 * Get age range for analytics
 */
export function getAgeRange(age: number): string {
    if (age < 18) return '13-17';
    if (age < 30) return '18-29';
    if (age < 50) return '30-49';
    if (age < 65) return '50-64';
    return '65+';
}

// ============================================
// TESTING UTILITIES
// ============================================

/**
 * Test the calculator with various scenarios
 * Usage: runTests() in console
 */
export function runTests() {
    console.group('🧪 Sleep Calculator Tests');

    const scenarios = [
        { wake: '07:00', hours: 8, age: 15, label: 'Teen' },
        { wake: '07:00', hours: 8, age: 25, label: 'Young Adult' },
        { wake: '07:00', hours: 8, age: 35, label: 'Adult' },
        { wake: '07:00', hours: 8, age: 55, label: 'Mature' },
        { wake: '07:00', hours: 8, age: 70, label: 'Senior' },
        { wake: '05:30', hours: 6, age: 30, label: 'Early Riser' },
        { wake: '09:00', hours: 9, age: 30, label: 'Long Sleeper' },
    ];

    scenarios.forEach(scenario => {
        const result = calculateBedtime(scenario.wake, scenario.hours, scenario.age);
        console.log(`\n${scenario.label} (${scenario.age}y, ${scenario.hours}h sleep, wake ${scenario.wake}):`);
        console.log(`  Bedtime: ${result.bedtime} (±14min: ${result.bedtimeWindow})`);
        console.log(`  Cycles: ${result.numCycles} × ${result.cycleDuration}min = ${result.actualHours}h`);
        console.log(`  Alternatives: Short ${result.alternatives.short.bedtime}, Long ${result.alternatives.long.bedtime}`);
    });

    console.groupEnd();
}
