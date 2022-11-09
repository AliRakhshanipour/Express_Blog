/**
 * @swagger
 *  /admin/category/create:
 *      post:
 *          tags: [Category(AdminPanel)]
 *          summary: Create a new category
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/create-category'
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/createCategory'
 *              400:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/categoryBadRequest'
 *              500:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/categoryInternalError'
 */

/**
 * @swagger
 *  /admin/category/list:
 *      get:
 *          tags: [Category(AdminPanel)]
 *          summary: get list categories
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/getCategory'
 *              400:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/categoryBadRequest'
 *              500:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/categoryInternalError'
 */
