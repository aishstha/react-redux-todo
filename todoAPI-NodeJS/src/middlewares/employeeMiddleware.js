import { fetchById } from '../dao/employeeDao';

export async function checkIfEmployeeIdExist(request,response,next){
  try {
    let employee =await fetchById(request.params.eid);
    if(!employee){
      return response.status(404).json({
        error: `Employee with the supplied ID ${request.params.id} does not exist`
      });
    }

    request.employee=employee;

    next();

  } catch (e) {
    next(e);
  }

}