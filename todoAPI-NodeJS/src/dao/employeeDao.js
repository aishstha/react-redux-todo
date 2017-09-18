import { getClient } from '../db';

export async function fetchAll() {
  try {
    let allRows = await getClient().query('SELECT * from employee');

    return allRows.rows;
  } catch (e) {
    throw e;
  }
}
export async function fetchById(eid) {
  try {
    let oneRow = await getClient().query(
      'SELECT * from employee where eid=$1',
      [eid]
    );

    return oneRow.rows[0];
  } catch (e) {
    throw e;
  }
}

export async function insertEmployee(name, address) {
  try {
    let insertRow = await getClient().query(
      'INSERT into employee(name,address) values($1,$2)',
      [name, address]
    );

    let result = await getClient().query(
      'SELECT * from employee where oid=$1',
      [insertRow.oid]
    );

    return result.rows[0];
  } catch (e) {
    throw e;
  }
}

export async function updateEmployee(employee) {
  try {
    const values = [employee.name, employee.address, employee.eid];

    let updateRow = await getClient().query(
      'UPDATE employee SET name=$1,address=$2 where eid=$3',
      values
    );

    let result = await getClient().query(
      'SELECT * from employee where eid=$1',
      [values[2]]
    );

    return result.rows[0];
  } catch (e) {
    throw e;
  }
}

export async function deleteEmployee(eid) {
  try {
    let deleteRow=await getClient().query('DELETE from employee where eid=$1',[eid]);
    console.log(eid)
    return deleteRow;

  } catch (e) {
    throw e;
  }
}
