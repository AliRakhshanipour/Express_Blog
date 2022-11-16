/**
 * @swagger
 *  definitions:
 *      createComment:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 201
 *              data:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          example: 'comment created successfully'
 *
 *      deleteComment:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 200
 *              data:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          example: "Comment Deleted Successfully"
 *      getComment:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 200
 *              data:
 *                  type: object
 *                  properties:
 *                      user:
 *                          type: string
 *                          example: "fa193e31ab54bf21efcb45ca"
 *                      parent:
 *                          type: string
 *                          example: "acf43e31ab54bfa23f45bf56"
 *                      comment:
 *                          type: string
 *                          example: "nice"
 */
