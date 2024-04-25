import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Lista = () => {
  const [lista, setLista] = useState([
    { id: 1, nimi: "Tauno 1", checked: true },
    { id: 2, nimi: "Tauno 2", checked: false },
    { id: 3, nimi: "Tauno 3", checked: false },
    { id: 4, nimi: "Tauno 4", checked: false },
    { id: 5, nimi: "Tauno 5", checked: false },
  ]);

  const handleCheck = (id) => {
    const newLista = lista.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setLista(newLista);
  };

  const handleDelete = (id) => {
    confirm(
      "Poistetaanko varmasti id:llä" +
        id +
        "niminen " +
        lista.find((item) => item.id === id).nimi +
        "?"
    );
    const newLista = lista.filter((item) => item.id !== id);
    setLista(newLista);
  };

  return (
    <div>
      {lista.length ? (
        <ul>
          {lista.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.nimi}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Lista on typötyhjä</p>
      )}
    </div>
  );
};

export default Lista;
