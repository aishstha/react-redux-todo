import * as todoDao from '../dao/todoDao';

export function getTodoById(request, response, next) {
  todoDao
    .fetchById(request.params.id)

    .then(todo => {
      if (!todo) {
        return response.status(404).json({
          error: `Todo with the supplied ID ${request.params.id} does not exist`
        });
      }

      request.todo = todo;

      next();
    })

    .catch(err => {
      next(err);
    });
}

export function genericErrorHandler(err, req, res, next) {
  console.log(err);
  
  res.status(500).json({ error: 'INTERNAL SERVER ERROR' });
}

export function Error404Handler(req, res, next) {
  res.status(404).json({ error: 'page not found' });
}
