import { Divider } from '@mantine/core'
import React from 'react'
import EmployeeProfile from '../Profile/EmployeeProfile'

const ProfilePage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
        <Divider  mx="md" mb="xl"/>
        <EmployeeProfile/>
    </div>
  )
}

export default ProfilePage