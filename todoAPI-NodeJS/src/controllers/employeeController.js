import { Router } from 'express';
import * as employeeService from '../services/employeeService';
import { checkIfEmployeeIdExist } from '../middlewares/employeeMiddleware';

let router = Router();

router.get('/', (request, response, next) => {
  employeeService
    .getAllEmployees()
    .then(employees => response.json({ data: employees }))
    .catch(err => next(err));
});

router.get('/:eid',checkIfEmployeeIdExist, (request, response, next) => {
  employeeService
    .getEmployeeById(request.params.eid)
    .then(employee => response.json({ data: employee }))
    .catch(err => next(err));
});

router.post('/', (request, response, next) => {
  employeeService
    .addEmployee(request.body.name,request.body.address)
    .then(employee => response.json({ data: employee }))
    .catch(err => console.log(err));
});

router.put('/:eid',checkIfEmployeeIdExist,(request,response,next)=>{
  employeeService
  .updateEmployee(request.params.id, request.body, request.employee)
  .then(employee => response.json({ success: 'true', data: employee }))
  .catch(err => next(err)); 
});

router.delete('/:eid',checkIfEmployeeIdExist,(request,response,next)=>{
  employeeService
  .removeEmployee(request.params.eid)
  .then(employee => response.json({ success: 'true'}))
  .catch(err => next(err)); 
});



export default router;