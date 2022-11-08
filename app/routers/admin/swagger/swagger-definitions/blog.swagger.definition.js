/**
 * @swagger
 *  definitions:
 *      createBlog:
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
 *                          example: "Blog Created Successfully"
 *      getBlog:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 200
 *              data:
 *                  type: object
 *                  properties:
 *                      title:
 *                          type: string
 *                          example: "what is swagger?"
 *                      short_text:
 *                          type: string
 *                          example: "Documentation Of APIs"
 *                      text:
 *                          type: string
 *                          example: "swagger is a tool for Documentation api in node js"
 *                      image:
 *                          type: string
 *                          example: "/Applications/XAMPP/xamppfiles/htdocs/Express_Blog/public/uploads/blogs"
 *                      tags:
 *                          type: array
 *                          example: [node, express,js,swagger,api,documentation]
 *
 *      blogBadRequest:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 400
 *              message:
 *                  type: string
 *                  example: bad request
 *      blogInternalError:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: string
 *                  example: 500
 *              message:
 *                  type: string
 *                  example: internal server error
 *
 *      deleteBlog:
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
 *                          example: "Blog Deleted Successfully"
 *      editBlog:
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
 *                          example: "Blog Edited Successfully"
 *
 */
