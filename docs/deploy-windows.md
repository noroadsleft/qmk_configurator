# Deploy a Local Instance of QMK Configurator on Windows

Windows users who wish to deploy a local instance QMK Configurator can do so using either Windows Command Prompt/Powershell or an MSYS2/MinGW terminal.

- [Instructions for Windows Command Prompt/Powershell](#install-for-windows-command-promptpowershell)
- [Instructions for MSYS2/MinGW](#install-for-msys2mingw)
- [Deploy the QMK Configurator](#deploy-the-qmk-configurator)

----

## Install for Windows Command Prompt/Powershell

### Installation and Configuration

1. Download the latest `nvm-setup.zip` for [nvm-windows] and extract it.
2. Run the `nvm-setup.exe` therein, and follow the prompts.
3. Open a Command Prompt window and install the desired version of Node using `nvm install <version>`
4. Configure the desired Node version using `nvm use <version>`
5. Install yarn using `npm i -g yarn`

----

## Install for MSYS2/MinGW

### Installation and Configuration

1. Download the latest `nvm-setup.zip` for [nvm-windows] and extract it.
2. Run the `nvm-setup.exe` therein.  
   **For the nvm installation folder, choose a path that does not contain any spaces.**
3. export $NVM_HOME to $PATH
4. export $NVM_SYMLINK to $PATH
    ```
    export PATH=$PATH:/c/nvm
    export PATH=$PATH:/c/Program\ Files/nodejs
    ```

----

## Deploy the QMK Configurator

1. Using your terminal, navigate to the `qmk_configurator` folder.
2. If this is your first time deploying QMK Configurator, run `yarn install`. Otherwise, skip to Step 3.
3. Run `yarn serve` and wait for yarn to set up the modules.
4. When yarn has set up the modules, it will output the local host address for your QMK Configurator instance:
    ```
     DONE  Compiled successfully in 5110ms



      App running at:
      - Local:   http://localhost:8081/
      - Network: http://192.168.1.8:8081/

      Note that the development build is not optimized.
      To create a production build, run yarn build.
    ```
5. Open the web browser of your choice<sup>[a](#footnote_supported_browsers)</sup> and open the URL listed as `Local`.

[nvm-windows]: https://github.com/coreybutler/nvm-windows/releases "Node Version Manager (nvm) for Windows"
<a name="footnote_supported_browsers">a</a>: QMK Configurator is officially supported only in Mozilla Firefox and Google Chrome.
