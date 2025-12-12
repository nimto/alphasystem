// Asset Version Manager
// This file provides cache-busting functionality for CSS, JS, and image files
// Version timestamp is updated automatically or manually when deploying

const ASSET_VERSION = '20251212150520'; // Format: YYYYMMDDHHmmss

// Auto-version function for dynamic loading
function getVersionedUrl(url) {
    if (!url) return url;
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}v=${ASSET_VERSION}`;
}

// Apply versioning to all CSS links, JS scripts, and images after DOM load
function applyVersionToAssets() {
    // Version CSS files
    document.querySelectorAll('link[rel="stylesheet"][href^="assets/"]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.includes('v=')) {
            link.setAttribute('href', getVersionedUrl(href));
        }
    });

    // Version JS files (local only)
    document.querySelectorAll('script[src^="assets/"]').forEach(script => {
        const src = script.getAttribute('src');
        if (src && !src.includes('v=')) {
            // Can't modify already loaded scripts, but this logs for reference
            console.log(`[Version] Script should be versioned: ${src}`);
        }
    });

    // Version images (local only)
    document.querySelectorAll('img[src^="assets/"], img[src^="products/"]').forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.includes('v=')) {
            img.setAttribute('src', getVersionedUrl(src));
        }
    });

    // Version background images in inline styles
    document.querySelectorAll('[style*="url("]').forEach(el => {
        const style = el.getAttribute('style');
        if (style && (style.includes('assets/') || style.includes('products/'))) {
            const newStyle = style.replace(/url\(['"]?(assets\/|products\/[^'")\s]+)['"]?\)/g, (match, url) => {
                if (!url.includes('v=')) {
                    return `url('${getVersionedUrl(url)}')`;
                }
                return match;
            });
            el.setAttribute('style', newStyle);
        }
    });
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.ASSET_VERSION = ASSET_VERSION;
    window.getVersionedUrl = getVersionedUrl;
}

// Auto-apply on DOM ready (optional - can be disabled if manual control preferred)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyVersionToAssets);
} else {
    applyVersionToAssets();
}
