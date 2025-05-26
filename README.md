# About

This is a minor project to get familiar with Svelte, SvelteKit, and a bit with Tailwind and DaisyUI.

## Getting started

The project uses pnpm for package management, so assuming you have pnpm installed, it should be sufficient to run "pnpm install".

```bash
# install all dependencies
pnpm install
```

From there, all commands you need are in the package.json. Just remember to run them through pnpm!

```bash
# Run the project in development environment
pnpm run dev
```

## Considerations

- I have intentionally tried to keep the card and modal into separate components, since they're responsible for different things. Keeping these lines clean cut has been something of a challenge, but I imagine a proper state manager could solve much of that (Sveltekit seems to have one, haven't got sure if it's sufficient).
- I went with the dialog element to "automatically" get the tab focus, close-with-escape and close-on-outside-click.
- I have been as frugal as possible with element nesting, i.e. used no divs that didn't serve a role.
- Until I added tailwind and daisy, I used semantic as far as was sensible, and could have expanded with custom elements had I wanted to. I'm personally fond of querying the element with the occasional custom attribute or class (when an element is, you know, an "instance" of a class!) to apply styling, and haven't been overly enthused by tailwind's class spamming. Daisy correct this to some extent, but I still find we're back in Bootstrap with it.

## Known issues

- Something I've done has messed up the benefits I wanted from the dialog element 😢

## Reflection

- In this moment of AI models breaking through by the day, I've turned to github co-pilot as a debugging partner. Let's just say it's been more than a little annoying it seems unaware of Svelte 5's runes syntax, and consistently recommend using deprecated or incompatible solutions, despite being provided the required documentation.
- Passing down the fetched collection from +page.ts to page.svelte turned out a real eye-sore, in part due to the above, in part due to SvelteKit had also changed it's syntax with SvelteKit 2.12. This issue alone probably took 90% of my time making this little demo.
