/**
 * @swagger
 *  definitions:
 *      createCategory:
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
 *                          example: 'category created successfully'
 *      deleteCategory:
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
 *                          example: 'category deleted successfully'
 *      editCategory:
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
 *                          example: 'category edited successfully'
 *      getCategory:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 200
 *              data:
 *                  type: object
 *                  properties:
 *                      categories:
 *                          type: object
 *                          properties:
 *                              title:
 *                                  type: string
 *                                  example: 'programming'
 *                              description:
 *                                  type: string
 *                                  example: 'all blogs that relate to programming'
 */
