import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';

let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;

export const initFirebase = async () => {
    if (app && analytics) {
        return { app, analytics };
    }

    try {
        const response = await fetch('/__/firebase/init.json');
        if (!response.ok) {
            console.warn('Firebase init.json not found. Skipping Analytics.');
            return { app: null, analytics: null };
        }
        const config = await response.json();

        app = !getApps().length ? initializeApp(config) : getApp();

        if (typeof window !== 'undefined') {
            const supported = await isSupported();
            if (supported) {
                analytics = getAnalytics(app);
            }
        }
    } catch (error) {
        console.error('Error initializing Firebase:', error);
    }

    return { app, analytics };
};
