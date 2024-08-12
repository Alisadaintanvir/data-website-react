import Contacts from "./Contacts";
import EditColumns from "./EditColumns";
import CreateNewProperty from "./CreateNewProperty";
import CreateNewContact from "./CreateNewContact";
import Export from "./Export";
import { useState } from 'react';

export default function ContactsSection() {
  const [isEditColumnsVisible, setIsEditColumnsVisible] = useState(false);
  const [isCreateNewPropertyVisible, setIsCreateNewPropertyVisible] = useState(false);
  const [isCreateNewContactVisible, setIsCreateNewContactVisible] = useState(false);
  const [isExportVisible, setIsExportVisible] = useState(false);

  const toggleEditColumns = () => {
    setIsEditColumnsVisible(!isEditColumnsVisible);
  };

  const toggleCreateNewProperty = () => {
    setIsCreateNewPropertyVisible(!isCreateNewPropertyVisible);
  };

  const toggleCreateNewContact = () => {
    setIsCreateNewContactVisible(!isCreateNewContactVisible);
  };

  const toggleExport = () => {
    setIsExportVisible(!isExportVisible);
  };

  return (
    <div>
      <Contacts toggleSec={toggleEditColumns} toggleCreateNewProperty={toggleCreateNewProperty} toggleCreateNewContact={toggleCreateNewContact}  toggleExport={toggleExport}  /> 

      {isEditColumnsVisible && <EditColumns isVisible={isEditColumnsVisible} toggleSec={toggleEditColumns} />}

      {isCreateNewPropertyVisible && <CreateNewProperty isVisible={isCreateNewPropertyVisible} toggleVisibility={toggleCreateNewProperty} />}

      {isCreateNewContactVisible && <CreateNewContact isVisible={isCreateNewContactVisible} toggleVisibility={toggleCreateNewContact} />}

      {isExportVisible && <Export isVisible={isExportVisible} toggleVisibility={toggleExport} />}
    </div>
  );
}
