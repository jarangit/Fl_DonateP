import React, { useState } from 'react'
import EditUserForm from '../../component/form/editUser'
import ShowFormEdit from '../../component/form/showFormEdit'
import TopBar from '../../component/layout/topBar'
const ProfilePage = () => {
  const [editForm, setEditForm] = useState(false)
  console.log('%cMyProject%cline:4%ceditForm', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(3, 101, 100);padding:3px;border-radius:2px', editForm)
  return (
    <div className="p-3">
      <TopBar
        name="Profile"
        link={`/`}
        icon={`/img/icon/pencil.svg`}
        setFunctions={setEditForm}
        value={editForm}
      />

      {!editForm ? (
        <ShowFormEdit />
      ) : (
        <div>
          <EditUserForm/>
        </div>
      )}
    </div>
  )
}

export default ProfilePage