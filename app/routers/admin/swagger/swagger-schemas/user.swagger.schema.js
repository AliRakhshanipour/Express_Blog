/**
 * @swagger
 *  components:
 *      schemas:
 *          completeProfile:
 *              type: object
 *              required:
 *                  -   first_name
 *                  -   last_name
 *                  -   email
 *                  -   password
 *                  -   avatar
 *              properties:
 *                  first_name:
 *                      type: string
 *                      description: first name of the user
 *                  last_name:
 *                      type: string
 *                      description: last name of the user
 *                  email:
 *                      type: string
 *                      description: email of the user
 *                  password:
 *                      type: string
 *                      description: password of the user
 *                  avatar:
 *                      type: string
 *                      description: avatar of the user
 *                      format: binary
 */
