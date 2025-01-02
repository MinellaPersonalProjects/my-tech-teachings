export function useConsent() {
    const { gtag } = useGtag();

    function allConsentGranted() {
        gtag('consent', 'update', {
            ad_user_data: 'granted',
            ad_personalization: 'granted',
            ad_storage: 'granted',
            analytics_storage: 'granted',
        });
    }

    function consentGrantedAdStorage() {
        gtag('consent', 'update', {
            ad_storage: 'granted',
        });
    }

    return {
        allConsentGranted,
        consentGrantedAdStorage,
    };
}