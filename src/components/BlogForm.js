import React from 'react'
import PropTypes from 'prop-types'
import { OverlayTrigger, Tooltip, InputGroup, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

const BlogForm = ({ title, author, url, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Luo uusi blogi</h2>

      <form onSubmit={handleSubmit}>
      <FormGroup>
      <FormGroup controlId="formValidationSuccess4" validationState="success">
        
        <InputGroup>
            <InputGroup.Addon>title</InputGroup.Addon>
         
          <FormControl
            value={title}
            name='title'
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
            <InputGroup.Addon>author</InputGroup.Addon>
         
          <FormControl
            value={author}
            name='author'
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
            <InputGroup.Addon>url</InputGroup.Addon>
         
          <FormControl
            value={url}
            name='url'
            onChange={handleChange}
          />
        </InputGroup>     
          </FormGroup>{' '}   
        </FormGroup>
        <Button type="submit" bsStyle="success">Luo</Button>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  author: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}


export default BlogForm