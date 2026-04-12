# Sample App Repository

This repository hosts a simple static web page (HTML/CSS/JS) for demonstration. It also contains a GitHub Actions workflow (`.github/workflows/deploy.yml`) which **simulates a build/deploy** and then sends a `repository_dispatch` to the Automation repository.

- **index.html**: Contains a heading, an input + button for greeting, and a list of items.
- **style.css** / **script.js**: Simple styling and interactivity (greeting on button click).
- **deploy.yml**: Triggers on pushes to `main`. After “building” the app, it uses the `peter-evans/repository-dispatch` Action to invoke the Automation repo with a payload (`app_url`, `browser`, etc.).

The dispatch payload includes:
- `env`: deployment environment (e.g. staging)
- `app_url`: the URL where this app is hosted (e.g. GitHub Pages or localhost)
- `browser`: browser name for tests (e.g. chrome)
- `build_number`: the run number
- `triggered_by`: repository name of the app

On push to `main`, this workflow runs and triggers the tests in the Automation repo.
