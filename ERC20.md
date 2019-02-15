## Terminal
**Compile contracts**
```bash
truffle compile
```

**Deploy contracts**
```bash
truffle migrate
```

---

## Truffle Console
**Get contract address**
```javascript
BCToken.address
```

**Get deployed instance**
```javascript
// get deployed instance
BCToken.deployed()

// set returned value to variable
let bc = _
```

**Get the total number of tokens available**
```javascript
// `totalSupply` returns a `BN` (BigNumber) object asynchronously, so we need to use `toNumber` on it
bc.totalSupply().then(i => {console.log({totalSupply: i.toNumber()})})
```

**Get the available accounts**
```javascript
let accounts

// set `accounts` to array of available accounts
web3.eth.getAccounts((err,res) => { accounts = res })

// get first account (the one that deployed the contract)
accouts[0]
```

**Check balance of first (owner / creator) account**
```javascript
bc.balanceOf(accounts[0]).then(balance => console.log({ balance: balance.toNumber() }))
```

### Transfer of Tokens
**Transfer tokens to another account**
```javascript
// transfer 100000 tokens to the second available account
bc.transfer(accounts[1], 100000)
```

**Check account balances**
```javascript
// check first account balance
bc.balanceOf(accounts[0]).then(balance => console.log({ balance: balance.toNumber() }))

// check second account balance
bc.balanceOf(accounts[1]).then(balance => console.log({ balance: balance.toNumber() }))
```

