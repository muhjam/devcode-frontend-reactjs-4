import "./style.css";
import { deleteContact } from "../../services"; 
const ContactItem = (props) => {
  const {
    id,
    full_name,
    phone_number,
    email,
    handleGetContacts,
    handleSetSelected,
  } = props;

  // TODO:
  // 1. Buat sebuah fungsi untuk men-dispatch fungsi menghapus kontak yang sudah dibuat sebelumnya di services/index.js dan memanggil fungsi handleGetContacts untuk refresh data kontak
  // 2. Buat button edit dengan properti data-cy nya btn-edit, class nya contact-item__button dan contact-item__edit-button serta menjalankan fungsi handleSetSelected ketika di klik
  // 3. Buat button hapus dengan properti data-cy nya btn-delete, class nya contac  t-item__button dan contact-item__delete-button serta menjalankan fungsi menghapus kontak yang sudah dibuat sebelumnya ketika di klik
  // 4. Kedua button tersebut dibuat di dalam elemen div dengan class contact-item__button-wrapper

  const handleDelete = async () => {
    try {
      await deleteContact( { id } );
      handleGetContacts();
    } catch (error) {
      console.error("Error deleting contact: ", error);
    }
  };

  return (
    <div data-cy="item-card" className="contact-item__wrapper">
      <div className="contact-item__first-row">
        <p data-cy="item-name" className="contact-item__name">
          {full_name}
        </p>
        <div className="contact-item__button-wrapper">
          <button data-cy="btn-edit" className="contact-item__button contact-item__edit-button" onClick={()=>handleSetSelected(id, full_name, phone_number, email)}>Edit</button>
          <button data-cy="btn-delete" className="contact-item__button contact-item__delete-button" onClick={handleDelete} >Delete</button>
        </div>
      </div>
      <div className="contact-item__second-row">
        <p className="contact-item__phone-email">
          <span data-cy="item-phone">{phone_number}</span> |&nbsp;
          <span data-cy="item-email">{email}</span>
        </p>
      </div>
    </div>
  );
};

export default ContactItem;
