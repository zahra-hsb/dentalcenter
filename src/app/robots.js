export default function robots() {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/'],
                disallow: ['/account/dashboard/'],
            },
        ],
        // sitemap: 'https://acme.com/sitemap.xml',
    }
}