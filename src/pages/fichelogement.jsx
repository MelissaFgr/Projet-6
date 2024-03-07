import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Collapse from '../components/Collapse/Collapse';
import RatingStars from '../components/RatingStars/RatingStars';
import Carrousel from '../components/Carrousel/Carrousel';
import logementData from '../assets/datas/logements.json';
import './fichelogement.scss';

export default function Logements() {
  const { idLogement } = useParams();
  const navigate = useNavigate();
  const objectLogement = logementData.find(logement => logement.id === idLogement);

  useEffect(() => {
    if (!objectLogement) {
      navigate('/404');
    } else {
      document.title = `Kasa - ${objectLogement.title}`;
    }
  }, [objectLogement, navigate]);

  if (!objectLogement) {
    return null;
  }

  const { pictures, title, location, tags, host, description, equipments, rating } = objectLogement;
  const personName = host.name?.split(' ') || [];

  return (
    <div>
      <div className="carrousel-container">
        <Carrousel slides={pictures} title={title} />
      </div>

      <div className="infos">
        <div className="infos_logement">
          <div className='infos_logement_title'>{title}</div>
          <div className="infos_logement_location">{location}</div>
          <div className='infos_logement_tags'>
            {tags.map((tag, index) => (
              <div className='tag' key={index}>{tag}</div>
            ))}
          </div>
        </div>

        <div className="infos_hostrating">
          <div className='infos_hostrating_host'>
            <div className='infos_hostrating_host_name'>
              <span>{personName[0]}</span>
              <span>{personName[1]}</span>
            </div>
            <img src={host.picture} alt={host.name} className='infos_hostrating_host_picture' />
          </div>
          <RatingStars value={rating} />
        </div>
      </div>

      <div className="logement-collapse-container">
        <Collapse title={`Description`} content={description} />
        <Collapse title={`Equipements`} content={equipments.map((equipement, index) => (
          <div className="equipements" key={index}>{equipement}</div>
        ))} />
      </div>
    </div>
  );
}
