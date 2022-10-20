/**
 * @swagger
 *  components:
 *      schemas:
 *          addRole:
 *              type: object
 *              required:
 *                  -   title
 *              properties:
 *                  title:
 *                      type:
 *                      enum: [ADMIN,SUPER_ADMIN,USER,AUTHOR]
 *                      description: title of the role
 *                  permissions:
 *                      type: array
 *                      description: permissions of the role
 *          editRole:
 *              type: object
 *              properties:
 *                  permissions:
 *                      type: array
 *                      description: permissions of the role
 */
