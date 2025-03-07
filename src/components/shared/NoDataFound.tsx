import React from "react";

interface NoDataFoundProps {
  iconClass?: string;
  message?: string;
}

const NoDataFound: React.FC<NoDataFoundProps> = ({
  iconClass = "bi bi-file-earmark-excel",
  message = "No Data Found",
}) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center p-4">
      <i className={`${iconClass} text-muted fs-1`}></i>

      {/* Message */}
      <h5 className="mt-3 text-muted">{message}</h5>
    </div>
  );
};

export default NoDataFound;
