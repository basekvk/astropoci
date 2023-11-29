
// Importa los archivos Markdown
const markdownFiles = await Astro.glob("../data/servicios/*.md");



// Extrae los frontmatters de los archivos Markdown
const pages = markdownFiles.map((file) => file.frontmatter);




export const linksServices = [
    {
      nombre: pages.map((page) => page.slug),
      url: pages.map((page) => page.url),
    },
]