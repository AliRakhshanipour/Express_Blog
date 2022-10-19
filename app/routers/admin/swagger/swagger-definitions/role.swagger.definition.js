/**
 * @swagger
 *  definitions:
 *      getRoleListSuccess:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 200
 *              data:
 *                  type: object
 *                  properties:
 *                      roles:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  title:
 *                                      type: string
 *                                      example: ADMIN
 *                                  permissions:
 *                                      type: object
 *                                      properties:
 *                                          title:
 *                                              type: string
 *                                              example: ADMIN
 *                                          description:
 *                                              type: string
 *                                              example: CRUD OF AllRoutes
 *      getRoleListBadRequest:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 400
 *              message:
 *                  type: string
 *                  example: bad request
 *      getRoleListServerError:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 500
 *              message:
 *                  type: string
 *                  example: internal server error
 */
