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
    sections: {
        home: (await import('./sections/home.astro')).default,
        portfolio: (await import('./sections/briefcase.astro')).default,
        about: (await import('./sections/user.astro')).default,
        contact: (await import('./sections/envelop.astro')).default,
    },
    github: (await import('./github.astro')).default,
    externalLink: (await import('./external-link.astro')).default,
    code: (await import('./code.astro')).default,
    mailForward: (await import('./mail-forward.astro')).default,
    unknown: (await import('./unknown.astro')).default
}

export default Icons;