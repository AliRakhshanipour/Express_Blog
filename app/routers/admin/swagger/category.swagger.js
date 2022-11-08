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
