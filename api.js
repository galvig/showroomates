import uuid from 'uuid';
import DeviceInfo from 'react-native-device-info';

const url = `http://192.168.1.33:3000/profiles`;


export function getProfiles() {
    return fetch(url)
    .then(response => response.json())
    .then(profiles => profiles.filter(e=>(e.id != DeviceInfo.getDeviceId())));
}

export function getSelfProfile() {
  return fetch(url+'/' + DeviceInfo.getDeviceId())
    .then(response => response.json());
}

function getServerRequest(method,{name, subject, location, role, phone}) {
  return  ({
    method: method,
    body: JSON.stringify({
      name,
      subject,
      location,
      role,
      phone,
      id:DeviceInfo.getDeviceId(),
    }),
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })});
}

export function saveProfile( {name, subject, location, role, phone} ) {
  return fetch(url, getServerRequest( 'POST',{name, subject, location, role, phone} ))
    .then(res=>res.json())
    .catch(err => {
      fetch(url+'/' + DeviceInfo.getDeviceId(), getServerRequest( 'PUT',{name, subject, location, role, phone} ))
      .then(res=>res.json())
      .catch(err => { console.error(err) });
    });
  }