/**
 * @swagger
 *  /admin/role/addRole:
 *      post:
 *          tags: [RBAC(AdminPanel)]
 *          summary: Add a role to the panel
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/addRole'
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad request
 *              500:
 *                  description: internal server error
 */

/**
 * @swagger
 *  /admin/role/list:
 *      get:
 *          tags: [RBAC(AdminPanel)]
 *          summary: get list of roles
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/getRoleListSuccess'
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
 *  /admin/role/editRole/{id}:
 *      patch:
 *          tags: [RBAC(AdminPanel)]
 *          summary: edit role's permissions
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/editRole'
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad request
 *              500:
 *                  description: internal server error
 */

/**
 * @swagger
 *  /admin/role/deleteRole/{id}:
 *      delete:
 *          tags: [RBAC(AdminPanel)]
 *          summary: delete role
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad request
 *              500:
 *                  description: internal server error
 */
