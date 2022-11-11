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

/**
 * @swagger
 *  /admin/category/delete/{id}:
 *      delete:
 *          tags: [Category(AdminPanel)]
 *          summary: delete category with id
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
 *                              $ref: '#/definitions/deleteCategory'
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
 *  /admin/category/edit/{id}:
 *      patch:
 *          tags: [Category(AdminPanel)]
 *          summary: edit category with id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  required: true
 *                  type: string
 *          requestBody:
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/edit-category'
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/editCategory'
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
