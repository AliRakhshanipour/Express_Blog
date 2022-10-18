/**
 * @swagger
 *  components:
 *    schemas:
 *      sendOtpCode:
 *        type: object
 *        required:
 *          - phone
 *        properties:
 *          phone:
 *            type: string
 *            description: user phone number for sign in , sign up
 *      checkOtpCode:
 *        type: object
 *        required:
 *          - phone
 *          - code
 *        properties:
 *            phone:
 *              type: string
 *              description: user phone number for sign in , sign up
 *            code:
 *              type: integer
 *              description: received code from get otp
 *      refreshToken:
 *        type: object
 *        required:
 *          - refreshToken
 *        properties:
 *            refreshToken:
 *              type: string
 *              description: refresh token
 */
