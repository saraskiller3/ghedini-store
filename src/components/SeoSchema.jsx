export default function SeoSchema({
    name,
    description,
    image,
    url
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": name,
        "description": description,
        "brand": {
            "@type": "Brand",
            "name": "Ghedini Attachments"
        },
        "image": image,
        "url": url,
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(schema)}
        </script>
    );
}
