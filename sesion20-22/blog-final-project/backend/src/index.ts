import { getConnection } from "./db"
import { Author } from "./entity/Author"
import { Category } from "./entity/Category"
import { Post } from "./entity/Post"
import { User } from "./entity/User"

require('dotenv').config()

const toTestDB = async () => {
  const connection = await getConnection()
  // const post: Post = new Post()
  // post.title = "Mi primer programa fullstack"
  // post.slug = post.title.toLowerCase().replace(/ /gi, '-')
  // post.body = `Cake icing caramels powder cupcake pie jujubes. Chupa chups chupa chups soufflé sugar plum chupa chups cotton candy pie lollipop carrot cake. Sweet roll sweet sugar plum. Oat cake sweet candy canes icing donut cotton candy apple pie.
  
  // Tootsie roll chupa chups cupcake brownie brownie lemon drops tiramisu topping. Icing gummies oat cake donut sweet roll ice cream macaroon muffin chocolate. Dragée cookie cupcake jelly-o pie.
  
  // Bear claw marzipan biscuit brownie brownie dessert gummies. Marzipan sweet apple pie muffin. Tootsie roll brownie pie powder chocolate tiramisu chocolate apple pie. Jelly bear claw halvah pastry candy oat cake icing.`
  // post.coverImg = 'https://via.placeholder.com/1020x300.png?text=This%20is%20the%20cover%20img'
  // post.cardImg = 'https://via.placeholder.com/450x300.png?text=Card%20cover%20img'
  // post.date = new Date().toISOString()

  // // save author
  // const etAuthor: Author = new Author()
  // etAuthor.name = 'Ethien'
  // etAuthor.lastname = 'Salinas'
  // etAuthor.email = 'ethien.salinas@gmail.com'
  // await connection.manager.save(Author, etAuthor)
  // // associate author
  // post.author = etAuthor
  // // init array
  // const categories = new Array<Category>()
  
  // let wdCategory: Category = new Category()
  // wdCategory.label = 'Web Development'
  // wdCategory.slug = wdCategory.label.toLowerCase().replace(/ /gi, '-')
  // await connection.manager.save(Category, wdCategory)
  // categories.push(wdCategory)
  
  // wdCategory = new Category()
  // wdCategory.label = 'JavaScript'
  // wdCategory.slug = wdCategory.label.toLowerCase().replace(/ /gi, '-')
  // await connection.manager.save(Category, wdCategory)
  // categories.push(wdCategory)

  // post.category = categories

  // console.log(await connection.manager.save(Post, post));
  const post = await connection.manager.findOne(Post, {
    where: {
      id:1
    },
    relations: ["author", "category"]
  })
  console.log(post);
}
toTestDB()
