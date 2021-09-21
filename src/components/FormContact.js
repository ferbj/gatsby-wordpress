import React from 'react';
import ReeValidate from 'ree-validate'
import classnames from 'classnames';

export default class FormContact extends React.Component {
  constructor(){
    super();

  this.validator = new ReeValidate({
    firstName: 'required|max:50',
    lastName: 'required|min:3|max:50',
    age: 'required|min:1',
    address: 'required|max:60',
    subject: 'required|max:150'
  })

  this.state = {
      formData: {
        firstName: "",
        lastName: "",
        age:"", 
        address:"",
        subject:"",
      },
       errors: this.validator.errors,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleInputChange = event => {

      const target = event.target
      const value = target.value
      const name = target.name
      const { errors }  = this.validator
      errors.remove(name)

      this.setState({ formData: { ...this.state.formData, [name]: value } })
      /*this.setState({
        [name]: value,
        
      })*/
      this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
    }
    onFocus = event => {
      
    }
    
    handleSubmit = event => {
      event.preventDefault();
      const  {formData}  = this.state;
      const {errors} = this.validator;
      
      this.validator.validateAll(formData)
      
      .then(success => {
        
        if(success){
          const data = new FormData(this.form)
        fetch('https://webhook.site/9ecf807b-8580-40ef-a9d4-fbce45a2e231',{
          method: 'POST',
          body: data,
        });
        }else {
          this.setState({ errors })
        }
      })
      }
    
  
     render() {
       const {errors} = this.state;
      return (
        <div className="container">
        <form name="frm-contact" onSubmit={this.handleSubmit} ref={elem => (this.form = elem)}>
        <div className="row">
        <div className="input-field">
        <div className={classnames('col-md-5',{'error':errors.has('firstName')})}>
        <label htmlFor="firstName" className="control-label">
            First name
            </label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              className="form-control"
              placeholder="First Name"
            autoFocus/>
            { errors.has('firstName') && 
            <div className="error" htmlFor="firstName">{errors.first('firstName') }</div>
            }
          </div>
          </div>
          
          <div className="input-field">
          <div className={classnames('col-md-5',{'error':errors.has('lastName')})}>
          <label htmlFor="lastName" className="control-label">
            Last name
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
            {errors.has('lastName') && 
            <div className="error" htmlFor="lastName">{errors.first('lastName') }</div>
            }
          </div>
          </div>
          </div>
          <div className="row">
          <div className="input-field">
          <div className={classnames('col-md-5',{'error':errors.has('age')})}>
           <label htmlFor="age" className="control-label">
            Age
            </label>
            <input
              type="number"
              name="age"
              min="0"
              value={this.state.age}
              className="form-control"
              placeholder="age"
              onChange={this.handleInputChange}
            />
          
          {errors.has('age') && 
            <div className="error" htmlFor="age">{errors.first('age')}</div>
          }
          </div>
          </div>
         <div className="input-field">
          <div className={classnames('col-md-5',{'error':errors.has('address') })}>
          <label htmlFor="address" className="control-label">
            Address
          </label>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="address"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          {errors.has('address') && 
          <div className="error" htmlFor="address">{errors.first('address')}</div>
          }
          </div>
          </div>
          </div>
          <div className="row">
          <div className="input-field">
          <div className={classnames('col-md-10',{'error':errors.has('subject')})}>
          <label htmlFor="subject" className="control-label">
            Subject
            </label>
            <textarea
              name="subject"
              rows="10"
              cols="15"
              className="md-textarea form-control"
              placeholder="subject"
              value={this.state.subject}
              onChange={this.handleInputChange}>
            </textarea>
            {errors.has('subject') && 
            <div className="error" htmlFor="subject">{errors.first('subject')}</div>
            }
          </div>
          </div>
          </div>    
          <div className="form-control-static"></div>
          <div className="form-group col-md-3 col-mt-2">
          <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        </div>
      )
    }
}
