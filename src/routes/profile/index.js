import React, { useState } from 'react'
import EditUserForm from '../../component/form/editUser'
import ShowFormEdit from '../../component/form/showFormEdit'
import TopBar from '../../component/layout/topBar'
const ProfilePage = () => {
  const [editForm, setEditForm] = useState(false)
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