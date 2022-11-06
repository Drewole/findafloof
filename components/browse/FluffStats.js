import React from 'react';
import Link from 'next/link';
import { ChevronExpand } from 'react-bootstrap-icons';

const FluffStats = (props) => {
  const replaceWithPlus = (str) => {
    if (str === null) {
      return;
    } else {
      return str.replace(/\s/g, '+');
    }
  };
  const address1 = props.current.contact.address.address1
    ? replaceWithPlus(props.current.contact.address.address1) + ','
    : '';
  const address2 = props.current.contact.address.address2
    ? replaceWithPlus(props.current.contact.address.address2) + ','
    : '';
  const city = props.current.contact.address.city
    ? replaceWithPlus(props.current.contact.address.city) + ','
    : '';
  const state = replaceWithPlus(props.current.contact.address.state);
  const zip = replaceWithPlus(props.current.contact.address.postcode);

  const petLocation = `https://www.google.com/maps/place/${address1}+${address2}+${city}+${state}+${zip}`;

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const children = props.current.environment.children === true ? 'Yes' : 'No';
  const cats = props.current.environment.cats === true ? 'Yes' : 'No';
  const dogs = props.current.environment.dogs === true ? 'Yes' : 'No';
  const distanceRounded = Math.round(props.current.distance * 10) / 10;
  return (
    <>
      <button className="button" onClick={handleToggle}>
        <ChevronExpand /> <div>{show ? 'Hide Details' : 'More Details'}</div>
      </button>
      <div className={`${show == true ? '' : 'closed'} collapse`}>
        <table>
          <caption>{props.current.description}</caption>
          <thead>
            <tr>
              <th>Overview</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="title">Type</td>
              <td>{props.current.type}</td>
            </tr>
            <tr>
              <td className="title">Primary Breed</td>
              <td>
                {props.current.breeds.primary !== null
                  ? props.current.breeds.primary
                  : ''}
              </td>
            </tr>
            <tr>
              <td className="title">Secondary Breed</td>
              <td>
                {props.current.breeds.secondary !== null
                  ? props.current.breeds.secondary
                  : 'Not Specified'}
              </td>
            </tr>
            <tr>
              <td className="title">Mixed Breed</td>
              <td>{props.current.breeds.mixed === true ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
              <td className="title">Age</td>
              <td>{props.current.age}</td>
            </tr>
            <tr>
              <td className="title">Gender</td>
              <td>{props.current.gender}</td>
            </tr>
            <tr>
              <td className="title">Size</td>
              <td>{props.current.size}</td>
            </tr>

            <tr>
              <td className="title">Distance (Miles)</td>
              <td>
                <Link isExternal href={petLocation}>
                  {distanceRounded}
                </Link>
              </td>
            </tr>
            <tr>
              <td className="title">Good with Children</td>
              <td>{children}</td>
            </tr>
            <tr>
              <td className="title">Good with Cats</td>
              <td>{cats}</td>
            </tr>
            <tr>
              <td className="title">Good with Dogs</td>
              <td>{dogs}</td>
            </tr>
            <tr>
              <td className="title">Petfinder ID</td>
              <td>
                <span>
                  <Link
                    className="petfinder-link"
                    href={props.current.url}
                    isExternal
                  >
                    {props.current.id}
                  </Link>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FluffStats;
