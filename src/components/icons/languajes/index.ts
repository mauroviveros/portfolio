const Icons: Record<string, any> = {
    astro: (await import('./AstroIcon.astro')).default,
    tailwindcss: (await import('./TailwindIcon.astro')).default,
}

export default Icons;