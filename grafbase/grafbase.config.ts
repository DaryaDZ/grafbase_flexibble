import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatar: g.url(),
  description: g.string().optional(),
  githubUrl: g.url(),
  LinkedINUrl: g.url().optional(),
  Projects:g.relation(()=>Project).list().optional(),
  
})

const Project = g.model('Project', {
  title: g.string().length({ min: 2, max: 20 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  gitHubUrl: g.url(),
  category: g.string().search(),
  CreatedBy: g.relation(() => User),
  
})
export default config({
  schema: g
 
})
