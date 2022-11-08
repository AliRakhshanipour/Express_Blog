/**
 * @swagger
 *  /admin/blog/create-blog:
 *      post:
 *          tags: [Blog(AdminPanel)]
 *          summary: create a new blog
 *          requestBody:
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/createBlog'
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/createBlog'
 *              400:
 *                  description: bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/blogBadRequest'
 *              500:
 *                  description: internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/blogInternalError'
 */

/**
 * @swagger
 *  /admin/blog/list:
 *      get:
 *          tags: [Blog(AdminPanel)]
 *          summary: List of all blogs
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/getBlog'
 *              400:
 *                  description: bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/blogBadRequest'
 *              500:
 *                  description: internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/blogInternalError'
 */

/**
 * @swagger
 *  /admin/blog/create-blog:
 *      patch:
 *          tags: [Blog(AdminPanel)]
 *          summary: edit blog
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *          requestBody:
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/editBlog'
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/editBlog'
 *              400:
 *                  description: bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/blogBadRequest'
 *              500:
 *                  description: internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/blogInternalError'
 */

/**
 * @swagger
 *  /admin/blog/delete/{id}:
 *      delete:
 *          tags: [Blog(AdminPanel)]
 *          summary: "delete blog with id"
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
 *                              $ref: '#/definitions/deleteBlog'
 *              400:
 *                  description: bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/blogBadRequest'
 *              500:
 *                  description: internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/blogInternalError'
 */
