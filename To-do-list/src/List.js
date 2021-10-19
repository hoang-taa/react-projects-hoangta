import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import classnames from 'classnames';
const List = ({ items, removeItem, editItem, changeStatusItem }) => {
  return (
    <div className='grocery-list'>
      {items.map((item, index) => {
        const { id, title, status } = item;
        return (
          <div>
            <article
              className={`grocery-item ${classnames({
                completed: status === 'completed',
              })}`}
              key={id}
            >
              <p
                className='title'
                onClick={() => changeStatusItem(item, index)}
              >
                {title}
              </p>
              <div className='btn-container'>
                <button
                  type='button'
                  className='edit-btn'
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type='button'
                  className='delete-btn'
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default List;
