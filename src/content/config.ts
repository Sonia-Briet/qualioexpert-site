import { defineCollection, z } from 'astro:content';

// Définition de la collection "blog".
// Chaque article est un fichier .md dans src/content/blog/
// avec un en-tête (frontmatter) contenant ces champs.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    brouillon: z.boolean().default(false),
    categorie: z.enum([
      'Bilan de compétences',
      "Orientation scolaire",
      'Ateliers',
      'Actualités',
    ]),
  }),
});

export const collections = { blog };
