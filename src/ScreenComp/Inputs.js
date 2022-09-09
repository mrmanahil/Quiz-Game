import React from "react";

const Inputs = ({
  type,
  label,
  labelFor,
  labelName,
  register,
  modalcontent,
  formState,
  defaultValue
}) => {
  // console.log(modalcontent);
  return (
    <>
      <input
        style={{ color: "black" }}
        type={type}
        className="form__field"
        {...register(label, { required: true })}
        defaultValue={defaultValue}
      />
      {formState.errors.label && (
        <span style={{ color: "red" }}>This field is required</span>
      )}
      <label htmlFor={labelFor} className="form__label">
        {labelName}
      </label>
    </>
  );
};

export default Inputs;
