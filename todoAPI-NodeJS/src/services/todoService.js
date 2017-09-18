import * as todoDao from '../dao/todoDao';


export function getAllTodos(){
  return todoDao.fetchAll();
}
export function getById(id){
  return todoDao.fetchById(id);
}

export function addEntry(title,desc,isComplete){
  return todoDao.createEntry(title,desc,isComplete);
}

export function updateEntry(id,payload,todo){
  for (let key of Object.keys(payload)) {
    if (todo[key] !== undefined) {
      todo[key] = payload[key];
    }
  }

  return todoDao.updateEntry(todo);
}

export function deleteEntry(id){
  return todoDao.deleteEntry(id);
}

