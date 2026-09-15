with open('astro.config.ts', 'r') as f:
    config = f.read()

config = config.replace('site: "https://arthelokyo.github.io/astrowind/"', 'site: "https://amanvelikiigmailcom.github.io/aeo_landing/"')
config = config.replace('base: "/astrowind"', 'base: "/aeo_landing"')

with open('astro.config.ts', 'w') as f:
    f.write(config)
