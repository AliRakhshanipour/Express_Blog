/**
 * @swagger
 *  /admin/user/complete-profile:
 *      patch:
 *          tags: [User(AdminPanel)]
 *          summary: complete profile of the user
 *          requestBody:
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/completeProfile'
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/completeUserProfile'
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
