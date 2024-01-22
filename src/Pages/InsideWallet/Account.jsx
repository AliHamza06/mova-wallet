import React from 'react'
import ImageUpload from '../../Components/Profile/ImageUpload'
import ProfileForm from '../../Components/Profile/ProfileForm'

export default function Account() {
  return (
    <div className='accountMainSection'>
      <ImageUpload/>
      <ProfileForm/>
    </div>
  )
}
