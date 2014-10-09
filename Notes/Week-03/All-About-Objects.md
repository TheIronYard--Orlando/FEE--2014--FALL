### All About Objects

```javascript
var anObject = {
    aProperty: 'a value',
    aMethod: function aMethod(){
    }
}
```

### Object-Oriented vs Procedural

This is procedural code:

```javascript
var ones = [ 'zero', 'one', 'two', 'three', 'four' ];

function toEnglish(value){
    return ones[value];
}

toEnglish(1) + toEnglish(0) + toEnglish(1);
```

This is Object-Oriented code:

```javascript
Number.prototype._English = {
    '0,9': [ 'zero', 'one', 'two', /* . . . */ 'nine' ],
    /* . . . */
};

Number.prototype.toEnglish = function(){
    for ( key in this._English ){
        var range = key.split(',').map(Number);

        if ( this.valueOf() >= range[0] && this.valueOf() <= range[1] ){
            return this._English[key][this.valueOf()];
        }
    }
};

(1).toEnglish() + (0).toEnglish() + (1).toEnglish();

(new Number(1)).toEnglish();
```

### Functions vs Constructors

```javascript
// Factory for Master Ledgers
function newMasterLedger(){
    return {
        _ledgerFile: undefined,
        filename: 'ledger/clients/' + name + '.ledger',
        open: function(){
            this._ledgerFile = file.open(this.filename, 'rw+');
        }
        close: function(){
            file.close(this._ledgerFile);
        },
        addTxn: function(money){
            // write an appropriate transaction into `_ledgerFile`
        }
    }
}

// Factory for Client Ledger
function newClientLedger(name){
    return newMasterLedger() + { // FYI: this don't work like that...
        addTxn: function(money, message){ . . . }
        filename: 'ledger/clients/' + name + '.ledger';
    }
}

var ledgerForRalph = newLedger('123-45-6789');
var ledgerForAlly  = newLedger('234-56-7890');

ledgerForAlly.addTxn(-15.00, 'For check #145 to Ralph Gerena');
ledgerForRalph.addTxn(15.00, 'For check #145 from Ally Hinton');

var masterLedger = newLedger('poop');
masterLedger.filename = 'ledger/master.ledger';
masterLedger.addTxn = function(money, debitedFrom, creditedTo, isResolved, . . . )
```