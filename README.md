[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
# Built on top of
I tinkered around with [this](https://github.com/bketelsen/spotlight) template to build this. All creds to Brian and his repo.

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, create a `.env.local` file in the root of your project and set the `NEXT_PUBLIC_SITE_URL` variable to your site's public URL:

```
NEXT_PUBLIC_SITE_URL=https://example.com
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## Code Blocks
extension:filename {highlightLines} showLineNumbers
```go:document.go {1,3-4} showLineNumbers
type Document struct {
	Hash         string
	Path         string
	PreviousPath string
	Operation    *CognitiveOperation
	Results      *CognitiveReadResponse
}
```
