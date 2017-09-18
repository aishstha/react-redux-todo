import { getClient } from '../db';

export async function fetchAll() {
  try {
    let allRows = await getClient().query('SELECT * from todo');

    return allRows.rows;

  } catch (e) {
    throw e;
  }
}

export async function fetchById(id) {

  try {
    let oneRow = await getClient().query('SELECT * from todo where id=$1', [
      id
    ]);

    return oneRow.rows[0];

  } catch (e) {
    throw e;
  }
}

export async function createEntry(title, desc, isComplete) {
  try {
    let rowInsert = await getClient().query(
      `insert into todo(title,description,isComplete) values($1,$2,$3);`,
      [title, desc, isComplete]
    );

    let result = await getClient().query(`select * from todo where oid=$1`, [
      rowInsert.oid
    ]);

    return result.rows[0];

  } catch (e) {
    throw e;
  }
}
export async function updateEntry(todo) {
  const values = [todo.iscomplete, todo.title, todo.description, todo.id];

  try {
    let updateRow = await getClient().query(
      'update todo set iscomplete=$1, title=$2,description=$3 where id=$4',
      values
    );

    let result = await getClient().query('select * from todo where id=$1', [
      values[3]
    ]);

    return result.rows[0];

  } catch (error) {
    throw e;
  }
}
export async function deleteEntry(id) {
  try {
    let deleteRow = await getClient().query(`delete from todo where id=$1`, [
      id
    ]);
    
    return deleteRow;
    
  } catch (error) {
    throw e;
  }
}
