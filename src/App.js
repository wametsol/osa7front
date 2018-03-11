import React from 'react'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { OverlayTrigger, Tooltip, InputGroup, Carousel, Thumbnail, Table, FormGroup, FormControl, ControlLabel, Button, Navbar, Nav, Grid, Row, Col } from 'react-bootstrap'


const menuStyle ={
  margin: 'auto',
  fontSize: 40,
  backgroundColor: 'grey',
  borderRadius: 10,
  lineHeight: 3,
  width: 223,
  textAlign: 'center'
}
const linkStyle ={
  fontWeight: 'bold',
  color:'grey',
  backgroundColor: 'lightblue',
  borderRadius: 10,
  paddingTop: 38,
  paddingBottom: 38,
  textAlign: 'center',
  textDecoration: 'none'
}
const notActive ={
  fontWeight: 'bold',
  color:'lightblue',
  textDecoration: 'none'
}
const newBlogStyle= {
  textAlign: 'center',
  paddingTop: 20
}

const Menu = ({title, author, url, addBlog, commentChange, comment, blogById, userById, blogs, like, remove, username, users}) => (
  <div>
    <Router>
      <div>
      <div style={menuStyle}>
        <NavLink activeStyle={linkStyle} style={notActive} to="/blogs">Blogs</NavLink>
        <NavLink activeStyle={linkStyle} style={notActive} to="/users">Users</NavLink>
        </div>
        <Grid>
          <Row>
          <Col xs={6} md={6}>
          <Route exact path="/" render={() => <p>Etusivu</p>}/>
          <Route exact path="/users" render={() => <Users users={users} />}/>
          <Route exact path="/blogs" render={() => <BlogList blogs={blogs} like={like} remove={remove} theUser={username}/>} />
          <Route exact path="/users/:id" render={({match, history}) =>
          <SingleUser history = {history} user={userById(match.params.id)} userId={match.params.id} />         } />
          <Route exact path="/blogs/:id" render={({match, history}) =>
          <SingleBlog commentChange={commentChange} comment ={comment} like ={like} history ={history} blog={blogById(match.params.id)} /> } />
        </Col>
            
            <Col xs={6} md={6}>
        <div style={newBlogStyle}>
        <Togglable buttonLabel='uusi blogi'>
          <BlogForm 
            handleChange={commentChange}
            title={title}
            author={author}
            url={url}
            handleSubmit={addBlog}
          />
        </Togglable>
        </div>
        </Col>
        
        <div>
        </div>
        
        </Row>
        </Grid>
      </div>
    </Router>
  </div>
)
const likeTip =(
  <Tooltip id="likeTip">
    <strong>Click me to like!</strong>
  </Tooltip>
)
const boldItalic = {
  fontWeight:'bold',
  fontStyle:'italic'
}
const SingleBlog = ({history, blog, like, comment, commentChange}) => (
  <div>
  <h1>{blog.title}, {blog.author}</h1>
  <p style={boldItalic}> See more: <a href={blog.url}>{blog.url}</a></p>
  <p>{blog.likes} 
  
  <OverlayTrigger placement="right" overlay={likeTip}><button   onClick={like(blog._id)}><img height="35" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKRG90Gx2t7Vwel7qMOU8URlXc-7riunawgQ6_f2wPwLf_oJp"/></button>
  </OverlayTrigger></p>
  <p style={boldItalic}>added by {blog.user.name}</p>
  <h3>comments</h3>
  <ul>
    <li>kommentointi ei toimi</li>
    </ul>
    <input
               
                name="comment"
              /><button onClick={console.log(comment)}>add comment</button>
  </div>
)
const h1User = {
textDecoration:'underline',
color:'grey',
textSize: 20
}
const h2Title ={
  fontWeight:'bold',
  fontStyle: 'italic'
} 
const userBlogs ={
  margin:'auto',
  textDecoration:'none',
  paddingTop:20,
  
}

const liStyle ={
  backgroundColor:'grey',
  textAlign:'center',
  borderRadius: 10,
  textDecoration: 'none'
  
}
const SingleUser = ({user, userId, history}) => {
   if(user === undefined){
     return history.push(`/users/${userId}`)
     
   }
   else {
    return (
      <div>
        <h1 style={h1User}>{user.name}</h1>
        <h2 style={h2Title}>Added blogs</h2>
        {user.blogs.map(blog =>
        <ul key={blog._id}>
          <li style={liStyle}><NavLink style ={pStyle} key ={blog._id} to={`/blogs/${blog._id}`} >{blog.title} by {blog.author}</NavLink></li>
          </ul>)}
        {console.log(user)}
        
     
    
      </div>
      )
    }
  
  
}

const blogsStyle ={
  margin: 'auto',
  fontSize: 20,
  backgroundColor: 'lightgrey',
  lineHeight: 3,
  width: '50%'
}
const h2Style={
  border: 'solid',
  borderRadius: 10,
  width: '15%',
  backgroundColor:'lightblue',
  lineHeight: 1.5
}
const thStyle ={
  backgroundColor:'grey',
  textAlign:'center',
  paddingTop: 18,
  borderRadius: 10
  
}
const pStyle ={
  color:'black'
}
const BlogList = ({ blogs, like, remove, theUsername }) => (
  
  
<div >
<h2 style={h2Style}>Blogit</h2>
{console.log(blogs)}
        {blogs.map(blog =>
         <div key={blog._id+2} style={blogsStyle}>
          
          <Table striped bordered condensed hover>
            <tbody>
              <tr><th style={thStyle}><p>
            <NavLink  key={blog._id+1} to={`/blogs/${blog._id}`} style ={pStyle}>
          {blog.title}, likes: {blog.likes}
          </NavLink>
          </p></th></tr>
          </tbody>
          </Table>
          
          </div>
        )}
        </div>
        
)
const borderedTh = {
  backgroundColor:'grey',
  borderLeft:'solid',
  borderRight:'solid',
  textAlign:'center'
  
}
const borderedTd = {
  backgroundColor:'lightgrey',
  borderBottom:'solid',
  textAlign:'left',
  border:'solid',
  borderTop:'none'
  
}
const userLink = {
  fontWeight: 'bold',
  color:'black',
  borderRadius: 10,
  paddingTop: 38,
  paddingBottom: 38,
  textAlign: 'center',
  textDecoration: 'none'
}
const userTip = (
  <Tooltip id="userTip">
    <strong>Click my name for more info!</strong>
  </Tooltip>
)
const Users = ({ users }) => (
  <div>
    {console.log(users)}
  <h2 style={h2Style}>Users</h2>
  
  <Table>
    <tbody>
  <tr>
    <th style={borderedTh}>user</th>
    <th style={borderedTh}>blogs added</th>
  </tr>
  </tbody>
  </Table>
  {users.map(user => 
  <div key ={user._id}>
    <Table>
    <tbody>
  <tr>
    <td style={borderedTd}><strong>
      <OverlayTrigger placement="left" overlay={userTip}>
      <NavLink style={userLink} to={`/users/${user._id}`}>{user.name}</NavLink>
      </OverlayTrigger>
      </strong></td>
    <td style={borderedTd}>{user.blogs.length}</td>
  </tr>
  </tbody>
  </Table>
  </div>
  )}
  </div>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      users: [],
      user: null,
      username: '',
      password: '', 
      title: '',
      author: '',
      url: '',
      notification: null,
      newComment: ''
    }
  }

  componentWillMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )
    blogService.getUsers().then(users =>
      this.setState({ users })
    )
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })
      blogService.setToken(user.token)
    }
  } 

  notify = (message, type = 'info') => {
    this.setState({
      notification: {
        message, type
      }
    })
    setTimeout(() => {
      this.setState({
        notification: null
      })     
    }, 10000)
  }

  like = (id) => async () => {
    const liked = this.state.blogs.find(b=>b._id===id)
    const updated = { ...liked, likes: liked.likes + 1 }
    await blogService.update(id, updated)
    this.notify(`you liked '${updated.title}' by ${updated.author}`)
    this.setState({
      blogs: this.state.blogs.map(b => b._id === id ? updated : b)
    })
  }
  /*
  addComment = (id) => async () => {
    const commented = this.state.blogs.find(b=>b._id===id)
    const updated = { ...commented, comments: comments.concat(this.state.newComment)}
    console.log("COMMENTED BLOG :",updated);
    
    await blogService.createComment(id, updated)
  }
  */

  remove = (id) => async () => {
    const deleted = this.state.blogs.find(b => b._id === id)
    const ok = window.confirm(`remove blog '${deleted.title}' by ${deleted.author}?`)
    if ( ok===false) {
      return
    }

    await blogService.remove(id)
    this.notify(`blog '${deleted.title}' by ${deleted.author} removed`)
    this.setState({
      blogs: this.state.blogs.filter(b=>b._id!==id)
    })
  }

  addBlog = async (event) => {
    
    event.preventDefault()
    const blog = {
      title: this.state.title,
      author: this.state.author,
      url: `http://${this.state.url}`,
    }
    
    const result = await blogService.create(blog) 
    this.notify(`blog '${blog.title}' by ${blog.author} added`)
    this.setState({ 
      title: '', 
      url: '', 
      author: '',
      blogs: this.state.blogs.concat(result)
    })
  }
  userById = (id) => 
  this.state.users.find(a => a._id === id)

  blogById = (id) => 
  this.state.blogs.find(a => a._id === id)

  timedLogout= () => {
    this.notify('Logging you out. Thanks and Bye!')
    setTimeout(() => {
      this.logout()
    }, 2000);
  }
  logout = () => {
    window.localStorage.removeItem('loggedBlogAppUser')
    this.notify('logged out')
    this.setState({ user: null })
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
      blogService.setToken(user.token)
      this.notify('welcome back!')
      this.setState({ username: '', password: '', user })
    } catch (exception) {
      this.notify('käyttäjätunnus tai salasana virheellinen', 'error')
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  handleLoginChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  

  render() {
    if (this.state.user === null) {
      return (
        <div>
          <Notification notification={this.state.notification} />
          <h2>Kirjaudu sovellukseen</h2>
          <form onSubmit={this.login}>
            <div>
              käyttäjätunnus
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleLoginChange}
              />
            </div>
            <div>
              salasana
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleLoginChange}
              />
            </div>
            <button type="submit">kirjaudu</button>
          </form>
        </div>
      )
    }

    const byLikes = (b1, b2) => b2.likes - b1.likes

    const blogsInOrder = this.state.blogs.sort(byLikes)
    const userss = this.state.users
    return (
      <div>
        <h1 style={h1Style}> Blog app </h1>
        <Notification notification={this.state.notification} />
        <div style={loggedStyle}>
        {this.state.user.name} logged in <button onClick={this.timedLogout}>logout</button>
        </div>
       
        <Menu addBlog={this.addBlog} title={this.state.title} author={this.state.author} url={this.state.url} commentChange={this.handleLoginChange} comment={this.state.newComment} blogById={this.blogById} userById={this.userById} blogs ={blogsInOrder} like={this.like} remove={this.remove} username={this.state.user.username} users={this.state.users}/>
        
      </div>
    );
  }
}
const loggedStyle = {
  textAlign: 'right',
  paddingRight: 200,
  color: 'darkgreen'
}
const h1Style = {
textAlign: 'center',
textDecoration: 'underline',
letterSpacing: 5
}
export default App;