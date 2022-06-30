import React from 'react';
const db_server = require('./db_server');

export default function Profile({id}) {


    function handleStart(e) {
        e.preventDefault();
        db_server.timeStart({id});
        alert('Have a good day!')
    }

    function handleBreakStart(e) {
        e.preventDefault();
        db_server.breakStart({id})
        alert('Break start')
    }

    function handleBreakEnd(e) {
        e.preventDefault();
        db_server.breakEnd({id})
        alert('Break end')
    }

    function handleEnd(e) {
        e.preventDefault();
        db_server.endTime({id})
        alert('The working day is over')
    }

    function handleSubmitRes(e) {
        e.preventDefault();
        alert(db_server.getData({id}))
    }


    return(
        <h2>Profile</h2>
        <form onSubmit={handleStart}></form>
                <div><button type="submit">Start</button></div>
        </form>

        <form onSubmit={handleBreakStart}></form>
            <div><button type="submit">Break start</button></div>
        </form>

        <form onSubmit={handleBreakEnd}></form>
            <div><button type="submit">Break end</button></div>
        </form>

        <form onSubmit={handleEnd}></form>
            <div><button type="submit">End</button></div>
        </form>

        <form onSubmit={handleSubmitRes}></form>
            <div><button type="submit">Your data</button></div>
        </form>
    );
}