/**
 * @swagger
 *  components:
 *      schemas:
 *          createBlog:
 *              type: object
 *              required:
 *                  -   title
 *                  -   short_text
 *                  -   text
 *                  -   image
 *              properties:
 *                  title:
 *                      type: string
 *                      description: title of blog
 *                  short_text:
 *                      type: string
 *                      description: short text of blog
 *                  text:
 *                      type: string
 *                      description: text of blog
 *                  image:
 *                      type: string
 *                      description: image of blog
 *                      format: binary
 *                  category:
 *                      type: array
 *                      description: categories of blog
 *                  tags:
 *                      type: array
 *                      description: tags of blog
 *
 *          editBlog:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                      description: title of blog
 *                  short_text:
 *                      type: string
 *                      description: short text of blog
 *                  text:
 *                      type: string
 *                      description: text of blog
 *                  image:
 *                      type: string
 *                      description: image of blog
 *                      format: binary
 *                  category:
 *                      type: array
 *                      description: categories of blog
 *                  tags:
 *                      type: array
 *                      description: tags of blog
 *
 */
