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

/**
 * @swagger
 *  definitions:
 *      successAccessToken:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 200
 *              data:
 *                  type: object
 *                  properties:
 *                      accessToken:
 *                          type: string
 *                          example: "eyJhdcjkkejrervernthmhmncCI6IkpXVCJ9.eyJwaG9uZSI6IjA5MTIwMzk3NTM5IiwidXNlcklkIjoiNjM0YjE4Mjc1YWMyYmRlYjdiZDBkNzM5IiwiaDCKBVScdecwenjweuvbW#23f3AiOjE2NjYwODY0MDN9._tsAhVIbrYJCSEGi4xDs7erervvksdfv8Ja7j8QBdp0"
 *                      refreshToken:
 *                          type: string
 *                          example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjA5MTIwMzk3NTM5IiwidXNlcklkIjoiNjM0YjE4Mjc1YWMyYmRlYjdiZDBkNzM5IiwiaWF0IjoxNjY2MDgyODAzLCJleHAiOjE2NjYwODY0MDN9._tsAhVIbrYJCSEGi4xDs7F-XkQZ1xpuo8Ja7j8QBdp0"
 */

/**
 * @swagger
 *  definitions:
 *      successRefreshToken:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 200
 *              data:
 *                  type: object
 *                  properties:
 *                      accessToken:
 *                          type: string
 *                          example: "eyJhdcjkkejrervernthmhmncCI6IkpXVCJ9.eyJwaG9uZSI6IjA5MTIwMzk3NTM5IiwidXNlcklkIjoiNjM0YjE4Mjc1YWMyYmRlYjdiZDBkNzM5IiwiaDCKBVScdecwenjweuvbW#23f3AiOjE2NjYwODY0MDN9._tsAhVIbrYJCSEGi4xDs7erervvksdfv8Ja7j8QBdp0"
 *                      refreshToken:
 *                          type: string
 *                          example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjA5MTIwMzk3NTM5IiwidXNlcklkIjoiNjM0YjE4Mjc1YWMyYmRlYjdiZDBkNzM5IiwiaWF0IjoxNjY2MDgyODAzLCJleHAiOjE2NjYwODY0MDN9._tsAhVIbrYJCSEGi4xDs7F-XkQZ1xpuo8Ja7j8QBdp0"
 */
