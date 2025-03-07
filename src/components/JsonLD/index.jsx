const JsonLD = () => {
    const jsonld = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        name: 'Dr. Vahid Gomarian',
        image: 'https://drgomaryan.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.38468a3a.png&w=1080&q=75',
        "@id": "",
        url: "https://drgomaryan.ir",
        address: [
            {
                "@type": "PostalAddress",
                "streetAddress": "Imam Khomeini blvd.",
                "addressLocality": "Qods city",
                "addressRegion": "Tehran",
                "postalCode": "POSTCODE",
                "addressCountry": "IR"
            },
        ],
        department: [
            {
                "@type": "Dentist",
                "name": "Location",
                "image": "",
                "telephone": "02146807225",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Imam Khomeini blvd.",
                    "addressLocality": "Qods city",
                    "addressRegion": "Tehran",
                    "postalCode": "POSTCODE",
                    "addressCountry": "IR"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Saturday",
                        "sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday"
                    ],
                    "opens": "09:00",
                    "closes": "21:00"
                }
            },
        ]
    }
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}>
            </script>
        </>
    )
}

export default JsonLD