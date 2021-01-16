import PropTypes from "prop-types";

const ContactItem = ({contact: {name, number, id}, removeContact}) => {
    return (
        <li>
            {name}: {number}
            <button type="button" data-id={id} onClick={removeContact}>
                Delete
            </button>
        </li>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
    removeContact: PropTypes.func,
};

export default ContactItem;
