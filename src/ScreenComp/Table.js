import React from "react";

const Table = ({
  filteredData,
  FilteredData,
  sno,
  showDetails,
  deleteItem,
  state,
  InvoiceData,
}) => {
  return (
    <table className="table justify-content-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Email</th>
          <th scope="col">Description</th>
          <th scope="col">Product</th>
          <th scope="col">Status</th>
          <th scope="col">View</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {filteredData ? (
          filteredData?.length > 0 ? (
            filteredData?.map((item, index) => {
              return (
                <FilteredData
                  key={index}
                  index={index}
                  sno={sno}
                  item={item}
                  showDetails={showDetails}
                  deleteItem={deleteItem}
                />
              );
            })
          ) : (
            <h1
              style={{
                color: "red",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              No Record Found
            </h1>
          )
        ) : (
          state?.map((item, index) => {
            return (
              <InvoiceData
                key={index}
                index={index}
                sno={sno}
                item={item}
                showDetails={showDetails}
                deleteItem={deleteItem}
              />
            );
          })
        )}
      </tbody>
    </table>
  );
};

export default Table;
