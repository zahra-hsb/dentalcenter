const JsonLD = () => {
        const jsonld = {
            "@context": "[https://schema.org](https://schema.org)",
            "@type": "Dentist",
            "@id": "[https://drgomaryan.ir/](https://drgomaryan.ir/)",
            "name": "Dr. Vahid Gomarian",
            "image": "[https://drgomaryan.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.38468a3a.png&w=1080&q=75](https://drgomaryan.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.38468a3a.png&w=1080&q=75)",
            "url": "[https://drgomaryan.ir](https://drgomaryan.ir)",
            "telephone": "02146807225",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Imam Khomeini blvd.",
                "addressLocality": "Qods city",
                "addressRegion": "Tehran",
                "postalCode": "3875637331", 
                "addressCountry": "IR"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                    "opens": "09:00",
                    "closes": "21:00"
                }
            ],
        }
        return (
            <>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}>
                </script>
            </>
        )
    }

    export default JsonLD