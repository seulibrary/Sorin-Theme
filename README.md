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
```
NOTE: This extensions expects you to clone it and to edit it directly to be your own.
```

The core files of this extension are as follow in this diagram:

```
root/
  assets/
    js/
      index.js
      settings.js
      styles.scss
```

Other functionality is defined in the `:frontend` application inside of Sorin.

The way this extension works
The `:frontend` application looks at the `settings.js` file and matches up matching "path"'s and overwites/appends/prepends any fallback React component. To do this we populate the components const inside of `settings.js` with the path for the area you want the new custom component to go (See Current customizable areas).

```js
export const components = [{
    component: IMPORTED_COMPONENT,
    path: "PATH_NAME",
    settings: "MISC_SETTINGS (OPTIONAL)"
}]
```

The Imported component is a simple React component that becomes rendered. Because the main application already has React installed and imported, you do not have to include it in a package.json file. If you require or want additional packages. You can create a package.json file at the root of the `js` directory and install any node packages using `npm`.

### Current customizable areas

* Header
  * path: "header"

### Roadmap

There are plands to add additional areas to the `:frontend` application that can become extensible. As they become available, we will update this README file to reflect them.
