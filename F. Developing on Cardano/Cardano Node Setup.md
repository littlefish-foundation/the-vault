#how-to #TheForge #cardano 

All the different ways of node setup can be found on https://github.com/input-output-hk/cardano-node. On this documentation installing with executables will be explained on Linux and MacOS, Windows setup will be added in the future.

## Setup on Linux

#### Downloading the Executables.

Download from the link above the executables for linux and extract the directory in your preferred location.

#### Adding Path

In order to run the cardano-node and cardano-cli commands you need to add path of your cardano node directory.
Edit `~/.bashrc` with sudo privileges and append `export PATH="$PATH:/path-to/cardano-node` and restart your terminal.

## Setup on MacOS

#### Downloading the Executables.

Download from the link above the executables for MacOS(cardano-node 1.35.4 macOS binaries are currently cannot be downloaded, when you try to get it, linux version is downloaded) and extract the directory in your preferred location.

#### Adding Path

edit `/etc/paths` with sudo privileges and append `/path-to/cardano-node`. and restart your terminal.

After these steps on both operating systems run on of the commands:
```shell
cardano-node --version
``` 
```shell
cardano-cli --version
``` 
in order to check if the cardano-node and cardano-cli is installed and also you can see the version you have.

## Updating the Cardano Node

For both operating systems, download the latest cardano-node binaries from https://github.com/input-output-hk/cardano-node/releases and replace the older node with the downloaded one, if the path to the node is unchanged, the adding path step is not needed.

## Node Settings and Node Running

The most up to date configuration files can be found on https://github.com/input-output-hk/cardano-world.

We need to clone this directory to our computer.

If you check the `/cardano-world/docs/environments/` directory you can see you can run mainnet or different testnets. Choose which one you want to run and edit the command above accordingly and your node will be running.

### Testnet

Running testnet can be very useful. You can test your apps and smart contracts without the risk of losing real money and running testnet requires much less resources than mainnet. A computer with 4 GB of ram is enough to run it.

There are three different testnets we can run; testnet, preprod and preview. We will have the instructions to run preprod testnet here because it is widespread but you can also setup the other nodes with the instructions.

#### Running the node

To run the node we need to create a new directory which is usually called db.
The command below is used to run the node and we need to add cardano-world and db paths like shown below.

```shell
cardano-node run \
--topology /path-to/cardano-world/docs/environments/<prefered-node-to-run>/topology.json \
--database-path /path-to/db \
--socket-path /path-to/db/node.socket \
--host-addr 0.0.0.0 \
--port 3001 \
--config /path-to/cardano-world/docs/environments/<prefered-node-to-run>/config.json
```

The `preferred-node-to-run`  is what you want to run ie. preprod, preview.

When you run the node, check the db directory and you will see a file called protocolMagicId. There will be a number inside it, that number is essential for us testnet runners because when we use cardano-cli with the testnets that magic number will be used in almost all command.

### Mainnet

Running mainnet requires a lot of resources. We need at least 16 GB of ram, and a drive bigger than 100 GB which should be a solid state drive(SSD). This is where you actually interact with the Cardano blockchain.

#### Running the Node

To run the node we need to create a new directory which is usually called db.
The command below is used to run the node and we need to add cardano-world and db paths like shown below. If you also run a testnet on your computer, they all need their own db directories.

```shell
cardano-node run \
--topology /path-to/cardano-world/docs/environments/mainnet/topology.json \
--database-path /path-to/db \
--socket-path /path-to/db/node.socket \
--host-addr 0.0.0.0 \
--port 3001 \
--config /path-to/cardano-world/docs/environments/mainnet/config.json
```

## Note:

If your node has a problem like it does not start or stop sync at some point, firstly try to run `git pull` command in your cardano-world directory to get any latest change for the configuration files and if it does not fix the issue check if there is an update for cardano-node in https://github.com/input-output-hk/cardano-node.

You can create your wallets, build transactions, mint tokens on your terminal with cardano-cli if you are running your own node. The guide of cardano-cli can be found on: [[Cardano-CLI Guide]]