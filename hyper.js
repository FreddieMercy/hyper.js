// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 14,

    webGLRenderer: false,

    // font family with optional fallbacks
    fontFamily: '"Cascadia Code","Inconsolata-dz for Powerline", "DejaVu Sans Mono",Monaco, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: "rgba(248,28,229,0.8)",

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: "BLOCK",

    // set to true for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: "#fff",

    // terminal background color
    backgroundColor: "#000",

    // border color (window, tabs)
    borderColor: "#333",
    // omit or set true to show. set false to remove it
    wickedBorder: true,
    // change the colour here
    wickedBorderColor: '#ffc600',
    // custom css to embed in the main window
    css: "",

    // custom css to embed in the terminal window
    termCSS: "",

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: "",

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: "",

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: "12px 14px",

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: "#000000",
      red: "#ff0000",
      green: "#33ff00",
      yellow: "#ffff00",
      blue: "#0066ff",
      magenta: "#cc00ff",
      cyan: "#00ffff",
      white: "#d0d0d0",
      lightBlack: "#808080",
      lightRed: "#ff0000",
      lightGreen: "#33ff00",
      lightYellow: "#ffff00",
      lightBlue: "#0066ff",
      lightMagenta: "#cc00ff",
      lightCyan: "#00ffff",
      lightWhite: "#ffffff"
    },
    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    // make sure to use a full path if the binary name doesn't work
    // (e.g `C:\\Windows\\System32\\bash.exe` instead of just `bash.exe`)
    // if you're using powershell, make sure to remove the `--login` below
    shell: '/bin/zsh',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ["--login"],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: "SOUND",

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: true,

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
    
    hyperRunTab: [/*'omz update',*/ 'export ZSH_THEME=cobalt2', 'source $ZSH/oh-my-zsh.sh', 'source ~/.bash_profile', 'clear'],
    hyperRun: ['omz update', 'export ZSH_THEME=cobalt2', 'source $ZSH/oh-my-zsh.sh', 'source ~/.bash_profile', 'clear']

  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    "hyper-statusline",
    "hyper-snazzy",
    "hypercwd",
    "hyperterm-visor",
    "hyper-tab-icons",
    "hyperterm-material",
    "hyperpower",
    "hyperborder",
    "hyperterm-tab-icons",
    "hyper-blink",
    "hyperterm-cursor",
    "hyperterm-cobalt2-theme",
    "hyper-run",
    "autoupdate",
    "hyper-font-ligatures"
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
