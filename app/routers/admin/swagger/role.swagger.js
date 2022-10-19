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
 *                              $ref: '#/definitions/getRoleListBadRequest'
 *              500:
 *                  description: internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/getRoleListServerError'
 */
