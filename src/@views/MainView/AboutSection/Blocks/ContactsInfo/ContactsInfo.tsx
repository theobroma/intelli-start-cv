import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CakeIcon from '@material-ui/icons/Cake';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WorkIcon from '@material-ui/icons/Work';
import React from 'react';
import { ContactsItem } from './ContactsItem';

export const ContactsInfo = () => {
  return (
    <>
      <ContactsItem title="Name:" icon={<PermIdentityIcon />}>
        Oleksandr Syryi
      </ContactsItem>
      <ContactsItem title="Position:" icon={<WorkIcon />}>
        JavaScript front-end Developer
      </ContactsItem>
      <ContactsItem title="Address:" icon={<LocationOnIcon />}>
        Krolevets , Sumy region, Ukraine.
      </ContactsItem>
      <ContactsItem title="Birthday:" icon={<CakeIcon />}>
        22 March 1988
      </ContactsItem>
      <ContactsItem title="Skype:" icon={<PhoneIcon />}>
        fastwriter222
      </ContactsItem>
      <ContactsItem title="Phone:" icon={<PhoneIphoneIcon />}>
        +3 (068) 816-35-77
      </ContactsItem>
      <ContactsItem title="Email:" icon={<AlternateEmailIcon />}>
        theobroma222@gmail.com
      </ContactsItem>
    </>
  );
};

export default ContactsInfo;
