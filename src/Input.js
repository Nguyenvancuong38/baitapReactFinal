import React from "react";

// Input Component
function Input(props) {
  return (
    <React.Fragment>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.name + "...."}
        {...props.register(...props.rest)}
      />

      <p className="message-error">
        {props.id === "fullName" &&
          props.errors.fullName?.type === "required" && (
            <span>* Full name is required *</span>
          )}
        {props.id === "firstName" &&
          props.errors.firstName?.type === "required" && (
            <span>* First name is required *</span>
          )}
        {props.id === "firstName" &&
          props.errors.firstName?.type === "maxLength" && (
            <span>* First name must be less than 30 characters *</span>
          )}
        {props.id === "lastName" &&
          props.errors.lastName?.type === "required" && (
            <span>* Last name is required *</span>
          )}
        {props.id === "lastName" &&
          props.errors.lastName?.type === "maxLength" && (
            <span>* Last name must be less than 30 characters *</span>
          )}
        {props.id === "age" && props.errors.age?.type === "required" && (
          <span>* Age is required *</span>
        )}
        {props.id === "age" && props.errors.age?.type === "min" && (
          <span>* Age must be more than 16 *</span>
        )}
        {props.id === "school" && props.errors.school?.type === "maxLength" && (
          <span>* School must be less than 50 characters *</span>
        )}
        {props.id === "className" &&
          props.errors.className?.type === "maxLength" && (
            <span>* Class must be less than 50 characters *</span>
          )}
        {props.id === "email" && props.errors.email?.type === "required" && (
          <span>* Email is required *</span>
        )}
        {props.id === "email" && props.errors.email?.type === "pattern" && (
          <span>* Invalid Email Address *</span>
        )}
      </p>
    </React.Fragment>
  );
}

export default Input;
