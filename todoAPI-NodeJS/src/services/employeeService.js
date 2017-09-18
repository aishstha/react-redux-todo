import * as employeeDao from '../dao/employeeDao';


export function getAllEmployees(){
  return employeeDao.fetchAll();
}

export function getEmployeeById(id){
  return employeeDao.fetchById(id);
}

export function addEmployee(name,address){
  return employeeDao.insertEmployee(name,address);
}

export function updateEmployee(eid,payload,employee){
  for(let key of Object.keys(payload)){
    if(employee[key]!=undefined)
      employee[key]=payload[key];

  }
  
  return employeeDao.updateEmployee(employee);
}

export function removeEmployee(eid){
  return employeeDao.deleteEmployee(eid);
}