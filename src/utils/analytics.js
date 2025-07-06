export const GA_TRACKING_ID = 'G-PP2CS2VDKQ';


// Initialize Google Analytics
export const initGA = () => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
            page_title: document.title,
            page_location: window.location.href,
        });
    }
};

// Track page views
export const trackPageView = (url) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};
 
// Track button cliks
export const trackButtonClick =(buttonName, location) => {
    trackEvent('click', 'button', `${buttonName}_${location}`);
};

// Track submissions
export const trackForSubmits = (formName) => {
    trackEvent('submit', 'form', formName);
};

export const trackExternalLink = (url, linkText) => {
    trackEvent('click', 'external_link', `${linkText}_${url}`);
};

