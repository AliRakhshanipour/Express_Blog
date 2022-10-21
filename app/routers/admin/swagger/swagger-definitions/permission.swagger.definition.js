/**
 * @swagger
 *  definitions:
 *      addPermission:
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
 *                          example: "Permission Added Successfully"
 *      deletePermission:
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
 *                          example: "Permission Deleted Successfully"
 *      editPermission:
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
 *                          example: "Permission Edited Successfully"
 *      getPermissionsList:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 200
 *              data:
 *                  type: object
 *                  properties:
 *                      permissions:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  title:
 *                                      type: string
 *                                      example: category_delete
 *                                  description:
 *                                      type: string
 *                                      example: "this permission allows to delete a category"
 *      permissionBadRequest:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 400
 *              message:
 *                  type: string
 *                  example: bad request
 *      permissionInternalError:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 500
 *              message:
 *                  type: string
 *                  example: internal server error
 */
