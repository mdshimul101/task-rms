import React from "react";

const ContactDetails = ({ singleContact }) => {
  const { title, text, icon } = singleContact;
  return (
    <div className="p-5 md:card-side shadow-md flex">
      <div>
        <img
          className="max-h-16 h-auto"
          src={icon}
          width="150"
          height="95"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-orange-500 text-lg">{title}</h2>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
};

export default ContactDetails;
