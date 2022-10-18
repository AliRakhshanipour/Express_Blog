/**
 * @swagger
 *  definitions:
 *      successOtpAuth:
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
 *                          example: verification code sent successfully
 *                      code:
 *                          type: string
 *                          example: "21079"
 *                      phone:
 *                          type: string
 *                          example: '09120339890'
 *      badRequestOtpAuth:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 400
 *              data:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          example: unable to send verification code
 *      internalServerErrorOtpAuth:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 500
 *              data:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          example: internal server error
 */
