/**
 * @swagger
 *  /:
 *      get:
 *          tags: [index-page]
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/successIndexPage'
 *              500:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/internalServerErrorIndexPage'
 */
