/**
 * @swagger
 *  /admin/role/addRole:
 *      post:
 *          tags: [Role(AdminPanel)]
 *          summary: Adds a role to the panel
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
