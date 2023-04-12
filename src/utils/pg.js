const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://postgres:ngen!!!@localhost:5432/exam'
});

const fetchOne = async (SQL, ...values) => {
    const client = await pool.connect();
    try {
        const { rows: [row] } = await client.query
        (SQL, values.length ? values : null);

        return row;
    } catch (error) {
        console.log(error);
    } finally {client.release();
    }
};

const fetch = async (SQL, ...values) => {
    const client = await pool.connect();
    try {
        const { rows } = await client.query(SQL, values.length ? values : null);

        return rows;
    } catch (error) {
        console.log(error);
    } finally {client.release();
    }
};

module.exports = { fetchOne, fetch };