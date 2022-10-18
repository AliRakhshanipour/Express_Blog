/**
 * @swagger
 *  /authentication/user/send-code:
 *      post:
 *          tags: [User-Authentication-Panel]
 *          summary: authentication user with phone number
 *          description: one time password (otp) login
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/sendOtpCode"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/sendOtpCode"
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/successOtpAuth'
 *              400:
 *                  description: bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/badRequestOtpAuth'
 *              500:
 *                  description: internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/internalServerErrorOtpAuth'
 *
 */

/**
 * @swagger
 *  /authentication/user/check-otp:
 *      post:
 *          tags: [User-Authentication-Panel]
 *          summary: check otp
 *          description: one time password (otp) check
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/checkOtpCode"
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/checkOtpCode"
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/successOtpAuth'
 *              400:
 *                  description: bad request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/badRequestOtpAuth'
 *              500:
 *                  description: internal server error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/internalServerErrorOtpAuth'
 *
 */
