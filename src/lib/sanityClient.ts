// Caminho: src/lib/sanityClient.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"; // 1. Importe o pacote

export const client = createClient({
    projectId: "jysbbrsy",
    dataset: "production",
    apiVersion: "2025-11-03",
    useCdn: false,
});

// 2. Crie o construtor de imagens
const builder = imageUrlBuilder(client);

// 3. Exporte a função 'urlFor' que usaremos no nosso site
export function urlFor(source: any) {
    return builder.image(source);
}