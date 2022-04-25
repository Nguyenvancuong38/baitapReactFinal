import React from "react";
import Input from "./Input";
import Button from "./Button";
import Pagination from "./Pagination";
import DialogDelete from "./DialogDelete";

function Render(props) {
  return (
    <React.Fragment>
      <div className="AddUser">
        <h1 className="heading-AddUser">
          {props.show === true ? "Add User" : "Update User"}
        </h1>

        <form className="inputName">
          {/* <input
            id="name"
            type="text"
            placeholder="Full name ...."
            {...props.register("name", { required: true})}
          /> */}

          <Input
            id="fullName"
            name="Full name"
            type="text"
            register={props.register}
            errors={props.errors}
            rest={["fullName", { required: true }]}
          />

          {/* <input
            id="firstName"
            type="text"
            placeholder="First name ...."
            {...props.register("firstName", { required: true, maxLength: 30})}
          />
          <p className="message-error">
            {props.errors.firstName?.type === 'required' && <span>* First name is required *</span>}
            {props.errors.firstName?.type === 'maxLength' && <span>* First name must be less than 30 characters *</span>}
          </p> */}

          <Input
            id="firstName"
            name="First name"
            type="text"
            register={props.register}
            errors={props.errors}
            rest={["firstName", { required: true, maxLength: 30 }]}
          />

          {/* <input
            id="lastName"
            type="text"
            placeholder="Last name ...."
            {...props.register("lastName", { required: true, maxLength: 30})}
          />
          <p className="message-error">
            {props.errors.lastName?.type === 'required' && <span>* Full name is required *</span>}
            {props.errors.lastName?.type === 'maxLength' && <span>* Last name must be less than 30 characters *</span>}
          </p> */}

          <Input
            id="lastName"
            name="Last name"
            type="text"
            register={props.register}
            errors={props.errors}
            rest={["lastName", { required: true, maxLength: 30 }]}
          />

          {/* <input
            id="age"
            type="number"
            placeholder="Age ...."
            {...props.register("age", { required: true, min: 16})}
          />
          <p className="message-error">
            {props.errors.age?.type === 'required' && <span>* Age is required *</span>}
            {props.errors.age?.type === 'min' && <span>* Age must be more than 16 *</span>} 
          </p> */}

          <Input
            id="age"
            name="Age"
            type="number"
            register={props.register}
            errors={props.errors}
            rest={["age", { required: true, min: 16 }]}
          />

          {/* <input
            id="school"
            type="text"
            placeholder="School ...."
            {...props.register("school", {maxLength: 50})}
          />
          <p className="message-error">
            {props.errors.school?.type === 'maxLength' && <span>* School must be less than 50 characters *</span>} 
          </p> */}

          <Input
            id="school"
            name="School"
            type="text"
            register={props.register}
            errors={props.errors}
            rest={["school", { maxLength: 50 }]}
          />

          {/* <input
            id="className"
            type="text"
            placeholder="Class ...."
            {...props.register("className", { maxLength: 50 })}
          />
          <p className="message-error">
            {props.errors.className?.type === 'maxLength' && <span>* Class must be less than 50 characters *</span>} 
          </p> */}

          <Input
            id="className"
            name="Class"
            type="text"
            register={props.register}
            errors={props.errors}
            rest={["className", { maxLength: 50 }]}
          />

          {/* <input
            id="email"
            type="email"
            placeholder="Email ...."
            {...props.register("email", { 
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            })}
          />
          <p className="message-error">
            {props.errors.email?.type === 'required' && <span>* Email is required *</span>}
            {props.errors.email?.type === 'pattern' && <span>* Invalid Email Address *</span>} 
          </p> */}

          <Input
            id="email"
            name="Email"
            type="email"
            register={props.register}
            errors={props.errors}
            rest={[
              "email",
              {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              },
            ]}
          />

          <br />
        </form>
        <div className="button-handle">
          <button
            className="btn Save"
            name="Save"
            onClick={props.handleSubmit(props.handleSave)}
          >
            {props.show === true ? "Save" : "Update"}
          </button>

          <Button
            name="Cancel"
            type="button"
            functiOnClick={props.handleCancel}
          />
        </div>
      </div>

      <div className="InforUser">
        <h1 className="heading-InforUser">Infromation User</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>age</th>
              <th>Mail</th>
              <th>School</th>
              <th>Class</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user, index) => (
              <tr key={index}>
                <td>{user.fullName}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.school}</td>
                <td>{user.className}</td>
                <td className="option">
                  <Button
                    name="Edit"
                    type="button"
                    functiOnClick={() => props.handleEdit(user, index)}
                  />
                  <Button
                    name="Delete"
                    type="button"
                    functiOnClick={() => props.handleDelete(user)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsPerPage={props.itemsPerPage}
          totalItems={props.totalItems}
          currentPage={props.currentPage}
          paginate={props.paginate}
        />
      </div>
      {props.showDialog.isLoading && (
        <DialogDelete
          onDialog={props.areUseSureDelete}
          message={props.showDialog.message}
        />
      )}
    </React.Fragment>
  );
}

export default Render;
