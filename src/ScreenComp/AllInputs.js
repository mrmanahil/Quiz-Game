import React from "react";

const AllInputs = ({ Inputs, register, modalcontent, formState }) => {
  return (
    <>
      <div className="form__group field ">
        <Inputs
          register={register}
          modalcontent={modalcontent.customer}
          formState={formState}
          type="text"
          label="firstname"
          labelFor="first name"
          labelName="First Name"
          defaultValue={modalcontent.customer}
        />
      </div>

      <div className="form__group field">
        <Inputs
          register={register}
          modalcontent={modalcontent}
          formState={formState}
          type="email"
          label="email"
          labelFor="Email"
          labelName="Email"
          defaultValue={modalcontent.customer_email}
        />
      </div>

      <div className="form__group field">
        <Inputs
          register={register}
          modalcontent={modalcontent}
          formState={formState}
          type="text"
          label="description"
          labelFor="Description"
          labelName="Description"
          defaultValue={modalcontent.description}
        />
      </div>

      <div className="form__group field">
        <Inputs
          register={register}
          modalcontent={modalcontent}
          formState={formState}
          type="text"
          label="product"
          labelFor="product"
          labelName="Product"
          defaultValue={modalcontent.product}
        />
      </div>

      <div className="form__group field">
        <Inputs
          register={register}
          modalcontent={modalcontent}
          formState={formState}
          type="text"
          label="status"
          labelFor="status"
          labelName="Status"
          defaultValue={modalcontent.Status ? modalcontent.Status : "Pending"}
        />
      </div>
    </>
  );
};

export default AllInputs;
