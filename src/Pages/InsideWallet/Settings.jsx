import React from 'react'
import ChangePassword from '../../Components/Settings/ChangePassword'
import SettingNotification from '../../Components/Settings/SettingNotification'
import Configure from '../../Components/Settings/Configure'

export default function Settings() {
  return (
    <div className='accountMainSection'>
        <ul className="nav nav-pills mb-0 navTabsUl" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active navTabsButton" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Security</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link navTabsButton" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Configure</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link navTabsButton" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Notifications</button>
            </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                    <div className="navTabsContentMainSection">
                        <ChangePassword/>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                <div className="navTabsContentMainSection">
                    <Configure/>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                <div className="navTabsContentMainSection">
                        <SettingNotification/>
                    </div>
                </div>
            </div>
        </div>
  )
}
