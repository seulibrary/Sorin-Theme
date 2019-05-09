# SorinTheme

Sorin Theme is a [Sorin](https://github.com/seulibrary/Sorin) extension that provides a way to customize the `:frontend` application.

## Installation

1. Add the following to Sorin's root-level `mix.exs`:

```elixir
def deps do
  [
    ...,
    {:sorin_theme, git: "https://github.com/seulibrary/Sorin-Theme.git"},
  ]
end
```

2. From the root of the application:

```sh
$ mix deps.get && mix deps.compile
```

3. From the root of the application:

```sh
$ mix setup_extension SorinTheme
```

`setup_extension` is a mix task that runs `npm`, migrates the necessary JavaScript into the frontend application, and compiles `config.json` from `sorin.exs`.

**You are now ready to roll.** :red_car:

## Customization

### High-level break down

**Note:** This extensions expects you to clone it and to edit it directly to be your own.

The following are the core files of this extension:

```
root/
  assets/
    js/
      index.js
      settings.js
      styles.scss
```

Other functionality is defined in the `:frontend` application inside of Sorin.

### The way this extension works

The `:frontend` application looks at the `settings.js` file and matches up matching "paths" and overwites/appends/prepends any fallback React component. To do this we populate the component's const inside of `settings.js` with the path for the area where you want the new custom component to go (see [current customizable areas](#current-customizable-areas)).

```js
export const components = [{
    component: IMPORTED_COMPONENT,
    path: "PATH_NAME",
    settings: "MISC_SETTINGS (OPTIONAL)"
}]
```

The imported component is a simple React component that becomes rendered. Because the main application already has React installed and imported, you do not have to include it in a package.json file. If you require or want additional packages, you can create a `package.json` file at the root of the `js` directory and install any node packages using `npm`.

### Current customizable areas

* Header
  * path: "header"

### Roadmap

There are plands to add additional areas to the `:frontend` application that can become extensible. As they become available, we will update this README file to reflect them.

## Versioning

As recommended by and for the rest of the Elixir community, we tag production-ready releases with [Semantic Versioning](http://semver.org/). To see the list of versioned releases, please see the tags on this repository.

## Questions, Feedback, and How to Get Involved

We welcome questions, ideas, feedback, comments, and bug reports via the Sorin issue tracker. To contribute bug fixes, improvements to documentation, or new features, pull requests are gratefully encouraged. We would also be delighted to work with you on the development of new extensions, especially for new search targets. For more information please see [CONTRIBUTING.md](CONTRIBUTING.md). Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## License

This project is licensed under the GNU General Public License v3.0 -- see [LICENSE.md](LICENSE.md) for details.
