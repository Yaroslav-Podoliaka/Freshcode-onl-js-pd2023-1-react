import React, { Component } from "react";
import { InfoPlot } from "../InfoPlot/InfoPlot";
import { InfoActors } from "../InfoActors/InfoActors";
import { InfoGeneral } from "../InfoGeneral/InfoGeneral";
import "./Main.css";

export class Main extends Component {
  render() {
    const movie = {
      plot: "Джей, Хенли, Джек и Мерритт – иллюзионисты, которые однажды объединяются в одну команду. Они дают представления на самых больших и престижных сценах, шокируя публику своими навыками. Главной их изюминкой является фокус с ограблением банка, во время которого совершается реальное преступление, но сами иллюзионисты при этом не покидают сцену. За совершенное преступление на мастеров «иллюзии обмана» начинает охоту агент ФБР Дилан Роудс. Невероятный фокус был лишь отвлекающим маневром. Каким-то удивительным образом ребятам удается обвести вокруг пальца ФБР и Таддеуша Брэдли, самого известного разоблачителя фокусов.",
      actors: [
        "Джесси Айзенберг",
        "Марк Руффало",
        "Морган Фриман",
        "Айла Фишер",
        "Дейв Франко",
        "Вуди Харрельсон",
        "Мелани Лоран",
        "Майкл Кейн",
        "Майкл Келли",
      ],
      info: [
        "Страна: Франция, США",
        "Режисер: Луи Летерье",
        "Жанр: Триллеры, Криминал, Детективы",
        "Год выпуска: 2013",
      ],
    };
    return (
      <main className="main">
        <div>
          <div className="container">
            <div>
              <img src="/Now-You-See-Me.jpg" alt="Иллюзия обмана" />
            </div>
            <div className="actors">
              <InfoActors
                title="Актерский состав"
                content={movie.actors.map((actor) => {
                  return <p key={actor}>{actor}</p>;
                })}
              />
            </div>
            <div className="info">
              <InfoGeneral
              title="Общая информация"
              content={movie.info.map((inf) => {
                return <p key={inf}> {inf}</p>;
              })}
            />
            </div>
          </div>
        </div>
        <InfoPlot title="Сюжет" content={movie.plot} />
      </main>
    );
  }
}

export default Main;
