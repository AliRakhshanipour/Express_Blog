/**
 * @swagger
 *  /admin/permission/add:
 *      post:
 *          tags: [RBAC(AdminPanel)]
 *          summary: add a new permission
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/addPermission'
 *          responses:
 *              201:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/addPermission'
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
 */

/**
 * @swagger
 *  /admin/permission/list:
 *      get:
 *          tags: [RBAC(AdminPanel)]
 *          summary: get all permissions
 *          responses:
 *              201:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/getPermissionsList'
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
 */

/**
 * @swagger
 *  /admin/permission/edit/{id}:
 *      patch:
 *          tags: [RBAC(AdminPanel)]
 *          summary: edit permission
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  required: true
 *                  type: string
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/editPermission'
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/editPermission'
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
 */

/**
 * @swagger
 *  /admin/permission/delete/{id}:
 *      delete:
 *          tags: [RBAC(AdminPanel)]
 *          summary: delete permission
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  required: true
 *                  type: string
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/deletePermission'
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
 */
