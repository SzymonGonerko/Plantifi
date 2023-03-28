import React from "react";
import { useState } from 'react';
import { ProfileSwitcherNav } from "./ProfileSwitcherNav"

import { General } from './General';
import { Requirements } from './Requirements';
import { Care } from './Care';

export const ModalPlantsNavigation = ({profile}) => {
    const [nav, setNav] = useState({
        general: true,
        requirements: false,
        care: false
    })

    const onPressHandler = (name) => {
        setNav(oldState => {
            let newState
            Object.entries(oldState).forEach(([key, _]) => {
                if (key === name) {
                    return newState = {...newState, [key]: true}
                } else {
                     return newState = {...newState, [key]: false}
                }
            })
            return newState
        })
      }

    return <>
            <ProfileSwitcherNav
              general={nav.general}
              requirements={nav.requirements}
              care={nav.care}
              onPress={onPressHandler}/>
            {nav.general && profile && <General profile={profile.general}/>}
            {nav.requirements && <Requirements profile={profile.requirements}/>}
            {nav.care && <Care profile={profile.care}/>}
    </>
}