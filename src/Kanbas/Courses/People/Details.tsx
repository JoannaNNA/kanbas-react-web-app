import { useEffect, useState } from 'react';
import { FaCheck, FaUserCircle } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import * as client from '../../Account/client';
import { FaPencil } from 'react-icons/fa6';
export default function PeopleDetails() {
  const { uid } = useParams();
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState<string>('');
  const [editing, setEditing] = useState<boolean>(false);
  const saveUser = async () => {
    const [firstName, lastName] = name.split(' ');
    const updatedUser = { ...user, firstName, lastName };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    navigate(-1);
  };
  const navigate = useNavigate();
  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    navigate(-1);
  };
  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };
  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;
  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button
        onClick={() => navigate(-1)}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />
      </button>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      <button
        onClick={() => deleteUser(uid)}
        className="btn btn-danger float-end wd-delete-user"
      >
        Delete
      </button>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary float-end me-2 wd-cancel"
      >
        Cancel
      </button>
      <div className="text-danger fs-4 wd-name">
        {!editing && (
          <FaPencil
            onClick={() => setEditing(true)}
            className="fs-5 mt-2 wd-edit float-end"
          />
        )}
        {editing && (
          <FaCheck onClick={saveUser} className="float-end fs-5 mt-2 me-2 wd-save" />
        )}
        {!editing && (
          <div className="wd-name" onClick={() => setEditing(true)}>
            {user.firstName} {user.lastName}
          </div>
        )}
        {user && editing && (
          <input
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && saveUser()}
            className="form-control w-50 wd-edit-name"
          />
        )}
        {user.firstName} {user.lastName}
      </div>
      <b>Roles:</b>
      <b>Login ID:</b>
      <b>Section:</b>
      <b>Total Activity:</b>
      <span className="wd-total-activity">{user.totalActivity}</span>
    </div>
  );
}
