class Data {

    // This database argument was included in the pseudo code but from the instructions
    // alone I'm unclear how to incorporate this.
    constructor (database){
        this.dataSet = database
        console.log ("Connecting to database")
    }

    beginTran() {
        console.log ("Beginning a transaction")
    }

    commit() {
        console.log ("Committing transaction")
    }
    
    rollback() {
        console.log ("Rolling back transaction")
    }

    insert (table, object) {
        console.log ("Inserting " + object.getName() + " into table " + table)
        this.dataSet[table].push(object);
    }
}

module.exports = Data;