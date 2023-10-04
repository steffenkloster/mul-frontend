import { useState } from "react";
import "./App.css";
import { createRandomContact } from "./entities/Contact";
import DataField from "./components/DataField";
import Modal from "./components/Modal";

function App() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [contacts, setContacts] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const submitModal = (modalData) => {
    const newContacts = [...contacts, modalData];
    setContacts(newContacts);
    setModalVisible(false);
  };

  if (contacts.length === 0) {
    const newContactList = [];
    for (let i = 0; i < 50; i++) {
      newContactList.push(createRandomContact());
    }

    setContacts(newContactList);
  }

  return (
    <>
      <div
        className="py-2 bg-green-600 text-white outline outline-1 -outline-offset-2 outline-black/10 rounded-full w-min whitespace-nowrap px-4 cursor-pointer"
        onClick={() => setModalVisible(true)}
      >
        + Tilføj ny kontakt
      </div>
      <div className="max-w-screen-md bg-red-900 w-full p-2 h-96 rounded-md">
        <div className="bg-amber-100 grid grid-cols-2 h-full">
          <div className=" overflow-y-scroll">
            {"abcdefghijklmnopqrstuvwxyzæøå".split("").map((letter) => {
              return (
                <div key={letter}>
                  <div
                    className="bg-yellow-800 text-white text-sm border-b border-yellow-900 px-2 py-0.5 font-medium"
                    key={letter}
                  >
                    {letter.toUpperCase()}
                  </div>
                  {contacts
                    .filter(
                      (contact) =>
                        contact.firstName.charAt(0).toLowerCase() == letter
                    )
                    .map((filteredContact, i) => {
                      return (
                        <div
                          key={`${letter}-${i}`}
                          className={`${
                            i % 2 ? "bg-amber-100" : "bg-amber-200/30"
                          } p-2 cursor-pointer`}
                          onClick={() => setSelectedContact(filteredContact)}
                        >
                          {filteredContact.firstName} {filteredContact.lastName}
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
          <div className="p-4 bg-gradient-to-r from-amber-200/80">
            {selectedContact !== null ? (
              <div className="flex flex-col gap-y-4">
                <div className="flex gap-x-4">
                  <div className="bg-white rounded-lg w-28 h-28">
                    <img
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${selectedContact.firstName}%20${selectedContact.lastName}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <DataField
                      label="Fornavn"
                      value={selectedContact.firstName}
                    />
                    <DataField
                      label="Efternavn"
                      value={selectedContact.lastName}
                    />
                  </div>
                </div>

                <DataField label="Tlf. nummer" value={selectedContact.phone} />
                <DataField
                  label="E-mailadresse"
                  value={selectedContact.email}
                />
                <DataField label="Firma" value={selectedContact.company} />
                <DataField label="Stilling" value={selectedContact.position} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {modalVisible ? (
        <Modal submitModal={submitModal} setModalVisible={setModalVisible} />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
