/**
 * @swagger
 *  /admin/comment/create-comment:
 *      post:
 *          tags: [Blog(AdminPanel)]
 *          summary: create comment
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/createComment'
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/createComment'
 *              400:
 *                  description: bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/badRequest'
 *              500:
 *                  description: internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/internalServerError'
 *
 */

/**
 * @swagger
 *  /admin/comment/get-comments/{id}:
 *      get:
 *          tags: [Blog(AdminPanel)]
 *          summary: get comments
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/getComments'
 *              400:
 *                  description: bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/badRequest'
 *              500:
 *                  description: internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/internalServerError'
 *
 */

/**
 * @swagger
 *  /admin/comment/delete-comment/{id}:
 *      delete:
 *          tags: [Blog(AdminPanel)]
 *          summary: delete comment
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/deleteComment'
 *              400:
 *                  description: bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/badRequest'
 *              500:
 *                  description: internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/internalServerError'
 *
 */
