import React from 'react'
import UserWebLayout from '../UserLayout/UserWebLayout'
import AccountOverview from './AccountOverview'
const UserProfile = () => {
    return (
       <UserWebLayout webtitle = 'Customer Profile'>
           <AccountOverview/>
       </UserWebLayout>
    )
}

export default UserProfile
