import { LegacyRef } from "react";
import { Clans } from "../../interfaces/clans";
import "./style.css";
interface props {
  clan: Clans;
  children?: any;
}
export const CardList = ({ clan }: props) => {
  return (
      <div className="my-card-container">

      <div className="my-card" >
        <div className="face face1">
          <div className="content">
            <img src={clan.badgeUrls.medium} alt="url" className="fluid-img" 
            
            width={200}
            height={200}
            />
            <h3>{clan.name}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <div className="content-body">
              <p>Guerras ganadas: {clan.warWins || 0}</p>
              <p>Guerras perdidas: {clan.warLosses || 0}</p>
              <p>Puntos de guerra: {clan.clanVersusPoints || 0}</p>
              <p>Miembros: {clan.members}</p>
              <p className="tag" onClick={() => {navigator.clipboard.writeText(clan.tag)
              alert("Copiado al portapapeles")}}>{clan.tag}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};
