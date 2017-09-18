import { Router } from 'express';
import todoController from './controllers/todoController';
import employeeController from './controllers/employeeController';
let router = Router();

router.get('/', (request, response) => {
  response.send(
    '<title>API Ref</title>' +
      '<h1>API Reference</h1>' +
      '<h3>Method: GET</h3>' +
      '<h5>Path /api/todos</h5>' +
      `<div><pre>
      response={
        "data": 
        [
            {
                "id": 4,
                "title": "buy vegs",
                "description": "egg, flour, juice",
                "iscomplete": false
            },
            {
                "id": 5,
                "title": "clean kitchen",
                "description": "do it by thursday",
                "iscomplete": false
            }
        ]
      }
    </pre></div>` +
    '<h5>Path /api/todos/:id</h5>' +
    `<div><pre>
    response={
      "data": 
      [
          {
              "id": 4,
              "title": "buy vegs",
              "description": "egg, flour, juice",
              "iscomplete": false
          }
      ]
    }
  </pre></div>` +
      '<h3>Method: POST</h3>' +
      '<h5>Path /api/todos</h5>' +
      `<div><pre>
    request=
    {
      "title":"bring stationaries",
      "description":"pen,ink,pencils",
      "iscomplete":"false"
    }
    response=
    {
      "data": 
      {
          "id": 6,
          "title": "bring stationaries",
          "description": "pen,ink,pencils",
          "iscomplete": false
      }
    }
  </pre></div>` +
      '<h3>Method: UPDATE</h3>' +
      '<h5>Path /api/todos/:id</h5>' +
      `<div><pre>
      request=
      {
        "title":"bring stationaries changed",
        "description":"pen,ink,pencils,sharpners",
        "iscomplete":"true"
      }
      response=
      {
        "success": "true",
        "data": 
          {
              "id": 6,
              "title": "bring stationaries changed",
              "description": "pen,ink,pencils,sharpners",
              "iscomplete": true
          }
      }
    </pre></div>` +
    '<h3>Method: DELETE</h3>' +
    '<h5>Path /api/todos/:id</h5>' +
    `<div><pre>
    response=
    {
      "success": "true"
    }
    </pre></div>`
  );
});

router.use('/todos', todoController);

router.use('/employees',employeeController);

export default router;
