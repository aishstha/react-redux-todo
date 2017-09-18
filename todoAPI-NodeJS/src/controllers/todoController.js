import { Router } from 'express';
import * as todoService from '../services/todoService';
import { getTodoById } from '../middlewares/todoMiddleWare';

let router = Router();

router.get('/', (request, response, next) => {
  todoService
    .getAllTodos()
    .then(todos => response.json({ data: todos }))
    .catch(err => next(err));
});

router.get('/:id', getTodoById, (request, response, next) => {
  todoService
    .getById(request.params.id)
    .then(todos => response.json({ data: todos }))
    .catch(err => next(err));
});

router.post('/', (request, response, next) => {
  todoService
    .addEntry(
      request.body.title,
      request.body.description,
      request.body.iscomplete
    )
    .then(todos => response.json({ data: todos }))
    .catch(err => next(err));
});

router.put('/:id', getTodoById, (request, response, next) => {
  todoService
    .updateEntry(request.params.id, request.body, request.todo)
    .then(todos => response.json({ success: 'true', data: todos }))
    .catch(err => next(err));
});

router.delete('/:id', getTodoById, (request, response, next) => {
  todoService
    .deleteEntry(request.params.id)
    .then(todos => response.json({ success: 'true' }))
    .catch(err => next(err));
});

export default router;
