
// Audio Service using Web Audio API
// Generates sounds procedurally to avoid external asset dependencies.

let audioCtx: AudioContext | null = null;

const initAudio = () => {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
};

const createOscillator = (ctx: AudioContext, type: OscillatorType, freq: number, duration: number, startTime: number, vol: number = 0.1) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(vol, startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
};

export const playSFX = (type: 'correct' | 'wrong' | 'level_up') => {
    try {
        const ctx = initAudio();
        const now = ctx.currentTime;

        switch (type) {
            case 'correct':
                // Happy high-pitched two-tone chime (Major 3rd)
                createOscillator(ctx, 'sine', 523.25, 0.1, now, 0.1); // C5
                createOscillator(ctx, 'sine', 659.25, 0.3, now + 0.1, 0.1); // E5
                break;

            case 'wrong':
                // Sad low-pitched descending tone
                createOscillator(ctx, 'sawtooth', 150, 0.2, now, 0.05);
                createOscillator(ctx, 'sawtooth', 100, 0.2, now + 0.1, 0.05);
                break;

            case 'level_up':
                // Victory fanfare (C Major Arpeggio)
                const volume = 0.1;
                createOscillator(ctx, 'triangle', 523.25, 0.1, now, volume);       // C5
                createOscillator(ctx, 'triangle', 659.25, 0.1, now + 0.1, volume); // E5
                createOscillator(ctx, 'triangle', 783.99, 0.1, now + 0.2, volume); // G5
                createOscillator(ctx, 'triangle', 1046.50, 0.4, now + 0.3, volume); // C6
                break;
        }
    } catch (e) {
        console.warn("Audio Context failed to initialize", e);
    }
};
