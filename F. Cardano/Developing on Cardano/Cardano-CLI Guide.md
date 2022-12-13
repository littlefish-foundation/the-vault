#TheForge #cardano #how-to 

This guide does not include transactions with smart contracts, it includes essential commands and transactions with native scripts.

In order to run the node we need to run the command:
``` shell
cardano-node run \
--topology /path-to/cardano-world/docs/environments/<prefered-node-to-run>/topology.json \
--database-path /path-to/db \
--socket-path /path-to/db/node.socket \
--host-addr 0.0.0.0 \
--port 3001 \
--config /path-to/cardano-world/docs/environments/<prefered-node-to-run>/config.json
```

Every command will have two versions; one for mainnet and one for preprod testnet, magic number for preprod testnet is `1`

Running the commands for mainnet and testnet has a difference; on mainnet we use `--mainnet` and on testnet `--testnet-magic <magic-number>`. The commands below will be for mainnet but you can also run them on testnets by changing the above.

### Important note:

To run cardano-cli commands, we need to run
`export CARDANO_NODE_SOCKET_PATH=/path-to-db/db/node.socket`

We need to run this command in every new terminal while the node is running.

### Checking the Latest Block

To check the latest block on we run on:

``` shell
cardano-cli query tip --mainnet
```

The output of this command should be like:
```
{
	"block": <block-number>,
	"epoch": <epoch-number>,
	"era": <era-name>,
	"hash": <hash-number>,
	"slot": <slot-number>
	"syncProgress:": <between 0 and 100.00>
}
```
The "syncProgress" is important. It should be 100.00 for you to run the commands below, or you will see out of date outputs.
If the "syncProgress" does not change for a while(run the command again to check progress), either your network connection or your node have a problem, check for updated node or configuration files.

### Creating a Wallet

Wallet generation command will create six files so I strongly suggest you to run the commands below inside a wallet directory you created.
To create a wallet, we need to run these command in a directory for our wallet:

``` shell
cardano-cli address key-gen \
    --verification-key-file payment.vkey \
    --signing-key-file payment.skey

cardano-cli stake-address key-gen \
    --verification-key-file stake.vkey \
    --signing-key-file stake.skey

cardano-cli address build \
    --payment-verification-key-file payment.vkey \
    --stake-verification-key-file stake.vkey \
    --out-file payment.addr \
    --mainnet
```

Please keep the payment.skey and stake.skey files secure, these should not be accessible or seen by anyone other than you, or your ADA and tokens will be unsafe.

### Checking the UTXOs of a Wallet

To check UTXOs we need an address, the address can be found in our wallet directory which is created in the previous step. Please check the payment.skey for the address and run the command below with the address:

``` shell
cardano-cli query utxo --mainnet --address <address-you-want-to-check>
```

The output will look like something like this:
```
                    TxHash                                         TxIx        Amount  
--------------------------------------------------------------------------------------  
a62402c525785be5b4b3ccc2aa693a56605c1217165ac5a02b2225a3a339d161     0        9984402693 lovelace + TxOutDatumNone
a62402c525785be5b4b3ccc2aa693a56605c1217165ac5a02b2225a3a339d161     1            1234567 lovelace + TxOutDatumNone
```

TxHash is the hash of the UTXO and TxIX is the index of the UTXO. The example above seems to have two UTXOs with same hash but different index, that means they are different outputs of the same transaction.
The Amount in the first UTXO is 9984402693. That is lovelace and 1 ADA is equal to 1 million lovelace so the amount you see is 9984.402693 ADA.

You do not have to be the owner of the address to see what is inside it, you can check whichever address you want.

### Building a Simple Transaction

All transactions on cardano-cli have three steps; build, sign and submit.

#### Build:

```shell
cardano-cli transaction build \
--babbage-era \
--mainnet \
--tx-in <TXIN> \
--tx-out <Reciever-address>+"amount of lovelace" \
--change-address <Sender Address> \
--out-file tx.raw
```
TXIN is the UTXO with its index and example is:
a62402c525785be5b4b3ccc2aa693a56605c1217165ac5a02b2225a3a339d161#0

#0 is the index of the utxo.

Number of input and output utxos can be multiple and also the different address outputs are also supported.
Input utxos must be higher than the outputs or the tx.raw will not be created with an error.

The change address should be your own address or you will lose the remaining ADA in your UTXO. The idea is; you have 10 ADA in your UTXO and you want to send 2 ADA to someone, remaining 8 ADA will also be an output as a new UTXO and you should specify where you want it to go.

Cost of the transaction in lovelace will be the output.

#### Signing:

This process is to sign the transaction you built. All transactions need to be signed with your payment.skey or they cannot be submitted.
```shell
cardano-cli transaction sign \
--signing-key-file <path-to>payment.skey \
--mainnet \
--tx-body-file tx.raw \
--out-file sign.signed
```

#### Submit:

This process is to submit the transaction to the blockchain. This step is irreversible, until this step you can decide not to do the transaction or create a new one instead.
```bash=1
cardano-cli transaction submit \
--tx-file tx.signed \
--mainnet
```

After this command, it will take 1-2 minutes and you can check your wallet to see the new UTXOs created.

### Building a Transaction with Native Assets

A transaction with native assets ie. NFTs or Tokens is similar to the simple transaction with two differences. One is we need a protocol parameters file. In order to obtain the file you need to run the command below and it will generate the protocol.json file:
```shell
cardano-cli query protocol-parameters --out-file /path/to/protocol.json --mainnet
``` 

The other difference is the `--tx-out`. Assets on Cardano need to be bounded with ADA and minimum amount is 1 ADA. As you can see there are two `--tx-in` below. That is because one of them have the native asset and probably 1 ADA and the other one has only ADA. We did this because this transaction will have a fee if we tried to pay it with the 1 ADA bounded with the asset, the output would have less ADA and this transaction would give an error.

```shell
cardano-cli transaction build \
--babbage-era \
--mainnet \
--tx-in <TXIN1> \
--tx-in <TXIN2>
--tx-out <address>+"<amount of ada> + <amount of asset> <PolicyId>.<token name in hex>" \
--change-address <sender address> \
--protocol-params-file <path-to>/protocol.json \
--out-file token-send.raw
```

The signing and submitting steps are identical with the simple transaction.

### Building a Minting Transaction

Minting process is similar to the transaction with native asset with a difference. But first we need policy script.

#### Creating Policy Script

To create a policy script we need Public Key Hash(PKH)

PKH is generated by our payment.vkey which is inside our wallet directory. To get our PKH we need to run:
```shell
cardano-cli address key-hash --payment-verification-key-file <path-to>payment.vkey
```
The output will be our public key hash, save it.

Now for the policy script, we create a file any-name.script

This is an example time lock policy script that only allows an asset to be minted before slot 1234. When you check the latest block you will see the slot number, each slot takes exactly 1 second. So you should add how much seconds you need to mint o that number. Adding 600 is useful as it gives you 10 second to submit your minting transaction.
```json
{
    "type": "all",
    "scripts":
    [
        {
            "type": "before",
            "slot": 1234
        },
        {
            "type": "sig",
            "keyHash": "<PKH>"
        }
    ]
}
```

Another example with just a PKH is:
```json
{
    "keyHash": "<PKH>",
    "type": "sig"
}

```

Then we need to create a policy id based on our policy script. To do that, we run:
```shell
cardano-cli transaction policyid --script-file any-name.script
```
The output of this will be our policy id, save it.
The Policy id and Policy script will be necessary for minting NFTs and Tokens.

#### Metadata

This step is not essential. 
In Cardano, the metadata cannot be linked to the native asset, it can be linked to transactions. So we need to add it to the minting transaction. The native asset can change hands in the future but the metadata will not follow the asset. To see the asset's metadata wee need a standard and current standard used is CIP-25 which can be found on: https://cips.cardano.org/cips/cip25/. We can add metadata to our transaction. We need to create json file with the CIP-25 standard. This file will be used during the build step.

#### Build

Building step is very similar to the transaction with native assets. The differences are `--mint` and `--mint-script-file` commands.

Example with time lock and metadata:
```shell
cardano-cli transaction build \
--babbage-era \
--mainnet \
--tx-in <TXIN> \
--tx-out <Address>+"<amount of lovelace> + <amount of token> <PolicyId>.<Token name in hex>" \
--mint "<amount of token> <PolicyId>.<Token name in hex>" \
--mint-script-file <path-to>/policy.script \
--metadata-json-file <path-to>/metadata.json  \
--invalid-hereafter <slot number> \
--change-address <Minters address> \
--protocol-params-file <path-to>/protocol.json \
--out-file mint-native-assets.raw
```
This example have `--invalid-hereafter` and `--metadata-json-file` commands. First one is needed if your policy script has a time lock and the slot number must be the same number you added to the policy script. Metadata command allows you to add the metadata to your minting transaction.

Example without timelock and metadata:
```shell
cardano-cli transaction build \
--babbage-era \
--mainnet \
--tx-in <TXIN> \
--tx-out <Address>+"<amount of lovelace> + <amount of token> <PolicyId>.<Token name in hex>" \
--mint "<amount of token> <PolicyId>.<Token name in hex>" \
--mint-script-file <path-to>/policy.script \
--change-address <Minters address> \
--protocol-params-file <path-to>/protocol.json \
--out-file mint-native-assets.raw
```

One important note is `"<amount of lovelace> + <amount of token> <PolicyId>.<Token name in hex>"` in `--tx-out` and `--mint` must be the same.

Signing and Submitting steps are identical with the simple transaction.