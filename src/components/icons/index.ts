const Icons: Record<string, any> = {
    languages: {
        angular: (await import('./languages/angular.astro')).default,
        astro: (await import('./languages/astro.astro')).default,
        tailwindcss: (await import('./languages/tailwindcss.astro')).default,
    },
    socials: {
        github: (await import('./socials/github.astro')).default,
        linkedin: (await import('./socials/linkedin.astro')).default,
        instagram: (await import('./socials/instagram.astro')).default,
    },
    github: (await import('./github.astro')).default,
    externalLink: (await import('./external-link.astro')).default,
    unknown: (await import('./unknown.astro')).default
}

export default Icons;