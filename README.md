## Disclaimer: Use of Unaudited Code for Educational Purposes Only
This code is provided strictly for educational purposes and has not undergone any formal security audit. 
It may contain errors, vulnerabilities, or other issues that could pose risks to the integrity of your system or data.

By using this code, you acknowledge and agree that:
- No Warranty: The code is provided "as is" without any warranty of any kind, either express or implied. The entire risk as to the quality and performance of the code is with you.
- Educational Use Only: This code is intended solely for educational and learning purposes. It is not intended for use in any mission-critical or production systems.
- No Liability: In no event shall the authors or copyright holders be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the use or performance of this code.
- Security Risks: The code may not have been tested for security vulnerabilities. It is your responsibility to conduct a thorough security review before using this code in any sensitive or production environment.
- No Support: The authors of this code may not provide any support, assistance, or updates. You are using the code at your own risk and discretion.

Before using this code, it is recommended to consult with a qualified professional and perform a comprehensive security assessment. By proceeding to use this code, you agree to assume all associated risks and responsibilities.

## Setup

### Install Sui
```
cargo install --locked --git https://github.com/MystenLabs/sui.git --branch devnet sui
```

### Install dev tools
```
cargo install --git https://github.com/move-language/move move-analyzer --branch sui-move --features "address32"

brew install libpq
```

### Install Git LFS 
Git LFS. Installation instructions can be found here: https://git-lfs.com/ 

### Run a local network
```
git clone --branch devnet https://github.com/MystenLabs/sui.git

cd sui

RUST_LOG="off,sui_node=info" cargo run --bin sui-test-validator
```

### Get localnet SUI tokens
```
curl --location --request POST 'http://127.0.0.1:9123/gas' --header 'Content-Type: application/json' \
--data-raw '{
    "FixedAmountRequest": {
        "recipient": "<ADDRESS>"
    }
}'
```
`<ADDRESS>` - replace this by the output of this command that returns the active address:

## Prepare the contract

Before we switch to the zkLogin part of the tutorial, we should build and publish a smart contract that we are going to interact with once we are logged in to the application with zkLogin.

For the sake of this tutorial we are going to use a notes contract: https://github.com/dacadeorg/sui-move-notes-contract

## zkLogin flow description
`src/utils/authService.ts` - this service contains all functions required to configure the zkLogin flow.
More details about every is step can be found here: https://docs.sui.io/concepts/cryptography/zklogin

