import PropTypes from "prop-types";
import Contact from "../entities/Contact";
import { useState } from "react";

const Modal = ({ submitModal }) => {
  const [modalData, setModalData] = useState(
    new Contact("", "", "", "", "", "")
  );
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.values(modalData);

    for (const value of values) {
      if (value.trim() == "") {
        setIsValid(false);
        return;
      }
    }

    submitModal(modalData);
    setModalData(new Contact("", "", "", "", "", ""));
  };

  const handleChange = (e) => {
    const { target } = e;
    const { value, name } = target;

    const newModalData = { ...modalData, [name]: value };
    setModalData(newModalData);
  };

  return (
    <div
      className="absolute h-screen w-screen bg-black/40 overlay"
      onClick={() => console.log(1)}
    >
      <div
        className={`absolute top-1/2 left-1/2 translate -translate-x-1/2 -translate-y-1/2 w-96 p-6 bg-white drop-shadow-lg rounded-lg`}
      >
        <form onSubmit={handleSubmit} className="flex-col gap-y-2 flex">
          <input
            type="text"
            placeholder="Fornavn"
            name="firstName"
            value={modalData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Efternavn"
            name="lastName"
            value={modalData.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            value={modalData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Telefon"
            name="phone"
            value={modalData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Firma"
            name="company"
            value={modalData.company}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Stilling"
            name="position"
            value={modalData.position}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="border-neutral-200 p-4 border rounded-full bg-neutral-800 text-white mt-2"
          >
            Tilføj kontakt
          </button>
          {isValid ? (
            <></>
          ) : (
            <div className="text-red-600">Ikke alle felter er udfyldte.</div>
          )}
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  submitModal: PropTypes.func,
  setModalVisible: PropTypes.func,
};

export default Modal;
